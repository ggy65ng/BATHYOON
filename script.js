const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
  if (!cursor) return;
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const animateElements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
animateElements.forEach((el) => observer.observe(el));

const translations = {
  ar: {
    brandName: 'باثيون ستور',
    brandSubtitle: 'Bathyoon Store',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      payments: 'طرق الدفع',
      faq: 'الأسئلة',
      contact: 'تواصل',
    },
    cta: {
      store: 'زيارة المتجر',
      discord: 'انضم للدسكورد',
      quick: 'روابط سريعة',
    },
    hero: {
      eyebrow: 'منصة رقمية سعودية',
      title: 'باثيون ستور – كل ما تحتاجه لعالم الألعاب والاشتراكات الرقمية في مكان واحد',
      lead: 'نوفر حسابات سميرف وخدمات ألعاب واشتراكات رقمية بأسعار منافسة وتسليم فوري ودعم متواصل.',
      note: 'الموقع تعريفي حالياً، الطلب عبر المتجر أو الدسكورد.',
      badges: ['تسليم سريع', 'دعم فني متواصل', 'أسعار منافسة', 'ضمان على المنتجات'],
    },
    about: {
      eyebrow: 'من نحن',
      title: 'باثيون ستور | Bathyoon Store',
      lead: 'منصة سعودية متخصصة في تقديم خدمات ألعاب واشتراكات رقمية بأسلوب احترافي وموثوق.',
      cards: [
        { title: 'رؤيتنا', body: 'أن نكون الخيار الأول للاعبين العرب في الحسابات والاشتراكات والخدمات الرقمية.' },
        {
          title: 'ماذا نقدم؟',
          list: [
            'حسابات Smurf مفتوح الرانك للعب بأريحية',
            'كريدت Forza Horizon 5 للترقية والتطوير',
            'اشتراكات ChatGPT Plus و Xbox Game Pass',
            'منتجات وخدمات الدسكورد مثل Nitro وتأثيرات الحساب',
          ],
        },
        { title: 'قيمنا', list: ['الشفافية', 'الأمان', 'السرعة في التسليم', 'احترام العميل'] },
        { title: 'طموحنا', list: ['إضافة شراء مباشر داخل الموقع', 'زيادة وسائل الدفع', 'توسيع خدمات الألعاب والمنصات الجديدة'] },
      ],
    },
    services: {
      eyebrow: 'الخدمات والمنتجات',
      title: 'عروض رقمية بدون شراء مباشر',
      lead: 'التفاصيل تعريفية فقط، والطلب يتم عبر المتجر أو الدسكورد.',
      note: '⚠️ لا توجد سلة شراء داخل الموقع حالياً.',
      cards: [
        {
          key: 'smurf',
          title: 'حسابات سميرف مفتوح الرانك',
          desc: 'للعب من جديد أو للمتعة مع أصدقاء بمراتب مختلفة.',
          items: ['Valorant', 'Overwatch', 'Rocket League'],
          price: 149,
        },
        {
          key: 'forza',
          title: 'أرصدة Forza Horizon 5',
          desc: 'شحن آمن وسريع مع دعم كامل لأي مشكلة.',
          items: ['رصيد مخصص حسب طلبك', 'إرشاد بسيط بعد الشراء'],
          price: 99,
        },
        {
          key: 'subscriptions',
          title: 'اشتراكات رقمية أصلية',
          desc: 'تسليم فوري للاشتراكات الأكثر طلباً.',
          items: ['ChatGPT Plus', 'Xbox Game Pass'],
          price: 75,
        },
        {
          key: 'discord',
          title: 'خدمات ومنتجات الدسكورد',
          desc: 'تحسين تجربة مجتمعك على الدسكورد.',
          items: ['Nitro Gift', 'تأثيرات الحساب', 'إنشاء وترتيب السيرفرات'],
          price: 55,
        },
      ],
    },
    payments: {
      eyebrow: 'طرق الدفع والعملات',
      title: 'خيارات دفع موثوقة',
      lead: 'ندعم الريال السعودي، الدولار الأمريكي، واليورو مع وسائل دفع آمنة.',
      cards: [
        {
          title: 'العملات المعتمدة',
          list: ['الريال السعودي (SAR)', 'الدولار الأمريكي (USD)', 'اليورو (EUR)'],
        },
        {
          title: 'الوسائل المتاحة',
          list: ['مدى', 'فيزا / ماستركارد', 'Apple Pay', 'تحويل بنكي عند الطلب'],
          note: 'سيتم إضافة وسائل دفع إضافية قريباً حسب تحديث المتجر.',
        },
      ],
    },
    why: {
      eyebrow: 'ليش تختارنا',
      title: 'تجربة موثوقة وسريعة',
      badges: [
        { title: 'تسليم فوري', subtitle: 'لأغلب الطلبات' },
        { title: 'ضمان واضح', subtitle: 'حسب نوع الخدمة' },
        { title: 'دعم فني فعّال', subtitle: 'عبر الدسكورد' },
        { title: 'أسعار منافسة', subtitle: 'قيم مقابل المال' },
        { title: 'فهم للألعاب', subtitle: 'خبرة في المجال' },
      ],
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'إجابات سريعة',
      items: [
        { q: 'كيف أطلب منتج أو خدمة؟', a: 'الطلب يتم عبر المتجر أو التواصل في سيرفر الدسكورد.' },
        { q: 'هل الشراء داخل الموقع متاح؟', a: 'الموقع تعريفي فقط حالياً، والشراء يتم عبر المتجر الرسمي أو الدسكورد.' },
        { q: 'كم وقت التسليم؟', a: 'غالباً خلال دقائق من تأكيد الدفع، وفي حال التأخير يرجى فتح تذكرة دعم.' },
        { q: 'هل يوجد ضمان؟', a: 'نعم، الضمان حسب نوع المنتج ومكتوب في صفحة الخدمة داخل المتجر.' },
        { q: 'ما طرق الدفع؟', a: 'مدى، فيزا، ماستركارد، Apple Pay، وتحويل بنكي عند الطلب.' },
      ],
    },
    warranty: {
      eyebrow: 'سياسة الضمان',
      title: 'دعم وحماية للمنتجات الرقمية',
      lead: 'الضمان يهدف للحماية وليس الاسترجاع، والاستبدال يتم فقط عند وجود مشكلة تقنية حقيقية بالمنتج.',
      cards: [
        {
          title: 'بنود السياسة',
          list: [
            'الضمان يختلف حسب المنتج ويُوضح في صفحة الخدمة.',
            'حل بديل أو استبدال إن أمكن عند وجود مشكلة وصول.',
            'سوء الاستخدام من العميل يلغي الضمان.',
            'المنتجات المرتبطة بالمنصات تخضع لسياساتها الرسمية.',
            'لا يتم الاسترجاع المالي بعد التأكد من سلامة المنتج.',
            'التواصل للضمان حصراً عبر تذكرة في الدسكورد.',
          ],
        },
        {
          title: 'نقطة توضيح',
          body: 'الضمان يهدف للحماية وليس الاسترجاع، والاستبدال يتم فقط عند وجود مشكلة تقنية حقيقية بالمنتج.',
        },
      ],
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'اطلب أو استفسر بسهولة',
      lead: 'للطلب أو الدعم الفني يرجى استخدام الروابط الرسمية.',
      form: {
        name: 'الاسم',
        namePlaceholder: 'أدخل اسمك',
        message: 'رسالتك',
        messagePlaceholder: 'كيف نقدر نخدمك؟',
        cta: 'إرسال استفسار (تجريبي)',
        note: 'النموذج تجريبي؛ يرجى استخدام المتجر أو الدسكورد للطلبات.',
      },
    },
    footer: {
      copy: '© باثيون ستور 2025 — جميع الحقوق محفوظة',
      made: 'صنع في المملكة العربية السعودية 🇸🇦',
    },
    reviews: [
      '⭐⭐⭐⭐⭐ تسليم سريع وخدمة ممتازة',
      '⭐⭐⭐⭐⭐ اشتراك ChatGPT Plus وصل فوراً',
      '⭐⭐⭐⭐⭐ أفضل متجر أتعامل معه في الحسابات والاشتراكات',
      '⭐⭐⭐⭐⭐ تنسيق السيرفر كان احترافي ومضمون',
      '⭐⭐⭐⭐⭐ دعم فني حاضر دائماً',
    ],
  },
  en: {
    brandName: 'Bathyoon Store',
    brandSubtitle: 'Digital Gaming Hub',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      payments: 'Payments',
      faq: 'FAQ',
      contact: 'Contact',
    },
    cta: {
      store: 'Visit Store',
      discord: 'Join Discord',
      quick: 'Quick Links',
    },
    hero: {
      eyebrow: 'Saudi digital platform',
      title: 'Bathyoon Store – all you need for games and digital subscriptions',
      lead: 'We provide smurf accounts, game services, and genuine subscriptions with fast delivery and responsive support.',
      note: 'Informational only for now. Order via the store or Discord.',
      badges: ['Fast delivery', 'Ongoing support', 'Competitive pricing', 'Warranty covered'],
    },
    about: {
      eyebrow: 'About us',
      title: 'Bathyoon Store',
      lead: 'A Saudi platform specializing in game services and digital subscriptions with a trusted, pro experience.',
      cards: [
        { title: 'Our vision', body: 'Be the #1 choice for Arab gamers in accounts, subscriptions, and digital services.' },
        {
          title: 'What we offer',
          list: [
            'Open-rank smurf accounts for relaxed play',
            'Forza Horizon 5 credits to upgrade fast',
            'ChatGPT Plus and Xbox Game Pass subscriptions',
            'Discord products like Nitro and profile effects',
          ],
        },
        { title: 'Our values', list: ['Transparency', 'Security', 'Delivery speed', 'Customer respect'] },
        { title: 'Future plans', list: ['Add on-site checkout', 'Expand payment options', 'Support more games and platforms'] },
      ],
    },
    services: {
      eyebrow: 'Services & products',
      title: 'Digital lineup, no direct checkout',
      lead: 'Informational only. Order through the store or Discord.',
      note: '⚠️ Cart is disabled while we expand the catalog.',
      cards: [
        {
          key: 'smurf',
          title: 'Open-rank smurf accounts',
          desc: 'Start fresh or play casually with friends at different ranks.',
          items: ['Valorant', 'Overwatch', 'Rocket League'],
          price: 149,
        },
        {
          key: 'forza',
          title: 'Forza Horizon 5 credits',
          desc: 'Secure, quick top-ups with guidance for any issues.',
          items: ['Custom credit bundles', 'Simple steps after purchase'],
          price: 99,
        },
        {
          key: 'subscriptions',
          title: 'Genuine subscriptions',
          desc: 'Instant delivery for the most requested subs.',
          items: ['ChatGPT Plus', 'Xbox Game Pass'],
          price: 75,
        },
        {
          key: 'discord',
          title: 'Discord products & services',
          desc: 'Upgrade your community with tailored support.',
          items: ['Nitro Gift', 'Profile effects', 'Server setup & tuning'],
          price: 55,
        },
      ],
    },
    payments: {
      eyebrow: 'Payments & currencies',
      title: 'Trusted payment choices',
      lead: 'We support SAR, USD, and EUR with safe payment methods.',
      cards: [
        {
          title: 'Supported currencies',
          list: ['Saudi Riyal (SAR)', 'US Dollar (USD)', 'Euro (EUR)'],
        },
        {
          title: 'Payment methods',
          list: ['Mada', 'Visa / Mastercard', 'Apple Pay', 'Bank transfer on request'],
          note: 'More payment methods are coming soon as the store updates.',
        },
      ],
    },
    why: {
      eyebrow: 'Why choose us',
      title: 'Reliable and fast',
      badges: [
        { title: 'Instant delivery', subtitle: 'On most orders' },
        { title: 'Clear warranty', subtitle: 'Per service type' },
        { title: 'Responsive support', subtitle: 'Via Discord' },
        { title: 'Competitive prices', subtitle: 'Great value' },
        { title: 'Gaming know-how', subtitle: 'Deep domain expertise' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick answers',
      items: [
        { q: 'How do I order?', a: 'Place the order through the store or via Discord tickets.' },
        { q: 'Is checkout on this site?', a: 'No, it is informational. Use the official store or Discord for now.' },
        { q: 'Delivery time?', a: 'Usually minutes after payment. Open a ticket if delayed.' },
        { q: 'Is there warranty?', a: 'Yes, per product type and listed on each service page.' },
        { q: 'Payment options?', a: 'Mada, Visa, Mastercard, Apple Pay, or bank transfer on request.' },
      ],
    },
    warranty: {
      eyebrow: 'Warranty policy',
      title: 'Support and protection',
      lead: 'Warranty is for protection, not refunds. Replacement happens only for genuine technical issues.',
      cards: [
        {
          title: 'Policy points',
          list: [
            'Warranty differs per product and is stated on the service page.',
            'Alternative solution or replacement if access issues occur.',
            'Misuse by the client voids the warranty.',
            'Platform-linked items follow original platform rules.',
            'No refunds after confirming the product works correctly.',
            'Warranty contact is only through a Discord support ticket.',
          ],
        },
        {
          title: 'Clarification',
          body: 'Warranty protects you; replacements are for real technical issues only.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ask or request easily',
      lead: 'Use the official links for orders or support.',
      form: {
        name: 'Name',
        namePlaceholder: 'Enter your name',
        message: 'Message',
        messagePlaceholder: 'How can we help?',
        cta: 'Send inquiry (demo)',
        note: 'This form is a demo; please use the store or Discord to place orders.',
      },
    },
    footer: {
      copy: '© Bathyoon Store 2025 — All rights reserved',
      made: 'Made in Saudi Arabia 🇸🇦',
    },
    reviews: [
      '⭐⭐⭐⭐⭐ Fast delivery and great service',
      '⭐⭐⭐⭐⭐ ChatGPT Plus arrived in minutes',
      '⭐⭐⭐⭐⭐ My go-to store for accounts and subs',
      '⭐⭐⭐⭐⭐ Server setup was above expectations',
      '⭐⭐⭐⭐⭐ Best Saudi store in the space',
    ],
  },
};

const currencyRates = {
  SAR: 1,
  USD: 0.27,
  EUR: 0.25,
};

let currentLang = localStorage.getItem('lang') || 'ar';
let currentCurrency = localStorage.getItem('currency') || 'SAR';
let currentTheme = localStorage.getItem('theme') || 'dark';

const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const currencySelect = document.getElementById('currencySelect');

const heroBadges = document.getElementById('heroBadges');
const serviceCards = document.getElementById('serviceCards');
const aboutCards = document.getElementById('aboutCards');
const paymentCards = document.getElementById('paymentCards');
const whyBadges = document.getElementById('whyBadges');
const faqItems = document.getElementById('faqItems');
const warrantyCards = document.getElementById('warrantyCards');
const reviewsTrack = document.getElementById('reviewsTrack');

function formatPrice(baseSar) {
  const rate = currencyRates[currentCurrency] || 1;
  const converted = Math.round(baseSar * rate);
  const labels = {
    SAR: 'ر.س',
    USD: '$',
    EUR: '€',
  };
  return `${converted} ${labels[currentCurrency] || ''}`;
}

function renderHeroBadges() {
  heroBadges.innerHTML = '';
  translations[currentLang].hero.badges.forEach((badge) => {
    const li = document.createElement('li');
    li.textContent = badge;
    heroBadges.appendChild(li);
  });
}

function renderServices() {
  serviceCards.innerHTML = '';
  translations[currentLang].services.cards.forEach((card) => {
    const wrapper = document.createElement('article');
    wrapper.className = 'card';
    wrapper.innerHTML = `
      <div class="price-tag" data-price>${formatPrice(card.price)}</div>
      <h3>${card.title}</h3>
      <p class="muted">${card.desc}</p>
      <ul>${card.items.map((item) => `<li>${item}</li>`).join('')}</ul>
      <p class="muted" data-i18n="services.request">${currentLang === 'ar' ? 'الطلب عبر المتجر أو الدسكورد.' : 'Order via the store or Discord.'}</p>
    `;
    serviceCards.appendChild(wrapper);
  });
}

function renderAbout() {
  aboutCards.innerHTML = '';
  translations[currentLang].about.cards.forEach((card) => {
    const wrapper = document.createElement('article');
    wrapper.className = 'card';
    wrapper.innerHTML = `<h3>${card.title}</h3>`;
    if (card.body) {
      const p = document.createElement('p');
      p.textContent = card.body;
      wrapper.appendChild(p);
    }
    if (card.list) {
      const ul = document.createElement('ul');
      card.list.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      wrapper.appendChild(ul);
    }
    aboutCards.appendChild(wrapper);
  });
}

function renderPayments() {
  paymentCards.innerHTML = '';
  translations[currentLang].payments.cards.forEach((card) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    const list = card.list.map((item) => `<li>${item}</li>`).join('');
    wrapper.innerHTML = `<h3>${card.title}</h3><ul>${list}</ul>${card.note ? `<p class="muted">${card.note}</p>` : ''}`;
    paymentCards.appendChild(wrapper);
  });
}

function renderWhy() {
  whyBadges.innerHTML = '';
  translations[currentLang].why.badges.forEach((item) => {
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.innerHTML = `<strong>${item.title}</strong><span>${item.subtitle}</span>`;
    whyBadges.appendChild(badge);
  });
}

function renderFaq() {
  faqItems.innerHTML = '';
  translations[currentLang].faq.items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'faq__item';
    row.innerHTML = `<h3>${item.q}</h3><p>${item.a}</p>`;
    faqItems.appendChild(row);
  });
}

function renderWarranty() {
  warrantyCards.innerHTML = '';
  translations[currentLang].warranty.cards.forEach((card) => {
    const wrapper = document.createElement('article');
    wrapper.className = 'card';
    wrapper.innerHTML = `<h3>${card.title}</h3>`;
    if (card.body) {
      const p = document.createElement('p');
      p.textContent = card.body;
      wrapper.appendChild(p);
    }
    if (card.list) {
      const ul = document.createElement('ul');
      card.list.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      wrapper.appendChild(ul);
    }
    warrantyCards.appendChild(wrapper);
  });
}

function renderReviews() {
  reviewsTrack.innerHTML = '';
  const list = translations[currentLang].reviews;
  const loop = [...list, ...list];
  loop.forEach((text) => {
    const span = document.createElement('span');
    span.className = 'ticker__item';
    span.textContent = text;
    reviewsTrack.appendChild(span);
  });
}

function syncStaticText() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  const langData = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n').split('.');
    let value = langData;
    path.forEach((key) => {
      value = value?.[key];
    });
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const path = el.getAttribute('data-i18n-placeholder').split('.');
    let value = langData;
    path.forEach((key) => {
      value = value?.[key];
    });
    if (typeof value === 'string') {
      el.setAttribute('placeholder', value);
    }
  });

  langToggle.textContent = currentLang === 'ar' ? 'AR' : 'EN';
  themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

function applyTheme() {
  document.body.classList.toggle('light', currentTheme === 'light');
}

function renderAll() {
  syncStaticText();
  renderHeroBadges();
  renderServices();
  renderAbout();
  renderPayments();
  renderWhy();
  renderFaq();
  renderWarranty();
  renderReviews();
}

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', currentLang);
  renderAll();
});

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
  syncStaticText();
});

currencySelect.addEventListener('change', (e) => {
  currentCurrency = e.target.value;
  localStorage.setItem('currency', currentCurrency);
  renderServices();
});

function initCurrency() {
  currencySelect.value = currentCurrency;
}

applyTheme();
initCurrency();
renderAll();

const navLinks = document.querySelectorAll('.nav a, .footer__links a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
