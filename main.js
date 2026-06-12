// === SECONDWAVE MARITIME — main.js ===

document.addEventListener('DOMContentLoaded', () => {

  // 1. Sticky nav
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 2. Mobile hamburger
  const ham  = document.getElementById('hamburger');
  const mOvl = document.getElementById('mobileOverlay');
  if (ham && mOvl) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mOvl.classList.toggle('open');
      document.body.style.overflow = mOvl.classList.contains('open') ? 'hidden' : '';
    });
    mOvl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mOvl.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Scroll reveal — mark body ready first so CSS hides elements
  document.body.classList.add('js-ready');
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => io.observe(r));
  }

  // 4. Back to top
  const btt = document.getElementById('btt');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // 5. Contact form
  const form = document.getElementById('contactForm');
  const succ = document.getElementById('formSuccess');
  if (form && succ) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      succ.style.display = 'block';
    });
  }

  // 6. Active nav link highlight
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-link[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

});
