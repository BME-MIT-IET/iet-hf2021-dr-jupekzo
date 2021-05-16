# Manuális és statikus analízis

A feladat során kézzel és a SonarCloud segítségével néztük át a kódot, és javítottuk ki, megbeszélés után, a talált hibákat. Jó sok hiba volt, de közülük nagyon sok volt a hasonló hibatípus.
Tipikus volt a magas kognitív komplexitású függvény és a konstruktor, amiben nem hívták meg a supert.

## Összefoglaló
Jó sok és különböző hibát sikerült kijavítanunk. Láttuk, hogy annak ellenére, hogy egy csomó ember ellenőrzi az ilyen kódokat, vannak azért benne hibák. 
Azt is láttuk, hogy nem minden hiba, amit a SonarCloud dobott, mivel volt, ahol például a supert direkt nem hívták meg.
