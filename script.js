/* =========================================================
   Uppala Sai Anjani — Portfolio interactions
   Pure vanilla JS, no dependencies.
   ========================================================= */

/* ---------- Scroll progress bar ---------- */
const scrollFill = document.getElementById('scrollProgressFill');
function updateScrollProgress() {
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
  if (scrollFill) scrollFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

/* ---------- Magnetic buttons: gently pull toward the cursor ---------- */
if (window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      btn.style.transform = `translate(${mx * 10}px, ${my * 8}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* ---------- Contact form: composes an email addressed to Sai Anjani ---------- */
const contactForm = document.getElementById('contactForm');
const cfStatus = document.getElementById('cfStatus');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      cfStatus.textContent = 'Please fill in your name, email and a short message.';
      cfStatus.classList.add('show', 'error');
      return;
    }

    const subject = `Portfolio enquiry from ${name}`;
    const body =
      `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    const mailto =
      `mailto:saianjani.uppala2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    cfStatus.classList.remove('error');
    cfStatus.textContent = 'Opening your email app with this message addressed to Sai Anjani — hit send there to deliver it.';
    cfStatus.classList.add('show');
    contactForm.reset();
  });
}

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);
revealEls.forEach((el) => revealIO.observe(el));

/* ---------- Skill bar fill on scroll ---------- */
const bars = document.querySelectorAll('.bar-fill');
const barIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        el.style.width = el.dataset.pct + '%';
        barIO.unobserve(el);
      }
    });
  },
  { threshold: 0.4 }
);
bars.forEach((b) => barIO.observe(b));

/* ---------- Project filter ---------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const filterMap = { all: null, ai: 'ai', data: 'data', web: 'web' };

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    projectCards.forEach((card) => {
      const cat = card.dataset.cat;
      const show = f === 'all' || cat === filterMap[f];
      card.style.transition = 'opacity .3s ease, transform .3s ease';
      if (show) {
        card.style.display = 'flex';
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => { card.style.display = 'none'; }, 280);
      }
    });
  });
});

/* ---------- Active nav link on scroll ---------- */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks)
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function updateActiveNav() {
  const y = window.scrollY + 120;
  let current = sections[0];
  sections.forEach((s) => { if (s.offsetTop <= y) current = s; });
  navLinks.forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ---------- Subtle avatar parallax on mouse move ---------- */
const avatarImg = document.querySelector('.avatar-img');
const avatarWrap = document.querySelector('.avatar-wrap');
if (avatarImg && avatarWrap && window.matchMedia('(min-width: 901px)').matches) {
  avatarWrap.addEventListener('mousemove', (e) => {
    const r = avatarWrap.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    avatarImg.style.transition = 'transform .35s ease';
    avatarImg.style.transform =
      `translate(${px * 14}px, ${py * 14}px) scale(1.02)`;
  });
  avatarWrap.addEventListener('mouseleave', () => {
    avatarImg.style.transition = 'transform .7s ease';
    avatarImg.style.transform = '';
  });
}

/* ---------- Soft skill cards: click to reveal emoji + description ---------- */
const softCards = document.querySelectorAll('.soft-card');
softCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('open');
  });
});

/* ---------- Contact section reveal: torn edge peel + side social icons ---------- */
const contactSection = document.querySelector('#contact');
const contactBand = document.querySelector('.contact-band');
const sideSocial = document.querySelector('.side-social');
if (contactSection && contactBand) {
  const contactIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        contactBand.classList.toggle('in', e.isIntersecting);
        if (sideSocial) sideSocial.classList.toggle('show', e.isIntersecting);
      });
    },
    { threshold: 0.12 }
  );
  contactIO.observe(contactSection);
}