# Cleandex

Ekstenzija za Google Chrome ili Firefox koja filtrira listu najnovijih vijesti na Index.hr, prema [listi ključnih riječi](https://github.com/ajambrovic/Cleandex/blob/master/src/keywords.json)

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

To što je ekstenzija na Chrome Web Storeu ne znači da joj se može automatski vjerovati :grin: A nije tamo jer treba platiti $5, što mi nema smisla za nešto što još ne znam da li će itko ikada koristiti.

## Halo, halo, stani malo - ja sam na Firefoxu, što samnom?

Razlika je u drugom koraku

  1. U alatnu traku se upisuje about:debugging 
  2. Gumb koji se kline je "Učitaj privremeni dodatak"
  3. Potrebno je odabrati bilokoju <b>datoteku</b> unutar direktorija (npr. manifest.json)
  
## Super su Chrome i Firefox, ali koristim Operu/IE/Safari

Načelno, ne bi trebalo biti problema/posla oko ovog, specifično - provjerim pa ako stignem dok sam još na godišnjem - napravim.
  
## Super deda što koristiš desktop browser, ali ja koristim mobilni

I ja, ali nažalost [mobilni browseri](https://stackoverflow.com/questions/6185882/) [ne podržavaju extenzije]( https://stackoverflow.com/questions/15786728/)

## Kako promijeniti ključne riječi?

U direktoriju u kojoj je ekstenzija se nalazi keywords.json - brisanje bi trebalo biti jasno :smile:, a kod dodavanja treba paziti da format datoteke ostane ispravan - najbolje je dodavati na vrh liste, ključna riječ mora početi sa dvostrukim navodnicima, te završiti sa dvostrukim navodnicima i zarezom:

![Uređivanje ključnih riječi](https://github.com/ajambrovic/Cleandex/blob/master/docs/images/uredjivanje.png) . 

Nakon promjene i snimanja datoteke, u pregledniku je potrebno na stranici <b>chrome://extensions</b> odnosno <b>about:debugging</b>, u "kućici" sa detaljima ekstenzije, odabrati "Osvježi"  - ako se pogriješi (o čemu će se prikazati poruka), iz keywords.default.json se mogu kopirati originalne vrijednosti.

Kod usporedbe s ključnim riječima nisu bitna velika i mala slova, u datoteci su onako kako sam ih kopirao s Indexa, a razmaci su bitni, dakle sama usporedba je jednostavna - traži se točno podudaranje ključne riječi u tekstu (zato je npr. jedan od pojmova <b>Severin</b>, bez <b>a</b> na kraju, tako da "pokrijemo" deklinaciju"), pa zasad nećemo dobiti optimalno čist tekst (npr. ako se u uvodu spominje samo Lana, ne možemo biti sigurni da se radi o Lani Jurčević, a ako se spominje samo Jurčević, onda ne možemo biti sigurni da li se radi o Lani ili Kruni). Postoje načini kako to zaobići, ali pitanje je da li se taj trud isplati - ako misliš da da, vidi iduću točku.

## Super je ovo sve, ja bi da još ima...

1. Najviše šanse za dodavanje dodatne/izmijenjene funkcionalnosti imaš ako sam to napraviš i pošalješ pull request.
2. Ako ti nije jasno što sam napisao u prethodnoj rečenici, najviše šanse imaš ako se dogovorimo za plaćeni posao.
3. Ako misliš da se ovdje nema (za)što plaćati - slažem se, [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues) i nadaj se da mi se ideja sviđa.

## Ima li planova za podršku za druge siteove?

Načelno ne, jedini portal koji pratim, a potrebna mu je ovakva ekstenzija, je https://www.jutarnji.hr/, ali nakon analize sam zaključio da nema smisla - ili ga čitaš ili blokiraš, nema s njim sredine :grin: Ali slobodno [otvori prijavu](https://github.com/ajambrovic/Cleandex/issues) pa tko zna?

## I, koliko je komplicirano sve ovo bilo za napraviti?
Ispada - nimalo, za sav posao do sada, uključujući pripremu (članci o pisanju Chrome ekstenzije, raspisivanje taskova i sl.) i prilagodbu da ekstenzija radi i u Firefoxu, je trebalo samo 8 sati, plus 2 sata za ove upute.
