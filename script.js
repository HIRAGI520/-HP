const data = window.siteData || {};

function setText(id, value, allowBreak = false) {
  const el = document.getElementById(id);
  if (!el || value == null) return;
  if (allowBreak) {
    el.innerHTML = String(value).replace(/\n/g, '<br>');
  } else {
    el.textContent = value;
  }
}

setText('schoolNameHeader', data.schoolName);
setText('schoolNameFooter', data.schoolName);
setText('heroEyebrow', data.heroEyebrow);
setText('heroTitle', data.heroTitle, true);
setText('heroText', data.heroText);
setText('heroButton', data.heroButton);
setText('about1', data.about1);
setText('about2', data.about2);
setText('about3', data.about3);
setText('targetGrade', data.targetGrade);
setText('subjects', data.subjects);
setText('courseContent', data.courseContent);
setText('teachingStyle', data.teachingStyle);
setText('priceLabel', data.priceLabel);
setText('priceValue', data.priceValue);
setText('priceNote', data.priceNote);
setText('priceSubNote', data.priceSubNote);
setText('faq1', data.faq1);
setText('faq2', data.faq2);
setText('faq3', data.faq3);
setText('contactText', data.contactText);

const heroPoints = document.getElementById('heroPoints');
if (heroPoints && Array.isArray(data.heroPoints)) {
  heroPoints.innerHTML = data.heroPoints.map(item => `<li>${item}</li>`).join('');
}

const lineLink = document.getElementById('lineLink');
if (lineLink && data.lineUrl) lineLink.href = data.lineUrl;

const mailLink = document.getElementById('mailLink');
if (mailLink && data.mailAddress) {
  mailLink.href = `mailto:${data.mailAddress}`;
  mailLink.textContent = `メールで問い合わせ`;
}

document.getElementById('year').textContent = new Date().getFullYear();
document.title = `${data.schoolName || '個人塾サンプル'} | ホームページ`;
