const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const inquiryForm = document.querySelector('#inquiry-form');
const formStatus = document.querySelector('#form-status');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const value = (key) => String(data.get(key) || '').trim();
    const start = value('start') || 'Not specified';
    const message = [
      'Hello Forge & Frames Limited, I would like to make a project inquiry.',
      '',
      `Name: ${value('name')}`,
      `Phone / WhatsApp: ${value('phone')}`,
      `Email: ${value('email') || 'Not provided'}`,
      `Service: ${value('service')}`,
      `Project location: ${value('location')}`,
      `Budget range: ${value('budget')}`,
      `Preferred start date: ${start}`,
      '',
      `Project details: ${value('message')}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/2348106448145?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
    if (formStatus) formStatus.textContent = 'WhatsApp is opening with your inquiry ready to review and send.';
  });
}
