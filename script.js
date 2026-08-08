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
  'images/fav_photos/IMG-20260520-WA0028.jpg'
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

const letterContent = `My dearest little sister,

There are moments in life that change us forever, and you have been one of those beautiful, shining moments for me. From the first days we shared laughter and tiny fights, to every year that followed, you have filled my life with warmth, comfort, and joy. You are not just my sister; you are the heartbeat of our home, the smile that brightens the darkest day, and the gentle reminder that love can be soft, steady, and endless.

I still remember the small things with crystal clarity. The way we laughed until our stomachs hurt, the silly arguments that seemed huge at the time, the small secrets we kept, the little games we made up, and the way even ordinary days felt magical because you were there. We grew up together, and somewhere in that growing, you became one of the strongest sources of happiness in my life. Even when life felt busy, heavy, or uncertain, your presence was like a light I could always rely on.

You have a way of making people feel safe. You carry kindness in a way that feels natural, almost effortless, and it touches everyone around you. You are brave in quiet ways, gentle in difficult moments, and strong even when you don't realize it. I have seen your strength, your innocence, your compassion, and your beautiful heart. You are full of dreams, full of warmth, full of love, and I hope you always remember how extraordinary you truly are.

I have always been proud of you, not because of what you do, but because of who you are. The way you care for people, the way you bring light into a room, the way you keep going with so much grace and tenderness. These are the things that make you special. They are the qualities that make you unforgettable. And every time I think about you, I feel grateful that I get to call you my sister.

I know life will bring many seasons, and I know there will be days that feel difficult, but I want you to remember this: no matter what happens, I will always stand beside you. I will always protect you. I will always be there for you. I will always be your safe place and your biggest cheerleader. Even when the world feels loud, I hope you remember that you are deeply loved, deeply respected, and deeply cherished.

As you grow older, I hope you keep your beautiful heart. I hope you keep believing in joy, in kindness, in love, and in yourself. I hope you keep dreaming big and laughing often. I hope you always know that you deserve every happiness life can offer. Every peaceful moment, every beautiful memory, every kind smile, every little victory, and every great dream — all of it matters, and I hope you receive all of it and more.

Happy Birthday My Little Princess ❤️

I love you forever. My life is better because you exist. And no matter how many birthdays come and go, you will always be the most precious girl in my life.

With all my love,
Your Loving Brother`;

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
      ctx.fillStyle = `rgba(255,255,255,${alpha * star.a})`;
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
