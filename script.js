const menuOpen = document.querySelector(".menu-open");

const menu = document.querySelector(".mobile-menu");

const menuClose = document.querySelector(".menu-close");

const header = document.querySelector("header .container");

const modalContent = document.querySelector(".popup-content");

const modalWindow = document.querySelector(".popup");

const modalClose = document.querySelector(".close-button");

const next = document.querySelector("#next");

const prev = document.querySelector("#prev");

const nextM = document.querySelector(".next-m");

const prevM = document.querySelector(".prev-m");

const wrapper = document.querySelector(".pet-cards");

const modalWindowsTexts = [
  {
    name: "Jennifer",
    type: "Dog - Labrador",
    id: 2,
    about:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  },
  {
    name: "Sophia",
    type: "Dog - Shih tzu",
    id: 4,
    about:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  },
  {
    name: "Woody",
    type: "Dog - Golden Retriever",
    id: 3,
    about:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  },
  {
    name: "Scarlett",
    type: "Dog - Jack Russell Terrier",
    id: 7,
    about:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  },
  {
    name: "Katrine",
    type: "Cat - British Shorthair",
    id: 1,
    about:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  },
  {
    name: "Timmy",
    type: "Cat - British Shorthair",
    id: 5,
    about:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  },
  {
    name: "Freddie",
    type: "Cat - British Shorthair",
    id: 8,
    about:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  },
  {
    name: "Charly",
    type: "Dog - Jack Russell Terrier ",
    id: 6,
    about:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  },
];

menuOpen.addEventListener("click", (e) => {
  menu.classList.add("visible");
  document.body.style.overflow = "hidden";
  header.style.transition = "1s";
  header.style.opacity = "0";
});

window.addEventListener("click", (e) => {
  if (e.target.contains(menu)) {
    menu.classList.remove("visible");
    document.body.style.overflow = "visible";
    header.style.opacity = "1";
  }
  if (e.target.classList.contains("menu-open")) {
    document.body.style.overflow = "hidden";
    const paragraph = e.target.parentElement.querySelector("p");
    const petName = paragraph.innerText;
    const imgSrc = e.target.parentElement
      .querySelector("img")
      .getAttribute("src");
    modalWindowsTexts.forEach((item) => {
      if (item.name === petName) {
        const img = modalContent.querySelector(".pet-img img");
        const naming = modalContent.querySelector("h3");
        const petType = modalContent.querySelector("p:first-of-type");
        const about = modalContent.querySelector("p:last-of-type");
        img.setAttribute("src", imgSrc);
        naming.innerText = petName;
        petType.innerText = item.type;
        about.innerText = item.about;
      }
    });

    modalWindow.classList.add("visible-modal");
  }
  if (e.target.classList.contains("popup")) {
    modalWindow.classList.remove("visible-modal");
    document.body.style.overflow = "visible";
  }
});

modalClose.addEventListener("click", () => {
  modalWindow.classList.remove("visible-modal");
  document.body.style.overflow = "visible";
});

menuClose.addEventListener("click", (e) => {
  menu.classList.remove("visible");
  document.body.style.overflow = "visible";
  header.style.opacity = "1";
});

// Я пытался сократить код, перенести в window.addEventListener modalClose.addEventListener и menuClose.addEventListener - не работает, так же не работает если я введу эти блоки как условия в if, через логическое или. Пришлость вывести их отдельно. Может я упустил что то из прошлого урока, где мы делали что то подобное, я не уверен.

let i = 1;

function moveRight(x) {
  allDiv.forEach((item) => {
    item.style.transition = "0.25s";
    item.style.transform = `translateX(-${(i + 1) * x}%)`;
  });
  setTimeout(() => {
    const allDiv = document.querySelectorAll(".pet-cards__item");
    const toMove = allDiv[0];
    toMove.remove();
    wrapper.append(toMove);
    allDiv.forEach((item) => {
      item.style.transition = "0s";
      item.style.transform = `translateX(-${x}%)`;
    });
  }, 225);
}

function moveLeft(x) {
  allDiv.forEach((item) => {
    item.style.transition = "0.3s";
    item.style.transform = `translateX(${(i - 1) * x}%)`;
  });
  setTimeout(() => {
    const allDiv = document.querySelectorAll(".pet-cards__item");
    const toMove = allDiv[7];
    toMove.remove();
    wrapper.prepend(toMove);
    allDiv.forEach((item) => {
      item.style.transition = "0s";
      item.style.transform = `translateX(-${x}%)`;
    });
  }, 300);
}

for (let i = 0; i <= modalWindowsTexts.length; i++) {
  modalWindowsTexts.forEach((item) => {
    if (item.id === i) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <img src="./images/pets-${item.name.toLowerCase()}.png" alt="">
      <p>${item.name}</p>
      <button class="menu-open">Learn more</button>`;
      newDiv.classList.add("pet-cards__item", "set-margin");
      wrapper.append(newDiv);
    }
  });
}

const allDiv = document.querySelectorAll(".pet-cards__item");
const lastDiv = allDiv[7];
lastDiv.remove();
wrapper.prepend(lastDiv);

allDiv.forEach((item) => {
  item.style.transform = `translateX(-132%)`;
});

const moblieMedium = window.matchMedia("(max-width: 768px)");

function mobileM(e) {
  if (e.matches) {
    allDiv.forEach((item) => {
      item.style.transform = `translateX(-116%)`;
    });
  }
}

moblieMedium.addListener(mobileM);
mobileM(moblieMedium);

const moblieSmall = window.matchMedia("(max-width: 400px)");

function mobileS(e) {
  if (e.matches) {
    allDiv.forEach((item) => {
      item.style.transform = `translateX(-109%)`;
    });
  }
}

moblieSmall.addListener(mobileS);
mobileS(moblieSmall);

let spam = 1;
function delay() {
  spam += 1;
  setTimeout(() => {
    spam -= 1;
  }, 320);
}

prev.addEventListener("click", () => {
  if (spam > 1) {
    return;
  }
  delay();
  if (moblieSmall.matches) {
    moveLeft(100);
  } else if (moblieMedium.matches) {
    moveLeft(117.5);
  } else {
    moveLeft(134);
  }
});

next.addEventListener("click", () => {
  if (spam > 1) {
    return;
  }
  delay();
  if (moblieSmall.matches) {
    moveRight(100);
  } else if (moblieMedium.matches) {
    moveRight(117.5);
  } else {
    moveRight(134);
  }
});

nextM.addEventListener("click", () => {
  if (spam > 1) {
    return;
  }
  delay();
  if (moblieSmall.matches) {
    moveRight(110);
  } else {
    moveRight(117);
  }
});

prevM.addEventListener("click", () => {
  if (spam > 1) {
    return;
  }
  delay();
  if (moblieSmall.matches) {
    moveLeft(110);
  } else {
    moveLeft(117);
  }
});

// Да, написано, несомненно, с костылями, с огромным количеством костылей, но мне было интересно попробовать реализовать свою идею. быть может, адаптив вышел бы лучше, если бы я задал процентную ширину wrapper для карточек, самим карточкам и их марджинам, но я не стал пробовать.
