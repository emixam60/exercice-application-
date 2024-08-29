const citations = [
  "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
  "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.",
  "Trois sortes d'amis sont utiles, trois sortes d'amis sont néfastes. Les utiles : un ami droit, un ami fidèle, un ami cultivé. Les néfastes : un ami faux, un ami mou, un ami bavard.",
  "La nature fait les hommes semblables, la vie les rend différents.",
  "Agis avec gentillesse, mais n'attends pas de la reconnaissance.",
  "Lorsque l'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide.",
  "Sous un bon gouvernement, la pauvreté est une honte ; sous un mauvais gouvernement, la richesse est aussi une honte.",
  "Je ne cherche pas à connaître les réponses, je cherche à comprendre les question.",
  "Notre plus grande gloire n'est point de tomber, mais de savoir nous relever chaque fois que nous tombons.",
  "Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuve.",
];
const auteur = "Confucius";
let aleatoire = null;
let tweet = "";
let hashtag = "citation";

document.getElementById("generer").addEventListener("click", function () {
  aleatoire = Math.floor(Math.random() * citations.length);
  document.querySelector(".quote").innerHTML = citations[aleatoire];
  document.querySelector(".writer").innerHTML = auteur;
});

document.getElementById("twitter").addEventListener("click", function () {
  tweet = twitter(
    citations[aleatoire],
    140 - auteur.length - hashtag.length - 5
  ); //	- 5 => espace + "-"
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      tweet +
      " - " +
      auteur +
      "&hashtags=" +
      hashtag,
    "twitter",
    "height=300, width=550, scrollbars=0, menubar=0"
  );
});

function twitter(str, num) {
  if (num <= 3) return str.slice(0, num).concat("...");
  else if (num < str.length) return str.slice(0, num - 3).concat("...");
  return str;
}
