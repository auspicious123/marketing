const cardData = [
  {
    slug: "zero-click",
    href: "https://marketingexamples.com/social/zero-click",
    imgSrc: "./images/zc9.jpg",
    alt: "30 secs",
    title: "Same interview. 700x reach.",
    time: "30 secs",
    tagClass: "ct__social",
  },
  {
    slug: "ketones",
    href: "https://marketingexamples.com/creative/ketones",
    imgSrc: "./images/ketones30.jpg",
    alt: "2 mins",
    title: "Posting seltzer. Making money.",
    time: "2 mins",
    tagClass: "ct__creative",
  },
  {
    slug: "lera",
    href: "https://marketingexamples.com/sales/lera",
    imgSrc: "./images/lera.jpg",
    alt: "2 min",
    title: "The saleswoman closing 33% of cold pitches",
    time: "2 min",
    tagClass: "ct__sales",
  },
  {
    slug: "pizza-influencer",
    href: "/content/pizza-influencer",
    imgSrc: "https://ik.imagekit.io/o08ysq9vx/main/pizza9.jpg",
    alt: "2 mins",
    title: "A full-time “pizza influencer”",
    time: "2 mins",
    tagClass: "ct__content",
  },
  {
    slug: "promise",
    href: "/copywriting/promise",
    imgSrc: "https://ik.imagekit.io/o08ysq9vx/main/promise9.jpg",
    alt: "30 secs",
    title: "One of these videos has 18M views",
    time: "30 secs",
    tagClass: "ct__copywriting",
  },
  {
    slug: "trial",
    href: "/landing-page/trial",
    imgSrc: "https://ik.imagekit.io/o08ysq9vx/main/trial30.jpg",
    alt: "30 secs",
    title: "Should you offer a free trial?",
    time: "30 secs",
    tagClass: "ct__landing-page",
  },
];

function generateCards() {
  const outerCardContainer = document.querySelector(".outerCard"); // Make sure you have a container for the cards

  cardData.forEach((card) => {
    const cardElement = document.createElement("a");
    cardElement.className = "card bingo";
    cardElement.setAttribute("data-slug", card.slug);
    cardElement.href = card.href;

    cardElement.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.alt}" />
            <h4>${card.title}</h4>
            <div class="card__bottom">
                <div class="card__bottom-link">
                    <div class="ideaSVG" style="background-image: url('./images/bulbIcon.svg'); width: 21px; height: 21px;"></div>
                    <div class="pCard__bottom-link-text">${card.time}</div>
                </div>
                <div class="card__bottom-tag ${card.tagClass}">${
      card.tagClass.split("__")[1].charAt(0).toUpperCase() + card.tagClass.split("__")[1].slice(1)
    }</div>
            </div>
        `;

    outerCardContainer.appendChild(cardElement); // Append the new card to the container
  });
}

// Call the function to generate the cards when the document is ready
document.addEventListener("DOMContentLoaded", generateCards);
