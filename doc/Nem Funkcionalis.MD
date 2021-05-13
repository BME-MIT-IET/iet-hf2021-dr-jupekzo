Nem-funkcionális tesztek során főleg a teljesítmény tesztekre koncentráltunk. Az immutable.js arra ad lehetőséget, hogy List, Map illetve 
Set adattömböket hozzunk létre, úgyhogy azokat később ne lehessen módosítani. Azt vizsgáltuk, hogy a különböző kollekciókon mennyi többlet 
időt vesz igénybe az, hogy ilyen nem-változtatható formában hozzuk őket létre, a normál változtathatóhoz képest. A skálázhatóság 
teszteléséhez, minden tömbön két különböző nagyságú adathalmazt vizsgáltuk meg.

## List

Két alapvető dolgot teszteltünk, amit egy listával lehet csinálni, azaz: tagok hozzáadása, elem elérése. A teszt első része egy Immutable 
List-hez add ezer elemet (10,861ms), majd próbál elérni egy elemet (0,018ms). Majd ezeket futtattuk egy normál List-en is (0,131ms; 0,14ms)
Ezeket  után ezeket a teszteket megismételtük tízezres nagyságban is.
A pontos eredmények az alábbi képen láthatók.

![Immutable-Normál List összehasonlítás](images/List.png)

