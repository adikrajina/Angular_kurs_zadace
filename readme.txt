ng g c home

svaki input componenti se prosljedjuje sa [], primjer za to je dataSource na tabelema, course na course..html

svaki event se prosljedjue sa (), primjer je click

falsy - varijabla koja nema definisanu vrijednosti ili joj je dodjeljen prazan string ''. Zapravo ima pravu vrijednsoti false.

output dekorator uvijek treda da ima naziv kao radnja koja se vec desila

EventEmitter uvijek uvlaci iz protraktora, a u veini slucajeva treba ga importovati iz angular/core

za listu eventa otici na mozila for developers

emiter moze poslati samo jedan value. Zato po potrebi kreitai objekat ili veliki niz...

svi eventi koje mi iniciramo moramo mi zatvoriti kada se componenta zavrsio jer trose resurse u browser-u (sa ngOnDestroy())


zadaca 24.10.

napraviti shared folder
napraviti header componenet koji ce biti u shared folder
import ce biti header ostalih komponeneti (cours, student, teacher).
na desnoj strani dodati Add button koji ce biti dio header componente koji ce imati output vrijednost addbuttoncliced i da se ostale komponenete (cours, student, teacher) pretplate na to. klikom na button treba ispisati koja je komponeneta otvorena