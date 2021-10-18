//Un tableau est une structure de données
//permettant de stocker un jeu de données de même type
// En JS (et en programmation en général) un tableau se déclare à l'aide de crochets[]
let taleauVide = [];

//un tableau contient des "cases", chaque case contient une donnée
//losrqu'on déclare un tableau, chaque nouvelle case est séparée par une virgule
//                         0        1           2
let listeCourses = ["eponges", "pates", "sauce tomate"];
//la numerotation des cases commence à 0
//pour accéder à une valeur stockée dans un tableau, on utlise l'indice de cette valeur
console.log(listeCourses[0]); //affiche "eponges" dans la console
console.log(listeCourses[2]); //affiche "sauce tomate" dans la console
console.log(listeCourses[3]); //affiche undefined dans la console

//pour récupérer la taille d'un tableau, on peut récuprer nomDuTableau.length
console.log(listeCourses.length); //va afficher 3 dans la console
//si la première case du tableau se trouve à nomDuTableau[0]
//la dernière elle se trouve à nomDuTableau[nomDuTableau.length-1]
console.log(listeCourses[listeCourses.length - 1]) //affiche "sauce tomate"



//pour parcourir la totalité d'un tableau, une bonne méthode est d'utliser une boucle
//la boucle for est toute indiquée, on fait partir i à 0 (la première case)
//et on avance de case en case (i = i+1)
for (let i = 0; i < listeCourses.length; i = i+1){
    //pour chaque tour de boucle on peut ensuite utliser i comme indice de tableau console.log(listeCourses[i]; //affiche chaque case)
}

//pour rajouter un élément à la fin d'un tableau, on peut utiliser tableau.push (element)
listeCourses.push("poivre"); //["eponges", "pates", "sauce tomate", "poivre"]
console.log(listeCourses[3]); //affiche "poivre" dans la console

//pour retirer et récupérer le dernier élément d'un tableau
//on peut utiliser tableau.pop()
console.log(listeCourses.pop()); // affiche "poivre" et supprime "poivre" du tableau

//pour rajouter un élément au début du tableau on peut utiliser tableau.unshif(elem)

listeCourses.unshift("whisky"); //["whisky", "éponges", "pates", "sauce tomate"]

//pour supprimer le premier élément du tableau on peut utiliser tableau.shift()
console.log(listeCourses.shift()); //affiche "whisky" et supprime "whisky" du tableau

//tableau.splice() permet de raccorder, supprimer, remplacer des éléments dans un tableau
// a la case 1, je supprime 1 élément, et j'insère l'élément "pates completes"
listeCourses.splice(1, 1, "pates completes");
//["éponges", "pates comp^letes", "sauce tomate"]
listeCourses.splice(2, 0, "parmesan", "pesto");
//["eponges", "pates com^pletes", "parmesan", "pesto", "sauce tomate"]
//je supprime un éléménet à la case 3
listeCourses.splice (3, 1) ; // on supprime "pesto" du tableau