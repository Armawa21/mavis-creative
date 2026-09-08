// MAVIS — shared behaviour

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;

  // header state on scroll (only matters on the home hero page)
  const setScrolled = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  // mobile nav toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => body.classList.remove('nav-open'));
    });
  }

  // portfolio filter
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-grid .item');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const cat = btn.dataset.filter;
        items.forEach(item => {
          const match = cat === 'all' || item.dataset.category === cat;
          if (match) item.removeAttribute('hidden');
          else item.setAttribute('hidden', '');
        });
      });
    });
  }

  // contact form -> opens the visitor's email client with the message pre-filled
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const project = form.project.value;
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`New project inquiry — ${project || 'General'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\n${message}`
      );
      window.location.href = `mailto:ma.visuals21@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
