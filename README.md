# Cleandex

Google Chrome ekstenzija za filtriranje najnovijih vijesti na Index.hr, prema listi ključnih riječi u <b>keywords.json</b>

## Zašto Cleandex?

Zato što na Index.hr postoje članci koji su informativni, zanimljivi, ili barem šaljivi. A postoji i četvrta kategorija - clickbait/soft porn. 

Za takve, visoko kalorične, a nimalo nutritivne članke, sada postoji Cleandex (a za porn, tko ga ne zna naći, njemu on ni ne treba)! 

## Kako instalirati u Chromeu?

1. Prvo je potrebno skinuti ekstenziju kao zip file koji onda otpakiramo

![Kako dohvatiti ekstenziju](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/dohvat.png)

2. Ekstenziju instaliramo tako da u adresnu traku upišemo <b>chrome://extensions</b>, omogućimo <b>developer mode</b>, te <b>učitamo otpakiranu ekstenziju</b>

![Kako učitati ekstenziju](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/ucitavanje.png)


Potrebno je odabrati direktorij otpakirane ekstenzije - ako pogriješite, ekstenzija se neće prikazati na listi ekstenzija, tako da će biti dosta jasno da li je odabran ispravan direktorij :) 

3. Ako je sve u redu, prikazuje vam se ![Nova ikonica](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/uspjeh.png) i klikom na nju se otvara čisti Index.hr/najnovije - uživajte!

## Meni nije sve u redu :(

Probaj ponovo proći kroz upute ili [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues)

## Ne znam da li mogu vjerovati ekstenziji ako ju ne instaliram kroz Chrome Web Store

To što je ekstenzija na Chrome Web Storeu ne znači da joj se može automatski vjerovati :) A nije tamo jer treba platiti $5, što mi nema smisla za nešto što još ne znam da li će itko ikada koristiti.

## Halo, halo, stani malo - ja sam na Firefoxu, što samnom?

Razlika je u drugom koraku

  1. U alatnu traku se upisuje about:debugging 
  2. Gumb koji se kline je "Učitaj privremeni dodatak"
  3. Potrebno je odabrati bilokoju <b>datoteku</b> unutar direktorija (npr. manifest.json)
  
## Super su Chrome i Firefox, ali koristim Operu/IE/Safari

Načelno, ne bi trebalo biti problema/posla oko ovog, specifično - provjerim pa ako stignem dok sam još na godišnjem - napravim.
  
## Super deda što koristiš desktop browser, ali ja koristim mobilne

I ja, ali nažalost [mobilni browseri](https://stackoverflow.com/questions/6185882/) [ne podržavaju extenzije]( https://stackoverflow.com/questions/15786728/)

## Kako promijeniti ključne riječi?

U direktoriju u kojoj je ekstenzija se nalazi keywords.json - brisanje bi trebalo biti jasno :) a kod dodavanja treba paziti da format datoteke ostane ispravan - najbolje je dodavati na vrh liste, ključna riječ mora početi sa <i>"</i> a završiti sa <i>",</i>. Nakon promjene i snimanja datoteke, u pregledniku je potrebno na stranici chrome://extensions odnosno about:debugging, u "kućici" sa detaljima ekstenzije, odabrati "Osvježi"  - ako se pogriješi (o čemu će iskočiti poruka nakon osvježavanja), iz keywords.default.json se mogu kopirati originalne vrijednosti.

## Super je ovo sve, ja bi da još ima...

Najviše šanse za dodavanje dodatne/izmijenjene funkcionalnosti imaš ako sam to napraviš i pošalješ pull request.
Ako ti nije jasno što sam napisao u prethodnoj rečenici, najviše šanse imaš ako se dogovorimo za plaćeni posao.
Ako misliš da se ovdje nema (za)što plaćati - slažem se, [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues) i nadaj se da mi se ideja sviđa.

## Ima li planova za podršku za druge siteove?

Načelno ne, jedini portal koji pratim, a potrebna mu je ovakva ekstenzija je jutarnji.hr, ali nakon analize sam zaključio da nema smisla - ili ga čitaš ili blokiraš, nema s njim sredine :grin: Ali slobodno [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues) pa tko zna?

## I, koliko je komplicirano sve ovo bilo za napraviti?
Ispada - nimalo, za sav posao do sada, uključujući pripremu (članci o pisanju Chrome ekstenzije, raspisivanje taskova i sl.) i prilagodbu da ekstenzija radi i u Firefoxu, je trebalo samo 8 sati, plus sat vremena za ove upute.
