const loadingScreen = document.getElementById('loadingScreen');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const volumeControl = document.getElementById('volumeControl');
const starfield = document.getElementById('starfield');
const fireflyLayer = document.getElementById('fireflyLayer');
const cursorGlow = document.getElementById('cursorGlow');
const floatingHearts = document.getElementById('floatingHearts');
const sections = Array.from(document.querySelectorAll('.section'));
const navButtons = document.querySelectorAll('.nav-pill, .prev-btn, .next-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const typingText = document.getElementById('typingText');
const quizFeedback = document.getElementById('quizFeedback');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordMessage = document.getElementById('passwordMessage');
const favoritePhotosGrid = document.getElementById('favoritePhotosGrid');
const favoriteLockOverlay = document.getElementById('favoriteLockOverlay');
const favoritePasswordInput = document.getElementById('favoritePasswordInput');
const favoritePasswordSubmit = document.getElementById('favoritePasswordSubmit');
const favoritePasswordMessage = document.getElementById('favoritePasswordMessage');
const finalLetter = document.getElementById('finalLetter');
const favoritePhotoPaths = [
  'images/fav_photos/IMG-20260405-WA0113.jpg',
  'images/fav_photos/IMG-20260405-WA0126.jpg',
  'images/fav_photos/IMG-20260520-WA0020.jpg',
  'images/fav_photos/IMG-20260520-WA0027.jpg',
  'images/fav_photos/IMG-20260520-WA0028.jpg',
  'images/fav_photos/IMG-20260520-WA0033.jpg',
  'images/fav_photos/IMG-20260520-WA0034.jpg',
  'images/fav_photos/IMG-20260520-WA0035.jpg',
  'images/fav_photos/IMG-20260520-WA0042.jpg',
  'images/fav_photos/IMG-20260520-WA0048.jpg',
  'images/fav_photos/IMG-20260520-WA0051.jpg',
  'images/fav_photos/IMG-20260423-WA0015.jpg', //new
  'images/fav_photos/IMG_20260405_093127860.jpg',
  'images/fav_photos/IMG-20260803-WA0038.jpg',
  'images/fav_photos/IMG-20260807-WA0011.jpg',
  'images/fav_photos/IMG_20260405_092601643.jpg', //new
  'images/fav_photos/IMG-20260807-WA0012.jpg',
  'images/fav_photos/IMG-20260807-WA0013.jpg',
  'images/fav_photos/IMG-20260807-WA0016.jpg',
  'images/fav_photos/IMG20260403130618.jpg',
  'images/fav_photos/IMG20260403151945.jpg',
  'images/fav_photos/IMG20260610171743.jpg',
  'images/fav_photos/IMG20260610185513.jpg',
  'images/fav_photos/IMG-20260719-WA0005.jpg',
  'images/fav_photos/1772979314036.jpg'
];
const letterText = document.getElementById('letterText');
const startJourney = document.getElementById('startJourney');
const memoryVideo = document.getElementById('memoryVideo');
const scrollProgress = document.getElementById('scrollProgress');

const typingLines = [
  'You make every day brighter.',
  'You make every room feel warmer.',
  'You are the reason love feels soft and true.'
];

const letterContent = `My dear ChittiThalli 🤍,

Many more happy returns of the day ra bangaru thalli! 🎂🤍 Eppudu happy ga undali sare na. Nuvvu eppudu navvuthu, peaceful ga, healthy ga undali ani manaspoorthiga korukuntunna.

Nuvvu naaku first time parichayam ayyav ga, appudu nunchi ippati varaku nenu ninnu na own sister lane chusukuntunna. Nijam cheppalante, nenu ammayilatho ekkuva matladanu. Andhuke starting lo nitho matladali ante konchem bhayam vesi ekkuva matladalekapoyanu. Kaani ippudu nuvvu naaku chala close aipoyav ra Chellamma. 🤍 Nuvvu na life lo vachinanduku nenu chala lucky ga feel avuthunna. Nuvvu na life lo oka special person ga aipoyav, and I’m really proud of you. Ninnu na life lo kalavadam naaku chala happy ga anipisthundi. 🫂🤍

Nuvvu na life lo nenu entha important ani cheppavo, anna life lo kuda nuvvu anthe important. Nuvvu edaina adigithe, na valla ayithe “vadhu” ani cheppalenu. Endukante nuvvu naaku just sister kaadhu, na own sister la aipoyav. 🫂 Naku andhari kanna nuvve important ra, andhuke neeku value kuda ekkuva istha. Sare na. 🤍

Kaani konni vishayalu nenu cheppali ra. Nenu em cheppina ninnu hurt cheyyadaniki kaadhu. Future lo neeku elanti problems raakudadhu ani chepthunna. Ippudu nuvvu konni things lite ga feel avvachu, “Anna enduku ila chepthunnadu?” ani anukovachu. Kaani future lo neeke ardham avuthundi, anna enduku cheppado ani. Nee meeda care undi kabatte chepthunna ra ChittiThalli. 🤍

Friends tho ekkuva close ga undaku ra. Andharu manam anukunnattu undaru, konthamandi fake ga kuda untaru. Evarini aina namme mundu konchem alochinchu. Nee heart chala manchidi, andhuke easy ga evarini nammi hurt avvakunda konchem strong ga undali. Nee happiness and peace eppudu important.

Amma ni kuda chala baaga chusuko ra. Amma kosam nuvvu eppudu strong ga undali. Amma happiness kuda nee responsibility lo oka part ani gurthu pettuko. 🤍

Nuvvu eppudu navvuthu unte anna kuda chala happy. Nee smile alane eppudu undali. 🥹 Kopam konchem thagginchuko ra Chellamma 😄. Chinna chinna vishayalaki ekkuva feel avvakunda, happy ga life ni enjoy cheyyi.

Inko important thing cheppali… anna ki kuda konchem possessiveness untundhi ra Chellamma 😄🤍. Adhi kuda ninnu ekkuva care chesthanu kabatte. Nuvvu naaku chala important kabatti konni times ekkuva care chesthunna ani anipinchachu. Adhi control cheyyadaniki kaadhu, just nee meeda unna affection and care. 🫂

Nuvvu life lo em achieve cheyyali anukuntunnavo avi anni achieve cheyyali. Nee dreams anni nijam avvali. Ekkadiki vellina, entha busy aina, mana bond matram eppudu change avvakudadhu. Enni fights vachina, enni misunderstandings vachina, nuvvu na sister ane place matram eppudu permanent. 🤍

Nuvvu eppudaina sad ga unna, edaina problem unna, evaritho cheppukovalo teliyakapoyina “Anna unnadu kada” ani gurthu pettuko. Andharu ninnu vadhu anukunna sare, ee Anna matram eppudu nee side lo untadu. 🫂❤️ Na valla ayinantha varaku eppudu nee kosam untanu. Nenu konni times strict ga matladina, adhi kuda nee meeda unna care valle. Inkka chala cheppalani vundhi kani anna ki ni eyes lo water chudadam istam ledhu andhuke stop chesthunna ChittiThalli 🤍.

Once again, Many Many More Happy Returns of the Day ra naa ChittiThalli! 🎂🤍

Eppudu happy ga undu, healthy ga undu, navvuthu undu. Nee face lo aa smile eppudu alane undali. ❤️

Love you so much ra naa Chellamma 🤍🫂
Eppudu gurthu pettuko — situation ela unna, nee Anna eppudu nee side lo untadu. ❤️

With all my love,
— Nee Annayya 🤍;

function init() {
  createStars();
  createFireflies();
  hideLoading();
  setInterval(createFloatingHearts, 1400);
  setInterval(createConfettiBurst, 2400);
  setInterval(createFireworkBurst, 4200);
  startTyping();
  populateFavoritePhotosGrid();
  attachEvents();
  setupRevealAnimations();
  bgMusic.volume = 0.35;
  document.addEventListener('mousemove', moveCursor);
  document.addEventListener('click', createSparkle);
  document.addEventListener('keydown', handleKeyboardNavigation);
  document.addEventListener('click', startBackgroundMusic, { once: true });
  showSection('opening');
  // populate galleries from manifest (if present)
  loadImageManifest();
}

function startBackgroundMusic() {
  bgMusic.play().catch(() => {});
}

function hideLoading() {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    bgMusic.play().catch(() => {});
  }, 1800);
}

function createStars() {
  const ctx = starfield.getContext('2d');
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.8 + 0.4,
    a: Math.random() * 0.8 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star, i) => {
      const alpha = 0.4 + 0.6 * Math.sin(Date.now() / 900 + i);
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
}

function createFireflies() {
  const ctx = fireflyLayer.getContext('2d');
  const fireflies = Array.from({ length: 18 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4
  }));

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    fireflies.forEach((f) => {
      f.x += f.dx;
      f.y += f.dy;
      if (f.x < 0 || f.x > window.innerWidth) f.dx *= -1;
      if (f.y < 0 || f.y > window.innerHeight) f.dy *= -1;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 212, 130, 0.8)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
}

function moveCursor(e) {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
}

function createSparkle(e) {
  const spark = document.createElement('span');
  spark.className = 'heart-drop';
  spark.textContent = '✨';
  spark.style.left = `${e.clientX}px`;
  spark.style.top = `${e.clientY}px`;
  floatingHearts.appendChild(spark);
  setTimeout(() => spark.remove(), 800);
}

function createFloatingHearts() {
  const heart = document.createElement('span');
  heart.className = 'heart-drop';
  heart.textContent = ['💖', '💗', '💘'][Math.floor(Math.random() * 3)];
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = `${window.innerHeight}px`;
  floatingHearts.appendChild(heart);
  setTimeout(() => heart.remove(), 3500);
}

function createConfettiBurst() {
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * window.innerWidth}px`;
    piece.style.top = `-20px`;
    piece.style.background = ['#ff8fb1', '#8da6ff', '#ffd98a', '#ffffff'][Math.floor(Math.random() * 4)];
    floatingHearts.appendChild(piece);
    setTimeout(() => piece.remove(), 2200);
  }
}

function createFireworkBurst() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight * 0.6;
  for (let i = 0; i < 18; i += 1) {
    const dot = document.createElement('div');
    dot.className = 'firework';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.background = ['#ff8fb1', '#ffffff', '#ffd98a', '#8da6ff'][Math.floor(Math.random() * 4)];
    floatingHearts.appendChild(dot);
    setTimeout(() => dot.remove(), 1400);
  }
}

function populateFavoritePhotosGrid() {
  if (!favoritePhotosGrid) return;

  favoritePhotosGrid.innerHTML = '';
  favoritePhotoPaths.forEach((src) => {
    const img = document.createElement('img');
    img.className = 'gallery-item';
    img.src = src;
    img.alt = 'Favorite photo';
    img.loading = 'eager';
    favoritePhotosGrid.appendChild(img);
  });

  favoritePhotosGrid.classList.add('locked');

  if (favoriteLockOverlay) {
    favoriteLockOverlay.classList.remove('hidden');
  }

  if (favoritePasswordInput) {
    favoritePasswordInput.value = '';
  }

  if (favoritePasswordMessage) {
    favoritePasswordMessage.textContent = '';
    favoritePasswordMessage.className = 'password-message';
  }
}

function attachEvents() {
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      if (targetId) {
        showSection(targetId);
      }
    });
  });

  document.querySelectorAll('img.gallery-item').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  document.querySelectorAll('.memory-card').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const date = card.dataset.date;
      const desc = card.dataset.desc;
      alert(`${title}\n${date}\n${desc}`);
    });
  });

  document.querySelectorAll('.reason-bubble').forEach((bubble) => {
    bubble.addEventListener('click', () => {
      bubble.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.12)' },
        { transform: 'scale(1)' }
      ], { duration: 450 });
      createFloatingHearts();
    });
  });

  document.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => {
      const isCorrect = button.dataset.answer === 'true';
      if (isCorrect) {
        quizFeedback.textContent = 'Correct! You know me best. Unlocking the next page...';
        quizFeedback.classList.add('success');
        setTimeout(() => showSection('passwordPage'), 900);
      } else {
        quizFeedback.textContent = 'Not quite — choose the answer that feels most heartfelt.';
        quizFeedback.classList.remove('success');
      }
    });
  });

  passwordSubmit.addEventListener('click', checkPassword);
  passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') checkPassword();
  });

  if (favoritePasswordSubmit) {
    favoritePasswordSubmit.addEventListener('click', checkFavoritePassword);
  }

  if (favoritePasswordInput) {
    favoritePasswordInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') checkFavoritePassword();
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  startJourney.addEventListener('click', () => {
    showSection('chapter1');
  });

  if (memoryVideo) {
    memoryVideo.addEventListener('play', () => {
      if (!bgMusic.paused) {
        bgMusic.pause();
      }
    });
  }

  musicToggle.addEventListener('click', toggleMusic);
  volumeControl.addEventListener('input', (event) => {
    bgMusic.volume = Number(event.target.value);
  });
}

function showSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  sections.forEach((section) => section.classList.remove('active'));
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'chapter8') {
    document.querySelectorAll('#chapter8 img.gallery-item').forEach((img) => {
      img.loading = 'eager';
      img.src = img.src;
    });
  }
}

function setupRevealAnimations() {
  const revealTargets = document.querySelectorAll('.hero-content, .chapter-inner, .story-card, .polaroid-card, .memory-card, .gallery-item, .typing-panel, .video-frame, .carousel, .countdown-grid, .quiz-card, .password-panel, .letter-paper');
  revealTargets.forEach((element) => {
    element.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealTargets.forEach((element) => revealObserver.observe(element));
}

function updateSections() {
  const viewportMid = window.scrollY + window.innerHeight * 0.38;
  let activeSection = sections[0];

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (viewportMid >= sectionTop && viewportMid < sectionBottom) {
      activeSection = section;
    }
  });

  sections.forEach((section) => section.classList.remove('active'));
  activeSection.classList.add('active');
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function handleKeyboardNavigation(event) {
  const activeSection = document.querySelector('.section.active');
  if (!activeSection) return;

  const currentIndex = sections.indexOf(activeSection);
  if (event.key === 'ArrowDown' || event.key === 'PageDown') {
    event.preventDefault();
    const next = sections[Math.min(currentIndex + 1, sections.length - 1)];
    if (next) showSection(next.id);
  }

  if (event.key === 'ArrowUp' || event.key === 'PageUp') {
    event.preventDefault();
    const prev = sections[Math.max(currentIndex - 1, 0)];
    if (prev) showSection(prev.id);
  }
}

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.classList.add('active');
}

function startTyping() {
  let lineIndex = 0;
  let charIndex = 0;
  let current = '';

  function tick() {
    if (lineIndex < typingLines.length) {
      if (charIndex < typingLines[lineIndex].length) {
        current += typingLines[lineIndex][charIndex];
        charIndex += 1;
        typingText.textContent = current;
        setTimeout(tick, 65);
      } else {
        lineIndex += 1;
        charIndex = 0;
        current = '';
        typingText.textContent = '';
        setTimeout(tick, 700);
      }
    }
  }

  tick();
}

function checkPassword() {
  const value = passwordInput.value.trim();
  if (value === '1528') {
    passwordMessage.textContent = 'Beautifully unlocked...';
    passwordInput.classList.remove('invalid');
    revealLetter();
    setTimeout(() => showSection('finalLetter'), 120);
  } else {
    passwordMessage.textContent = 'Oops... That\'s not our secret.';
    passwordInput.classList.add('invalid');
  }
}

function checkFavoritePassword() {
  const value = favoritePasswordInput.value.trim();
  if (value === '251528') {
    favoritePasswordMessage.textContent = 'Photos unlocked! Enjoy the memories.';
    favoritePasswordMessage.classList.remove('error');
    favoritePasswordMessage.classList.add('success');
    if (favoriteLockOverlay) {
      favoriteLockOverlay.classList.add('hidden');
    }
    if (favoritePhotosGrid) {
      favoritePhotosGrid.classList.remove('locked');
    }
    if (favoritePasswordInput) {
      favoritePasswordInput.value = '';
    }
  } else {
    favoritePasswordMessage.textContent = 'Wrong password. Try again.';
    favoritePasswordMessage.classList.remove('success');
    favoritePasswordMessage.classList.add('error');
  }
}

function revealLetter() {
  const paragraphs = letterContent.split('\n\n');
  letterText.textContent = '';
  let index = 0;

  function typeParagraph() {
    if (index >= paragraphs.length) {
      return;
    }

    const paragraph = paragraphs[index];
    let charIndex = 0;
    const writer = setInterval(() => {
      letterText.textContent += paragraph[charIndex];
      charIndex += 1;
      if (charIndex >= paragraph.length) {
        clearInterval(writer);
        letterText.textContent += '\n\n';
        index += 1;
        setTimeout(typeParagraph, 500);
      }
    }, 22);
  }

  typeParagraph();
}

// Fetch images/manifest.json and populate galleries
function loadImageManifest() {
  fetch('images/manifest.json')
    .then((res) => {
      if (!res.ok) throw new Error('manifest not found');
      return res.json();
    })
    .then((list) => {
      populateGalleries(list);
    })
    .catch(() => {
      // silently ignore if manifest missing
    });
}

function populateGalleries(list) {
  if (!Array.isArray(list) || list.length === 0) return;

  // Polaroid grid (chapter2)
  const polaroidGrid = document.querySelector('.polaroid-grid');
  if (polaroidGrid) {
    polaroidGrid.innerHTML = '';
    list.forEach((src, i) => {
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Childhood memory';
      img.loading = 'lazy';
      const p = document.createElement('p');
      p.textContent = i === 0 ? 'Our fights were temporary...' : i === 1 ? 'Our love is forever.' : 'Small hands, big laughter.';
      card.appendChild(img);
      card.appendChild(p);
      polaroidGrid.appendChild(card);
    });
  }

  // Surprise gallery (chapter10) — append into the existing gallery-grid there
  const surpriseGrid = document.querySelector('#chapter10 .gallery-grid');
  if (surpriseGrid) {
    const existingVideo = surpriseGrid.querySelector('video');
    surpriseGrid.innerHTML = '';
    list.forEach((src) => {
      const img = document.createElement('img');
      img.className = 'gallery-item';
      img.src = src;
      img.alt = 'Sweet memory';
      img.loading = 'lazy';
      surpriseGrid.appendChild(img);
    });
    if (existingVideo) {
      surpriseGrid.appendChild(existingVideo);
    }
  }

  // Re-attach lightbox click handlers for newly created images
  document.querySelectorAll('.gallery-item').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🔈';
  }
}

window.addEventListener('resize', () => {
  const canvases = [starfield, fireflyLayer];
  canvases.forEach((canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});

window.addEventListener('load', init);
