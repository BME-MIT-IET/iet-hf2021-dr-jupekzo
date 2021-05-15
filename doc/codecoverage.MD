# Kód lefedettség mérése
A kód lefedettség mérése egy kiváló eszköz arra, hogy megnézzük a teszteinknek a kódbázisunk hány százalékát sikerült lefednie. 
Ha valahol nincs lefedve, akkor azt nem is teszteltük le. Bár a mi reponk ~80%-os lefedettséggel rendelkezik ez egy nagyon szép eredmény, 
mivel a 100% lefedettség bár egy szép álom, sajnos nem bizonyítja, de még nem is indikálja a bugok nem létezését, és ezért egy idő után érdemes elgondolkodni azon, 
hogy megéri-e tovább bővíteni a tesztkészletünket, megtérül-e a befektetett időnk és energiánk. Összeségében nagyon magas szám a 80%. 

![image](https://user-images.githubusercontent.com/61234783/118362358-86b6a680-b58f-11eb-97db-8955398b05cd.png)

Feladatom megoldása során megpróbáltam egy automata kódlefedettség mérőt felrakni. A megvalósítás során eljutottam a célegyenesbe, de valamiért annak ellenére,
hogy lelkiismeretesen végigkövettem a [tutorialt](https://www.freecodecamp.org/news/get-your-npm-package-covered-with-jest-and-codecov-9a4cb22b93f4/) arról, hogy hogyan kell jest-es coverage reportokat felrakni, a codecov.io nem volt együttműködő.

![image](https://user-images.githubusercontent.com/61234783/118362626-79e68280-b590-11eb-98a8-7e36650eeb9b.png)

Mint látható a reportok felkerülnek hiba nélkül, de ezek processzálása közben valami hibára fut, aminek a részleteit nem hajlandó közölni.
## Összefoglaló
Összeségében nagyon sokat tanultunk arról, hogy mire is jó a kódlefedettség mérése és hogy hogyan kell egy ilyet beüzemelni nagyjából.
