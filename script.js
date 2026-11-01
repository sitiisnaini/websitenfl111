/* =============================================================
   NFL WEBSITE — AREA EDIT UTAMA
   Ubah tautan, foto dokumentasi, atau isi testimoni di bagian ini.
   ============================================================= */
const NFL_CONFIG = {
  // Cukup ganti URL di baris ini untuk mengganti tautan pendaftaran.
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeDadnRj60qU6T1ie_1lsTIc-0wiGRg3TaWcE1GyHsd6-8tAw/viewform?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf5wH6LVVLEMpnTDMf5DtugFyGP3yGGx7rwsQuLUr1Lr7R-sw0Qdkr-nNgvgA_aem_U6PaQlDcH8BK6x5pgYqLLg',
  websiteUrl: 'https://www.nflugm.id',
  instagramUrl: 'https://www.instagram.com/nfl.ugm?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==',
  email: 'nusantarafutureleader@gmail.com',
  phone: '+6281234567891',

  // Foto sementara dari Unsplash. Ganti URL dan caption dengan dokumentasi NFL 2025.
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85',
      alt: 'Sekelompok mahasiswa dalam kegiatan bersama — foto ilustrasi',
      caption: 'Bertemu, berbagi cerita, dan tumbuh bersama'
    },
    {
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=85',
      alt: 'Mahasiswa berkolaborasi dalam kegiatan kelompok — foto ilustrasi',
      caption: 'Ruang belajar yang membuka perspektif baru'
    },
    {
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=85',
      alt: 'Suasana kegiatan pelajar di ruang acara — foto ilustrasi',
      caption: 'Merayakan ide dan keberagaman'
    },
    {
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85',
      alt: 'Peserta muda mengikuti kegiatan bersama — foto ilustrasi',
      caption: 'Kolaborasi untuk dampak yang lebih luas'
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85',
      alt: 'Suasana pembelajaran di dalam kelas — foto ilustrasi',
      caption: 'Membawa pulang pengalaman dan inspirasi'
    }
  ],

  // Nama dan kutipan berikut sengaja berupa placeholder, bukan testimoni asli.
  testimonials: [
    {
      name: 'Nama Peserta 01',
      role: 'Peserta NFL 2025',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&h=220&q=85',
      quote: '“NFL menjadi ruang untuk bertemu teman-teman dengan cerita dan perspektif yang beragam. Saya belajar bahwa kepemimpinan tumbuh dari kemauan untuk mendengar dan bergerak bersama.”'
    },
    {
      name: 'Nama Peserta 02',
      role: 'Peserta NFL 2025',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=220&h=220&q=85',
      quote: '“Banyak pengalaman baru yang saya dapatkan, mulai dari diskusi isu hingga membangun jejaring. NFL membuat saya lebih berani menyuarakan gagasan untuk daerah saya.”'
    },
    {
      name: 'Nama Peserta 03',
      role: 'Peserta NFL 2025',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=220&h=220&q=85',
      quote: '“Bagi saya, NFL bukan hanya rangkaian kegiatan, tetapi awal dari pertemanan dan kolaborasi. Pengalaman ini memberi semangat untuk terus belajar dan memberi dampak.”'
    }
  ]
};

// Terapkan tautan pendaftaran yang sama pada tombol header, hero, dan CTA.
document.querySelectorAll('[data-register-link]').forEach((link) => {
  link.href = NFL_CONFIG.registrationUrl;
  link.target = '_self';
});

// Tautan Website, Instagram, Gmail, dan narahubung dikelola dari NFL_CONFIG.
document.querySelectorAll('[data-contact-link]').forEach((link) => {
  const type = link.dataset.contactLink;
  if (type === 'website') link.href = NFL_CONFIG.websiteUrl;
  if (type === 'instagram') link.href = NFL_CONFIG.instagramUrl;
  if (type === 'email') link.href = `mailto:${NFL_CONFIG.email}`;
  if (type === 'whatsapp') link.href = `https://wa.me/${NFL_CONFIG.phone.replace(/\D/g, '')}`;
});

// Navigasi mobile.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi');
    mainNav.classList.toggle('is-open', !isOpen);
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
      mainNav.classList.remove('is-open');
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
      mainNav.classList.remove('is-open');
    }
  });
}

// Reveal animation: elemen muncul perlahan saat masuk ke viewport.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Carousel dokumentasi: otomatis berganti dan tetap bisa dikontrol manual.
const galleryImage = document.getElementById('galleryImage');
const galleryCount = document.getElementById('galleryCount');
const galleryCaption = document.getElementById('galleryCaption');
const galleryDots = document.getElementById('galleryDots');
const galleryStage = document.getElementById('galleryStage');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
let activeGalleryIndex = 0;
let galleryTimer = null;

function showGalleryImage(index) {
  if (!NFL_CONFIG.gallery.length || !galleryImage) return;
  activeGalleryIndex = (index + NFL_CONFIG.gallery.length) % NFL_CONFIG.gallery.length;
  const photo = NFL_CONFIG.gallery[activeGalleryIndex];
  galleryImage.style.display = 'block';
  galleryImage.alt = photo.alt;
  galleryImage.src = photo.src;
  galleryImage.onerror = () => {
    galleryImage.style.display = 'none';
    galleryStage?.classList.add('image-unavailable');
  };
  galleryImage.onload = () => galleryStage?.classList.remove('image-unavailable');
  galleryCount.textContent = `${String(activeGalleryIndex + 1).padStart(2, '0')} / ${String(NFL_CONFIG.gallery.length).padStart(2, '0')}`;
  galleryCaption.textContent = photo.caption;
  galleryDots?.querySelectorAll('button').forEach((dot, dotIndex) => {
    dot.setAttribute('aria-current', String(dotIndex === activeGalleryIndex));
    dot.setAttribute('aria-label', `Tampilkan foto ${dotIndex + 1}`);
  });
}

function resetGalleryTimer() {
  if (galleryTimer) window.clearInterval(galleryTimer);
  galleryTimer = window.setInterval(() => showGalleryImage(activeGalleryIndex + 1), 5500);
}

if (galleryDots && NFL_CONFIG.gallery.length) {
  NFL_CONFIG.gallery.forEach((photo, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery-dot';
    dot.setAttribute('aria-label', `Tampilkan foto ${index + 1}`);
    dot.setAttribute('aria-current', 'false');
    dot.addEventListener('click', () => { showGalleryImage(index); resetGalleryTimer(); });
    galleryDots.appendChild(dot);
  });
  showGalleryImage(0);
  resetGalleryTimer();
  galleryPrev?.addEventListener('click', () => { showGalleryImage(activeGalleryIndex - 1); resetGalleryTimer(); });
  galleryNext?.addEventListener('click', () => { showGalleryImage(activeGalleryIndex + 1); resetGalleryTimer(); });
  galleryStage?.addEventListener('mouseenter', () => window.clearInterval(galleryTimer));
  galleryStage?.addEventListener('mouseleave', resetGalleryTimer);
  galleryStage?.addEventListener('focusin', () => window.clearInterval(galleryTimer));
  galleryStage?.addEventListener('focusout', resetGalleryTimer);
}

// Kartu testimoni dibuat dari data di NFL_CONFIG agar gampang diganti.
const testimonialGrid = document.getElementById('testimonialGrid');
if (testimonialGrid) {
  testimonialGrid.innerHTML = NFL_CONFIG.testimonials.map((item) => `
    <article class="testimonial-card reveal is-visible">
      <div class="testimonial-top">
        <img src="${item.photo}" alt="Foto placeholder ${item.name}" loading="lazy" onerror="this.style.visibility='hidden'">
        <div><strong>${item.name}</strong><span>${item.role}</span></div>
      </div>
      <div class="quote-mark" aria-hidden="true">“</div>
      <blockquote>${item.quote}</blockquote>
      <span class="testi-label">Contoh testimoni</span>
    </article>
  `).join('');
}

// Pause carousel ketika pengguna memilih reduce motion.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && galleryTimer) {
  window.clearInterval(galleryTimer);
}
