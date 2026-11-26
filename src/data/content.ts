// Content of the homepage: only facts from veon/client.json (company.products_services, C-002…C-005, C-021).
// Positions excluded by R-007 (Yandex Market, VKontakte, "Просування Росією") are not shown.

export const contacts = {
  telegram: "https://t.me/ismeyker",
  telegramLabel: "@ismeyker",
  email: "admin@art-web.com.ua",
  emailHref: "mailto:admin@art-web.com.ua?subject=%D0%97%D0%B0%D0%BF%D0%B8%D1%82%20%D0%B7%20%D1%81%D0%B0%D0%B9%D1%82%D1%83",
  address: "79000, Львів, вул. Володимира Великого, 16",
  mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("вул. Володимира Великого, 16, Львів, 79000"),
} as const;

export const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#prices", label: "Ціни" },
  { href: "#shops", label: "Для магазинів" },
  { href: "#about", label: "Про студію" },
  { href: "#contact", label: "Контакти" },
] as const;

export const FUTURE = "Розділ у розробці";

export interface Item { name: string; price: string; }
export interface Direction { id: string; name: string; priceNote?: string; price: string; items: Item[]; more: string; }

export const directions: Direction[] = [
  {
    id: "dev", name: "Створення сайтів", price: "від 7 500 грн",
    items: [
      { name: "Мобільна версія сайту", price: "від 5 000 грн" },
      { name: "Програмування", price: "від 5 000 грн" },
      { name: "Копірайтинг", price: "від 2 500 грн" },
      { name: "Наповнення сайту", price: "від 200 грн" },
    ],
    more: "Детальніше про створення сайтів",
  },
  {
    id: "seo", name: "Просування сайтів", price: "від 2 500 грн",
    items: [
      { name: "Просування сайту", price: "від 2 500 грн" },
      { name: "Копірайтинг", price: "від 2 500 грн" },
    ],
    more: "Детальніше про просування",
  },
  {
    id: "ads", name: "Реклама в інтернеті", priceNote: "контекстна", price: "від 5 000 грн",
    items: [
      { name: "Контекстна реклама", price: "від 5 000 грн" },
      { name: "Банерна реклама", price: "від 5 000 грн" },
      { name: "Лендінг і реклама разом", price: "від 10 000 грн" },
    ],
    more: "Детальніше про рекламу",
  },
  {
    id: "support", name: "Підтримка сайтів", price: "від 2 500 грн",
    items: [
      { name: "Підтримка сайту", price: "від 2 500 грн" },
      { name: "Хостинг", price: "від 1 000 грн" },
      { name: "Домен", price: "від 500 грн" },
    ],
    more: "Детальніше про підтримку",
  },
  {
    id: "design", name: "Дизайн", priceNote: "логотип", price: "7 500 грн",
    items: [
      { name: "Розробка логотипа", price: "7 500 грн" },
      { name: "Дизайн, редизайн сайту", price: "від 10 000 грн" },
      { name: "Банер", price: "500 грн" },
      { name: "Обробка фотографій", price: "від 100 грн" },
    ],
    more: "Детальніше про дизайн",
  },
];

// C-021: ready-made solutions vs individual projects. null = no such offer in the price list.
export const siteTypes: { name: string; ready: string | null; custom: string | null }[] = [
  { name: "Лендінг", ready: "7 500", custom: "15 000" },
  { name: "Інтернет-магазин", ready: "12 500", custom: "25 000" },
  { name: "Сайт-візитка", ready: "7 500", custom: null },
  { name: "Інтернет-каталог", ready: "10 000", custom: null },
  { name: "Корпоративний сайт", ready: null, custom: "20 000" },
  { name: "Бізнес-сайт", ready: null, custom: "47 500" },
];

// company.products_services, group «Для магазинів і продажів».
export const shopItems: Item[] = [
  { name: "Синхронізація з 1С", price: "від 7 500 грн" },
  { name: "Прийом платежів на сайті", price: "7 500 грн" },
  { name: "Інтеграція модулів доставки", price: "від 5 000 грн" },
  { name: "Парсинг", price: "від 5 000 грн" },
  { name: "Кілька цін на товар", price: "від 2 500 грн" },
  { name: "Повідомлення про товар", price: "від 2 500 грн" },
  { name: "Таймер акції", price: "від 1 000 грн" },
  { name: "Наповнення товарами", price: "від 150 грн" },
];

// Non-breaking space inside amounts: "7 500 грн" never splits.
const NBSP = String.fromCharCode(160);
export const nb = (s: string) => s.replace(/(?<=від) | (?=\d{3}(?!\d))|(?<=\d) (?=грн)/g, NBSP);
