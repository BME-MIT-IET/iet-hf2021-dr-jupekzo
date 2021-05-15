## Miért volt fontos?

A Build és CI beüzemelése volt az első feladat amit megcsináltuk.
A repo alapvetően sok teszttel rendelkezett, ezért a CI segítségével könnyen eltudtuk dönteni, hogy egy pull request a késsőbbiekben mergelhető-e.

## Első lépések

A projekthez alapvetően volt build és CI csak ezt az elején nem tudtuk.
Később rájöttünk erre és akkor már ki tudtuk javítani az ehhez kapcsolodó hibákat.
Ezekután GitHub Actions-el és Travissel is fut a build és a CI.

## Kiegészítések:

Később még írtunk hozzá nem-funkcionális és bdd-teszteket is.
Ezeket is sikerült lefuttatni a CI-al. A bdd tesztek könnyen mentek, de a funkcionális tesztek nem.
A funkcionális tesztekhez egy kicsit magukat a teszteket is át kellett írni, hogy githubon fusson, de végül sikerült megoldani.

## Tanulságok:

Megtanultuk, hogyan lehet könnyen beüzemelni Build és CI folyamatokat, mind Travissal és Actionssel.
Jó pár rossz mergetől megmentett minket a munkák során, hogy láttuk, hogy nem fordul le valami a pull-requestek során.
