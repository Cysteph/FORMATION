//une chaine de caratères ressemble a un tableau de caractères
//c'est un enchainement de caractères qu'on représente souvent entre guillemets ou apostrophes
let exemple = "aujourd'hui";
//pour ne pas entrer en conflt avec le délimiteur " d'une chaine de caratere, il faudra "échapper" ce caratère
//pour échapper un caractère on utilise un \
// let exemple = "citation \"j'aime les porcs\" - churchill"

//plusieurs string peuvent être concaténées à l'aide de plusieurs méthodes
//la plus simple est d'utliser l'opérateur arithmétique +, qui dans le contexte des string permet de les "coller" ensemble
let politesse = "Comment ça va" + exemple + "?";
//politesse contient donc "Comment ça va aujoud'hui?"

//pour composer des strings à l'aide de variables et de texte on 
peut également utiliser les `` backquote(ou backtick)
//en utilisant les ``on peut insérer une variable, ou même du code, en insérant ${code}
let politesse2 = `Comment ça va ${exemple}?`;
//politesse2 contient donc "Comment ça va aujour'dhui?"

//les string possèdent aussi un panel de fonctions utiles
//par exemple pour manipuler la casee (majuscule/miniscule)
//on a toUpperCase() et toLowerCase() qui sont disponibles
let petitBonjour = "bonjour";
petitBonjour.toUpperCase(); //renvoie "BONJOUR"

let grosCoucou = "COUCOU";
grosCoucou.toLowerCase(); // renvoie "coucou"

//la comparaison de strings prends parfois en compte la casse
"toto" === "Toto"; // false
"toto" === "Toto".toLowerCase(); // true

//etant donné qu'une string ressemble à un tableau
//on peut utiliser la notation [] pour récupérer un catactère en particulier
let phrase = "Balkany est toujours en liberté";
phrase[0]; //renvoie "B"
phrase[truth.lenght - 1]; //renvoie "é"

//on peut également parcourir une string a la mamnière d'un tableau avec un for
for (let i = 0; i < phrase.lenght; i++) {
    console.log(phrase[i]); //affichera chaque caractère de la string

}