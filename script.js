const i18n = {
  ar: {
    tagline: "سوق الألعاب الرقمية",
    language: "اللغة",
    currency: "العملة",
    shopNow: "تسوق الآن",
    eyebrow: "BathYoon.com — متجر موثوق للمنتجات الرقمية",
    headline: "حسابات وأكواد الألعاب الرقمية بأسعار عادلة وخدمة فورية",
    lead: "نوفر حسابات Call of Duty وBlack Ops 7 وRocket League ومنتجات Forza Horizon 5 مع توصيل فوري، دعم سريع، وضمان استرجاع خلال 24 ساعة.",
    browse: "استكشف المتجر",
    support: "تواصل مع الدعم",
    badgeTrusted: "دفع آمن وسريع",
    badgeInstant: "تسليم مباشر على بريدك أو المنصة",
    badgeCurrency: "يدعم الريال السعودي والدولار الأمريكي",
    featured: "عرض مميز",
    featuredTitle: "حزمة إطلاق Black Ops 7",
    featuredDesc: "حساب جاهز مع إضافات حصرية وتفعيل فوري.",
    feature1: "ضمان استرجاع لمدة 24 ساعة",
    feature2: "دعم فني بالعربي والإنجليزي",
    feature3: "تفعيل فوري عبر البريد",
    ctaHero: "أضف للسلة",
    aboutEyebrow: "لماذا باثيون؟",
    aboutTitle: "المتجر المتخصص في المنتجات الرقمية",
    aboutText: "باثيون ستور متجر سعودي متخصص في بيع الحسابات والأكواد الرقمية للألعاب الرائجة. نركز على تجربة شراء سهلة، دعم مباشر، وسياسات واضحة لحماية اللاعبين.",
    featureCard1Title: "منتجات أصلية ومضمونة",
    featureCard1Text: "جميع الأكواد والحسابات يتم اختبارها وتوثيقها قبل التسليم.",
    featureCard2Title: "تحويل عملات مرن",
    featureCard2Text: "ادفع بالريال السعودي أو الدولار الأمريكي مع تحديث السعر تلقائياً.",
    featureCard3Title: "تسليم فوري",
    featureCard3Text: "يصل الرمز أو بيانات الحساب للبريد أو المنصة خلال دقائق.",
    catalogEyebrow: "تصفح حسب الفئة",
    catalogTitle: "ألعاب وحسابات جاهزة",
    supportEyebrow: "خدمة العملاء",
    supportTitle: "دعم سريع 24/7",
    supportText: "نساعدك في التفعيل، الدفع، واسترجاع المنتجات في حال وجود مشكلة خلال 24 ساعة.",
    supportEmail: "support@bathyoon.com",
    supportChat: "دردشة واتساب",
    policiesTitle: "سياسة واضحة",
    policy1: "استرجاع خلال 24 ساعة للحسابات غير المفعلة",
    policy2: "حماية بياناتك وطرق دفع موثوقة",
    policy3: "إشعارات بريدية فورية بعد الشراء",
    footerText: "منصة سعودية لبيع المنتجات الرقمية وحسابات الألعاب.",
    footerAbout: "عن المتجر",
    footerCatalog: "المنتجات",
    footerSupport: "الدعم",
  },
  en: {
    tagline: "Digital gaming marketplace",
    language: "Language",
    currency: "Currency",
    shopNow: "Shop now",
    eyebrow: "BathYoon.com — trusted digital store",
    headline: "Digital game accounts & codes with fair pricing and instant service",
    lead: "We deliver Call of Duty, Black Ops 7, Rocket League accounts, and Forza Horizon 5 items with instant delivery, fast support, and a 24-hour refund guarantee.",
    browse: "Browse store",
    support: "Contact support",
    badgeTrusted: "Secure and fast checkout",
    badgeInstant: "Instant delivery to your inbox or platform",
    badgeCurrency: "Supports SAR and USD",
    featured: "Featured",
    featuredTitle: "Black Ops 7 launch bundle",
    featuredDesc: "Ready-to-play account with exclusive add-ons.",
    feature1: "24-hour refund window",
    feature2: "Arabic & English support",
    feature3: "Instant activation via email",
    ctaHero: "Add to cart",
    aboutEyebrow: "Why Bathyoon?",
    aboutTitle: "Specialized digital store",
    aboutText: "Bathyoon Store is a Saudi shop for digital game accounts and codes. We focus on an easy checkout, direct support, and clear player-friendly policies.",
    featureCard1Title: "Original & guaranteed",
    featureCard1Text: "Every code and account is validated before delivery.",
    featureCard2Title: "Flexible currencies",
    featureCard2Text: "Pay in SAR or USD with automatic pricing updates.",
    featureCard3Title: "Instant fulfillment",
    featureCard3Text: "Codes or account details arrive within minutes.",
    catalogEyebrow: "Browse by category",
    catalogTitle: "Ready-to-play titles",
    supportEyebrow: "Customer care",
    supportTitle: "Fast 24/7 support",
    supportText: "We assist with activation, payments, and refunds within 24 hours if anything fails.",
    supportEmail: "support@bathyoon.com",
    supportChat: "WhatsApp chat",
    policiesTitle: "Clear policy",
    policy1: "24-hour returns for unactivated accounts",
    policy2: "Data protection and trusted payments",
    policy3: "Instant email notifications after purchase",
    footerText: "Saudi platform for digital products and game accounts.",
    footerAbout: "About",
    footerCatalog: "Products",
    footerSupport: "Support",
  },
};

const products = [
  {
    id: 'cod',
    name: { ar: 'حساب Call of Duty', en: 'Call of Duty Account' },
    category: { ar: 'أكواد وحسابات كود', en: 'Call of Duty' },
    description: {
      ar: 'حساب جاهز مع آخر التحديثات ودعم المنصات المتعددة.',
      en: 'Ready-to-play account with latest updates and cross-platform support.',
    },
    priceSAR: 199,
  },
  {
    id: 'bo7',
    name: { ar: 'Black Ops 7 Elite', en: 'Black Ops 7 Elite' },
    category: { ar: 'Black Ops 7', en: 'Black Ops 7' },
    description: {
      ar: 'حساب حصري مع إضافات موسمية وتفعيل فوري.',
      en: 'Exclusive account with seasonal add-ons and instant activation.',
    },
    priceSAR: 289,
  },
  {
    id: 'rl',
    name: { ar: 'Rocket League Pro', en: 'Rocket League Pro' },
    category: { ar: 'Rocket League', en: 'Rocket League' },
    description: {
      ar: 'حساب مع سيارات نادرة وائتمان إضافي للتخصيص.',
      en: 'Account with rare cars and extra credits for customization.',
    },
    priceSAR: 175,
  },
  {
    id: 'fh5',
    name: { ar: 'Forza Horizon 5 Premium', en: 'Forza Horizon 5 Premium' },
    category: { ar: 'Forza Horizon 5', en: 'Forza Horizon 5' },
    description: {
      ar: 'وصول فوري لسيارات مميزة وتذاكر توسعات.',
      en: 'Instant access to featured cars and expansion passes.',
    },
    priceSAR: 249,
  },
];

const EXCHANGE_RATE = 0.27; // SAR to USD (approx)

const languageSelect = document.querySelector('#language');
const currencySelect = document.querySelector('#currency');
const productList = document.querySelector('#product-list');

function renderProducts(lang, currency) {
  productList.innerHTML = '';
  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = product.name[lang];

    const meta = document.createElement('div');
    meta.className = 'product__meta';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = product.category[lang];

    const priceValue =
      currency === 'USD' ? product.priceSAR * EXCHANGE_RATE : product.priceSAR;

    const price = document.createElement('div');
    price.className = 'price';
    price.innerHTML = `<span class="amount">${
      currency === 'USD' ? priceValue.toFixed(2) : priceValue.toFixed(0)
    }</span><span class="currency">${currency === 'USD' ? '$' : '﷼'}</span>`;

    meta.appendChild(tag);
    meta.appendChild(price);

    const desc = document.createElement('p');
    desc.textContent = product.description[lang];

    const button = document.createElement('button');
    button.className = 'primary';
    button.textContent = lang === 'ar' ? 'اشتري الآن' : 'Buy now';

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(desc);
    card.appendChild(button);
    productList.appendChild(card);
  });
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

function updatePrices(currency) {
  document.querySelectorAll('[data-i18n-price]').forEach((priceEl) => {
    const base = Number(priceEl.getAttribute('data-price'));
    const converted = currency === 'USD' ? base * EXCHANGE_RATE : base;
    priceEl.querySelector('.amount').textContent =
      currency === 'USD' ? converted.toFixed(2) : converted.toFixed(0);
    priceEl.querySelector('.currency').textContent = currency === 'USD' ? '$' : '﷼';
  });
}

function init() {
  const defaultLang = 'ar';
  const defaultCurrency = 'SAR';

  languageSelect.value = defaultLang;
  currencySelect.value = defaultCurrency;

  applyTranslations(defaultLang);
  renderProducts(defaultLang, defaultCurrency);
  updatePrices(defaultCurrency);

  languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    applyTranslations(lang);
    renderProducts(lang, currencySelect.value);
  });

  currencySelect.addEventListener('change', (e) => {
    const currency = e.target.value;
    updatePrices(currency);
    renderProducts(languageSelect.value, currency);
  });
}

init();
