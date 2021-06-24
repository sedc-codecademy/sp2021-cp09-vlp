//Academy page render functions

const renderParagraph = data => {
  const renderLinks = data => {
    return `<ul>${data
      .map(link => `<li><a href=${link.url}>${link.title}</a></li>`)
      .join(" ")}</ul>`;
  };

  const renderList = data => {
    return `<${data.type}>${data.content
      .map(listItem => `<li>${listItem}</li>`)
      .join(" ")}</${data.type}`;
  };

  const renderMethods = {
    list: renderList,
    links: renderLinks,
    text: text => text,
  };

  const paragraphBodyHTML = data.content.map(item => {
    const key = Object.keys(item)[0];
    return renderMethods[key](item[key]);
  }).join(` `);

  return `
      <h3 class="academy__sub-heading">${data.title}</h3>
      <div class="academy__paragraph">
       ${paragraphBodyHTML}
      </div>`;
};

const renderCard = data => {
  return `
      <div class="card card__hover--active">
        <div class="card__background"></div>
        <div class="card card__logo__placeholder card__image1">
            <i class="fab fa-html5"></i>
        </div>
        <div class="card__body">
            <h3 class="language__info">${data.cardTitle}</h3>
            <p class="language__description">${data.cardDescription}</p>
            <a
            href="#"
            class="card card__button card__button--active"
            id=${data.id}
            >Read more</a
            >
        </div>
      </div>
    `;
};

const renderCardContainer = data => {
  const cardsHTML = data.cards.map(cardData => renderCard(cardData)).join(" ");

  return `
    <h3 class="academy__sub-heading">${data.title}</h3>
    <section class="cards__container">
      ${cardsHTML}
    </section>
      `;
};

function renderAcademy(academyData) {
  const renderMethods = {
    paragraph: renderParagraph,
    cardContainer: renderCardContainer,
  };

  const academyBodyHTML = academyData.academyContent.map(item => {
    const key = Object.keys(item)[0];
    return renderMethods[key](item[key]);
  }).join(` `)

  return `<h1 class="academy__heading">${academyData.title}</h1> ${academyBodyHTML}`;
}

//Modal window render fuction

const renderModal = (id, data) => {
  const cardData = data
    .map(item => {
      return item.cardContainer?.cards;
    })
    .flat()
    .filter(card => card && card.id === id)[0];

  const modalHTML = `
      <i class="fas fa-times modal__close-btn"></i>
      <h1 class="modal__heading">${cardData.cardTitle}</h1>
      <h3 class="modal__sub-heading">Course summary</h3>
      <div class="modal__paragraph">
        ${cardData.modalData.summary}
      </div>
      <h3 class="modal__sub-heading">Course Progression</h3>
      <div class="modal__vlp-container">
      ${cardData.modalData.progression
        .map(item => `<div class="modal__vlp-box">${item}</div>`)
        .join(" ")}
      </div>
      <h3 class="modal__sub-heading">Further Reading</h3>
      <div class="modal__paragraph">
        <ul>
        ${cardData.modalData.furtherReadingLinks
          .map(link => `<li><a href=${link.url}>${link.title}</a></li>`)
          .join(" ")}
        </ul>
      </div>
      <small
        >This course is part of the
        <a href="#" class="modal__bottom-link">Web Development</a>
        Academy</small
      >
  `;

  return modalHTML;
};

//category cards render function

const renderCategoryCard = data => {
  console.log(data.moduleCardData.content[0]);
  const listHTML = data.moduleCardData.content
    .map(item => {
      return `<li>${item}</li>`;
    })
    .join(" ");

  return `
  <div class="category-card__container">
    <div class="category-card">
        <figure class="category-card__front">
            <h1>${data.moduleCardData?.alternateTitle || data.title}</h1>
        </figure>
        <figure class="category-card__back">
            <ul>
            ${listHTML}
            </ul>
            <a href="#" id=${data.id} class="ccard-link"> GO TO ACADEMY </a>

        </figure>
    </div>
  </div
  `;
};
