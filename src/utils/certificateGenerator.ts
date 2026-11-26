/**
 * Generates and downloads a Luxury Midnight Ocean Blue PNG milestone certificate
 */
export const downloadMilestoneCertificate = (params: {
  recipientName: string;
  milestoneTitle: string;
  milestoneSubtitle: string;
  completionText: string;
  dateText?: string;
}): void => {
  const canvas = document.createElement('canvas');
  canvas.width = 1400;
  canvas.height = 960;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background Gradient (Midnight Navy -> Deep Ocean)
  const bg = ctx.createLinearGradient(0, 0, 1400, 960);
  bg.addColorStop(0, '#08152F');
  bg.addColorStop(0.55, '#102447');
  bg.addColorStop(1, '#172945');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1400, 960);

  // Subtle ambient glow
  const glow = ctx.createRadialGradient(700, 380, 40, 700, 380, 620);
  glow.addColorStop(0, 'rgba(57, 120, 214, 0.22)');
  glow.addColorStop(1, 'rgba(8, 21, 47, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1400, 960);

  // Outer & Inner Luxury Borders
  ctx.strokeStyle = '#3978D6';
  ctx.lineWidth = 4;
  ctx.strokeRect(42, 42, 1316, 876);

  ctx.strokeStyle = 'rgba(131, 183, 238, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(60, 60, 1280, 840);

  // Top Brand Header
  ctx.textAlign = 'center';
  ctx.fillStyle = '#69C9DF';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('ZENORA · JAPANESE LEARNING PLATFORM', 700, 138);

  ctx.fillStyle = '#E9BD72';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('CERTIFICATE OF ACHIEVEMENT · 修了証', 700, 180);

  // Main Title
  ctx.fillStyle = '#F2F6FC';
  ctx.font = '900 54px sans-serif';
  ctx.fillText(params.milestoneTitle, 700, 290);

  ctx.fillStyle = '#A9BBD3';
  ctx.font = '500 24px sans-serif';
  ctx.fillText('Diberikan dengan bangga kepada:', 700, 360);

  // Recipient Name
  ctx.fillStyle = '#83B7EE';
  ctx.font = '900 48px sans-serif';
  ctx.fillText(params.recipientName || 'Pelajar ZENORA', 700, 435);

  // Divider
  ctx.strokeStyle = 'rgba(131, 183, 238, 0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(400, 468);
  ctx.lineTo(1000, 468);
  ctx.stroke();

  // Subtitle & Completion Text
  ctx.fillStyle = '#F2F6FC';
  ctx.font = '600 26px sans-serif';
  ctx.fillText(params.milestoneSubtitle, 700, 540);

  ctx.fillStyle = '#A9BBD3';
  ctx.font = '500 22px sans-serif';
  ctx.fillText(params.completionText, 700, 590);

  // Gold Seal Badge
  ctx.beginPath();
  ctx.arc(700, 720, 56, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(233, 189, 114, 0.16)';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#E9BD72';
  ctx.stroke();

  ctx.fillStyle = '#E9BD72';
  ctx.font = '900 26px sans-serif';
  ctx.fillText('合格', 700, 728);

  // Footer Date & Signature
  const dateStr =
    params.dateText ||
    new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  ctx.textAlign = 'left';
  ctx.fillStyle = '#7186A5';
  ctx.font = '600 18px sans-serif';
  ctx.fillText(`Tanggal Terbit: ${dateStr}`, 110, 845);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#83B7EE';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('ZENORA Academic System', 1290, 845);

  // Trigger Download
  const url = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = `zenora-certificate-${params.milestoneTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
  link.href = url;
  link.click();
};
