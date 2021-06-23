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
  });

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
  });

  return `<h1 class="academy__heading">${academyData.title}</h1> ${academyBodyHTML}`;
}
