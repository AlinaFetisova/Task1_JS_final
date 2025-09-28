//Кількість параграфів
const paragraphs=document.querySelectorAll("p");
console.log("Кількість <p>:", paragraphs.length);

//Кількість заголовків
const h2Elements=document.querySelectorAll("h2");
console.log("Кількість <h2>:", h2Elements.length);

// Значення background-color елемента <body>
const bodyBg=window.getComputedStyle(document.body).backgroundColor;
console.log("Background-color <body>:", bodyBg);

// Значення font-size елемента <h1>
const h1=document.querySelector("h1");
if (h1){
  const h1FontSize=window.getComputedStyle(h1).fontSize;
  console.log("Font-size <h1>:", h1FontSize);
} else {
  console.log("На сторінці немає <h1>");
}

const allElements = document.querySelectorAll("*");

allElements.forEach(el => {
  let originalBg = window.getComputedStyle(el).backgroundColor;

  el.addEventListener("mouseenter", () => {
    el.style.backgroundColor = "red";
  });

  el.addEventListener("mouseleave", () => {
    el.style.backgroundColor = originalBg;
  });
});

function loadImages() {
  // Масив з URL зображень
  let imagesUrl = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/754815759.webp?k=86215df7a7c194803219e716dbb25bfd191442a4ff22344c1192dc3bcb12c326&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/281529624.webp?k=85104620dde537ee22ed580abb4950fb54a6db45db60a2fe4b0264f11b6a7ea3&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/105932180.webp?k=a4df5803989ad25c3083a4981b705ddfad7511cff7a9f54108f12ddba9723654&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/274301626.webp?k=2823d823dc9ea4737bb7586b5ee126e91ab660f163a148e715eec35eab4aad66&o="
  ];

  console.log("Масив зображень:", imagesUrl);

  // Обираємо батьківський елемент (не body)
  const parent = document.querySelector(".images"); // клас .images на твоєму контейнері

  if (!parent) {
    console.error("Батьківський елемент не знайдено!");
    return;
  }

  // Створюємо DocumentFragment
  const fragment = document.createDocumentFragment();

  // Використовуємо forEach та setTimeout для появи картинок по одній
  imagesUrl.forEach((url, index) => {
    setTimeout(() => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = `Зображення ${index + 1}`;
      img.style.width = "200px"; // можна стилізувати
      img.style.margin = "5px";

      fragment.appendChild(img);
      parent.appendChild(fragment);
    }, index * 1000); // кожна наступна картинка через 1 сек
  });
}

// Викликаємо через 5 секунд після завантаження сторінки
window.addEventListener("load", () => {
  setTimeout(loadImages, 5000);
});

