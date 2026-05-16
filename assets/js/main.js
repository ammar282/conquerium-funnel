/* ============================================================
   CONQUERIUM — main.js
   Handles: scroll animations · YouTube overlay · track selector
            · comparison table toggle · booking form + Supabase TODO
   ============================================================ */

/* ── Scroll animations (IntersectionObserver) ──────────────── */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
})();

/* ── Toast ──────────────────────────────────────────────────── */
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast--out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 4500);
}

/* ── YouTube overlay ────────────────────────────────────────── */
(function () {
  const wrap = document.getElementById('video-wrap');
  if (!wrap) return;

  const videoId = wrap.dataset.videoId;
  if (!videoId) return;

  function loadVideo() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    wrap.innerHTML = '';
    wrap.appendChild(iframe);
  }

  wrap.addEventListener('click', loadVideo);
  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadVideo(); }
  });
})();

/* ── Track selector (pricing cards + comparison table) ──────── */
(function () {
  const trackPills      = document.querySelectorAll('.track-pill');
  const pricingGrids    = document.querySelectorAll('.pricing-track-grid');
  const tableTrackBtns  = document.querySelectorAll('.table-track-btn');
  const compareTables   = document.querySelectorAll('.compare-table-wrap');

  if (!trackPills.length) return;

  function setTrack(track) {
    /* Pricing pills */
    trackPills.forEach((pill) => {
      const isActive = pill.dataset.track === track;
      pill.classList.toggle('track-pill--active', isActive);
      pill.classList.toggle('track-pill--inactive', !isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    /* Pricing grids */
    pricingGrids.forEach((grid) => {
      const isActive = grid.dataset.track === track;
      grid.classList.toggle('active', isActive);
      grid.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    /* Table toggle buttons */
    tableTrackBtns.forEach((btn) => {
      const isActive = btn.dataset.track === track;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('inactive', !isActive);
    });

    /* Comparison tables */
    compareTables.forEach((tbl) => {
      tbl.classList.toggle('active', tbl.dataset.track === track);
    });
  }

  /* Pricing pills click */
  trackPills.forEach((pill) => {
    pill.addEventListener('click', () => setTrack(pill.dataset.track));
  });

  /* Table toggle buttons click (mirrors pricing, keeps them in sync) */
  tableTrackBtns.forEach((btn) => {
    btn.addEventListener('click', () => setTrack(btn.dataset.track));
  });
})();

/* ── Booking form ───────────────────────────────────────────── */
(function () {
  const form = document.getElementById('booking-form');
  if (!form) return;

  function showError(input, msg) {
    clearError(input);
    input.classList.add('error');
    const err = document.createElement('span');
    err.className = 'field-error';
    err.textContent = msg;
    input.parentNode.appendChild(err);
  }

  function clearError(input) {
    input.classList.remove('error');
    const prev = input.parentNode.querySelector('.field-error');
    if (prev) prev.remove();
  }

  function validateForm() {
    let valid = true;
    const name     = form.querySelector('#name');
    const email    = form.querySelector('#email');
    const whatsapp = form.querySelector('#whatsapp');

    [
      { el: name,     msg: 'Full name is required.' },
      { el: email,    msg: 'Email address is required.' },
      { el: whatsapp, msg: 'WhatsApp number is required.' },
    ].forEach(({ el, msg }) => {
      if (!el.value.trim()) { showError(el, msg); valid = false; }
      else clearError(el);
    });

    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      valid = false;
    }

    return valid;
  }

  /* Clear errors on input */
  form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]')
    .forEach((el) => el.addEventListener('input', () => clearError(el)));

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      name:           form.querySelector('#name').value.trim(),
      email:          form.querySelector('#email').value.trim(),
      whatsapp:       form.querySelector('#whatsapp').value.trim(),
      track:          form.querySelector('input[name="track"]:checked')?.value ?? '',
      urgency:        form.querySelector('input[name="urgency"]:checked')?.value ?? '',
      hasInvestment:  form.querySelector('input[name="hasInvestment"]:checked')?.value ?? '',
      awareOfBrands:  form.querySelector('input[name="awareOfBrands"]:checked')?.value ?? '',
      categories:     Array.from(form.querySelectorAll('input[name="category"]:checked')).map((c) => c.value),
      submittedAt:    new Date().toISOString(),
    };

    console.log('Lead payload:', payload);

    // TODO: connect to Supabase
    // import { createClient } from '@supabase/supabase-js';
    // const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    // supabase.from('leads').insert(payload).then(({ error }) => {
    //   if (error) console.error('Supabase insert error:', error);
    // });

    // TODO: insert FB Pixel ID — fire Lead event on submit
    // fbq('track', 'Lead', { currency: 'PKR', value: 0 });

    showToast('Booking received. We\'ll WhatsApp you within 24 hours to schedule your Google Meet.');
    form.reset();

    const postCta = document.getElementById('post-submit-cta');
    if (postCta) {
      postCta.style.display = 'block';
      postCta.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
})();
