-- ==============================================================================
-- ZENORA JAPANESE LEARNING PLATFORM - SUPABASE DATABASE SCHEMA
-- ==============================================================================
-- Petunjuk:
-- 1. Buka Supabase Dashboard (https://supabase.com/dashboard)
-- 2. Pilih Project Anda -> Masuk ke menu "SQL Editor"
-- 3. Tempel seluruh skrip SQL ini lalu klik "Run"
-- ==============================================================================

-- 1. TABEL PROFIL PENGGUNA (PROFILES)
-- Terhubung langsung dengan akun otentikasi auth.users
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  target_level text default 'N5',
  streak_days integer default 1,
  last_active_date date default current_date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Pastikan kolom role tersedia jika tabel sudah dibuat sebelumnya
alter table public.profiles add column if not exists role text not null default 'user';

-- Helper function RBAC untuk memeriksa apakah user yang login adalah admin di database
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer stable;

-- Trigger keamanan: Cegah user mengubah kolom role miliknya sendiri lewat frontend
create or replace function public.prevent_self_role_escalation()
returns trigger as $$
begin
  if new.role is distinct from old.role and auth.role() = 'authenticated' then
    if not public.is_admin() then
      raise exception 'Forbidden: Only backend/service_role or existing admin can modify user roles';
    end if;
  end if;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists trg_prevent_self_role_escalation on public.profiles;
create trigger trg_prevent_self_role_escalation
  before update on public.profiles
  for each row execute procedure public.prevent_self_role_escalation();

-- 2. TABEL PROGRES HAFALAN (USER_LEARNED_ITEMS)
-- Menyimpan ID kosakata (kotoba), kanji, atau aksara kana yang telah dihafal
create table if not exists public.user_learned_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  item_type text not null check (item_type in ('kotoba', 'kanji', 'kana')),
  item_id text not null,
  learned_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, item_type, item_id)
);

-- Index untuk query cepat per pengguna
create index if not exists idx_learned_items_user on public.user_learned_items(user_id, item_type);

-- 3. TABEL FAVORIT / BOOKMARK (USER_BOOKMARKS)
-- Menyimpan kosakata atau kanji yang ditandai bintang oleh pengguna
create table if not exists public.user_bookmarks (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  item_type text not null check (item_type in ('kotoba', 'kanji')),
  item_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, item_type, item_id)
);

create index if not exists idx_bookmarks_user on public.user_bookmarks(user_id);

-- 4. TABEL KOSAKATA KUSTOM / EDIT & HAPUS (USER_CUSTOM_KOTOBA)
-- Menyimpan perubahan arti, kana, kanji, atau status hapus kosakata per pengguna
create table if not exists public.user_custom_kotoba (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  kotoba_id text not null,
  kanji text,
  kana text,
  romaji text,
  arti text,
  kategori text,
  is_deleted boolean default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, kotoba_id)
);

create index if not exists idx_custom_kotoba_user on public.user_custom_kotoba(user_id);

-- 5. TABEL RIWAYAT LATIHAN / KUIS (USER_QUIZ_HISTORY)
-- Menyimpan skor dan hasil 4 mode latihan pengguna
create table if not exists public.user_quiz_history (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  score integer not null,
  total integer not null,
  mode text not null,
  subject text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_quiz_history_user on public.user_quiz_history(user_id);

-- ==============================================================================
-- KEAMANAN: ROW LEVEL SECURITY (RLS)
-- Memastikan setiap pengguna hanya dapat membaca dan mengubah datanya sendiri
-- ==============================================================================

alter table public.profiles enable row level security;
alter table public.user_learned_items enable row level security;
alter table public.user_bookmarks enable row level security;
alter table public.user_custom_kotoba enable row level security;
alter table public.user_quiz_history enable row level security;

-- Policies Profiles (User lihat/ubah miliknya, Admin dapat memantau daftar profil)
create policy "Users or Admins can view profiles" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

create policy "Users can update their own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can insert their own profile" on public.profiles
  for insert with check (auth.uid() = id);

-- Policies Learned Items
create policy "Users can view their own learned items" on public.user_learned_items
  for select using (auth.uid() = user_id);

create policy "Users can insert their own learned items" on public.user_learned_items
  for insert with check (auth.uid() = user_id);

create policy "Users can delete their own learned items" on public.user_learned_items
  for delete using (auth.uid() = user_id);

-- Policies Bookmarks
create policy "Users can view their own bookmarks" on public.user_bookmarks
  for select using (auth.uid() = user_id);

create policy "Users can insert their own bookmarks" on public.user_bookmarks
  for insert with check (auth.uid() = user_id);

create policy "Users can delete their own bookmarks" on public.user_bookmarks
  for delete using (auth.uid() = user_id);

-- Policies Custom Kotoba
create policy "Users can view their own custom kotoba" on public.user_custom_kotoba
  for select using (auth.uid() = user_id);

create policy "Users can insert/update their own custom kotoba" on public.user_custom_kotoba
  for all using (auth.uid() = user_id);

-- Policies Quiz History
create policy "Users can view their own quiz history" on public.user_quiz_history
  for select using (auth.uid() = user_id);

create policy "Users can insert their own quiz history" on public.user_quiz_history
  for insert with check (auth.uid() = user_id);

-- ==============================================================================
-- OTOMATISASI: TRIGGER PROFILE OTOMATIS SAAT USER BARU DAFTAR (SIGN-UP)
-- ==============================================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture', '')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Pasang trigger ke auth.users
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ==============================================================================
-- TABEL 6: ADMIN_ANNOUNCEMENTS (Pengumuman & Notifikasi Global)
-- ==============================================================================
create table if not exists public.admin_announcements (
  id text primary key,
  title text not null,
  content text not null,
  target_role text default 'all',
  published boolean default true,
  author text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.admin_announcements enable row level security;

create policy "Anyone can view published announcements" on public.admin_announcements
  for select using (published = true or public.is_admin());

create policy "Only admins can manage announcements" on public.admin_announcements
  for all using (public.is_admin()) with check (public.is_admin());

-- ==============================================================================
-- TABEL 7: USER_CUSTOM_MATERI (Kustomisasi Materi Bab 1-50 per User / Admin)
-- ==============================================================================
create table if not exists public.user_custom_materi (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  bab integer not null check (bab >= 1 and bab <= 50),
  lesson_data jsonb not null default '{}'::jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, bab)
);

alter table public.user_custom_materi enable row level security;

create policy "Users can view their own custom materi" on public.user_custom_materi
  for select using (auth.uid() = user_id or public.is_admin());

create policy "Users can manage their own custom materi" on public.user_custom_materi
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
