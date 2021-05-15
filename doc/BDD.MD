# BDD tesztek

Ezen a feladaton Czeglédi Levente (CeceCeceCece2) és Futó Csaba (Csabi1998) dolgozott.

## Az elvégzett munka

A tesztek elkészítéséhez a Cucumber keretrendszert használtuk. Ehhez szerencsére találtunk könnyedén segítséget mind a weboldalukon, mind YouTube-on.

Összesen 21 tesztet írtunk meg, ezek között vannak egyszerűbb és komplexebb tesztek is egyaránt. Egyes tesztek az egyszerűbb viselkedést ellenőrzik (elemek behelyezése, immutability, stb.) míg vannak olyanok is, amik az egyes Collection implementációk közötti váltogatást vizsgálják.

A tesztek lefuttatásának kimenetele:

![BDD-tesztek futtatása](images/bdd-test.png)

A tesztek futtatása automatikusan megtörténik a CI keretrendszer által.


### Tanulságok, észrevételek

A Cucumber használata egyszerű, ugyanakkor felmerült az a probléma, hogy az egyes feature fájlok és a step defitnitionök hogyan találják meg egymást. Itt eleinte problémákba ütköztünk, de végül sikerült megoldani. Ami továbbra is fennáll, hogy ha van két step definition utasítás, aminek a megadott szövege ugyanaz (akár különböző fájlban), akkor hibát fogunk kapni sajnos. Ezen felül az egyes Scenariokhoz tartozó stepeket nem tudtuk hogyan elkülöníteni egy-egy feature fájlon belül, így a Scenario Outline szövegét kommentben odaírtuk föléjük.

Tanulságként azt vettük észre, hogy mivel egy library-t teszteltünk, a BDD tesztek egészen hasonlóak lettek a Unit tesztekhez.


