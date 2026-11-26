import React, { useState } from 'react';
import { AlertTriangle, Inbox, LucideIcon, RefreshCw } from 'lucide-react';

export type AccentTone = 'blue' | 'sapphire' | 'cyan' | 'emerald' | 'gold' | 'danger';

const TONE_CLASSES: Record<AccentTone, { iconBg: string; iconText: string; badge: string; bar: string }> = {
  blue: {
    iconBg: 'bg-[var(--primary)]/12 border-[var(--primary)]/25',
    iconText: 'text-[var(--primary)]',
    badge: 'bg-[var(--primary)]/12 text-[var(--primary)] border border-[var(--primary)]/25',
    bar: 'from-[var(--primary-deep)] to-[var(--primary)]',
  },
  sapphire: {
    iconBg: 'bg-[#4389D4]/15 border-[#4389D4]/30',
    iconText: 'text-[#4389D4]',
    badge: 'bg-[#4389D4]/15 text-[#4389D4] border border-[#4389D4]/30',
    bar: 'from-[#2866B5] to-[#83B7EE]',
  },
  cyan: {
    iconBg: 'bg-[var(--secondary-accent)]/15 border-[var(--secondary-accent)]/30',
    iconText: 'text-[var(--secondary-accent)]',
    badge: 'bg-[var(--secondary-accent)]/15 text-[var(--secondary-accent)] border border-[var(--secondary-accent)]/30',
    bar: 'from-[#4389D4] to-[var(--secondary-accent)]',
  },
  emerald: {
    iconBg: 'bg-[#27B99A]/15 border-[#27B99A]/30',
    iconText: 'text-[#27B99A]',
    badge: 'bg-[#27B99A]/15 text-[#27B99A] border border-[#27B99A]/30',
    bar: 'from-[#27B99A] to-[var(--secondary-accent)]',
  },
  gold: {
    iconBg: 'bg-[var(--accent-gold)]/15 border-[var(--accent-gold)]/30',
    iconText: 'text-[var(--accent-gold)]',
    badge: 'bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30',
    bar: 'from-[#E9B45E] to-[#83B7EE]',
  },
  danger: {
    iconBg: 'bg-[#E56B78]/15 border-[#E56B78]/30',
    iconText: 'text-[#E56B78]',
    badge: 'bg-[#E56B78]/15 text-[#E56B78] border border-[#E56B78]/30',
    bar: 'from-[#E56B78] to-[#E9B45E]',
  },
};

export interface StatCardProps {
  title: string;
  value: React.ReactNode;
  subValue?: string;
  badgeText?: string;
  progressPct?: number;
  icon: LucideIcon;
  tone?: AccentTone;
  onClick?: () => void;
  footerText?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subValue,
  badgeText,
  progressPct,
  icon: Icon,
  tone = 'blue',
  onClick,
  footerText,
}) => {
  const styles = TONE_CLASSES[tone];
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-5 bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--card-shadow)] transition-all duration-200 ${
        onClick
          ? 'cursor-pointer hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[var(--card-hover-shadow)]'
          : ''
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${styles.iconBg} ${styles.iconText}`}>
          <Icon className="w-5 h-5" />
        </div>
        {badgeText && (
          <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${styles.badge}`}>
            {badgeText}
          </span>
        )}
      </div>

      <span className="text-xs font-semibold text-[var(--text-muted)] block">{title}</span>

      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] tracking-tight">
          {value}
        </span>
        {subValue && (
          <span className="text-xs font-semibold text-[var(--text-muted)]">{subValue}</span>
        )}
      </div>

      {typeof progressPct === 'number' && (
        <div className="mt-3">
          <ProgressBar pct={progressPct} tone={tone} />
        </div>
      )}

      {footerText && (
        <p className="text-[11px] text-[var(--text-secondary)] mt-2.5 leading-snug">{footerText}</p>
      )}
    </div>
  );
};

export const ProgressBar: React.FC<{
  pct: number;
  tone?: AccentTone;
  heightClass?: string;
}> = ({ pct, tone = 'blue', heightClass = 'h-2' }) => {
  const clamped = Math.max(0, Math.min(100, pct));
  const styles = TONE_CLASSES[tone];
  return (
    <div className={`w-full ${heightClass} rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] overflow-hidden`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${styles.bar} transition-all duration-700`}
        style={{ width: `${clamped === 0 ? 0 : Math.max(3, clamped)}%` }}
      />
    </div>
  );
};

export const ChartCard: React.FC<{
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, icon: Icon, rightSlot, children, className = '' }) => (
  <div className={`rounded-3xl p-5 sm:p-7 bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--card-shadow)] space-y-5 ${className}`}>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h3 className="text-base sm:text-lg font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-[var(--primary)] shrink-0" />}
          <span>{title}</span>
        </h3>
        {subtitle && (
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">{subtitle}</p>
        )}
      </div>
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
    {children}
  </div>
);

export interface LineChartPoint {
  label: string;
  fullLabel: string;
  value: number;
  secondaryValue?: number;
}

export const SmoothLineChart: React.FC<{
  data: LineChartPoint[];
  primaryLabel: string;
  secondaryLabel?: string;
  unitSuffix?: string;
  height?: number;
}> = ({ data, primaryLabel, secondaryLabel, unitSuffix = '', height = 160 }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="Belum ada data grafik"
        description="Data aktivitas akan muncul otomatis setelah ada sesi belajar."
      />
    );
  }

  const chartWidth = 640;
  const chartHeight = height;
  const maxVal = Math.max(
    1,
    ...data.map((d) => Math.max(d.value, d.secondaryValue ?? 0))
  );

  const getCoords = (getter: (d: LineChartPoint) => number) =>
    data.map((d, idx) => {
      const x = data.length === 1 ? chartWidth / 2 : (idx / (data.length - 1)) * chartWidth;
      const y = chartHeight - (getter(d) / maxVal) * (chartHeight - 16) - 8;
      return { x, y, raw: d };
    });

  const buildSmoothPath = (pts: Array<{ x: number; y: number }>) => {
    if (pts.length === 0) return '';
    if (pts.length === 1) return `M 0 ${pts[0].y} L ${chartWidth} ${pts[0].y}`;
    return pts.reduce((acc, p, i, arr) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = arr[i - 1];
      const cpX = (prev.x + p.x) / 2;
      return `${acc} C ${cpX} ${prev.y}, ${cpX} ${p.y}, ${p.x} ${p.y}`;
    }, '');
  };

  const primaryPts = getCoords((d) => d.value);
  const primaryPath = buildSmoothPath(primaryPts);
  const primaryArea = `${primaryPath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  const hasSecondary = Boolean(secondaryLabel && data.some((d) => typeof d.secondaryValue === 'number'));
  const secondaryPts = hasSecondary ? getCoords((d) => d.secondaryValue ?? 0) : [];
  const secondaryPath = hasSecondary ? buildSmoothPath(secondaryPts) : '';

  const hovered = hoveredIdx !== null ? data[hoveredIdx] : null;
  const gradId = `lineAreaGrad-${primaryLabel.replace(/\W+/g, '')}`;

  // Show evenly spaced x-axis labels (up to 7 labels so 30d doesn't crowd)
  const step = data.length <= 8 ? 1 : Math.ceil(data.length / 7);

  return (
    <div className="space-y-3">
      {/* Legend + Live Hover Pill */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--text-secondary)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />
            {primaryLabel}
          </span>
          {hasSecondary && secondaryLabel && (
            <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--text-secondary)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--secondary-accent)]" />
              {secondaryLabel}
            </span>
          )}
        </div>

        {hovered && (
          <div className="px-3 py-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-bold text-[var(--text-primary)] animate-fade-in">
            <span>{hovered.fullLabel}: </span>
            <span className="text-[var(--primary)]">
              {hovered.value}
              {unitSuffix}
            </span>
            {hasSecondary && typeof hovered.secondaryValue === 'number' && (
              <span className="text-[var(--secondary-accent)] ml-2">
                · {secondaryLabel}: {hovered.secondaryValue}
                {unitSuffix}
              </span>
            )}
          </div>
        )}
      </div>

      {/* SVG Chart */}
      <div className="relative w-full" style={{ height: `${chartHeight + 12}px` }}>
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--secondary-accent)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Subtle horizontal gridlines */}
          {[0.25, 0.5, 0.75].map((ratio) => {
            const y = chartHeight * ratio;
            return (
              <line
                key={ratio}
                x1={0}
                y1={y}
                x2={chartWidth}
                y2={y}
                stroke="var(--border)"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            );
          })}

          <path d={primaryArea} fill={`url(#${gradId})`} />
          <path
            d={primaryPath}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {hasSecondary && (
            <path
              d={secondaryPath}
              fill="none"
              stroke="var(--secondary-accent)"
              strokeWidth="2.4"
              strokeDasharray="5 3"
              strokeLinecap="round"
            />
          )}

          {primaryPts.map((pt, idx) => (
            <g
              key={idx}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <circle cx={pt.x} cy={pt.y} r={12} fill="transparent" />
              <circle
                cx={pt.x}
                cy={pt.y}
                r={hoveredIdx === idx ? 6 : 4}
                fill="var(--bg-card)"
                stroke="var(--primary)"
                strokeWidth={2.5}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between text-[11px] font-semibold text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">
        {data.map((d, idx) =>
          idx % step === 0 || idx === data.length - 1 ? (
            <span key={idx} className="truncate">
              {d.label}
            </span>
          ) : null
        )}
      </div>
    </div>
  );
};

export const ActivityHeatmap: React.FC<{
  days: Array<{ date: string; count: number }>;
}> = ({ days }) => {
  const [selectedDay, setSelectedDay] = useState<{ date: string; count: number } | null>(null);
  const activeDaysCount = days.filter((d) => d.count > 0).length;

  const getCellStyle = (count: number) => {
    if (count >= 15) return 'bg-[#27B99A] border-[#27B99A] text-white';
    if (count >= 8) return 'bg-[var(--primary)] border-[var(--primary)]';
    if (count >= 3) return 'bg-[#83B7EE]/75 border-[#83B7EE]';
    if (count >= 1) return 'bg-[var(--ice-blue)] border-[var(--soft-sky)]/50';
    return 'bg-[var(--bg-elevated)] border-[var(--border)]';
  };

  return (
    <div className="space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-semibold text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">{activeDaysCount}</strong> hari aktif dari {days.length} hari terakhir
        </span>
        {selectedDay && (
          <span className="px-2.5 py-0.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-bold text-[var(--text-primary)]">
            {selectedDay.date}: {selectedDay.count} aktivitas
          </span>
        )}
      </div>

      <div className="grid grid-cols-12 gap-1.5">
        {days.map((day) => (
          <button
            type="button"
            key={day.date}
            title={`${day.date}: ${day.count} aktivitas`}
            onMouseEnter={() => setSelectedDay(day)}
            onClick={() => setSelectedDay(day)}
            className={`aspect-square rounded-md border transition-transform hover:scale-115 cursor-pointer ${getCellStyle(day.count)}`}
            aria-label={`${day.date}: ${day.count} aktivitas`}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[var(--text-muted)] pt-1">
        <span>Intensitas aktivitas harian</span>
        <div className="flex items-center gap-1.5">
          <span>Kosong</span>
          <span className="w-3 h-3 rounded bg-[var(--bg-elevated)] border border-[var(--border)]" />
          <span className="w-3 h-3 rounded bg-[var(--ice-blue)] border border-[var(--soft-sky)]/50" />
          <span className="w-3 h-3 rounded bg-[#83B7EE]/75" />
          <span className="w-3 h-3 rounded bg-[var(--primary)]" />
          <span className="w-3 h-3 rounded bg-[#27B99A]" />
          <span>Tinggi</span>
        </div>
      </div>
    </div>
  );
};

export const EmptyState: React.FC<{
  title: string;
  description: string;
  action?: React.ReactNode;
}> = ({ title, description, action }) => (
  <div className="text-center py-8 px-4 rounded-2xl bg-[var(--bg-elevated)]/60 border border-dashed border-[var(--border)] space-y-2">
    <Inbox className="w-8 h-8 text-[var(--primary)] mx-auto opacity-70" />
    <p className="text-sm font-bold text-[var(--text-primary)]">{title}</p>
    <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">{description}</p>
    {action && <div className="pt-2">{action}</div>}
  </div>
);

export const LoadingSkeleton: React.FC<{ rows?: number }> = ({ rows = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="h-14 rounded-2xl skeleton-shimmer border border-[var(--border)]" />
    ))}
  </div>
);

export const ErrorState: React.FC<{
  message: string;
  onRetry?: () => void;
}> = ({ message, onRetry }) => (
  <div className="p-6 rounded-2xl bg-[#E56B78]/10 border border-[#E56B78]/30 text-center space-y-3">
    <AlertTriangle className="w-7 h-7 text-[#E56B78] mx-auto" />
    <p className="text-sm font-bold text-[var(--text-primary)]">{message}</p>
    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Muat Ulang</span>
      </button>
    )}
  </div>
);
