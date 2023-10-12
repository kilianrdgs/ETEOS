const list_article = document.getElementById("list-article");

var test = document.getElementById("test");

varIdBox = 0;

function createArticle(nbArticle) {
  for (let i = 0; i < nbArticle; i++) {
    const randomImage = Math.floor(Math.random() * mabase[0].image.length);
    const randomshoes = Math.floor(Math.random() * mabase[0].name.length);
    const randomOwner = Math.floor(Math.random() * mabase[0].owner.length);
    const randomKey = Math.floor(Math.random() * mabase[0].key.length);
    const randomCountry = Math.floor(Math.random() * mabase[0].country.length);
    const randomStatut = Math.floor(Math.random() * mabase[0].statut.length);

    console.log(
      "Article généré : " +
        mabase[0].name[randomshoes] +
        " Propriétaire : " +
        mabase[0].owner[randomOwner] +
        " clef blockchain : " +
        mabase[0].key[randomKey] +
        " Pays : " +
        mabase[0].country[randomCountry] +
        " statut : " +
        mabase[0].statut[randomStatut] +
        " image : " +
        mabase[0].image[randomImage]
    );

    //creation div principale
    const detailArticle = document.createElement("div");
    detailArticle.className = "list-article-detail-article";
    detailArticle.id = "Article" + varIdBox;
    list_article.appendChild(detailArticle);

    //creation des 5 box
    for (let i = 0; i < 5; i++) {
      const box = document.createElement("div");
      box.className = "box";
      box.id = "Article" + varIdBox + "box" + i;
      detailArticle.appendChild(box);
    }

    // creation image
    const img = document.createElement("img");
    img.setAttribute("src", mabase[0].image[randomImage]);
    document.getElementById("Article" + varIdBox + "box" + 0).appendChild(img);

    //creation name
    const name = document.createElement("p");
    name.innerHTML = mabase[0].name[randomshoes];
    document.getElementById("Article" + varIdBox + "box" + 0).appendChild(name);

    //creation owner
    const owner = document.createElement("p");
    owner.innerHTML = mabase[0].owner[randomOwner];
    owner.id = "owner";
    document
      .getElementById("Article" + varIdBox + "box" + 1)
      .appendChild(owner);

    //creation key
    const key = document.createElement("p");
    key.innerHTML = mabase[0].key[randomKey];
    key.id = "key";
    document.getElementById("Article" + varIdBox + "box" + 2).appendChild(key);

    //creation country
    const country = document.createElement("p");
    country.innerHTML = mabase[0].country[randomCountry];
    country.id = "country";
    document
      .getElementById("Article" + varIdBox + "box" + 3)
      .appendChild(country);

    //creation statut
    const history = document.createElement("p");
    history.innerHTML = mabase[0].statut[randomStatut];
    if (history.textContent.includes("Première Main")) {
      history.id = "history-" + 1;
    } else if (history.textContent.includes("En SAV")) {
      history.id = "history-" + 2;
    } else if (history.textContent.includes("Seconde Main")) {
      history.id = "history-" + 3;
    } else if (
      history.textContent.includes("Perdu") ||
      history.textContent.includes("Volé")
    ) {
      history.id = "history-" + 4;
    }

    document
      .getElementById("Article" + varIdBox + "box" + 4)
      .appendChild(history);

    varIdBox = varIdBox + 1;
  }
}

//-------------------------------------------
const mabase = [
  {
    id: 1,
    image: [
      "/img/shoes.jpg",
      "/img/shoes2.jpeg",
      "/img/shoes3.jpeg",
      "/img/shoes4.jpeg",
      "/img/shoes5.jpeg",
      "/img/shoes6.jpeg",
      "/img/shoes7.jpeg",
    ],
    name: [
      "Irisa",
      "Hot Chick Sling",
      "Astrida Bride",
      "So jane sling",
      "Kate",
      "So Kate",
    ],
    owner: [
      "Anne Bertin",
      "Camille Martin",
      "Marie Dupont",
      "Chloé Bernard",
      "Élise Moreau",
      "Margot Piazzi",
      "Lisa Ficher",
      "Emilie Lefebvre",
      "Clara Dubois",
      "Juliette Rousseau",
      "Charlotte Dubois",
      "Manon Girard",
      "Alice Lambert",
      "Sophie Giraud",
      "Léa Morel",
    ],
    key: ["Oxe8A7 ...5283f", "Oxe467 ...5183f", "OxeA87 ...2611f"],
    country: ["France", "USA", "UK", "Chine", "Italie", "Espagne", "Suisse"],
    statut: ["Première Main", "Seconde Main", "En SAV", "Perdu", "Volé"],
    idStatut: [1, 2, 3, 4],
  },
];

createArticle(30);
