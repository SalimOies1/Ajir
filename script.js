(() => {
  'use strict';

  /* ===== نصوص اللغتين ===== */
  const TEXT = {
    ar: {
      dir: 'rtl',
      lang: 'ar',
      splashTitle: 'الخير بين يديك',
      splashSubtitle: 'كن سبباً في تغيير حياة أحدهم اليوم',
      buttonLabel: 'تبرع الآن',
      buttonArrow: '←',
      heroTitle: 'الخير بين يديك',
      heroSubtitleHTML: 'كن سبباً في تغيير حياة<br>أحدهم اليوم',
      langButton: 'EN',
      i18n: {
        back: 'رجوع',
        tabLogin: 'تسجيل الدخول',
        tabRegister: 'مستخدم جديد',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        loginBtn: 'دخول',
        registerBtn: 'إنشاء حساب',
        logout: 'تسجيل الخروج',
        welcome: 'أهلاً',
        appSoon: 'هذه الصفحة الرئيسية للبرنامج.',
        adminTitle: 'إعدادات الأدمن',
        usersCount: 'عدد المستخدمين المسجلين:',
        casesTitle: 'حالات تحتاج مساعدتك',
        raised: 'تم جمعه',
        goal: 'الهدف',
        progress: 'نسبة الإنجاز',
        donors: 'متبرع',
        story: 'قصة الحالة',
        donateTitle: 'تبرّع لهذه الحالة',
        customAmount: 'أو أدخل مبلغاً آخر',
        donateBtn: 'تبرع الآن',
        catsTitle: 'تبرع حسب الفئة',
        catCasesTitle: 'الحالات التي تقبل هذه الفئة',
        accepts: 'تقبل:',
        notifications: 'الإشعارات',
        menu: 'القائمة',
        prevCase: 'الحالة السابقة',
        nextCase: 'الحالة التالية',
        catsSub: 'اختر نوع التبرع الذي ترغب به واستكشف الحالات المناسبة لك',
        projectsTitle: 'مشاريعنا',
        viewAll: 'عرض الكل',
        caseTag: 'حالة إنسانية',
        of: 'من',
        tabHome: 'الرئيسية',
        tabDonations: 'تبرعاتي',
        tabInitiatives: 'المبادرات',
        tabAccount: 'حسابي',
        soon: 'قريباً',
        noDonations: 'لم تقم بأي تبرع بعد.',
        allCases: 'كل الحالات',
        allCasesDesc: 'تصفح جميع الحالات المتاحة'
      },
      countLabel: (n) => {
        if (n === 0) return 'لا حالات';
        if (n === 1) return 'حالة واحدة';
        if (n === 2) return 'حالتان';
        return n <= 10 ? `${n} حالات` : `${n} حالة`;
      },
      emptyCat: 'لا توجد حالات تقبل هذه الفئة حالياً.',
      donate: {
        invalid: 'الرجاء اختيار مبلغ صحيح',
        thanks: 'شكراً لك! تم تسجيل تبرعك (تجريبي).'
      },
      caseLabel: (i, n) => `الحالة ${i} من ${n}`,
      errors: {
        empty: 'الرجاء إدخال اسم المستخدم وكلمة المرور',
        wrong: 'اسم المستخدم أو كلمة المرور غير صحيحة',
        taken: 'اسم المستخدم مستخدم مسبقاً'
      }
    },
    en: {
      dir: 'ltr',
      lang: 'en',
      splashTitle: 'Goodness in your hands',
      splashSubtitle: 'Be the reason someone\u2019s life changes today',
      buttonLabel: 'Donate now',
      buttonArrow: '←',
      heroTitle: 'Goodness in your hands',
      heroSubtitleHTML: 'Be the reason someone\u2019s<br>life changes today',
      langButton: 'AR',
      i18n: {
        back: 'Back',
        tabLogin: 'Log in',
        tabRegister: 'New user',
        username: 'Username',
        password: 'Password',
        loginBtn: 'Log in',
        registerBtn: 'Create account',
        logout: 'Log out',
        welcome: 'Welcome',
        appSoon: 'This is the app\u2019s main page.',
        adminTitle: 'Admin settings',
        usersCount: 'Registered users:',
        casesTitle: 'Cases that need your help',
        raised: 'Raised',
        goal: 'Goal',
        progress: 'Progress',
        donors: 'Donors',
        story: 'Case story',
        donateTitle: 'Donate to this case',
        customAmount: 'Or enter another amount',
        donateBtn: 'Donate now',
        catsTitle: 'Donate by category',
        catCasesTitle: 'Cases that accept this category',
        accepts: 'Accepts:',
        notifications: 'Notifications',
        menu: 'Menu',
        prevCase: 'Previous case',
        nextCase: 'Next case',
        catsSub: 'Pick the type of giving and explore the cases that fit it',
        projectsTitle: 'Our projects',
        viewAll: 'View all',
        caseTag: 'Humanitarian case',
        of: 'of',
        tabHome: 'Home',
        tabDonations: 'My donations',
        tabInitiatives: 'Initiatives',
        tabAccount: 'Account',
        soon: 'Coming soon',
        noDonations: 'You have not donated yet.',
        allCases: 'All cases',
        allCasesDesc: 'Browse every available case'
      },
      countLabel: (n) => (n === 0 ? 'No cases' : n === 1 ? '1 case' : `${n} cases`),
      emptyCat: 'No cases accept this category right now.',
      donate: {
        invalid: 'Please choose a valid amount',
        thanks: 'Thank you! Your donation was recorded (demo).'
      },
      caseLabel: (i, n) => `Case ${i} of ${n}`,
      errors: {
        empty: 'Please enter a username and password',
        wrong: 'Incorrect username or password',
        taken: 'This username is already taken'
      }
    }
  };

  /* ===== بيانات الأدمن وتخزين الحسابات (محلياً في المتصفح فقط) ===== */
  const ADMIN_USER = 'admin 1';
  const ADMIN_PASS = '1234';
  const USERS_KEY = 'ajrt-users';
  const SESSION_KEY = 'ajrt-session';

  /* ===== حالات تجريبية مؤقتة (تُستبدل لاحقاً ببيانات حقيقية) ===== */
  const CASES = [
    {
      id: 1, featured: true, categories: ['sadaqa','zakat'], image: 'HERO.png', pos: '50% 85%', goal: 5000, raised: 3200, donors: 84,
      ar: {
        title: 'علاج طفلة مصابة بمرض في القلب',
        desc: 'تحتاج الطفلة إلى عملية جراحية عاجلة لإنقاذ حياتها.',
        story: 'تعاني الطفلة منذ ولادتها من عيب خلقي في القلب، ويؤكد الأطباء أن العملية الجراحية العاجلة هي الأمل الوحيد لتعيش حياة طبيعية. أسرتها لا تملك تكاليف العلاج، وكل تبرع يقرّبها من الشفاء.'
      },
      en: {
        title: 'Heart surgery for a young girl',
        desc: 'She urgently needs an operation to save her life.',
        story: 'Since birth she has lived with a congenital heart defect, and doctors say urgent surgery is her only chance at a normal life. Her family cannot afford the treatment, and every donation brings her closer to recovery.'
      }
    },
    {
      id: 2, featured: true, categories: ['sadaqa','zakat'], image: 'HERO.png', pos: '20% 40%', goal: 3000, raised: 900, donors: 31,
      ar: {
        title: 'ترميم منزل عائلة فقدت مأواها',
        desc: 'عائلة من ستة أفراد تعيش في منزل متضرر بلا نوافذ ولا سقف آمن.',
        story: 'تعيش العائلة في منزل تضرر بشدة، وتقضي الشتاء دون حماية من البرد والمطر. ترميم السقف والنوافذ سيمنحهم بيتاً آمناً ودافئاً من جديد.'
      },
      en: {
        title: 'Repair a family’s damaged home',
        desc: 'A family of six lives in a house with no windows or safe roof.',
        story: 'The family lives in a badly damaged house and spends winter without protection from cold and rain. Repairing the roof and windows will give them a safe, warm home again.'
      }
    },
    {
      id: 3, featured: true, categories: ['zakat','sadaqa','jariya'], image: 'HERO.png', pos: '80% 30%', goal: 2000, raised: 1750, donors: 122,
      ar: {
        title: 'كفالة تعليم ١٠ أطفال أيتام',
        desc: 'تغطية الرسوم والقرطاسية والكتب لعام دراسي كامل.',
        story: 'يحلم هؤلاء الأطفال بمواصلة تعليمهم رغم فقدان معيلهم. تبرعك يغطي الرسوم المدرسية والكتب والقرطاسية لعام دراسي كامل ويفتح لهم باب المستقبل.'
      },
      en: {
        title: 'Sponsor 10 orphans’ education',
        desc: 'Covers fees, stationery and books for a full school year.',
        story: 'These children dream of continuing their education despite losing their provider. Your donation covers tuition, books and stationery for a full school year and opens the door to their future.'
      }
    },
    {
      id: 4, featured: true, categories: ['jariya','sadaqa'], image: 'HERO.png', pos: '50% 10%', goal: 8000, raised: 2400, donors: 57,
      ar: {
        title: 'حفر بئر مياه لقرية محتاجة',
        desc: 'مياه نظيفة لأكثر من ٣٠٠ شخص يقطعون مسافات طويلة يومياً.',
        story: 'يقطع أهالي القرية كيلومترات كل يوم لجلب مياه غير صالحة للشرب. بئر واحدة ستوفر مياهاً نظيفة لأكثر من ثلاثمئة شخص وتحمي الأطفال من الأمراض.'
      },
      en: {
        title: 'Dig a water well for a village',
        desc: 'Clean water for 300+ people who walk long distances daily.',
        story: 'Villagers walk kilometres every day to fetch unsafe water. One well will provide clean water for over three hundred people and protect children from disease.'
      }
    },
    {
      id: 5, featured: true, categories: ['zakat','sadaqa','kaffara','fidya'], image: 'HERO.png', pos: '60% 60%', goal: 1500, raised: 600, donors: 19,
      ar: {
        title: 'سلة غذاء شهرية لأسر متعففة',
        desc: 'مواد غذائية أساسية تكفي أسرة كاملة لمدة شهر.',
        story: 'تكفي كل سلة غذائية أسرة كاملة لمدة شهر، وتحتوي على المواد الأساسية من أرز وزيت وسكر وحبوب. ساهم في إدخال الفرحة إلى بيوت لا تجد قوت يومها.'
      },
      en: {
        title: 'Monthly food baskets for families',
        desc: 'Staple foods that feed a whole family for a month.',
        story: 'Each basket feeds a whole family for a month with staples like rice, oil, sugar and grains. Help bring relief to homes that struggle to put food on the table.'
      }
    },
    {
      id: 6, categories: ['kaffara'], image: 'HERO.png', pos: '30% 70%', goal: 1200, raised: 480, donors: 22,
      ar: {
        title: 'إطعام عشرة مساكين كفارةً لليمين',
        desc: 'وجبات كاملة تصل إلى أسر محتاجة نيابةً عن دافع الكفارة.',
        story: 'من حنث في يمينه وجبت عليه الكفارة، ومن خصالها إطعام عشرة مساكين. نتولى شراء الطعام وتوزيعه على مستحقيه بأمانة، لتصل كفارتك إلى أهلها.'
      },
      en: {
        title: 'Feed ten people as an oath expiation',
        desc: 'Full meals delivered to families in need on your behalf.',
        story: 'Breaking an oath requires expiation, and one way is feeding ten people in need. We buy and distribute the food faithfully so your kaffara reaches those who deserve it.'
      }
    },
    {
      id: 7, categories: ['fidya'], image: 'HERO.png', pos: '70% 50%', goal: 900, raised: 700, donors: 65,
      ar: {
        title: 'فدية الصيام لكبار السن والمرضى',
        desc: 'إطعام مسكين عن كل يوم لمن عجز عن الصيام.',
        story: 'لمن لا يستطيع الصيام لكبر سنه أو مرضه المزمن، تجب الفدية بإطعام مسكين عن كل يوم. تبرعك يُحوَّل إلى وجبات تصل إلى الأسر المستحقة.'
      },
      en: {
        title: 'Fidya for the elderly and the ill',
        desc: 'Feed one person in need for each missed fasting day.',
        story: 'For those unable to fast due to old age or chronic illness, fidya means feeding a person in need for each day. Your gift is turned into meals for eligible families.'
      }
    },
    {
      id: 8, categories: ['jariya','sadaqa'], image: 'HERO.png', pos: '40% 20%', goal: 12000, raised: 5100, donors: 143,
      ar: {
        title: 'بناء مدرسة في منطقة نائية',
        desc: 'مدرسة تخدم مئات الأطفال لسنوات طويلة.',
        story: 'يقطع الأطفال في هذه المنطقة ساعات للوصول إلى أقرب مدرسة. بناء مدرسة جديدة صدقة جارية يبقى أجرها ما دام يُنتفع بها.'
      },
      en: {
        title: 'Build a school in a remote area',
        desc: 'A school serving hundreds of children for years to come.',
        story: 'Children here travel for hours to reach the nearest school. Building a new one is an ongoing charity whose reward continues as long as it benefits people.'
      }
    },
    {
      id: 9, categories: ['zakat','sadaqa','kaffara'], image: 'HERO.png', pos: '10% 60%', goal: 2500, raised: 1100, donors: 48,
      ar: {
        title: 'كسوة الشتاء لعشرات الأسر',
        desc: 'ملابس دافئة وأغطية تقي الأسر برد الشتاء.',
        story: 'مع اشتداد البرد تفتقر كثير من الأسر إلى الملابس الدافئة والأغطية. الكسوة من خصال الكفارة ومن مصارف الصدقة والزكاة، وتحمي الأطفال وكبار السن.'
      },
      en: {
        title: 'Winter clothing for families',
        desc: 'Warm clothes and blankets to protect families from the cold.',
        story: 'As the cold intensifies, many families lack warm clothes and blankets. Clothing is one of the kaffara options and a valid use of sadaqa and zakat, protecting children and the elderly.'
      }
    }
  ];

  /* ===== فئات التبرع ===== */
  const CATEGORIES = [
    { id: 'zakat',
      ar: { name: 'زكاة', desc: 'أدِّ زكاة مالك لمستحقيها' },
      en: { name: 'Zakat', desc: 'Give your obligatory alms' } },
    { id: 'sadaqa',
      ar: { name: 'صدقة', desc: 'عطاء طوعي يصل لمن يحتاجه' },
      en: { name: 'Sadaqa', desc: 'Voluntary giving to those in need' } },
    { id: 'kaffara',
      ar: { name: 'كفارة', desc: 'إطعام أو كسوة كفارةً عن يمين' },
      en: { name: 'Kaffara', desc: 'Expiation by feeding or clothing' } },
    { id: 'fidya',
      ar: { name: 'فدية', desc: 'فدية الصيام لمن عجز عنه' },
      en: { name: 'Fidya', desc: 'For those unable to fast' } },
    { id: 'jariya',
      ar: { name: 'صدقة جارية', desc: 'أثر باقٍ ينفع صاحبه دائماً' },
      en: { name: 'Sadaqa Jariya', desc: 'Ongoing charity with lasting reward' } }
  ];
  const FEATURED = CASES.filter((c) => c.featured);
  const casesOf = (catId) => CASES.filter((c) => c.categories.includes(catId));
  const AMOUNT_PRESETS = [10, 25, 50, 100];

  const AUTO_INTERVAL_MS = 4000;   // الانتقال التلقائي كل 4 ثوانٍ
  const RESUME_DELAY_MS = 2500;    // استئناف الانتقال بعد انتهاء تفاعل المستخدم
  const DRAG_THRESHOLD_PX = 5;     // أقل مسافة تعتبر سحباً لا نقرة

  /* ===== الأيقونات (SVG خطية تتلون بلون النص) ===== */
  const svgIcon = (d) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICON = {
    leaf: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 21v-8C6 13 3 10 3 4c6 0 9 3 9 8 0-4 3-7 9-7 0 6-3 9-8 9v7z"/></svg>',
    zakat: svgIcon('<path d="M12 21v-8"/><path d="M12 13c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5z"/><path d="M12 16c0-3-2.2-5-6-5 0 3 2.2 5 6 5z"/>'),
    sadaqa: svgIcon('<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>'),
    kaffara: svgIcon('<path d="M3 16h3.5l3.5 2h6.5a1.7 1.7 0 0 0 0-3.4H13"/><path d="M3 14v7h3.5"/><path d="M14 12.5s-5-2.8-5-6a2.6 2.6 0 0 1 5-1.3 2.6 2.6 0 0 1 5 1.3c0 3.2-5 6-5 6z"/>'),
    fidya: svgIcon('<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M8 8.5c0-1.3 1-1.7 1-3M12 8.5c0-1.3 1-1.7 1-3M16 8.5c0-1.3 1-1.7 1-3"/>'),
    jariya: svgIcon('<path d="M4 21v-9h16v9"/><path d="M7 12c0-3.5 2.2-5.5 5-7.5 2.8 2 5 4 5 7.5"/><path d="M12 4.5v-2"/><path d="M10 21v-3.5a2 2 0 0 1 4 0V21"/>'),
    education: svgIcon('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>'),
    water: svgIcon('<path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11z"/>'),
    food: svgIcon('<path d="M4 10h16l-1.5 9h-13z"/><path d="M8 10l3-5M16 10l-3-5"/>'),
    health: svgIcon('<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>'),
    shelter: svgIcon('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>'),
    home: svgIcon('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>'),
    heart: svgIcon('<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>'),
    folder: svgIcon('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'),
    user: svgIcon('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'),
    bell: svgIcon('<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>'),
    menu: svgIcon('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    chevL: svgIcon('<path d="M15 5l-7 7 7 7"/>')
  };

  /* ===== مشاريع تجريبية (كل حالة تنتمي لمشروع عبر الحقل project) ===== */
  const PROJECTS = [
    { id: 'food', image: 'HERO.png', pos: '60% 60%',
      ar: { name: 'إطعام الطعام', desc: 'سلال غذاء ووجبات للأسر المحتاجة' },
      en: { name: 'Feeding', desc: 'Food baskets and meals for families in need' } },
    { id: 'water', image: 'HERO.png', pos: '50% 10%',
      ar: { name: 'المياه', desc: 'آبار ومشاريع مياه نظيفة للقرى' },
      en: { name: 'Water', desc: 'Wells and clean water projects for villages' } },
    { id: 'education', image: 'HERO.png', pos: '80% 30%',
      ar: { name: 'التعليم', desc: 'كفالة الطلاب وبناء المدارس' },
      en: { name: 'Education', desc: 'Sponsoring students and building schools' } },
    { id: 'health', image: 'HERO.png', pos: '50% 85%',
      ar: { name: 'الصحة', desc: 'علاج المرضى وعمليات جراحية عاجلة' },
      en: { name: 'Health', desc: 'Treatment and urgent surgeries for patients' } },
    { id: 'shelter', image: 'HERO.png', pos: '20% 40%',
      ar: { name: 'الإيواء', desc: 'ترميم البيوت وكسوة الأسر' },
      en: { name: 'Shelter', desc: 'Repairing homes and clothing families' } }
  ];
  const CASE_PROJECT = { 1: 'health', 2: 'shelter', 3: 'education', 4: 'water', 5: 'food', 6: 'food', 7: 'food', 8: 'education', 9: 'shelter' };
  CASES.forEach((c) => { c.project = CASE_PROJECT[c.id]; });


  const TYPE_SPEED_MS = 70;          // سرعة ظهور كل حرف
  const AFTER_TYPE_DELAY_MS = 250;   // مهلة بسيطة بعد اكتمال الكتابة
  const BUTTON_DELAY_MS = 1000;      // ثانية واحدة بعد ظهور الجملة الفرعية

  const html = document.documentElement;
  const splash = document.getElementById('splash');
  const splashTyped = document.getElementById('splashTyped');
  const splashCaret = document.querySelector('.splash-caret');
  const splashSubtitle = document.getElementById('splashSubtitle');
  const splashButton = document.getElementById('splashButton');
  const splashButtonLabel = document.getElementById('splashButtonLabel');
  const splashButtonArrow = document.getElementById('splashButtonArrow');

  const home = document.getElementById('home');
  const langButton = document.getElementById('langButton');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroButtonLabel = document.getElementById('heroButtonLabel');
  const heroButtonArrow = document.getElementById('heroButtonArrow');

  const views = {
    home,
    auth: document.getElementById('auth'),
    app: document.getElementById('app'),
    admin: document.getElementById('admin'),
    category: document.getElementById('category'),
    tabPage: document.getElementById('tabPage'),
    caseDetail: document.getElementById('caseDetail')
  };
  const caseCard = document.getElementById('caseCard');
  const tabbar = document.getElementById('tabbar');
  const caseSlides = document.getElementById('caseSlides');
  const casesDots = document.getElementById('casesDots');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const authForm = document.getElementById('authForm');
  const authUser = document.getElementById('authUser');
  const authPass = document.getElementById('authPass');
  const authError = document.getElementById('authError');
  const authSubmitLabel = document.getElementById('authSubmitLabel');
  const tabLogin = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');

  let currentLang = localStorage.getItem('ajrt-lang') || 'ar';
  let splashTimers = [];
  let authMode = 'login';
  let lastError = null;

  function clearSplashTimers() {
    splashTimers.forEach(clearTimeout);
    splashTimers = [];
  }

  function applyDirection(lang) {
    const t = TEXT[lang];
    html.setAttribute('dir', t.dir);
    html.setAttribute('lang', t.lang);
  }

  function applyHomeTexts(lang) {
    const t = TEXT[lang];
    heroTitle.textContent = t.heroTitle;
    heroSubtitle.innerHTML = t.heroSubtitleHTML;
    heroButtonLabel.textContent = t.buttonLabel;
    heroButtonArrow.textContent = t.buttonArrow;
    document.querySelectorAll('.lang-button').forEach((b) => {
      b.textContent = t.langButton;
    });
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t.i18n[el.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t.i18n[el.dataset.i18nAria]);
    });
    updateAuthSubmitLabel();
    if (lastError) authError.textContent = t.errors[lastError];
  }

  /* ===== الحسابات والجلسة ===== */
  function normalizeName(name) {
    return name.trim().replace(/\s+/g, ' ').toLowerCase();
  }

  function loadUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function setSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch (e) {
      return null;
    }
  }

  /* ===== التنقل بين الشاشات ===== */
  function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
      if (key === name) {
        el.removeAttribute('hidden');
        el.classList.remove('is-entering');
        void el.offsetWidth;
        el.classList.add('is-entering');
      } else {
        el.setAttribute('hidden', '');
      }
    });
    if (name === 'app') {
      startAuto();
    } else {
      stopAuto();
    }
    tabbar.hidden = !(name === 'app' || name === 'tabPage');
    if (name === 'app') setActiveTab('home');
    if (name === 'admin') renderAdmin();
    if (name === 'caseDetail' || name === 'category') window.scrollTo(0, 0);
  }

  /* ===== قسم الحالات: السلايدر ===== */
  // أرقام لاتينية ودولار دائماً، معزولة اتجاهياً كي لا تتبعثر داخل نص RTL
  const fmtMoney = (n) => `⁦$${n.toLocaleString('en-US')}⁩`;
  const percentOf = (c) => Math.min(100, Math.round((c.raised / c.goal) * 100));

  let carouselIndex = 0;
  let autoTimer = null;
  let resumeTimer = null;
  let interacting = false;     // المستخدم يتفاعل الآن (لمس/ماوس/تركيز)
  let animating = false;       // انتقال جارٍ: نتجاهل بدء سحب جديد
  let drag = null;             // { id, x, dx, t, moved }
  let suppressClick = false;

  let slideTrack = null;
  let panels = null;           // { prev, cur, next }

  const isRtl = () => getComputedStyle(caseCard).direction === 'rtl';
  const wrap = (i) => (i + FEATURED.length) % FEATURED.length;

  function slideHTML(c) {
    const loc = c[currentLang];
    const t = TEXT[currentLang].i18n;
    return `
      <img class="banner-img" src="${c.image}" alt="" draggable="false" style="object-position:${c.pos}">
      <div class="banner-shade"></div>
      <div class="banner-content">
        <span class="banner-tag">${t.caseTag}</span>
        <h3 class="banner-title">${loc.title}</h3>
        <p class="banner-desc">${loc.desc}</p>
        <div class="banner-progress">
          <div class="banner-row">
            <strong class="banner-pct">${percentOf(c)}%</strong>
            <span class="banner-amt">${fmtMoney(c.raised)} ${t.of} ${fmtMoney(c.goal)}</span>
          </div>
          <div class="banner-bar" aria-hidden="true"><div class="banner-fill" style="width:${percentOf(c)}%"></div></div>
        </div>
      </div>
      <span class="banner-btn">${t.donateBtn}<span class="arrow">←</span></span>`;
  }

  /* نعبّئ اللوحات الثلاث (السابقة/الحالية/التالية) ونضعها جانب الحالية.
     في RTL تأتي "التالية" من اليسار، وفي LTR من اليمين. */
  function fillPanels() {
    const side = isRtl() ? -1 : 1;
    panels.cur.innerHTML = slideHTML(FEATURED[carouselIndex]);
    panels.next.innerHTML = slideHTML(FEATURED[wrap(carouselIndex + 1)]);
    panels.prev.innerHTML = slideHTML(FEATURED[wrap(carouselIndex - 1)]);
    panels.cur.style.transform = 'translateX(0)';
    panels.next.style.transform = `translateX(${side * 100}%)`;
    panels.prev.style.transform = `translateX(${-side * 100}%)`;

    const t = TEXT[currentLang];
    const c = FEATURED[carouselIndex];
    caseCard.setAttribute(
      'aria-label',
      `${c[currentLang].title} — ${t.caseLabel(carouselIndex + 1, FEATURED.length)}`
    );
    updateDots();
  }

  function renderCases() {
    const t = TEXT[currentLang];
    caseSlides.innerHTML = '';
    slideTrack = document.createElement('div');
    slideTrack.className = 'case-track';
    panels = {};
    ['prev', 'cur', 'next'].forEach((k) => {
      const p = document.createElement('div');
      p.className = 'case-panel';
      panels[k] = p;
      slideTrack.appendChild(p);
    });
    caseSlides.appendChild(slideTrack);

    casesDots.innerHTML = '';
    FEATURED.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'cases-dot';
      dot.setAttribute('aria-label', t.caseLabel(i + 1, FEATURED.length));
      dot.addEventListener('click', () => {
        pauseAuto();
        goTo(i);
        scheduleResume();
      });
      casesDots.appendChild(dot);
    });

    carouselIndex = Math.min(carouselIndex, FEATURED.length - 1);
    animating = false;
    fillPanels();
  }

  function updateDots() {
    [...casesDots.children].forEach((d, i) => {
      d.classList.toggle('is-active', i === carouselIndex);
      d.setAttribute('aria-current', i === carouselIndex ? 'true' : 'false');
    });
  }

  /* انتقال إلى الحالة target: forward = اتجاه "التالي" */
  function commit(target, forward, fromPx) {
    if (animating) return;
    animating = true;
    const width = caseCard.offsetWidth;
    const side = isRtl() ? -1 : 1;
    const panel = forward ? panels.next : panels.prev;
    panel.innerHTML = slideHTML(FEATURED[target]);

    // المحتوى يتحرك عكس جهة اللوحة القادمة
    const end = (forward ? -side : side) * width;
    const ms = reducedMotion ? 0 : 350;

    slideTrack.style.transition = 'none';
    slideTrack.style.transform = `translateX(${fromPx || 0}px)`;
    void slideTrack.offsetWidth;
    slideTrack.style.transition = ms ? `transform ${ms}ms cubic-bezier(0.22, 1, 0.36, 1)` : 'none';
    slideTrack.style.transform = `translateX(${end}px)`;

    setTimeout(() => {
      slideTrack.style.transition = 'none';
      slideTrack.style.transform = 'translateX(0)';
      carouselIndex = target;
      fillPanels();
      animating = false;
    }, ms + 30);
  }

  function goTo(i) {
    if (i === carouselIndex || animating) return;
    commit(i, i > carouselIndex, 0);
  }

  function goNext() { commit(wrap(carouselIndex + 1), true, 0); }
  function goPrev() { commit(wrap(carouselIndex - 1), false, 0); }

  function snapBack() {
    animating = true;
    const ms = reducedMotion ? 0 : 250;
    slideTrack.style.transition = ms ? `transform ${ms}ms ease-out` : 'none';
    slideTrack.style.transform = 'translateX(0)';
    setTimeout(() => { animating = false; }, ms + 30);
  }

  /* ===== الانتقال التلقائي والإيقاف المؤقت ===== */
  function startAuto() {
    stopAuto();
    interacting = false;
    if (reducedMotion || FEATURED.length < 2) return;
    autoTimer = setInterval(() => {
      if (interacting || animating || document.hidden || views.app.hidden) return;
      goNext();
    }, AUTO_INTERVAL_MS);
  }

  function stopAuto() {
    clearInterval(autoTimer);
    clearTimeout(resumeTimer);
    autoTimer = null;
  }

  function pauseAuto() {
    interacting = true;
    clearTimeout(resumeTimer);
    clearInterval(autoTimer);
    autoTimer = null;
  }

  function scheduleResume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      if (!views.app.hidden) startAuto();
    }, RESUME_DELAY_MS);
  }

  /* ===== السحب اليدوي (لمس / ماوس / قلم) ===== */
  function initCarousel() {
    caseCard.addEventListener('pointerdown', (e) => {
      if (animating || drag || (e.pointerType === 'mouse' && e.button !== 0)) return;
      pauseAuto();
      drag = { id: e.pointerId, x: e.clientX, dx: 0, t: performance.now(), moved: false };
      try { caseCard.setPointerCapture(e.pointerId); } catch (err) { /* تجاهل */ }
      slideTrack.style.transition = 'none';
    });

    caseCard.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag.dx = e.clientX - drag.x;
      if (Math.abs(drag.dx) > DRAG_THRESHOLD_PX) drag.moved = true;
      if (drag.moved) slideTrack.style.transform = `translateX(${drag.dx}px)`;
    });

    const release = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const { dx, moved, t } = drag;
      drag = null;
      suppressClick = moved;
      setTimeout(() => { suppressClick = false; }, 0);

      if (moved && e.type !== 'pointercancel') {
        const width = caseCard.offsetWidth;
        const velocity = Math.abs(dx) / Math.max(1, performance.now() - t); // px/ms
        const passed = Math.abs(dx) > width * 0.2 || (velocity > 0.5 && Math.abs(dx) > 40);
        // اتجاه "التالي": في RTL سحب لليمين (dx>0)، وفي LTR سحب لليسار (dx<0)
        const nextSign = isRtl() ? 1 : -1;
        if (passed && FEATURED.length > 1) {
          const forward = Math.sign(dx) === nextSign;
          commit(wrap(carouselIndex + (forward ? 1 : -1)), forward, dx);
        } else {
          snapBack();
        }
      } else if (moved) {
        snapBack();
      }
      scheduleResume();
    };
    caseCard.addEventListener('pointerup', release);
    caseCard.addEventListener('pointercancel', release);

    caseCard.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') pauseAuto();
    });
    caseCard.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && !drag) scheduleResume();
    });
    caseCard.addEventListener('focusin', pauseAuto);
    caseCard.addEventListener('focusout', scheduleResume);

    caseCard.addEventListener('click', () => {
      if (suppressClick) return;
      openCase(FEATURED[carouselIndex].id);
    });

    caseCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCase(FEATURED[carouselIndex].id);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        // السهم يتبع جهة السحب: يمين = التالي في RTL، ويسار = التالي في LTR
        const towardNext = (e.key === 'ArrowRight') === isRtl();
        pauseAuto();
        if (towardNext) goNext(); else goPrev();
        scheduleResume();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !views.app.hidden && !interacting) startAuto();
    });
  }

  /* ===== تبرع حسب الفئة + مشاريعنا + صفحة القوائم ===== */
  let listState = { kind: 'category', id: 'zakat' };   // ما تعرضه صفحة القائمة
  let detailReturn = 'app';    // الشاشة التي نعود إليها من صفحة التفاصيل

  const catById = (id) => CATEGORIES.find((c) => c.id === id);
  const catNames = (c) => c.categories.map((id) => catById(id)[currentLang].name).join(currentLang === 'ar' ? '، ' : ', ');

  function renderCategories() {
    const t = TEXT[currentLang];
    const grid = document.getElementById('catsGrid');
    grid.innerHTML = '';
    CATEGORIES.forEach((cat) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'cat-tile';
      b.dataset.cat = cat.id;
      b.setAttribute('aria-label', `${cat[currentLang].name} — ${t.countLabel(casesOf(cat.id).length)}`);
      b.innerHTML = `
        <span class="cat-icon">${ICON[cat.id]}</span>
        <span class="cat-name">${cat[currentLang].name}</span>
        <span class="cat-chev">${ICON.chevL}</span>`;
      b.addEventListener('click', () => openList('category', cat.id));
      grid.appendChild(b);
    });
  }

  function renderProjects() {
    const row = document.getElementById('projectsRow');
    row.innerHTML = '';
    PROJECTS.forEach((p) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'project-card';
      b.innerHTML = `
        <img class="project-img" src="${p.image}" alt="" draggable="false" style="object-position:${p.pos}">
        <span class="project-badge">${ICON[p.id]}</span>
        <span class="project-name">${p[currentLang].name}</span>`;
      b.addEventListener('click', () => openList('project', p.id));
      row.appendChild(b);
    });
  }

  function openList(kind, id) {
    listState = { kind, id };
    renderListPage();
    showView('category');
  }

  function listMeta() {
    const t = TEXT[currentLang];
    if (listState.kind === 'category') {
      const cat = catById(listState.id);
      return { icon: ICON[cat.id], name: cat[currentLang].name, desc: cat[currentLang].desc, cases: casesOf(cat.id), chips: true };
    }
    if (listState.kind === 'project') {
      const p = PROJECTS.find((x) => x.id === listState.id);
      return { icon: ICON[p.id], name: p[currentLang].name, desc: p[currentLang].desc, cases: CASES.filter((c) => c.project === p.id), chips: false };
    }
    return { icon: ICON.leaf, name: t.i18n.allCases, desc: t.i18n.allCasesDesc, cases: CASES, chips: false };
  }

  function renderListPage() {
    const t = TEXT[currentLang];
    const meta = listMeta();
    document.getElementById('catHeroIcon').innerHTML = meta.icon;
    document.getElementById('catHeroName').textContent = meta.name;
    document.getElementById('catHeroDesc').textContent = meta.desc;

    // أزرار تبديل الفئة تظهر فقط عند تصفح فئة
    const chips = document.getElementById('catChips');
    chips.hidden = !meta.chips;
    chips.setAttribute('aria-label', t.i18n.catsTitle);
    chips.innerHTML = '';
    if (meta.chips) {
      CATEGORIES.forEach((c) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'cat-chip' + (c.id === listState.id ? ' is-active' : '');
        b.textContent = c[currentLang].name;
        b.addEventListener('click', () => {
          listState = { kind: 'category', id: c.id };
          renderListPage();
        });
        chips.appendChild(b);
      });
    }

    // الحالات المطابقة فقط (الفئة تقبلها / المشروع يخصها)
    const list = meta.cases;
    document.getElementById('catCount').textContent = list.length
      ? `${listState.kind === 'category' ? t.i18n.catCasesTitle : t.i18n.casesTitle} · ${t.countLabel(list.length)}`
      : t.emptyCat;

    const wrapEl = document.getElementById('catList');
    wrapEl.innerHTML = '';
    list.forEach((c) => {
      const l = c[currentLang];
      const card = document.createElement('article');
      card.className = 'cat-case';
      card.dataset.id = c.id;
      card.innerHTML = `
        <img class="cat-case-img" src="${c.image}" alt="" draggable="false" style="object-position:${c.pos}">
        <div class="cat-case-body">
          <h3 class="case-title">${l.title}</h3>
          <p class="cat-case-desc">${l.desc}</p>
          <p class="cat-case-tags">${t.i18n.accepts} ${catNames(c)}</p>
          <div class="cat-case-amounts">
            <div><span>${t.i18n.raised}</span><strong>${fmtMoney(c.raised)}</strong></div>
            <div><span>${t.i18n.goal}</span><strong>${fmtMoney(c.goal)}</strong></div>
            <div><span>${t.i18n.progress}</span><strong>${percentOf(c)}%</strong></div>
          </div>
          <div class="progress" aria-hidden="true"><div class="progress-fill" style="width:${percentOf(c)}%"></div></div>
          <button type="button" class="hero-button cat-case-btn">${t.i18n.donateBtn}</button>
        </div>`;
      card.addEventListener('click', () => openCase(c.id, 'category'));
      wrapEl.appendChild(card);
    });
  }

  /* ===== شريط التبويبات السفلي وصفحاته ===== */
  let currentTab = 'home';
  const DON_KEY = 'ajrt-donations';

  function loadDonations() {
    try {
      return JSON.parse(localStorage.getItem(DON_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function recordDonation(caseId, amount) {
    const s = getSession();
    if (!s) return;
    const all = loadDonations();
    (all[s.username] = all[s.username] || []).unshift({ caseId, amount, ts: Date.now() });
    localStorage.setItem(DON_KEY, JSON.stringify(all));
  }

  function setActiveTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.tab === tab);
      if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
  }

  function openTab(tab) {
    if (tab === 'home') {
      showView('app');
      return;
    }
    currentTab = tab;
    renderTabPage();
    showView('tabPage');
    setActiveTab(tab);
  }

  function renderTabPage() {
    const t = TEXT[currentLang];
    const s = getSession();
    const el = document.getElementById('tabContent');
    el.innerHTML = '';
    const h1 = document.createElement('h1');
    el.appendChild(h1);

    if (currentTab === 'donations') {
      h1.textContent = t.i18n.tabDonations;
      const list = (s && loadDonations()[s.username]) || [];
      if (!list.length) {
        const p = document.createElement('p');
        p.textContent = t.i18n.noDonations;
        el.appendChild(p);
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'user-list';
      list.forEach((d) => {
        const c = CASES.find((x) => x.id === d.caseId);
        const li = document.createElement('li');
        li.className = 'donation-item';
        const name = document.createElement('span');
        name.textContent = c ? c[currentLang].title : '';
        const amt = document.createElement('strong');
        amt.textContent = fmtMoney(d.amount);
        const date = document.createElement('small');
        date.textContent = new Date(d.ts).toLocaleDateString(currentLang === 'ar' ? 'ar-u-nu-latn' : 'en-US');
        li.append(name, amt, date);
        ul.appendChild(li);
      });
      el.appendChild(ul);
    } else if (currentTab === 'initiatives') {
      h1.textContent = t.i18n.tabInitiatives;
      const p = document.createElement('p');
      p.textContent = t.i18n.soon;
      el.appendChild(p);
    } else {
      h1.textContent = t.i18n.tabAccount;
      const p = document.createElement('p');
      p.textContent = `${t.i18n.username}: ${s ? s.username : ''}`;
      const out = document.createElement('button');
      out.type = 'button';
      out.className = 'hero-button';
      out.textContent = t.i18n.logout;
      out.addEventListener('click', logout);
      el.append(p, out);
    }
  }

  function refreshCategoryViews() {
    renderCategories();
    renderProjects();
    if (!views.category.hidden) renderListPage();
    if (!views.tabPage.hidden) renderTabPage();
  }

  /* ===== صفحة تفاصيل الحالة ===== */
  let openCaseId = null;
  let selectedAmount = null;

  function openCase(id, from = 'app') {
    detailReturn = from;
    openCaseId = id;
    selectedAmount = null;
    document.getElementById('customAmount').value = '';
    document.getElementById('donateMsg').textContent = '';
    renderDetail();
    showView('caseDetail');
  }

  function renderDetail() {
    const c = CASES.find((x) => x.id === openCaseId);
    if (!c) return;
    const loc = c[currentLang];
    const img = document.getElementById('detailImg');
    img.src = c.image;
    img.style.objectPosition = c.pos;
    document.getElementById('detailTitle').textContent = loc.title;
    document.getElementById('detailTags').textContent = `${TEXT[currentLang].i18n.accepts} ${catNames(c)}`;
    document.getElementById('detailStory').textContent = loc.story;
    document.getElementById('detailRaised').textContent = fmtMoney(c.raised);
    document.getElementById('detailGoal').textContent = fmtMoney(c.goal);
    document.getElementById('detailPercent').textContent = percentOf(c) + '%';
    document.getElementById('detailDonors').textContent = c.donors;
    document.getElementById('detailFill').style.width = percentOf(c) + '%';

    const chips = document.getElementById('amountChips');
    chips.innerHTML = '';
    AMOUNT_PRESETS.forEach((amt) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'amount-chip' + (amt === selectedAmount ? ' is-active' : '');
      b.textContent = fmtMoney(amt);
      b.addEventListener('click', () => {
        selectedAmount = amt;
        document.getElementById('customAmount').value = '';
        [...chips.children].forEach((x) => x.classList.toggle('is-active', x === b));
      });
      chips.appendChild(b);
    });
  }

  function handleDonate() {
    const c = CASES.find((x) => x.id === openCaseId);
    const custom = Number(document.getElementById('customAmount').value);
    const amount = custom > 0 ? custom : selectedAmount;
    const msg = document.getElementById('donateMsg');
    const t = TEXT[currentLang].donate;
    if (!c || !amount || amount <= 0) {
      msg.classList.remove('is-ok');
      msg.textContent = t.invalid;
      return;
    }
    // تجريبي: التحديث في الذاكرة فقط بدون بوابة دفع
    c.raised += amount;
    c.donors += 1;
    recordDonation(c.id, amount);
    selectedAmount = null;
    document.getElementById('customAmount').value = '';
    renderDetail();
    renderCases();
    refreshCategoryViews();
    msg.classList.add('is-ok');
    msg.textContent = t.thanks;
  }

  function renderAdmin() {
    const users = loadUsers();
    document.getElementById('adminUsersCount').textContent = users.length;
    const list = document.getElementById('adminUsersList');
    list.innerHTML = '';
    users.forEach((u) => {
      const li = document.createElement('li');
      li.textContent = u.username;
      list.appendChild(li);
    });
  }

  function routeBySession() {
    const s = getSession();
    if (s) {
      showView(s.role === 'admin' ? 'admin' : 'app');
    } else {
      setAuthMode('login');
      showView('auth');
    }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setAuthMode('login');
    showView('home');
  }

  /* ===== نموذج الدخول / التسجيل ===== */
  function updateAuthSubmitLabel() {
    const t = TEXT[currentLang].i18n;
    authSubmitLabel.textContent = authMode === 'login' ? t.loginBtn : t.registerBtn;
  }

  function setAuthMode(mode) {
    authMode = mode;
    tabLogin.classList.toggle('is-active', mode === 'login');
    tabRegister.classList.toggle('is-active', mode === 'register');
    authPass.setAttribute('autocomplete', mode === 'login' ? 'current-password' : 'new-password');
    lastError = null;
    authError.textContent = '';
    updateAuthSubmitLabel();
  }

  function showAuthError(key) {
    lastError = key;
    authError.textContent = TEXT[currentLang].errors[key];
  }

  function handleAuthSubmit(e) {
    e.preventDefault();
    const username = authUser.value.trim().replace(/\s+/g, ' ');
    const password = authPass.value;
    if (!username || !password) return showAuthError('empty');

    const key = normalizeName(username);
    const isAdminName = key === ADMIN_USER;

    if (authMode === 'login') {
      if (isAdminName) {
        if (password !== ADMIN_PASS) return showAuthError('wrong');
        setSession({ username: ADMIN_USER, role: 'admin' });
      } else {
        const user = loadUsers().find((u) => normalizeName(u.username) === key);
        if (!user || user.password !== password) return showAuthError('wrong');
        setSession({ username: user.username, role: 'user' });
      }
    } else {
      const users = loadUsers();
      if (isAdminName || users.some((u) => normalizeName(u.username) === key)) {
        return showAuthError('taken');
      }
      users.push({ username, password });
      saveUsers(users);
      setSession({ username, role: 'user' });
    }

    authForm.reset();
    lastError = null;
    authError.textContent = '';
    routeBySession();
  }

  function applySplashStaticTexts(lang) {
    const t = TEXT[lang];
    splashButtonLabel.textContent = t.buttonLabel;
    splashButtonArrow.textContent = t.buttonArrow;
  }

  /* ===== تأثير الكتابة (Typewriter) ===== */
  function runTypewriter(text, onDone) {
    splashTyped.textContent = '';
    splashCaret.classList.remove('is-done');
    let i = 0;

    function typeNext() {
      if (i < text.length) {
        splashTyped.textContent += text.charAt(i);
        i += 1;
        splashTimers.push(setTimeout(typeNext, TYPE_SPEED_MS));
      } else {
        splashCaret.classList.add('is-done');
        splashTimers.push(setTimeout(onDone, AFTER_TYPE_DELAY_MS));
      }
    }

    typeNext();
  }

  /* ===== تسلسل ظهور عناصر شاشة البداية ===== */
  function playSplashSequence() {
    clearSplashTimers();
    const t = TEXT[currentLang];

    splashSubtitle.textContent = t.splashSubtitle;
    splashSubtitle.classList.remove('is-visible');
    splashButton.classList.remove('is-visible');
    applySplashStaticTexts(currentLang);

    runTypewriter(t.splashTitle, () => {
      splashSubtitle.classList.add('is-visible');
      splashTimers.push(
        setTimeout(() => {
          splashButton.classList.add('is-visible');
        }, BUTTON_DELAY_MS)
      );
    });
  }

  /* ===== الانتقال من شاشة البداية إلى الصفحة الرئيسية ===== */
  function goToHome() {
    clearSplashTimers();
    splash.classList.add('is-leaving');

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      splash.setAttribute('hidden', '');
      routeBySession();
    };

    splash.addEventListener('transitionend', finish, { once: true });
    // شبكة أمان في حال عدم إطلاق transitionend (مثلاً مع تقليل الحركة)
    setTimeout(finish, 700);
  }

  /* ===== تبديل اللغة (من الصفحة الرئيسية) ===== */
  function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('ajrt-lang', currentLang);
    applyDirection(currentLang);
    applyHomeTexts(currentLang);
    renderCases();
    refreshCategoryViews();
    if (openCaseId !== null) {
      document.getElementById('donateMsg').textContent = '';
      renderDetail();
    }
  }

  /* ===== التهيئة ===== */
  function init() {
    applyDirection(currentLang);
    applyHomeTexts(currentLang);
    playSplashSequence();

    splashButton.addEventListener('click', goToHome);
    document.querySelectorAll('.lang-button').forEach((b) => {
      b.addEventListener('click', toggleLanguage);
    });

    document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = ICON[el.dataset.icon]; });
    document.querySelector('.hero-button').addEventListener('click', routeBySession);
    document.getElementById('authBack').addEventListener('click', () => showView('home'));
    document.getElementById('adminLogout').addEventListener('click', logout);
    tabLogin.addEventListener('click', () => setAuthMode('login'));
    tabRegister.addEventListener('click', () => setAuthMode('register'));
    authForm.addEventListener('submit', handleAuthSubmit);

    renderCases();
    initCarousel();
    renderCategories();
    renderProjects();
    document.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => openTab(b.dataset.tab)));
    document.getElementById('viewAllBtn').addEventListener('click', () => openList('all', null));
    const step = (towardNext) => {
      pauseAuto();
      if (towardNext) goNext(); else goPrev();
      scheduleResume();
    };
    // السهم الأيسر = التالي في RTL والسابق في LTR، والأيمن بالعكس
    document.getElementById('arrowLeft').addEventListener('click', () => step(isRtl()));
    document.getElementById('arrowRight').addEventListener('click', () => step(!isRtl()));
    document.getElementById('catBack').addEventListener('click', () => showView('app'));
    document.getElementById('detailBack').addEventListener('click', () => showView(detailReturn));
    document.getElementById('donateSubmit').addEventListener('click', handleDonate);
    document.getElementById('customAmount').addEventListener('input', () => {
      selectedAmount = null;
      document.querySelectorAll('.amount-chip').forEach((x) => x.classList.remove('is-active'));
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();