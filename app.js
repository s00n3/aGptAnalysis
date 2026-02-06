const heroSlides = [
  {
    title: "Клинический центр наук о здоровье",
    subtitle: "Единая экосистема для высокотехнологичной и специализированной медицинской помощи",
    cta: "Записаться",
    badge: "Экспертно",
  },
  {
    title: "Роботическое протезирование коленного сустава",
    subtitle: "Высокие технологии в ортопедии (УКБ №1)",
    cta: "Узнать больше",
    badge: "2026",
  },
  {
    title: "Красивые стопы",
    subtitle: "Современная коррекция вальгусной деформации",
    cta: "Подробнее",
    badge: "Акция",
  },
  {
    title: "Онкология УКБ №1",
    subtitle: "Хирургия и противоопухолевая терапия",
    cta: "Записаться",
    badge: "ВМП",
  },
  {
    title: "ЛОР УКБ №1",
    subtitle: "Диагностика слуха и микрохирургия",
    cta: "Узнать больше",
    badge: "Экспертно",
  },
  {
    title: "Телемедицина",
    subtitle: "Второе мнение и консультации онлайн",
    cta: "Перейти",
    badge: "Онлайн",
  },
];

const searchChips = [
  "Кардиология",
  "МРТ",
  "КТ",
  "Онкология",
  "Урология",
  "Гинекология",
  "Неврология",
  "Гастроэнтерология",
];

const searchSuggestions = [
  {
    group: "Услуги",
    items: ["МРТ головного мозга", "УЗИ сердца", "Чек-ап для женщин"],
  },
  {
    group: "Врачи",
    items: ["Кардиолог", "Ортопед-травматолог", "Онколог"],
  },
  {
    group: "Программы",
    items: ["Планирование беременности", "Паразитология", "Онкоскрининг"],
  },
  {
    group: "Новости",
    items: ["Новый корпус УКБ №2", "Телемедицинские консультации"],
  },
];

const structureItems = [
  {
    title: "УКБ №1",
    subtitle: "Многопрофильный стационар",
    text: "Хирургия, терапия, онкология",
  },
  {
    title: "УКБ №2",
    subtitle: "Стационар и диагностика",
    text: "Современное оборудование и команды",
  },
  {
    title: "УКБ №3",
    subtitle: "Центр специализированной помощи",
    text: "Комплексные маршруты",
  },
  {
    title: "УКБ №4",
    subtitle: "Амбулаторное звено",
    text: "Запись к врачу и обследования",
  },
  {
    title: "УКБ №5",
    subtitle: "Лаборатории и исследования",
    text: "Инновационные методики",
  },
  {
    title: "Центр материнства и детства",
    subtitle: "Перинатальные программы",
    text: "Полный цикл для семьи",
  },
  {
    title: "Центр кардиоангиологии",
    subtitle: "НПЦИК",
    text: "Сосудистая хирургия",
  },
  {
    title: "Институт стоматологии",
    subtitle: "им. Е.В. Боровского",
    text: "Стоматология полного цикла",
  },
  {
    title: "Институт мед. паразитологии",
    subtitle: "им. Е.И. Марциновского",
    text: "Экспертиза и программы",
  },
];

const newsItems = Array.from({ length: 6 }, (_, index) => ({
  date: `0${index + 1}.09.2026`,
  title: `Новая программа профилактики №${index + 1}`,
  text: "Короткий анонс события или обновления для пациентов.",
}));

const advantages = [
  {
    title: "Высокотехнологичная помощь",
    subtitle: "Современные операционные и передовые методики",
    text: "Возможности высоких технологий, включая робот-ассистированные подходы там, где это показано.",
    large: true,
  },
  {
    title: "Команда экспертов",
    subtitle: "Консилиумы и междисциплинарный подход",
    text: "Согласованные решения и ведущие специалисты.",
  },
  {
    title: "Полный цикл помощи",
    subtitle: "Диагностика → лечение → реабилитация",
    text: "Комплексный маршрут пациента.",
  },
  {
    title: "Современная диагностика",
    subtitle: "Лабораторные и инструментальные исследования",
    text: "Экспресс-диагностика и точность.",
  },
  {
    title: "Телемедицина",
    subtitle: "Консультации онлайн и второе мнение",
    text: "Доступность и оперативность.",
  },
  {
    title: "Качество и безопасность",
    subtitle: "Контроль сервиса и стандарты помощи",
    text: "Пациентский опыт и безопасность.",
  },
];

const stats = [
  "3000+ специалистов",
  "9 ключевых подразделений",
  "Ежедневно 8:00–20:00 контакт-центр",
];

const bookingItems = [
  {
    title: "Онлайн-запись",
    subtitle: "Быстро — без звонка",
    cta: "Запись к врачу",
    action: "appointment",
  },
  {
    title: "Телемедицина",
    subtitle: "Консультация онлайн",
    cta: "Перейти",
    link: "https://telemed.sechenovclinic.ru",
  },
  {
    title: "Личный кабинет",
    subtitle: "Всё под рукой",
    cta: "Перейти",
    link: "https://lk.sechenovclinic.ru",
  },
  {
    title: "Колл-центр",
    subtitle: "Подберём специалиста",
    cta: "Заказать звонок",
    action: "callback",
  },
];

const promoItems = Array.from({ length: 4 }, (_, index) => ({
  badge: "Акция",
  period: `до 30.0${index + 1}.2026`,
  title: `Комплексный чек-ап №${index + 1}`,
  text: "Условия: комплекс обследований и консультация.",
}));

const programTabs = [
  "Для женщин",
  "Для мужчин",
  "Для детей",
  "Паразитология",
  "Планирование беременности",
  "Пластическая хирургия",
];

const programCards = [
  {
    category: "Паразитология",
    title: "Паразитологический профиль",
    text: "Полное обследование и рекомендации специалиста.",
    cta: "Подробности",
  },
  {
    category: "Для женщин",
    title: "Женское здоровье",
    text: "Профилактика, обследования и консультации.",
    cta: "Записаться",
  },
  {
    category: "Для мужчин",
    title: "Мужское здоровье",
    text: "Диагностика и консультация профильных врачей.",
    cta: "Узнать больше",
  },
  {
    category: "Для детей",
    title: "Детский чек-ап",
    text: "Бережный подход и лучшие специалисты.",
    cta: "Подробнее",
  },
  {
    category: "Планирование беременности",
    title: "Планирование беременности",
    text: "Подготовка и сопровождение семьи.",
    cta: "Записаться",
  },
  {
    category: "Пластическая хирургия",
    title: "Пластическая хирургия",
    text: "Эстетика и безопасность под контролем.",
    cta: "Консультация",
  },
];

const specialists = Array.from({ length: 10 }, (_, index) => ({
  name: `Д-р Алексей Иванов ${index + 1}`,
  speciality: "Сосудистый хирург",
  experience: `${5 + index} лет стажа · высшая категория",
  location: "УКБ №1",
}));

const reviews = Array.from({ length: 8 }, (_, index) => ({
  text: "Спасибо за внимательное отношение и точный маршрут лечения.",
  author: `И.Б. ${index + 1}`,
  date: `0${index + 1}.08.2026`,
  direction: "Кардиология",
}));

const locations = [
  {
    name: "УКБ №1",
    address: "ул. Плющиха, 14",
    metro: "м. Киевская",
    type: "Больницы",
  },
  {
    name: "УКБ №2",
    address: "ул. Б. Пироговская, 2",
    metro: "м. Фрунзенская",
    type: "Больницы",
  },
  {
    name: "УКБ №3",
    address: "ул. Россолимо, 11",
    metro: "м. Парк культуры",
    type: "Больницы",
  },
  {
    name: "УКБ №4",
    address: "ул. Погодинская, 1",
    metro: "м. Спортивная",
    type: "Больницы",
  },
  {
    name: "УКБ №5",
    address: "ул. Трубецкая, 8",
    metro: "м. Фрунзенская",
    type: "Больницы",
  },
  {
    name: "Центр материнства и детства",
    address: "ул. Еланского, 2",
    metro: "м. Лужники",
    type: "Центры",
  },
  {
    name: "Центр кардиоангиологии",
    address: "ул. Погодинская, 10",
    metro: "м. Спортивная",
    type: "Центры",
  },
  {
    name: "Институт стоматологии",
    address: "ул. Можайский Вал, 11",
    metro: "м. Киевская",
    type: "Институты",
  },
  {
    name: "Институт мед. паразитологии",
    address: "ул. Малая Пироговская, 20",
    metro: "м. Фрунзенская",
    type: "Институты",
  },
];

const faqItems = [
  {
    question: "Как записаться к врачу?",
    answer: "Выберите способ записи: онлайн, телемедицина или колл-центр. Мы поможем выбрать специалиста и время.",
  },
  {
    question: "Сколько стоит консультация врача?",
    answer: "Стоимость зависит от специализации. Ознакомьтесь с прейскурантом: https://sechenovclinic.ru/patients/price/",
  },
  {
    question: "Как получить справку для налогового вычета?",
    answer: "Оставьте запрос в контактном центре — подготовим документы и подскажем порядок получения.",
  },
  {
    question: "Как получить ВМП?",
    answer: "Мы поможем собрать документы и пройти экспертную комиссию. Консультируем через контактный центр.",
  },
  {
    question: "Какие документы нужны на приём?",
    answer: "Паспорт, полис ОМС/ДМС при наличии, направления и результаты обследований.",
  },
  {
    question: "Куда отправить отзыв?",
    answer: "Отправьте отзыв через форму или на clinic@staff.sechenov.ru — мы ответим в ближайшее время.",
  },
];

const heroContainer = document.getElementById("heroSlides");
const structureGrid = document.getElementById("structureGrid");
const newsGrid = document.getElementById("newsGrid");
const advantagesMosaic = document.getElementById("advantagesMosaic");
const statsContainer = document.getElementById("stats");
const bookingGrid = document.getElementById("bookingGrid");
const promoGrid = document.getElementById("promoGrid");
const programTabsContainer = document.getElementById("programTabs");
const programGrid = document.getElementById("programGrid");
const specialistsSlides = document.getElementById("specialistsSlides");
const reviewsSlides = document.getElementById("reviewsSlides");
const locationList = document.getElementById("locationList");
const locationFilters = document.getElementById("locationFilters");
const faqAccordion = document.getElementById("faqAccordion");
const searchChipsContainer = document.getElementById("searchChips");
const suggestionsBox = document.getElementById("smartSearchSuggestions");

const renderHero = () => {
  heroContainer.innerHTML = heroSlides
    .map(
      (slide) => `
      <div class="swiper-slide">
        <div class="hero-slide">
          <div>
            <span class="badge">${slide.badge}</span>
            <h1>${slide.title}</h1>
            <p>${slide.subtitle}</p>
            <button class="btn btn-light" data-modal="appointment">${slide.cta}</button>
          </div>
          <div class="hero-image">🩺</div>
        </div>
      </div>`
    )
    .join("");
};

const renderCards = (items, container, badge = "") => {
  container.innerHTML = items
    .map(
      (item) => `
      <div class="card">
        ${badge ? `<span class="badge">${badge}</span>` : ""}
        <h3>${item.title}</h3>
        <strong>${item.subtitle || ""}</strong>
        <p>${item.text || ""}</p>
        <span class="cta">О подразделении →</span>
      </div>`
    )
    .join("");
};

const renderStructure = () => {
  structureGrid.innerHTML = structureItems
    .map(
      (item) => `
      <div class="card">
        <span class="badge">Экспертно</span>
        <h3>${item.title}</h3>
        <strong>${item.subtitle}</strong>
        <p>${item.text}</p>
        <span class="cta">О подразделении →</span>
      </div>`
    )
    .join("");
};

const renderNews = () => {
  newsGrid.innerHTML = newsItems
    .map(
      (item) => `
      <div class="card">
        <div class="image"></div>
        <span class="badge">Новости</span>
        <small>${item.date}</small>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`
    )
    .join("");
};

const renderAdvantages = () => {
  advantagesMosaic.innerHTML = advantages
    .map(
      (item) => `
      <div class="card ${item.large ? "large" : ""}">
        <h3>${item.title}</h3>
        <strong>${item.subtitle}</strong>
        <p>${item.text}</p>
      </div>`
    )
    .join("");

  statsContainer.innerHTML = stats.map((item) => `<div class="stat">${item}</div>`).join("");
};

const renderBooking = () => {
  bookingGrid.innerHTML = bookingItems
    .map((item) => {
      const action = item.action ? `data-modal="${item.action}"` : "";
      const link = item.link ? `href="${item.link}" target="_blank" rel="noreferrer"` : "href=\"#\"";
      return `
        <div class="card">
          <span class="badge">Онлайн</span>
          <h3>${item.title}</h3>
          <p>${item.subtitle}</p>
          <a class="cta" ${action} ${link}>${item.cta} →</a>
        </div>`;
    })
    .join("");
};

const renderPromos = () => {
  promoGrid.innerHTML = promoItems
    .map(
      (item) => `
      <div class="card">
        <div class="image"></div>
        <span class="badge">${item.badge}</span>
        <small>${item.period}</small>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <span class="cta">Подробнее →</span>
      </div>`
    )
    .join("");
};

const renderProgramTabs = () => {
  programTabsContainer.innerHTML = programTabs
    .map((tab, index) => `<button class="chip ${index === 0 ? "active" : ""}" data-tab="${tab}">${tab}</button>`)
    .join("");
};

const renderPrograms = (category = programTabs[0]) => {
  programGrid.innerHTML = programCards
    .filter((item) => item.category === category)
    .map(
      (item) => `
      <div class="card">
        <span class="badge">Программа</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <span class="cta">${item.cta} →</span>
      </div>`
    )
    .join("");
};

const renderSpecialists = () => {
  specialistsSlides.innerHTML = specialists
    .map(
      (doctor) => `
      <div class="swiper-slide">
        <div class="specialist-card">
          <div class="photo">👩‍⚕️</div>
          <span class="badge">Экспертно</span>
          <h3>${doctor.name}</h3>
          <p>${doctor.speciality}</p>
          <small>${doctor.experience}</small>
          <small>${doctor.location}</small>
          <div class="actions">
            <button class="btn btn-primary" data-modal="appointment" data-doctor="${doctor.name}">Записаться</button>
            <a class="btn btn-ghost" href="#">Профиль</a>
          </div>
        </div>
      </div>`
    )
    .join("");
};

const renderReviews = () => {
  reviewsSlides.innerHTML = reviews
    .map(
      (review) => `
      <div class="swiper-slide">
        <div class="review-card">
          <span class="badge">Отзывы</span>
          <p>“${review.text}”</p>
          <strong>${review.author}</strong>
          <small>${review.date} • ${review.direction}</small>
        </div>
      </div>`
    )
    .join("");
};

const renderLocationFilters = () => {
  const filters = ["Все", "Больницы", "Институты", "Центры"];
  locationFilters.innerHTML = filters
    .map((filter, index) => `<button class="chip ${index === 0 ? "active" : ""}" data-filter="${filter}">${filter}</button>`)
    .join("");
};

const renderLocations = (filter = "Все") => {
  const filtered = filter === "Все" ? locations : locations.filter((item) => item.type === filter);
  locationList.innerHTML = filtered
    .map(
      (item) => `
      <div class="location-card">
        <h3>${item.name}</h3>
        <p>${item.address}</p>
        <small>${item.metro}</small>
        <div class="actions">
          <button class="btn btn-ghost">Как добраться</button>
          <button class="btn btn-primary" data-modal="appointment">Записаться</button>
          <button class="btn btn-ghost">О подразделении</button>
        </div>
      </div>`
    )
    .join("");
};

const renderFaq = () => {
  faqAccordion.innerHTML = faqItems
    .map(
      (item, index) => `
      <div class="accordion-item ${index === 0 ? "active" : ""}">
        <button class="accordion-header" aria-expanded="${index === 0}" aria-controls="faq-${index}">
          ${item.question}
          <span>+</span>
        </button>
        <div class="accordion-body" id="faq-${index}">
          <p>${item.answer}</p>
        </div>
      </div>`
    )
    .join("");
};

const renderSearchChips = () => {
  searchChipsContainer.innerHTML = searchChips.map((chip) => `<button class="chip">${chip}</button>`).join("");
};

const renderSearchSuggestions = () => {
  suggestionsBox.innerHTML = searchSuggestions
    .map(
      (group) => `
      <div>
        <h5>${group.group}</h5>
        <ul>
          ${group.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");
};

const initSwipers = () => {
  // eslint-disable-next-line no-undef
  new Swiper(".hero-swiper", {
    loop: true,
    autoplay: { delay: 7000 },
    pagination: { el: ".hero .swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".hero .swiper-button-next",
      prevEl: ".hero .swiper-button-prev",
    },
  });

  // eslint-disable-next-line no-undef
  new Swiper(".specialists-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: { el: ".specialists .swiper-pagination", clickable: true },
    breakpoints: {
      768: { slidesPerView: 2.2 },
      1024: { slidesPerView: 3.2 },
      1280: { slidesPerView: 4 },
    },
  });

  // eslint-disable-next-line no-undef
  new Swiper(".reviews-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    pagination: { el: ".reviews .swiper-pagination", clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
};

const toggleDropdown = (button, menu) => {
  const isOpen = menu.classList.contains("show");
  menu.classList.toggle("show", !isOpen);
  button.setAttribute("aria-expanded", String(!isOpen));
};

const initDropdowns = () => {
  const headerToggle = document.getElementById("appointmentToggle");
  const headerMenu = document.getElementById("appointmentMenu");
  const finalToggle = document.getElementById("finalAppointmentToggle");
  const finalMenu = document.getElementById("finalAppointmentMenu");

  headerToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(headerToggle, headerMenu);
  });

  finalToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(finalToggle, finalMenu);
  });

  document.addEventListener("click", () => {
    headerMenu.classList.remove("show");
    finalMenu.classList.remove("show");
  });
};

const initSearch = () => {
  const searchToggle = document.getElementById("searchToggle");
  const searchBox = document.getElementById("searchBox");
  const smartInput = document.getElementById("smartSearchInput");

  searchToggle.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    searchBox.setAttribute("aria-hidden", String(!searchBox.classList.contains("active")));
  });

  smartInput.addEventListener("focus", () => {
    suggestionsBox.classList.add("show");
  });

  smartInput.addEventListener("blur", () => {
    setTimeout(() => suggestionsBox.classList.remove("show"), 200);
  });
};

const initTabs = () => {
  programTabsContainer.addEventListener("click", (event) => {
    if (!event.target.matches(".chip")) return;
    programTabsContainer.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
    event.target.classList.add("active");
    renderPrograms(event.target.dataset.tab);
  });
};

const initLocationFilters = () => {
  locationFilters.addEventListener("click", (event) => {
    if (!event.target.matches(".chip")) return;
    locationFilters.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
    event.target.classList.add("active");
    renderLocations(event.target.dataset.filter);
  });
};

const initAccordion = () => {
  faqAccordion.addEventListener("click", (event) => {
    const header = event.target.closest(".accordion-header");
    if (!header) return;
    const item = header.parentElement;
    const isActive = item.classList.contains("active");
    faqAccordion.querySelectorAll(".accordion-item").forEach((accordion) => {
      accordion.classList.remove("active");
      accordion.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
    });
    item.classList.toggle("active", !isActive);
    header.setAttribute("aria-expanded", String(!isActive));
  });
};

const initMobileMenu = () => {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  const toggleMenu = (show) => {
    mobileMenu.classList.toggle("show", show);
    mobileMenu.setAttribute("aria-hidden", String(!show));
    burger.setAttribute("aria-expanded", String(show));
  };

  burger.addEventListener("click", () => toggleMenu(true));
  closeMenu.addEventListener("click", () => toggleMenu(false));
};

const initModals = () => {
  const modals = {
    callback: document.getElementById("callbackModal"),
    appointment: document.getElementById("appointmentModal"),
    review: document.getElementById("reviewModal"),
  };

  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-modal]");
    if (trigger) {
      event.preventDefault();
      const name = trigger.dataset.modal;
      const modal = modals[name];
      if (!modal) return;
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      if (name === "appointment" && trigger.dataset.doctor) {
        document.getElementById("appointmentComment").value = `Интересует врач: ${trigger.dataset.doctor}`;
      }
    }

    if (event.target.matches(".modal") || event.target.matches("[data-close='modal']")) {
      Object.values(modals).forEach((modal) => {
        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");
      });
    }
  });
};

const init = () => {
  renderHero();
  renderSearchChips();
  renderSearchSuggestions();
  renderStructure();
  renderNews();
  renderAdvantages();
  renderBooking();
  renderPromos();
  renderProgramTabs();
  renderPrograms();
  renderSpecialists();
  renderReviews();
  renderLocationFilters();
  renderLocations();
  renderFaq();
  initSwipers();
  initDropdowns();
  initSearch();
  initTabs();
  initLocationFilters();
  initAccordion();
  initMobileMenu();
  initModals();
};

init();
