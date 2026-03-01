import './style.css'

// ===== Data =====

const features = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><line x1="10" y1="22" x2="14" y2="22"/></svg>`,
    title: 'למידה חכמה עם AI',
    desc: 'בינה מלאכותית שמבינה את הסגנון שלך ומתאימה את התוכן, הקצב והשיטה בדיוק בשבילך.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'מסלולים אישיים',
    desc: 'כל תלמיד מקבל מסלול למידה מותאם אישית שמתפתח ומשתנה בהתאם להתקדמות שלו.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'שיעורים אינטראקטיביים',
    desc: 'שיעורים חיים עם הדמיות, סימולציות ותרגול מעשי שהופכים כל נושא למרתק.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    title: 'ניתוח ביצועים בזמן אמת',
    desc: 'דשבורד מתקדם שמציג את ההתקדמות, מזהה פערים ומציע דרכי שיפור.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: 'עוזר AI אישי',
    desc: 'צ\'אט AI שזמין 24/7 לענות על שאלות, להסביר מושגים ולעזור בפתרון תרגילים.',
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'סביבה בטוחה ומאובטחת',
    desc: 'פרטיות מלאה, הגנה על מידע אישי וסביבת למידה מאובטחת לתלמידים ומורים.',
  },
]

const showcases = [
  {
    badge: 'עוזר AI אישי',
    title: 'מורה פרטי שלומד\nאיתך, בשבילך.',
    desc: 'ה-AI של TALLK לומד את הסגנון שלך, מזהה את החוזקות והחולשות, ובונה תוכנית למידה אישית שמתעדכנת בזמן אמת.',
    visual: 'chat',
  },
  {
    badge: 'למידה אדפטיבית',
    title: 'תוכן שמתאים\nאת עצמו אליך.',
    desc: 'אלגוריתמים מתקדמים מנתחים את קצב הלמידה שלך ומתאימים את רמת הקושי, סוג התרגילים ושיטת ההוראה - באופן אוטומטי.',
    visual: 'adaptive',
  },
  {
    badge: 'ניתוח מתקדם',
    title: 'תובנות עמוקות.\nתוצאות מדידות.',
    desc: 'דשבורד אנליטיקס מתקדם שנותן למורים ולהורים תמונה מלאה על ההתקדמות, עם המלצות פעולה מבוססות AI.',
    visual: 'analytics',
  },
]

const stats = [
  { number: '50K+', label: 'תלמידים פעילים' },
  { number: '94%', label: 'שיפור בציונים' },
  { number: '2M+', label: 'שיעורים הושלמו' },
  { number: '4.9', label: 'דירוג ממוצע' },
]

const testimonials = [
  {
    name: 'ד״ר רונית שפירא',
    role: 'מנהלת בית ספר, תל אביב',
    text: 'TALLK AI שינתה את הדרך שבה התלמידים שלנו לומדים. הציונים עלו ב-30% והמוטיבציה של התלמידים זינקה.',
    initials: 'רש',
  },
  {
    name: 'עומר כהן',
    role: 'תלמיד כיתה י״ב',
    text: 'בזכות העוזר האישי הצלחתי לסגור פערים במתמטיקה תוך חודשיים. עכשיו אני מרגיש הרבה יותר בטוח לקראת הבגרות.',
    initials: 'עכ',
  },
  {
    name: 'מיכל אברמוביץ׳',
    role: 'מורה למדעים',
    text: 'הדשבורד נותן לי תמונה ברורה על כל תלמיד. אני יודעת בדיוק איפה כל אחד צריך עזרה ויכולה להתאים את ההוראה.',
    initials: 'מא',
  },
]

const pricingPlans = [
  {
    name: 'תלמיד',
    price: 'חינם',
    period: '',
    desc: 'להתחיל ללמוד עם AI',
    features: ['גישה ל-AI עוזר אישי', 'עד 5 מקצועות', 'תרגילים אינטראקטיביים', 'מעקב התקדמות בסיסי'],
    popular: false,
    cta: 'התחילו בחינם',
  },
  {
    name: 'פרימיום',
    price: '₪79',
    period: '/חודש',
    desc: 'חוויית למידה מלאה',
    features: ['כל המקצועות ללא הגבלה', 'AI עוזר אישי מתקדם', 'מסלולים מותאמים אישית', 'דשבורד אנליטיקס', 'שיעורים מוקלטים', 'תמיכה בצ\'אט'],
    popular: true,
    cta: 'התחילו ניסיון חינם',
  },
  {
    name: 'מוסדות חינוך',
    price: 'בהתאמה',
    period: '',
    desc: 'לבתי ספר וארגונים',
    features: ['ניהול כיתות ותלמידים', 'דוחות למורים והורים', 'התאמה למערכת שעות', 'אינטגרציה ל-LMS', 'הדרכה והטמעה', 'מנהל חשבון ייעודי'],
    popular: false,
    cta: 'צרו קשר',
  },
]

const faqItems = [
  {
    q: 'איך TALLK AI מתאים את הלמידה לכל תלמיד?',
    a: 'המערכת משתמשת באלגוריתמים של למידת מכונה שמנתחים את סגנון הלמידה, קצב ההתקדמות והביצועים של כל תלמיד. על בסיס הנתונים האלה, המערכת בונה ומעדכנת מסלול למידה אישי באופן שוטף.',
  },
  {
    q: 'האם הפלטפורמה מתאימה לכל הגילאים?',
    a: 'כן! TALLK AI מתאימה לתלמידים מכיתה א\' ועד כיתה י״ב, ולסטודנטים באקדמיה. התוכן והממשק מותאמים אוטומטית לקבוצת הגיל.',
  },
  {
    q: 'האם מורים יכולים להשתמש בפלטפורמה?',
    a: 'בהחלט. TALLK AI מספקת למורים כלי ניהול כיתה, מעקב אחר התקדמות תלמידים, ותובנות מבוססות AI שעוזרות לשפר את ההוראה.',
  },
  {
    q: 'מה לגבי פרטיות ואבטחת מידע?',
    a: 'הפרטיות של התלמידים היא בראש סדר העדיפויות שלנו. אנחנו עומדים בתקני GDPR ו-COPPA, כל המידע מוצפן, ואיננו משתפים נתונים עם צדדים שלישיים.',
  },
  {
    q: 'האם יש תקופת ניסיון?',
    a: 'כן! מסלול התלמיד הבסיסי הוא חינמי לגמרי, ומסלול הפרימיום כולל 14 ימי ניסיון חינם ללא צורך בכרטיס אשראי.',
  },
]

// ===== Visual Components =====

function renderChatVisual() {
  return `
    <div class="showcase-visual-chat">
      <div class="chat-window">
        <div class="chat-header-bar">
          <div class="chat-dots"><span></span><span></span><span></span></div>
          <span class="chat-title">TALLK AI Assistant</span>
        </div>
        <div class="chat-messages">
          <div class="chat-msg user">
            <p>אני לא מבין את נושא הנגזרות במתמטיקה</p>
          </div>
          <div class="chat-msg ai">
            <p>בוא נתחיל מהבסיס! נגזרת מתארת את קצב השינוי של פונקציה. דמיין שאתה נוסע במכונית - המהירות היא הנגזרת של המרחק.</p>
          </div>
          <div class="chat-msg ai">
            <p>הכנתי לך תרגיל אינטראקטיבי שיעזור לך להבין 👇</p>
          </div>
          <div class="chat-typing">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderAdaptiveVisual() {
  return `
    <div class="showcase-visual-adaptive">
      <div class="adaptive-card">
        <div class="adaptive-header">
          <span class="adaptive-badge">מותאם אישית</span>
          <h4>המסלול שלך</h4>
        </div>
        <div class="adaptive-track">
          <div class="track-item completed"><span class="track-dot"></span><span>יסודות אלגברה</span><span class="track-status">✓</span></div>
          <div class="track-item completed"><span class="track-dot"></span><span>משוואות ממעלה ראשונה</span><span class="track-status">✓</span></div>
          <div class="track-item active"><span class="track-dot"></span><span>פונקציות ליניאריות</span><span class="track-status">בתהליך</span></div>
          <div class="track-item"><span class="track-dot"></span><span>פונקציות ריבועיות</span><span class="track-status">נעול</span></div>
          <div class="track-item"><span class="track-dot"></span><span>חשבון דיפרנציאלי</span><span class="track-status">נעול</span></div>
        </div>
        <div class="adaptive-progress">
          <div class="progress-bar"><div class="progress-fill" style="width:55%"></div></div>
          <span>55% הושלם</span>
        </div>
      </div>
    </div>
  `
}

function renderAnalyticsVisual() {
  return `
    <div class="showcase-visual-analytics">
      <div class="analytics-card">
        <div class="analytics-header">
          <h4>דשבורד ביצועים</h4>
          <span class="analytics-period">7 ימים אחרונים</span>
        </div>
        <div class="analytics-stats">
          <div class="analytics-stat">
            <span class="stat-value up">+23%</span>
            <span class="stat-label">שיפור כללי</span>
          </div>
          <div class="analytics-stat">
            <span class="stat-value">4.2 שעות</span>
            <span class="stat-label">זמן למידה</span>
          </div>
          <div class="analytics-stat">
            <span class="stat-value up">+15</span>
            <span class="stat-label">תרגילים הושלמו</span>
          </div>
        </div>
        <div class="analytics-chart">
          <div class="chart-bar" style="height:30%"></div>
          <div class="chart-bar" style="height:50%"></div>
          <div class="chart-bar" style="height:40%"></div>
          <div class="chart-bar" style="height:70%"></div>
          <div class="chart-bar" style="height:60%"></div>
          <div class="chart-bar highlight" style="height:85%"></div>
          <div class="chart-bar highlight" style="height:90%"></div>
        </div>
        <div class="chart-labels">
          <span>א׳</span><span>ב׳</span><span>ג׳</span><span>ד׳</span><span>ה׳</span><span>ו׳</span><span>שבת</span>
        </div>
      </div>
    </div>
  `
}

const visualRenderers = {
  chat: renderChatVisual,
  adaptive: renderAdaptiveVisual,
  analytics: renderAnalyticsVisual,
}

// ===== Render Sections =====

function renderNav() {
  return `
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a href="#" class="nav-logo">TALLK <span>AI</span></a>
        <div class="nav-links">
          <a href="#features">תכונות</a>
          <a href="#how-it-works">איך זה עובד</a>
          <a href="#pricing">מחירים</a>
          <a href="#faq">שאלות נפוצות</a>
        </div>
        <div class="nav-actions">
          <a href="#pricing" class="nav-cta">התחילו בחינם</a>
        </div>
        <button class="nav-toggle" id="navToggle" aria-label="תפריט">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-inner">
        <a href="#features" class="mobile-link">תכונות</a>
        <a href="#how-it-works" class="mobile-link">איך זה עובד</a>
        <a href="#pricing" class="mobile-link">מחירים</a>
        <a href="#faq" class="mobile-link">שאלות נפוצות</a>
        <a href="#pricing" class="btn btn-primary mobile-link">התחילו בחינם</a>
      </div>
    </div>
  `
}

function renderHero() {
  return `
    <section class="hero">
      <canvas id="particleCanvas" class="hero-particles"></canvas>
      <div class="hero-bg">
        <div class="hero-glow glow-1"></div>
        <div class="hero-glow glow-2"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-eyebrow fade-in">פלטפורמת למידה מבוססת בינה מלאכותית</div>
          <h1 class="hero-title fade-in">
            העתיד של הלמידה<br /><span class="gradient-text">כבר כאן.</span>
          </h1>
          <p class="hero-subtitle fade-in">
            TALLK AI מביאה את הבינה המלאכותית לכיתה. למידה חכמה, אישית ומותאמת לכל תלמיד - שמשנה את חוויית הלמידה מהיסוד.
          </p>
          <div class="hero-actions fade-in">
            <a href="#pricing" class="btn btn-primary btn-lg">התחילו ללמוד בחינם</a>
            <a href="#how-it-works" class="btn btn-ghost btn-lg">
              <span class="play-icon">▶</span>
              צפו בסרטון
            </a>
          </div>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `
}

function renderStats() {
  const items = stats
    .map(
      (s) => `
      <div class="stat-item fade-in">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `
    )
    .join('')

  return `
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">${items}</div>
      </div>
    </section>
  `
}

function renderShowcases() {
  return showcases
    .map(
      (s, i) => `
      <section class="showcase ${i % 2 !== 0 ? 'showcase-reverse' : ''}" id="${i === 0 ? 'how-it-works' : ''}">
        <div class="container">
          <div class="showcase-content fade-in">
            <span class="showcase-badge">${s.badge}</span>
            <h2 class="showcase-title">${s.title}</h2>
            <p class="showcase-desc">${s.desc}</p>
            <a href="#pricing" class="showcase-link">למידע נוסף ←</a>
          </div>
          <div class="showcase-visual fade-in">
            ${visualRenderers[s.visual]()}
          </div>
        </div>
      </section>
    `
    )
    .join('')
}

function renderFeatures() {
  const cards = features
    .map(
      (f) => `
      <div class="feature-card fade-in">
        <div class="feature-icon">${f.icon}</div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>
    `
    )
    .join('')

  return `
    <section class="features section" id="features">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-eyebrow">תכונות</span>
          <h2 class="section-title">כל מה שצריך כדי ללמוד<br /><span class="gradient-text">בצורה חכמה יותר.</span></h2>
          <p class="section-subtitle">פלטפורמה אחת שמשלבת את הטכנולוגיה המתקדמת ביותר עם פדגוגיה מוכחת</p>
        </div>
        <div class="features-grid">${cards}</div>
      </div>
    </section>
  `
}

function renderTestimonials() {
  const cards = testimonials
    .map(
      (t) => `
      <div class="testimonial-card fade-in">
        <blockquote>"${t.text}"</blockquote>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.initials}</div>
          <div class="testimonial-info">
            <h4>${t.name}</h4>
            <p>${t.role}</p>
          </div>
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section class="testimonials section" id="testimonials">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-eyebrow">מה אומרים עלינו</span>
          <h2 class="section-title">הם כבר לומדים<br /><span class="gradient-text">עם TALLK AI.</span></h2>
        </div>
        <div class="testimonials-grid">${cards}</div>
      </div>
    </section>
  `
}

function renderPricing() {
  const cards = pricingPlans
    .map(
      (p) => `
      <div class="pricing-card fade-in${p.popular ? ' popular' : ''}">
        ${p.popular ? '<span class="pricing-badge">הפופולרי ביותר</span>' : ''}
        <h3>${p.name}</h3>
        <p class="price-desc">${p.desc}</p>
        <div class="price">${p.price}<span>${p.period}</span></div>
        <ul class="pricing-features">
          ${p.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
        <a href="#contact" class="btn ${p.popular ? 'btn-primary' : 'btn-outline'}">${p.cta}</a>
      </div>
    `
    )
    .join('')

  return `
    <section class="pricing section" id="pricing">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-eyebrow">מחירים</span>
          <h2 class="section-title">מסלול לכל לומד.</h2>
          <p class="section-subtitle">התחילו בחינם ושדרגו כשתהיו מוכנים</p>
        </div>
        <div class="pricing-grid">${cards}</div>
      </div>
    </section>
  `
}

function renderFAQ() {
  const items = faqItems
    .map(
      (item, i) => `
      <div class="faq-item" data-faq="${i}">
        <button class="faq-question">
          <span>${item.q}</span>
          <span class="faq-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section class="faq section" id="faq">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-eyebrow">שאלות נפוצות</span>
          <h2 class="section-title">יש לכם שאלות?<br />יש לנו תשובות.</h2>
        </div>
        <div class="faq-list">${items}</div>
      </div>
    </section>
  `
}

function renderCTA() {
  return `
    <section class="cta-section">
      <div class="cta-bg">
        <div class="cta-glow glow-1"></div>
        <div class="cta-glow glow-2"></div>
      </div>
      <div class="container">
        <div class="cta-content fade-in">
          <h2>מוכנים לשנות את<br />הדרך שבה לומדים?</h2>
          <p>הצטרפו לאלפי תלמידים ומורים שכבר חווים את העתיד של החינוך.</p>
          <div class="cta-actions">
            <a href="#pricing" class="btn btn-primary btn-lg">התחילו בחינם</a>
            <a href="#contact" class="btn btn-ghost-light btn-lg">דברו איתנו</a>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="#" class="nav-logo footer-logo">TALLK <span>AI</span></a>
            <p>פלטפורמת למידה מבוססת בינה מלאכותית שמשנה את חוויית הלמידה.</p>
          </div>
          <div class="footer-col">
            <h4>מוצר</h4>
            <a href="#features">תכונות</a>
            <a href="#pricing">מחירים</a>
            <a href="#how-it-works">איך זה עובד</a>
          </div>
          <div class="footer-col">
            <h4>חברה</h4>
            <a href="#">אודות</a>
            <a href="#">בלוג</a>
            <a href="#">קריירה</a>
          </div>
          <div class="footer-col">
            <h4>תמיכה</h4>
            <a href="#faq">שאלות נפוצות</a>
            <a href="#">מדריכים</a>
            <a href="#">צור קשר</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} TALLK AI. כל הזכויות שמורות.</span>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  `
}

// ===== Mount App =====
const root = document.getElementById('app')
root.innerHTML = [
  renderNav(),
  renderHero(),
  renderStats(),
  renderShowcases(),
  renderFeatures(),
  renderTestimonials(),
  renderPricing(),
  renderFAQ(),
  renderCTA(),
  renderFooter(),
].join('')

// ===== Interactivity =====

// Nav scroll effect
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50)
})

// Mobile menu
const navToggle = document.getElementById('navToggle')
const mobileMenu = document.getElementById('mobileMenu')

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open')
  navToggle.classList.toggle('open', isOpen)
})

document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    navToggle.classList.remove('open')
  })
})

// FAQ accordion
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement
    const isOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('open'))
    if (!isOpen) item.classList.add('open')
  })
})

// Scroll fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')
    if (id === '#') return
    const target = document.querySelector(id)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// ===== Particle Network Animation =====
;(function () {
  const canvas = document.getElementById('particleCanvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const PARTICLE_COUNT = 80
  const CONNECTION_DIST = 150
  const MOUSE_RADIUS = 200
  const particles = []
  let mouse = { x: -9999, y: -9999 }
  let animId

  function resize() {
    const hero = canvas.closest('.hero')
    canvas.width = hero.offsetWidth
    canvas.height = hero.offsetHeight
  }

  class Particle {
    constructor() {
      this.reset()
    }

    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.6
      this.vy = (Math.random() - 0.5) * 0.6
      this.radius = Math.random() * 2 + 1
      this.opacity = Math.random() * 0.5 + 0.3
    }

    update() {
      // Mouse attraction
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02
        this.vx += dx * force
        this.vy += dy * force
      }

      // Damping
      this.vx *= 0.99
      this.vy *= 0.99

      this.x += this.vx
      this.y += this.vy

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width
      if (this.x > canvas.width) this.x = 0
      if (this.y < 0) this.y = canvas.height
      if (this.y > canvas.height) this.y = 0
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(41, 151, 255, ${this.opacity})`
      ctx.fill()
    }
  }

  function init() {
    resize()
    particles.length = 0
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle())
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.25
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(41, 151, 255, ${opacity})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    // Draw connections to mouse
    for (const p of particles) {
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MOUSE_RADIUS) {
        const opacity = (1 - dist / MOUSE_RADIUS) * 0.4
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.strokeStyle = `rgba(191, 90, 242, ${opacity})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const p of particles) {
      p.update()
      p.draw()
    }

    drawConnections()
    animId = requestAnimationFrame(animate)
  }

  // Mouse tracking
  const hero = canvas.closest('.hero')
  hero.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  })

  hero.addEventListener('mouseleave', () => {
    mouse.x = -9999
    mouse.y = -9999
  })

  window.addEventListener('resize', () => {
    resize()
    particles.forEach((p) => {
      if (p.x > canvas.width || p.y > canvas.height) p.reset()
    })
  })

  init()
  animate()
})()
