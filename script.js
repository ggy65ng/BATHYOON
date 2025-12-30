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

const elements = {
  nav: document.getElementById('nav-links'),
  brandName: document.getElementById('brand-name'),
  brandSub: document.getElementById('brand-sub'),
  heroContent: document.getElementById('hero-content'),
  servicesHeader: document.getElementById('services-header'),
  servicesGrid: document.getElementById('services-grid'),
  servicesAlert: document.getElementById('services-alert'),
  paymentsHeader: document.getElementById('payments-header'),
  paymentsGrid: document.getElementById('payments-grid'),
  reviewsHeader: document.getElementById('reviews-header'),
  reviewsTrack: document.getElementById('reviews-track'),
  contactHeader: document.getElementById('contact-header'),
  contactActions: document.getElementById('contact-actions'),
  warrantyHeader: document.getElementById('warranty-header'),
  warrantyGrid: document.getElementById('warranty-grid'),
  faqHeader: document.getElementById('faq-header'),
  faqList: document.getElementById('faq-list'),
  aboutHeader: document.getElementById('about-header'),
  aboutGrid: document.getElementById('about-grid'),
  footerBrand: document.getElementById('footer-brand'),
  footerRights: document.getElementById('footer-rights'),
  footerMade: document.getElementById('footer-made'),
  footerLinks: document.getElementById('footer-links'),
  footerCta: document.getElementById('footer-cta'),
  themeLabel: document.getElementById('theme-label'),
  themeIcon: document.getElementById('theme-icon'),
  langToggle: document.getElementById('lang-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  currencySelect: document.getElementById('currency-select'),
  colorSelect: document.getElementById('color-select'),
  storeBtn: document.getElementById('store-btn'),
};

const content = {
  ar: {
    lang: 'ar',
    dir: 'rtl',
    brand: { name: 'باثيون ستور', sub: 'Bathyoon Store' },
    nav: [
      { id: 'home', label: 'الرئيسية' },
      { id: 'about', label: 'من نحن' },
      { id: 'services', label: 'الخدمات' },
      { id: 'faq', label: 'الأسئلة' },
      { id: 'warranty', label: 'سياسة الضمان' },
      { id: 'contact', label: 'تواصل' },
    ],
    hero: {
      eyebrow: 'منصة سعودية موثوقة للخدمات الرقمية',
      title: 'باثيون ستور – كل ما تحتاجه لعالم الألعاب والاشتراكات الرقمية في مكان واحد',
      lead:
        'متجر تعريفي يوفر حسابات الألعاب، الاشتراكات الرقمية، وخدمات الدسكورد مع تسليم سريع ودعم فني جاهز دائماً.',
      actions: {
        store: 'الدخول للمتجر',
        discord: 'الانضمام للدسكورد',
      },
      whyTitle: 'لماذا باثيون ستور؟',
      why: [
        'تسليم سريع على أغلب الطلبات',
        'ضمان واضح مع استبدال عند وجود مشكلة حقيقية',
        'دعم فني عبر تذاكر الدسكورد',
        'خبرة في مجال الألعاب والاشتراكات',
        'أسعار منافسة وخيارات دفع مرنة',
      ],
      stats: [
        { label: 'إعداد فوري', detail: 'تجهيز الطلب عبر المتجر أو الدسكورد مباشرة' },
        { label: 'حماية الحساب', detail: 'التزام بسياسة الضمان والبدائل عند الحاجة' },
        { label: 'دعم 24/7', detail: 'قنوات تواصل جاهزة لأي استفسار' },
        { label: 'جاهزية 99.9٪', detail: 'متابعة دائمة للتسليم والاستجابة' },
      ],
      highlightTitle: 'تجربة متناسقة',
      highlightItems: ['موقع متجاوب', 'لغة عربية/إنجليزية', 'تحويل عملات فوري', 'سمات داكنة وفاتحة'],
      notice: 'الموقع تعريفي فقط — الطلب عبر المتجر أو الدسكورد',
    },
    services: {
      eyebrow: 'الخدمات والمنتجات',
      title: 'عرض خدمات باثيون ستور',
      lead: 'تعريف واضح للخدمات بدون شراء مباشر داخل الموقع. الطلب يتم عبر المتجر أو الدسكورد.',
      cards: [
        {
          title: 'حسابات ألعاب Smurf',
          list: ['حسابات مفتوح الرانك', 'للعب بأريحية مع أصدقاء برنكات مختلفة', 'Valorant – Overwatch – Rocket League'],
        },
        {
          title: 'أرصدة الألعاب',
          list: ['رصيد Forza Horizon 5 Credits', 'شحن موثوق وآمن مع متابعة للدعم'],
        },
        {
          title: 'الاشتراكات الرقمية',
          list: ['ChatGPT Plus', 'Xbox Game Pass', 'اشتراكات أصلية بتسليم فوري'],
        },
        {
          title: 'خدمات الدسكورد',
          list: ['Nitro Gift', 'تأثيرات للحساب', 'إنشاء وترتيب سيرفرات دسكورد'],
        },
      ],
      alert: '⚠️ تنبيه: الطلبات تتم حالياً عبر المتجر أو الدسكورد، لا يوجد شراء مباشر داخل الموقع.',
    },
    payments: {
      eyebrow: 'طرق الدفع',
      title: 'خيارات الدفع والعملات',
      cards: [
        {
          title: 'العملات المعتمدة',
          list: ['الريال السعودي (SAR)', 'اليورو (EUR)', 'الدولار الأمريكي (USD)'],
          note: 'نحفظ اختيار العملة للمستقبل حتى مع أن الموقع تعريفي حالياً.',
        },
        {
          title: 'الوسائل المتاحة',
          list: ['مدى', 'فيزا / ماستركارد', 'Apple Pay', 'تحويل بنكي إذا لزم'],
          note: 'سيتم إضافة وسائل دفع إضافية قريباً حسب تحديث المتجر.',
        },
      ],
    },
    reviews: {
      eyebrow: 'آراء العملاء',
      title: 'تقييمات حقيقية من المجتمع',
      items: [
        'تسليم سريع وخدمة ممتازة',
        'اشتراك ChatGPT Plus وصل فوراً',
        'أفضل متجر أتعامل معه في الحسابات والاشتراكات',
        'الدعم الفني متفاعل ويحل المشكلة بسرعة',
      ],
    },
    contact: {
      eyebrow: 'التواصل',
      title: 'اطلب أو استفسر بسهولة',
      lead: 'لطلب أو استفسار يرجى التواصل عبر الروابط الرسمية.',
      actions: [
        { label: 'المتجر الإلكتروني', href: 'https://bathyoon.com/' },
        { label: 'سيرفر الدسكورد', href: 'https://discord.gg/byh', ghost: true },
      ],
    },
    warranty: {
      eyebrow: 'سياسة الضمان',
      title: 'حماية ودعم للمنتجات الرقمية',
      lead: 'الضمان يهدف للحماية وليس الاسترجاع، والاستبدال يتم فقط عند وجود مشكلة تقنية حقيقية بالمنتج.',
      cards: [
        {
          title: 'بنود سياسة الضمان',
          list: [
            'الضمان يختلف من منتج لآخر حسب التوضيح في صفحة الخدمة داخل المتجر.',
            'في حال وجود مشكلة في الوصول للمنتج أو الحساب يتم تقديم حل بديل أو استبدال إن أمكن.',
            'في حالة misuse أو سوء استخدام المنتج من طرف العميل يتم إلغاء الضمان.',
            'المنتجات المرتبطة بالألعاب أو الدسكورد تخضع لسياسة المنصة الأصلية.',
            'لا يتم الاسترجاع المالي بعد استلام المنتج بحالة صحيحة.',
            'التواصل من أجل الضمان يتم حصراً عبر الدسكورد في تذكرة الدعم.',
          ],
        },
        {
          title: 'نقطة توضيح',
          list: [
            'الضمان يهدف للحماية وليس الاسترجاع، والاستبدال يتم فقط عند وجود مشكلة تقنية حقيقية بالمنتج.',
            'نلتزم بتقديم الدعم الكامل في حال حدوث أي مشكلة في المنتج حسب نوع الخدمة.',
          ],
          note: 'نحن نهتم بتجربة آمنة ومريحة لجميع العملاء.',
        },
      ],
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'إجابات سريعة',
      items: [
        { q: 'كيف أطلب منتج أو خدمة؟', a: 'الطلب يكون من خلال المتجر أو عبر التواصل في سيرفر الدسكورد.' },
        { q: 'هل الشراء داخل الموقع متاح؟', a: 'حالياً الموقع تعريفي فقط، والشراء يتم عبر رابط المتجر الرسمي وسيتم إضافة خيارات شراء لاحقاً عند الانتهاء من التحديثات.' },
        { q: 'هل يوجد ضمان على المنتجات؟', a: 'نعم، يوجد ضمان حسب نوع المنتج، وتوضيحه يكون مكتوب في صفحة المنتج.' },
        { q: 'ما هي طرق الدفع المتاحة؟', a: 'مدى، فيزا، ماستركارد، Apple Pay، ودفع بالريال السعودي أو اليورو أو الدولار.' },
        { q: 'متى يتم التسليم؟', a: 'في الغالب خلال دقائق من تأكيد الدفع، وفي حال التأخير يرجى التواصل عبر تذكرة دعم في الدسكورد.' },
        { q: 'هل يمكنني استرجاع المبلغ؟', a: 'الاسترجاع غير متاح بعد تسليم المنتج بحالة سليمة، إلا إذا كانت المشكلة من المصدر وغير قابلة للحل.' },
        { q: 'هل الحسابات آمنة؟', a: 'الحسابات تُسلّم كما هي، والاستخدام مسؤولية العميل، ولا يحق تغيير معلومات غير مسموح بها حسب شروط الضمان.' },
      ],
    },
    about: {
      eyebrow: 'من نحن',
      title: 'باثيون ستور | Bathyoon Store',
      lead: 'منصة سعودية متخصصة في تقديم خدمات ألعاب واشتراكات رقمية بأسلوب احترافي وموثوق.',
      cards: [
        { title: 'رؤيتنا', body: 'أن نكون الخيار الأول للاعبين العرب في مجال الحسابات والاشتراكات والخدمات الرقمية.' },
        {
          title: 'ماذا نقدم؟',
          list: [
            'حسابات Smurf مفتوح الرانك للعب بأريحية',
            'كريدت Forza Horizon 5 للترقية والتطوير',
            'اشتراكات ChatGPT Plus و Xbox Game Pass',
            'منتجات وخدمات الدسكورد مثل Nitro وتأثيرات الحساب',
            'دعم فني وتنسيق فني لسيرفرات دسكورد',
          ],
        },
        { title: 'قيمنا', list: ['الشفافية', 'الأمان', 'السرعة في التسليم', 'احترام العميل'] },
        {
          title: 'طموحنا المستقبلي',
          list: ['إضافة نظام شراء مباشر داخل الموقع', 'زيادة وسائل الدفع المختلفة', 'توفير خدمات إضافية للألعاب والمنصات الجديدة'],
        },
        {
          title: 'رؤيتنا المستقبلية',
          body: 'نحن هنا لنقدم لك تجربة موثوقة وسهلة في عالم الخدمات الرقمية، مع تحسينات مستمرة.'
        },
      ],
    },
    footer: {
      rights: '© باثيون ستور 2025 — جميع الحقوق محفوظة',
      made: 'صنع في المملكة العربية السعودية',
      links: ['الرئيسية', 'الخدمات', 'طرق الدفع', 'التواصل'],
      cta: [
        { label: 'المتجر الإلكتروني', href: 'https://bathyoon.com/' },
        { label: 'الدسكورد', href: 'https://discord.gg/byh' },
      ],
    },
    themeLabel: { dark: 'فاتح', light: 'داكن' },
    langLabel: 'EN',
    colorOptions: {
      label: 'ألوان الواجهة',
      langLabel: 'تبديل اللغة',
      currencyLabel: 'اختيار العملة',
      options: {
        blue: 'الأزرق',
        purple: 'البنفسجي',
        sky: 'السماوي',
        green: 'الأخضر',
        yellow: 'الأصفر',
        pink: 'الوردي',
      },
    },
  },
  en: {
    lang: 'en',
    dir: 'ltr',
    brand: { name: 'Bathyoon Store', sub: 'متجر باثيون' },
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'faq', label: 'FAQ' },
      { id: 'warranty', label: 'Warranty' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'Trusted Saudi digital hub',
      title: 'Bathyoon Store — your home for game accounts and digital subscriptions',
      lead:
        'A showcase store for smurf accounts, original subscriptions, and Discord services with fast delivery and dedicated support.',
      actions: {
        store: 'Enter Store',
        discord: 'Join Discord',
      },
      whyTitle: 'Why Bathyoon?',
      why: [
        'Fast fulfillment on most requests',
        'Clear warranty with replacement when issues appear',
        'Support tickets on Discord',
        'Gaming and subscription expertise',
        'Competitive pricing and flexible payments',
      ],
      stats: [
        { label: 'Instant setup', detail: 'Requests handled through the store or Discord quickly' },
        { label: 'Account protection', detail: 'Warranty clarity with replacements when possible' },
        { label: '24/7 support', detail: 'Always-on channels for help and questions' },
        { label: '99.9% uptime', detail: 'Consistent delivery and response readiness' },
      ],
      highlightTitle: 'Smooth experience',
      highlightItems: ['Responsive layout', 'Arabic / English', 'Instant currency switch', 'Dark & Light modes'],
      notice: 'Informational only — ordering happens via store or Discord',
    },
    services: {
      eyebrow: 'Services & Products',
      title: 'What we offer',
      lead: 'Clear descriptions without direct checkout. Ordering goes through the store or Discord.',
      cards: [
        {
          title: 'Smurf Game Accounts',
          list: ['Open-rank accounts', 'Play comfortably with friends on different ranks', 'Valorant – Overwatch – Rocket League'],
        },
        {
          title: 'Game Credits',
          list: ['Forza Horizon 5 Credits', 'Secure top-ups with support'],
        },
        {
          title: 'Digital Subscriptions',
          list: ['ChatGPT Plus', 'Xbox Game Pass', 'Original subscriptions with instant delivery'],
        },
        {
          title: 'Discord Services',
          list: ['Nitro Gift', 'Profile effects', 'Server creation and tuning'],
        },
      ],
      alert: '⚠️ Note: Orders are processed through the store or Discord. No direct checkout on the site yet.',
    },
    payments: {
      eyebrow: 'Payments',
      title: 'Payment methods & currencies',
      cards: [
        {
          title: 'Accepted currencies',
          list: ['Saudi Riyal (SAR)', 'Euro (EUR)', 'US Dollar (USD)'],
          note: 'We remember your currency preference even while the site stays informational.',
        },
        {
          title: 'Available methods',
          list: ['Mada', 'Visa / MasterCard', 'Apple Pay', 'Bank transfer when needed'],
          note: 'More payment options will be added as the store updates.',
        },
      ],
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'Community feedback',
      items: [
        'Fast delivery and excellent service',
        'ChatGPT Plus subscription arrived instantly',
        'Best store I deal with for accounts and subs',
        'Responsive support that solves issues quickly',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Reach us easily',
      lead: 'For orders or questions, use the official links below.',
      actions: [
        { label: 'Store', href: 'https://bathyoon.com/' },
        { label: 'Discord', href: 'https://discord.gg/byh', ghost: true },
      ],
    },
    warranty: {
      eyebrow: 'Warranty policy',
      title: 'Protection & support',
      lead: 'The warranty aims to protect, not refund. Replacement happens only when there is a genuine technical issue.',
      cards: [
        {
          title: 'Policy points',
          list: [
            'Warranty differs per product as stated on the store page.',
            'If access issues occur, an alternative or replacement is provided when possible.',
            'Misuse from the client cancels the warranty.',
            'Game and Discord items follow the original platform policies.',
            'Refunds are not available after successful delivery.',
            'Warranty communication happens via Discord support tickets only.',
          ],
        },
        {
          title: 'Clarification',
          list: [
            'Warranty is for protection, not refunds. Replacement only for real technical issues.',
            'We commit to full support whenever a problem occurs according to the service type.',
          ],
          note: 'We care about a safe and smooth experience for every customer.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick answers',
      items: [
        { q: 'How do I order?', a: 'Orders are placed via the store or by contacting us on Discord.' },
        { q: 'Is on-site checkout available?', a: 'The site is informational for now. Checkout happens through the official store and will be added here later.' },
        { q: 'Is there a warranty?', a: 'Yes. Warranty depends on the product and is clarified on its page.' },
        { q: 'What payment methods are available?', a: 'Mada, Visa, MasterCard, Apple Pay, and payments in SAR, EUR, or USD.' },
        { q: 'When will I receive my order?', a: 'Usually within minutes after payment. If delayed, open a Discord support ticket.' },
        { q: 'Can I get a refund?', a: 'Refunds are not available after successful delivery unless the issue is from the source and unsolvable.' },
        { q: 'Are the accounts safe?', a: 'Accounts are delivered as-is. Usage is the client’s responsibility and must respect warranty terms.' },
      ],
    },
    about: {
      eyebrow: 'About Us',
      title: 'Bathyoon Store | باثيون ستور',
      lead: 'A Saudi platform for game services and digital subscriptions with a professional, trustworthy approach.',
      cards: [
        { title: 'Our vision', body: 'To be the first choice for Arab gamers in accounts, subscriptions, and digital services.' },
        {
          title: 'What we provide',
          list: [
            'Smurf accounts with open rank',
            'Forza Horizon 5 credits for upgrades',
            'ChatGPT Plus and Xbox Game Pass',
            'Discord products such as Nitro and profile effects',
            'Technical support and server setup for Discord',
          ],
        },
        { title: 'Our values', list: ['Transparency', 'Security', 'Fast delivery', 'Customer respect'] },
        {
          title: 'Future plans',
          list: ['Add direct checkout on-site', 'Expand payment options', 'Offer new services for upcoming games and platforms'],
        },
        {
          title: 'Statement',
          body: 'We are here to deliver a reliable, easy experience in digital services with continuous improvements.'
        },
      ],
    },
    footer: {
      rights: '© Bathyoon Store 2025 — All rights reserved',
      made: 'Made in Saudi Arabia',
      links: ['Home', 'Services', 'Payments', 'Contact'],
      cta: [
        { label: 'Online Store', href: 'https://bathyoon.com/' },
        { label: 'Discord', href: 'https://discord.gg/byh' },
      ],
    },
    themeLabel: { dark: 'Light', light: 'Dark' },
    langLabel: 'AR',
    colorOptions: {
      label: 'Accent color',
      langLabel: 'Toggle language',
      currencyLabel: 'Pick currency',
      options: {
        blue: 'Blue',
        purple: 'Purple',
        sky: 'Sky',
        green: 'Green',
        yellow: 'Yellow',
        pink: 'Pink',
      },
    },
  },
};

const colorSchemes = {
  blue: {
    accent: '#6fb8ff',
    accent2: '#7be3ff',
    grads: [
      'rgba(68, 130, 255, 0.45)',
      'rgba(134, 76, 255, 0.35)',
      'rgba(65, 202, 165, 0.38)',
      'rgba(255, 210, 98, 0.28)',
      'rgba(235, 132, 178, 0.3)',
      'rgba(132, 202, 235, 0.32)',
    ],
  },
  purple: {
    accent: '#b38bff',
    accent2: '#7ed3ff',
    grads: [
      'rgba(173, 125, 255, 0.45)',
      'rgba(104, 73, 229, 0.42)',
      'rgba(84, 197, 171, 0.32)',
      'rgba(255, 205, 132, 0.22)',
      'rgba(236, 143, 214, 0.36)',
      'rgba(145, 214, 255, 0.32)',
    ],
  },
  sky: {
    accent: '#8ddcff',
    accent2: '#6be9e1',
    grads: [
      'rgba(109, 206, 255, 0.42)',
      'rgba(95, 144, 255, 0.34)',
      'rgba(79, 223, 196, 0.34)',
      'rgba(242, 216, 138, 0.2)',
      'rgba(230, 158, 205, 0.32)',
      'rgba(120, 215, 255, 0.38)',
    ],
  },
  green: {
    accent: '#7de2b8',
    accent2: '#9ef28f',
    grads: [
      'rgba(108, 224, 183, 0.42)',
      'rgba(106, 164, 255, 0.32)',
      'rgba(104, 237, 180, 0.42)',
      'rgba(245, 221, 140, 0.24)',
      'rgba(214, 158, 205, 0.28)',
      'rgba(126, 214, 205, 0.36)',
    ],
  },
  yellow: {
    accent: '#ffd166',
    accent2: '#ffe38f',
    grads: [
      'rgba(255, 210, 102, 0.46)',
      'rgba(134, 102, 255, 0.32)',
      'rgba(108, 216, 176, 0.3)',
      'rgba(255, 231, 150, 0.46)',
      'rgba(242, 169, 148, 0.3)',
      'rgba(152, 214, 235, 0.32)',
    ],
  },
  pink: {
    accent: '#ff9acb',
    accent2: '#a7c2ff',
    grads: [
      'rgba(255, 154, 203, 0.44)',
      'rgba(164, 112, 255, 0.36)',
      'rgba(104, 223, 189, 0.32)',
      'rgba(255, 214, 140, 0.26)',
      'rgba(238, 151, 192, 0.42)',
      'rgba(160, 210, 255, 0.36)',
    ],
  },
};

const state = {
  lang: localStorage.getItem('lang') || 'ar',
  theme: localStorage.getItem('theme') || 'dark',
  currency: localStorage.getItem('currency') || 'SAR',
  color: localStorage.getItem('color') || 'blue',
};

document.documentElement.setAttribute('data-theme', state.theme);
elements.currencySelect.value = state.currency;

elements.langToggle.value = state.lang;
elements.langToggle.addEventListener('change', (e) => {
  state.lang = e.target.value;
  localStorage.setItem('lang', state.lang);
  applyLanguage();
});

elements.colorSelect.value = state.color;
elements.colorSelect.addEventListener('change', (e) => {
  state.color = e.target.value;
  localStorage.setItem('color', state.color);
  applyColor();
});

elements.themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', state.theme);
  applyTheme();
});

elements.currencySelect.addEventListener('change', (e) => {
  state.currency = e.target.value;
  localStorage.setItem('currency', state.currency);
  renderPayments();
});

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const labels = content[state.lang].themeLabel;
  const isDark = state.theme === 'dark';
  elements.themeLabel.textContent = isDark ? labels.dark : labels.light;
  elements.themeIcon.textContent = isDark ? '🌙' : '☀️';
  applyColor();
}

function applyLanguage() {
  const t = content[state.lang];
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;
  elements.langToggle.value = t.lang;
  const palette = t.colorOptions;
  elements.langToggle.setAttribute('aria-label', palette.langLabel);
  elements.currencySelect.setAttribute('aria-label', palette.currencyLabel);
  elements.colorSelect.setAttribute('aria-label', palette.label);
  Array.from(elements.colorSelect.options).forEach((opt) => {
    if (palette.options[opt.value]) {
      opt.textContent = palette.options[opt.value];
    }
  });
  elements.brandName.textContent = t.brand.name;
  elements.brandSub.textContent = t.brand.sub;
  elements.storeBtn.textContent = t.hero.actions.store;
  applyTheme();
  renderNav();
  renderHero();
  renderServices();
  renderPayments();
  renderReviews();
  renderContact();
  renderWarranty();
  renderFaq();
  renderAbout();
  renderFooter();
}

function applyColor() {
  const scheme = colorSchemes[state.color] || colorSchemes.blue;
  const root = document.documentElement;
  root.style.setProperty('--accent', scheme.accent);
  root.style.setProperty('--accent-2', scheme.accent2);
  scheme.grads.forEach((g, idx) => root.style.setProperty(`--grad-${idx + 1}`, g));
}

function renderNav() {
  const t = content[state.lang];
  elements.nav.innerHTML = t.nav
    .map((link) => `<a href="#${link.id}" data-nav="${link.id}">${link.label}</a>`)
    .join('');
  elements.footerLinks.innerHTML = t.nav
    .map((link) => `<a href="#${link.id}">${link.label}</a>`)
    .join('');
  attachSmoothScroll();
}

function renderHero() {
  const t = content[state.lang].hero;
  elements.heroContent.innerHTML = `
    <div class="hero__content">
      <div class="hero__pill">${t.eyebrow}</div>
      <h1>${t.title}</h1>
      <p class="lead">${t.lead}</p>
      <div class="hero__actions">
        <a class="btn primary" href="https://bathyoon.com/" target="_blank" rel="noreferrer">${t.actions.store}</a>
        <a class="btn ghost" href="https://discord.gg/byh" target="_blank" rel="noreferrer">${t.actions.discord}</a>
      </div>
      <div class="why-us">
        <h3>${t.whyTitle}</h3>
        <ul>${t.why.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="panel__card hero__panel">
      <div class="panel__header">
        <span class="pill">${t.highlightTitle}</span>
        <p class="panel__eyebrow">${t.notice}</p>
      </div>
      <div class="feature-grid">
        ${t.highlightItems
          .map(
            (item) => `
          <div class="feature-chip">
            <span class="dot"></span>
            <span>${item}</span>
          </div>
        `
          )
          .join('')}
      </div>
      <div class="stats">
        ${t.stats
          .map(
            (stat) => `
          <div class="stat-card">
            <div class="stat-card__label">${stat.label}</div>
            <div class="stat-card__detail">${stat.detail}</div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderServices() {
  const t = content[state.lang].services;
  elements.servicesHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
    <p class="section__lead">${t.lead}</p>
  `;
  elements.servicesGrid.innerHTML = t.cards
    .map(
      (card) => `
      <article class="card">
        <h3>${card.title}</h3>
        <ul>${card.list.map((item) => `<li>${item}</li>`).join('')}</ul>
      </article>`
    )
    .join('');
  elements.servicesAlert.textContent = t.alert;
}

function renderPayments() {
  const t = content[state.lang].payments;
  elements.paymentsHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
  `;
  elements.paymentsGrid.innerHTML = t.cards
    .map(
      (card) => `
        <div class="card">
          <h3>${card.title}</h3>
          <ul>${card.list.map((item) => `<li>${item}</li>`).join('')}</ul>
          <p class="muted">${card.note}</p>
        </div>
      `
    )
    .join('');
}

function renderReviews() {
  const t = content[state.lang].reviews;
  elements.reviewsHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
  `;
  const items = [...t.items, ...t.items];
  elements.reviewsTrack.innerHTML = items
    .map((item) => `<div class="marquee__item">${item}</div>`)
    .join('');
}

function renderContact() {
  const t = content[state.lang].contact;
  elements.contactHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
    <p class="section__lead">${t.lead}</p>
  `;
  elements.contactActions.innerHTML = t.actions
    .map(
      (action) => `
        <a class="btn ${action.ghost ? 'ghost' : 'primary'}" href="${action.href}" target="_blank" rel="noreferrer">${action.label}</a>
      `
    )
    .join('');
}

function renderWarranty() {
  const t = content[state.lang].warranty;
  elements.warrantyHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
    <p class="section__lead">${t.lead}</p>
  `;
  elements.warrantyGrid.innerHTML = t.cards
    .map(
      (card) => `
        <article class="card">
          <h3>${card.title}</h3>
          ${card.list ? `<ul>${card.list.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
          ${card.note ? `<p class="muted">${card.note}</p>` : ''}
        </article>
      `
    )
    .join('');
}

function renderFaq() {
  const t = content[state.lang].faq;
  elements.faqHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
  `;
  elements.faqList.innerHTML = t.items
    .map(
      (item) => `
        <div class="faq__item">
          <h3>${item.q}</h3>
          <p>${item.a}</p>
        </div>
      `
    )
    .join('');
}

function renderAbout() {
  const t = content[state.lang].about;
  elements.aboutHeader.innerHTML = `
    <p class="eyebrow">${t.eyebrow}</p>
    <h2>${t.title}</h2>
    <p class="section__lead">${t.lead}</p>
  `;
  elements.aboutGrid.innerHTML = t.cards
    .map((card) => {
      const list = card.list ? `<ul>${card.list.map((item) => `<li>${item}</li>`).join('')}</ul>` : '';
      const body = card.body ? `<p class="muted">${card.body}</p>` : '';
      return `<div class="card"><h3>${card.title}</h3>${list}${body}</div>`;
    })
    .join('');
}

function renderFooter() {
  const t = content[state.lang];
  elements.footerBrand.textContent = t.brand.name;
  elements.footerRights.textContent = t.footer.rights;
  elements.footerMade.textContent = t.footer.made;
  elements.footerCta.innerHTML = t.footer.cta
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
    .join('');
}

function attachSmoothScroll() {
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
}

applyLanguage();
