``






























## 2. Les fonctions

Une _fonction_ est un ensemble d'instruction visant à effectuer une action précise.
C'est un sous programme réutilisable
Ce bloc d'instruction pourra donc être utilisé autant de fois que nécessaire en invoquant son nom.

En programmation, on _déclare_ d'abord une fonction et son comportement, pour ensuite l'_invoquer_ (ou l'_executer_) plus tard.

Exemple:

fonction Multiplier:
    pour deux nombres a et b,
    renvoyer a * b

Et pour l'appeler je pourrais faire :

Multiplier 2 et 3

Ce qui renverrait `6``


## 3. Les structures contiditionnelles

Une _structure conditionnelle_ permet d'effectuer un branchemement (imposer un choix) entre plusieurs jeux d'instructions, selon une condition à évaluer (vrai/faux).

Ces structures sont souvent définies à l'aide des termes Si (If) et Sinon (Else)

    Si age_utilisateur >= 18 alorsq
        vendre alcool
    Sinon
        renvoyer chez mémé

Une condition s'évalue à _vrai_ ou _faux_. Une valuer qui peut être soit _vraie_ soit _fausse_ est appelée booléenne (en référence à l'algèbre de Boole).

Pour pouvoir gérer des conditions complexes, on peut associer ces conditions entre elles avec des opérateurs logiques tirés de cette algèbre booléenne :
Pour l'opérateur _et_

- `vrai`_et_ `vrai`== `vrai``
- `vrai`_et_ `faux`== `faux``
- `faux`_et_ `vrai`== `faux``
- `faux`_et_ `faux`== `faux``

Pour l'opérateur _ou_

- `vrai`_ou_ `vrai`== `vrai``
- `vrai`_ou_ `faux`== `vrai``
- `faux`_ou_ `vrai`== `vrai``
- `faux`_ou_ `faux`== `faux``

On peut altérer une condition avec le _non_

- `NON(vrai)`=== 'faux'
- `NON(faux)`=== `vrai``
- `NON(vrai et faux)`=== `vrai``
- `NON (vrai ou faux)`=== `faux``

