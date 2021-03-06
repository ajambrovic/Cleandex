# Cleandex

Ekstenzija za Google Chrome, Firefox i Operu, koja filtrira listu najnovijih vijesti na Index.hr, prema [listi ključnih riječi](https://github.com/ajambrovic/Cleandex/blob/master/src/keywords.json)

## Zašto Cleandex?

Zato što na Index.hr postoje članci koji su informativni, zanimljivi, ili barem šaljivi. A postoji i četvrta kategorija - clickbait/soft porn. 

Za takve, visoko kalorične, a nimalo nutritivne članke, sada postoji Cleandex (a za porn, tko ga ne zna naći, njemu on ni ne treba)! 

## Kako instalirati u Chromeu/Operi?

Ekstenzija je dostupna za Chrome i Operu na https://chrome.google.com/webstore/detail/cleandex/colmapipalbhnepfdlinhejbgfcghkec?hl=en&authuser=3&pli=1 (potrebno je instalirati addon koji Opera sama ponudi za instalaciju kada ste na Chrome Web storeu).

## Halo, halo, stani malo - ja sam na Firefoxu, što samnom?

Nema problema, sve radi i u Firefoxu - https://addons.mozilla.org/en-GB/firefox/addon/cleandex/  

## Super - ja koristim Safari, što samnom?

Nažalost, Apple želi uzeti $99 godišnje, neovisno da li se želi objaviti ekstenzija ili npr. aplikacija, tako da potpore za Safari neće biti do daljnjega

## Ne znam koji su ovo preglednici koje si spomenuo, ja koristim IE/Edge?

S ovim ne bi trebalo biti problema, ali kako IE nema svoj store (barem koliko sam gledao), plus Edge uskoro prelazi na Chromium, onda se ekstenzija može učitati kao i za developere (vidi niže), ali supporta kroz store neće biti.

  
## Super deda što koristiš desktop browser, ali ja koristim mobilni

I ja, ali nažalost [mobilni browseri](https://stackoverflow.com/questions/6185882/) [ne podržavaju extenzije]( https://stackoverflow.com/questions/15786728/)

## Kako promijeniti ključne riječi?

U direktoriju u kojoj je ekstenzija se nalazi keywords.json - brisanje bi trebalo biti jasno :smile:, a kod dodavanja treba paziti da format datoteke ostane ispravan - najbolje je dodavati na vrh liste, ključna riječ mora početi sa dvostrukim navodnicima, te završiti sa dvostrukim navodnicima i zarezom:

![Uređivanje ključnih riječi](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/uredjivanje.png) . 

Nakon promjene i snimanja datoteke, u pregledniku je potrebno na stranici <b>chrome://extensions</b> odnosno <b>about:debugging</b>, u "kućici" sa detaljima ekstenzije, odabrati "Osvježi"  - ako se pogriješi (o čemu će se prikazati poruka), iz keywords.default.json se mogu kopirati originalne vrijednosti.

Kod usporedbe s ključnim riječima nisu bitna velika i mala slova, u datoteci su onako kako sam ih kopirao s Indexa, a razmaci su bitni, dakle sama usporedba je jednostavna - traži se točno podudaranje ključne riječi u tekstu (zato je npr. jedan od pojmova <b>Severin*</b> (Severina je objavila, Severinin suprug i slično), bez <b>a</b> na kraju, tako da "pokrijemo" deklinaciju"), pa zasad nećemo dobiti optimalno čist tekst (npr. ako se u uvodu spominje samo Lana, ne možemo biti sigurni da se radi o Lani Jurčević, a ako se spominje samo Jurčević, onda ne možemo biti sigurni da li se radi o Lani ili Kruni). Postoje načini kako to zaobići, ali pitanje je da li se taj trud isplati - ako misliš da da, vidi iduću točku.

## Super je ovo sve, ja bi da još ima...

1. Najviše šanse za dodavanje dodatne/izmijenjene funkcionalnosti imaš ako sam to napraviš i pošalješ pull request.
2. Alternativno, [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues) i drži fige se da mi se ideja sviđa. :grin:

## Ima li planova za podršku za druge siteove?

Načelno ne, jedini portal koji pratim, a potrebna mu je ovakva ekstenzija, je https://www.jutarnji.hr/, ali nakon analize sam zaključio da nema smisla - ili ga čitaš ili blokiraš, nema s njim sredine :grin: Ali slobodno [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues) pa tko zna?

## I, koliko je komplicirano sve ovo bilo za napraviti?
Ispada - nimalo, za sav posao do sada, uključujući pripremu (članci o pisanju Chrome ekstenzije, raspisivanje taskova i sl.), prilagodbu da ekstenzija radi i u Firefoxu, i dodatne stvari poput prijave na web storeove, je ukupno trebalo 20 sati.

# Development

## Kako instalirati u Chromeu/Operi za development?

1. Prvo je potrebno skinuti ekstenziju kao zip file:

![Kako dohvatiti ekstenziju](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/dohvat.png)

2. Zip file je potrebno otpakirati da bi se ekstenzija mogla učitati - ekstenziji/browseru nije bitno gdje će biti otpakirana

3. Ekstenziju instaliramo tako da u adresnu traku upišemo <b>chrome://extensions</b>, omogućimo <b>developer mode</b>, te <b>učitamo otpakiranu ekstenziju</b>

![Kako učitati ekstenziju](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/ucitavanje.png)


Potrebno je odabrati direktorij otpakirane ekstenzije - ako pogriješite, ekstenzija se neće prikazati na listi ekstenzija, tako da će biti dosta jasno da li je odabran ispravan direktorij :grin: 

4. Ako je sve u redu, prikazuje vam se ![Nova ikonica](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/uspjeh.png) i klikom na nju se otvara čisti Index.hr/najnovije - uživajte!

## Meni nije sve u redu :(

Probaj ponovo proći kroz upute ili [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues)


## Halo, halo, stani malo - ja sam na Firefoxu, što samnom?

Nema problema, sve radi i u Firefoxu, razlika je samo u drugom koraku:

  1. U alatnu traku se upisuje about:debugging 
  2. Gumb koji se kline je "Učitaj privremeni dodatak"
  3. Potrebno je odabrati bilokoju <b>datoteku</b> unutar direktorija (npr. manifest.json)
  

