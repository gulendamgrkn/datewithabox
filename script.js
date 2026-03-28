/* =============================================
   DATE WITH A BOX — Main Script
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Floating Particles =====
  createParticles();

  // ===== Book Date Genre Toggle =====
  initBookDateToggle();

  // ===== Poll System =====
  initPoll();

  // ===== FAQ Accordion =====
  initFAQ();

  // ===== Scroll Reveal =====
  initScrollReveal();

});

// ─── Floating Particles ──────────────────────────────
function createParticles() {
  const container = document.getElementById('particles');
  const colors = [
    'rgba(208, 191, 255, 0.4)',
    'rgba(240, 198, 208, 0.35)',
    'rgba(200, 219, 190, 0.3)',
    'rgba(197, 213, 234, 0.35)',
    'rgba(245, 230, 200, 0.3)',
  ];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 8 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 18 + 12;
    const delay = Math.random() * 20;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = color;
    particle.style.left = left + '%';
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';

    container.appendChild(particle);
  }
}

// ─── Book Date Genre Selector ────────────────────────
function initBookDateToggle() {
  const bookBox = document.getElementById('box-book-date');
  const genreBtns = document.querySelectorAll('.genre-btn');

  bookBox.addEventListener('click', (e) => {
    // Don't collapse if clicking a genre button
    if (e.target.classList.contains('genre-btn')) return;
    bookBox.classList.toggle('expanded');
  });

  genreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('selected');
    });
  });
}

// ─── Box Data ────────────────────────────────────────
const BOX_DATA = {
  self: {
    name: 'Self Date',
    emoji: '🧘‍♀️',
    desc: 'A box dedicated to you. Pamper yourself, reflect, and enjoy your own wonderful company.',
    tag: 'Self-care essentials',
    color: '#d4849a',
    bgColor: 'rgba(240, 198, 208, 0.15)',
    borderColor: 'rgba(240, 198, 208, 0.4)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="10" stroke="currentColor" stroke-width="2.5"/>
      <path d="M16 52C16 42 23 36 32 36C41 36 48 42 48 52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M32 44V52M28 48H36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  book: {
    name: 'Book Date',
    emoji: '📚',
    desc: 'Curl up with a great read. The perfect literary evening curated just for your taste.',
    tag: 'Literary escape',
    color: '#5c7ea0',
    bgColor: 'rgba(197, 213, 234, 0.15)',
    borderColor: 'rgba(197, 213, 234, 0.4)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14C12 12 14 10 18 10C22 10 32 12 32 16V54C32 50 22 48 18 48C14 48 12 50 12 50V14Z" stroke="currentColor" stroke-width="2.5"/>
      <path d="M52 14C52 12 50 10 46 10C42 10 32 12 32 16V54C32 50 42 48 46 48C50 48 52 50 52 50V14Z" stroke="currentColor" stroke-width="2.5"/>
      <path d="M20 22H28M20 28H26M36 22H44M36 28H42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  lego: {
    name: 'Lego Date',
    emoji: '🧱',
    desc: 'Build something amazing together. Creativity, fun, and a touch of friendly competition.',
    tag: 'Creative & playful',
    color: '#c8a84e',
    bgColor: 'rgba(245, 230, 200, 0.15)',
    borderColor: 'rgba(245, 230, 200, 0.4)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="28" width="36" height="24" rx="3" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="24" r="4" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="40" cy="24" r="4" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="24" cy="38" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="36" cy="38" r="3" fill="currentColor" opacity="0.3"/>
      <rect x="18" y="52" width="28" height="6" rx="2" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },
  spa: {
    name: 'Spa Date',
    emoji: '🧖‍♀️',
    desc: 'Relax, unwind, and melt away stress. Everything for a luxurious at-home spa experience.',
    tag: 'Pure relaxation',
    color: '#5e8a4e',
    bgColor: 'rgba(200, 219, 190, 0.15)',
    borderColor: 'rgba(200, 219, 190, 0.4)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8C32 8 28 16 28 24C28 28 30 30 32 30C34 30 36 28 36 24C36 16 32 8 32 8Z" stroke="currentColor" stroke-width="2.5"/>
      <path d="M22 18C22 18 20 26 22 32C23 35 26 36 28 34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M42 18C42 18 44 26 42 32C41 35 38 36 36 34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="32" cy="46" rx="18" ry="10" stroke="currentColor" stroke-width="2.5"/>
      <path d="M22 42C22 42 26 38 32 38C38 38 42 42 42 42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  cooking: {
    name: 'Cooking Date',
    emoji: '👨‍🍳',
    desc: 'Whip up delicious memories in the kitchen. Recipes, ingredients list, and fun tools included.',
    tag: 'Delicious moments',
    color: '#a06e55',
    bgColor: 'rgba(245, 213, 200, 0.15)',
    borderColor: 'rgba(245, 213, 200, 0.4)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 36H48C48 48 42 54 32 54C22 54 16 48 16 36Z" stroke="currentColor" stroke-width="2.5"/>
      <path d="M12 36H52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M24 28V20M32 28V16M40 28V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`
  },
  cottage: {
    name: 'Cottage Core',
    emoji: '🏡',
    desc: 'Wildflowers, warm tea, and rustic charm. Embrace the simple, cozy beauty of countryside living.',
    tag: 'Whimsical & warm',
    color: '#7a6b42',
    bgColor: 'rgba(212, 197, 160, 0.15)',
    borderColor: 'rgba(212, 197, 160, 0.4)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32L32 12L56 32" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="14" y="32" width="36" height="22" rx="2" stroke="currentColor" stroke-width="2.5"/>
      <rect x="26" y="40" width="12" height="14" rx="6" stroke="currentColor" stroke-width="2"/>
      <circle cx="22" cy="40" r="3.5" stroke="currentColor" stroke-width="2"/>
      <path d="M22 36.5V43.5M18.5 40H25.5" stroke="currentColor" stroke-width="1.5"/>
      <rect x="40" y="16" width="6" height="12" rx="1" stroke="currentColor" stroke-width="2"/>
    </svg>`
  }
};

// ─── Scoring Matrix ──────────────────────────────────
// For each question [0-19], for each option [0-3], which boxes get points
const SCORING = [
  // Q0: "What's your ideal way to spend a relaxing evening?"
  [ { book: 2, self: 1 }, { cooking: 3 }, { cottage: 2, self: 1 }, { lego: 3 } ],
  // Q1: "How do you feel about surprise elements in a date box?"
  [ { lego: 1, cooking: 1 }, { self: 1, spa: 1 }, { book: 2 }, { cottage: 1, spa: 1 } ],
  // Q2: "Which mood best describes your perfect date?"
  [ { cottage: 2, self: 1 }, { lego: 3 }, { spa: 2, self: 1 }, { lego: 2, book: 1 } ],
  // Q3: "How important is self-care in your routine?"
  [ { spa: 2, self: 2 }, { spa: 1, self: 1 }, { self: 2, spa: 1 }, { self: 2 } ],
  // Q4: "What type of books do you gravitate toward?"
  [ { book: 3, cottage: 1 }, { book: 3 }, { book: 2, self: 1 }, { book: 3, lego: 1 } ],
  // Q5: "How do you feel about building things by hand?"
  [ { lego: 3 }, { lego: 2 }, { lego: 2, cooking: 1 }, { spa: 1, self: 1, book: 1 } ],
  // Q6: "What scent makes you feel most relaxed?"
  [ { spa: 3 }, { cottage: 2, cooking: 1 }, { spa: 2, self: 1 }, { self: 2 } ],
  // Q7: "Your go-to comfort food for a date night?"
  [ { cooking: 3 }, { cooking: 2 }, { lego: 1, cooking: 1 }, { cooking: 2, cottage: 1 } ],
  // Q8: "How do you prefer to connect with someone?"
  [ { book: 2, self: 1 }, { lego: 2 }, { cooking: 3 }, { lego: 2, cottage: 1 } ],
  // Q9: "What's your love language?"
  [ { self: 2, spa: 1 }, { cooking: 2 }, { cottage: 2, spa: 1 }, { book: 2, cottage: 1 } ],
  // Q10: "When it comes to music on a date, you prefer?"
  [ { self: 2, spa: 1 }, { cottage: 2 }, { book: 2 }, { lego: 1, cooking: 1 } ],
  // Q11: "Your ideal date setting?"
  [ { self: 2, cottage: 1 }, { book: 2 }, { cottage: 3 }, { lego: 2 } ],
  // Q12: "How adventurous are you with trying new things?"
  [ { lego: 2, cooking: 1 }, { cooking: 1, spa: 1 }, { self: 2, cottage: 1 }, { book: 1, self: 1 } ],
  // Q13: "What matters most in a date experience?"
  [ { spa: 2 }, { cottage: 2 }, { lego: 2 }, { cooking: 2 } ],
  // Q14: "How often would you use a date box?"
  [ { self: 1, cooking: 1 }, { spa: 1, book: 1 }, { lego: 1, cottage: 1 }, { spa: 1, cottage: 1 } ],
  // Q15: "Do you prefer solo or shared date experiences?"
  [ { self: 3 }, { cooking: 2, spa: 1 }, { book: 1, cottage: 1 }, { lego: 2, cooking: 1 } ],
  // Q16: "What aesthetic appeals to you most?"
  [ { self: 2 }, { cottage: 3 }, { lego: 2 }, { spa: 3 } ],
  // Q17: "Which add-on would excite you most?"
  [ { self: 2 }, { cottage: 2, book: 1 }, { spa: 2 }, { cooking: 2, lego: 1 } ],
  // Q18: "How important is eco-friendly packaging to you?"
  [ { cottage: 2 }, { cottage: 1 }, { self: 1 }, { lego: 1 } ],
  // Q19: "What would make you recommend Date with a Box to a friend?"
  [ { spa: 2 }, { lego: 2 }, { cottage: 2 }, { cooking: 2 } ]
];

// ─── Poll System ─────────────────────────────────────
function initPoll() {
  const questions = [
    { q: "What's your ideal way to spend a relaxing evening?", opts: ["Reading with candles lit", "Cooking a new recipe", "Watching a cozy movie", "Doing a creative activity"] },
    { q: "How do you feel about surprise elements in a date box?", opts: ["Love surprises!", "Some surprises, some known items", "I prefer knowing everything", "A small mystery item is nice"] },
    { q: "Which mood best describes your perfect date?", opts: ["Cozy & intimate", "Fun & adventurous", "Relaxing & calm", "Creative & inspiring"] },
    { q: "How important is self-care in your routine?", opts: ["It's essential", "I try when I can", "I want to do more", "I'm just discovering it"] },
    { q: "What type of books do you gravitate toward?", opts: ["Romance & love stories", "Mystery & thriller", "Self-help & growth", "Fantasy & sci-fi"] },
    { q: "How do you feel about building things by hand?", opts: ["I love it!", "It's fun occasionally", "With a partner, absolutely", "Not really my thing"] },
    { q: "What scent makes you feel most relaxed?", opts: ["Lavender & chamomile", "Vanilla & warm spices", "Eucalyptus & mint", "Fresh linen & clean"] },
    { q: "Your go-to comfort food for a date night?", opts: ["Homemade pasta", "Sushi or Asian cuisine", "Pizza & snacks", "Desserts & pastries"] },
    { q: "How do you prefer to connect with someone?", opts: ["Deep conversations", "Fun activities together", "Cooking together", "Creating something together"] },
    { q: "What's your love language?", opts: ["Quality time", "Acts of service", "Gifts & thoughtfulness", "Words of affirmation"] },
    { q: "When it comes to music on a date, you prefer?", opts: ["Soft jazz or lo-fi", "Acoustic & indie", "Classical or instrumental", "Whatever sets the vibe"] },
    { q: "Your ideal date setting?", opts: ["At home, cozy setup", "A cute café", "In nature / outdoors", "Somewhere unexpected"] },
    { q: "How adventurous are you with trying new things?", opts: ["Very! I thrive on new", "Open to suggestions", "Comfort zone is nice", "Depends on my mood"] },
    { q: "What matters most in a date experience?", opts: ["The quality of items", "The thoughtfulness", "The uniqueness", "Ease & convenience"] },
    { q: "How often would you use a date box?", opts: ["Weekly dates!", "Two times a month", "Once a month", "For special occasions"] },
    { q: "Do you prefer solo or shared date experiences?", opts: ["Solo self-dates", "With a partner", "Both equally", "With friends too!"] },
    { q: "What aesthetic appeals to you most?", opts: ["Minimalist & clean", "Warm & rustic", "Whimsical & playful", "Elegant & luxurious"] },
    { q: "Which add-on would excite you most?", opts: ["A curated playlist", "A handwritten note", "Matching accessories", "A recipe or activity card"] },
    { q: "How important is eco-friendly packaging to you?", opts: ["Very important", "Nice to have", "Somewhat important", "I don't mind either way"] },
    { q: "What would make you recommend Date with a Box to a friend?", opts: ["Amazing quality", "Unique experiences", "Beautiful presentation", "Great value for money"] }
  ];

  const container = document.getElementById('poll-questions');
  const progressBar = document.getElementById('poll-progress-bar');
  const currentEl = document.getElementById('poll-current');
  const prevBtn = document.getElementById('poll-prev');
  const nextBtn = document.getElementById('poll-next');
  const pollContainer = document.getElementById('poll-container');
  const pollComplete = document.getElementById('poll-complete');
  const trendingName = document.getElementById('trending-box-name');
  const trendingWrap = document.getElementById('poll-trending');

  let currentQ = 0;
  const answers = new Array(questions.length).fill(null);

  // Render all questions
  questions.forEach((question, idx) => {
    const qDiv = document.createElement('div');
    qDiv.classList.add('poll-question');
    if (idx === 0) qDiv.classList.add('active');
    qDiv.id = `question-${idx}`;

    qDiv.innerHTML = `
      <p class="question-text">${question.q}</p>
      <div class="question-options">
        ${question.opts.map((opt, oIdx) => `
          <button class="option-btn" data-question="${idx}" data-option="${oIdx}" id="q${idx}-opt${oIdx}">
            <div class="option-dot"></div>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
    container.appendChild(qDiv);
  });

  // ─── Calculate Scores ────────────────────────────
  function calculateScores() {
    const scores = { self: 0, book: 0, lego: 0, spa: 0, cooking: 0, cottage: 0 };
    answers.forEach((optIdx, qIdx) => {
      if (optIdx === null) return;
      const points = SCORING[qIdx][optIdx];
      if (!points) return;
      for (const [box, pts] of Object.entries(points)) {
        scores[box] += pts;
      }
    });
    return scores;
  }

  function getTopBox(scores) {
    let topBox = 'self';
    let topScore = -1;
    for (const [box, score] of Object.entries(scores)) {
      if (score > topScore) {
        topScore = score;
        topBox = box;
      }
    }
    return topBox;
  }

  function getAnsweredCount() {
    return answers.filter(a => a !== null).length;
  }

  // ─── Update Live Trending Indicator ──────────────
  function updateTrending() {
    const answered = getAnsweredCount();
    if (answered === 0) {
      trendingName.textContent = 'Answer to discover...';
      trendingWrap.classList.remove('has-result');
      return;
    }

    const scores = calculateScores();
    const topBox = getTopBox(scores);
    const data = BOX_DATA[topBox];

    trendingName.textContent = `${data.emoji} ${data.name}`;
    trendingName.style.color = data.color;
    trendingWrap.classList.add('has-result');
  }

  // ─── Show Final Result ───────────────────────────
  function showResult() {
    const scores = calculateScores();
    const topBox = getTopBox(scores);
    const data = BOX_DATA[topBox];
    const maxPossible = Math.max(...Object.values(scores));

    // Populate result card
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');
    const resultTag = document.getElementById('result-tag');
    const resultRunnerUp = document.getElementById('result-runner-up');

    resultIcon.innerHTML = data.icon;
    resultIcon.style.color = data.color;
    resultTitle.textContent = `${data.emoji} ${data.name}`;
    resultDesc.textContent = data.desc;
    resultTag.textContent = data.tag;
    resultTag.style.background = data.bgColor;
    resultTag.style.color = data.color;
    resultTag.style.borderColor = data.borderColor;

    // Find runner-up
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 1 && sorted[1][1] > 0) {
      const runnerKey = sorted[1][0];
      const runnerData = BOX_DATA[runnerKey];
      resultRunnerUp.innerHTML = `
        <span class="runner-up-label">Runner-up:</span>
        <span class="runner-up-name" style="color: ${runnerData.color}">${runnerData.emoji} ${runnerData.name}</span>
      `;
    }

    // Build score bars
    const barsContainer = document.getElementById('result-scores');
    if (barsContainer) {
      barsContainer.innerHTML = '';
      const maxScore = Math.max(...Object.values(scores), 1);
      sorted.forEach(([key, score]) => {
        const bd = BOX_DATA[key];
        const pct = Math.round((score / maxScore) * 100);
        const bar = document.createElement('div');
        bar.className = 'score-row';
        bar.innerHTML = `
          <span class="score-label">${bd.emoji} ${bd.name}</span>
          <div class="score-bar-track">
            <div class="score-bar-fill" style="width: 0%; background: ${bd.color};" data-width="${pct}%"></div>
          </div>
          <span class="score-pct">${pct}%</span>
        `;
        barsContainer.appendChild(bar);
      });

      // Animate bars after a short delay
      requestAnimationFrame(() => {
        setTimeout(() => {
          barsContainer.querySelectorAll('.score-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width;
          });
        }, 400);
      });
    }

    // Show result
    pollContainer.style.display = 'none';
    pollComplete.style.display = 'block';

    // Highlight the matching box card in the boxes section
    const matchingBox = document.querySelector(`.date-box[data-box="${topBox}"]`);
    if (matchingBox) {
      matchingBox.classList.add('recommended-box');
    }
  }

  // Option click handler
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;

    const qIdx = parseInt(btn.dataset.question);
    const oIdx = parseInt(btn.dataset.option);

    // Deselect all in this question
    document.querySelectorAll(`.option-btn[data-question="${qIdx}"]`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    answers[qIdx] = oIdx;

    // Update live trending
    updateTrending();
  });

  // Navigate
  function goToQuestion(idx) {
    document.querySelectorAll('.poll-question').forEach(q => q.classList.remove('active'));
    const target = document.getElementById(`question-${idx}`);
    target.classList.remove('active');
    // Force reflow for animation
    void target.offsetWidth;
    target.classList.add('active');

    currentQ = idx;
    currentEl.textContent = idx + 1;
    progressBar.style.width = ((idx + 1) / questions.length * 100) + '%';
    prevBtn.disabled = idx === 0;

    if (idx === questions.length - 1) {
      nextBtn.innerHTML = `<span>See My Box</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>`;
    } else {
      nextBtn.innerHTML = `<span>Next</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>`;
    }
  }

  nextBtn.addEventListener('click', () => {
    if (currentQ < questions.length - 1) {
      goToQuestion(currentQ + 1);
    } else {
      // Submit — show result
      showResult();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentQ > 0) {
      goToQuestion(currentQ - 1);
    }
  });

  // ─── Retake Quiz ─────────────────────────────────
  const retakeBtn = document.getElementById('poll-retake');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      // Reset answers
      answers.fill(null);
      document.querySelectorAll('.option-btn.selected').forEach(b => b.classList.remove('selected'));

      // Remove recommended highlight
      document.querySelectorAll('.recommended-box').forEach(b => b.classList.remove('recommended-box'));

      // Reset UI
      pollComplete.style.display = 'none';
      pollContainer.style.display = 'block';
      goToQuestion(0);
      updateTrending();
    });
  }
}

// ─── Scroll Reveal ───────────────────────────────────
function initScrollReveal() {
  // Add reveal classes
  document.querySelectorAll('.date-box').forEach((box, i) => {
    box.classList.add('reveal', `reveal-delay-${Math.min(i + 1, 5)}`);
  });

  document.querySelectorAll('.peek-card').forEach((card, i) => {
    card.classList.add('reveal', `reveal-delay-${Math.min(i + 1, 5)}`);
  });

  document.querySelectorAll('.section-header').forEach(header => {
    header.classList.add('reveal');
  });

  document.querySelectorAll('.faq-item').forEach((item, i) => {
    item.classList.add('reveal', `reveal-delay-${Math.min(i + 1, 5)}`);
  });

  document.querySelectorAll('.timeline-step').forEach((step, i) => {
    step.classList.add('reveal', `reveal-delay-${Math.min(i + 1, 4)}`);
  });

  document.querySelectorAll('.payment-card').forEach((card, i) => {
    card.classList.add('reveal', `reveal-delay-${Math.min(i + 1, 5)}`);
  });

  document.querySelector('.poll-container')?.classList.add('reveal');
  document.querySelector('.payment-secure')?.classList.add('reveal');
  document.querySelector('.footer-content')?.classList.add('reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── FAQ Accordion ───────────────────────────────────
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', !isOpen);
    });
  });
}
