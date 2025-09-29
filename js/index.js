import { about_us_cards } from "../data/about-us-cards.js";

const div = document.getElementById("cards");

const cards = about_us_cards.map(({ link, title, image_src, image_alt, heading }, index) => `
        <a href=${link}>
            <div class="card">
                <p class="title">${title}</p>
                <img class="card-img" src=${image_src} alt=${image_alt} />
                <p class="heading">${heading} <i class="fa-sharp fa-solid fa-chevron-right"></i></p>
            </div>
        </a>

        ${index < about_us_cards.length - 1
            ? '<div class="line"></div>'
            : ''
        }
    `
).join('')

div.innerHTML += cards
