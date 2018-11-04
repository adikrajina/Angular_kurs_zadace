import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers = [
    {
      id: 1,
      name: 'Samir',
      about: 'Samir se već duži niz godina bavi designom, kako za štampane medije tako i za web. Zadnje 2 godine radi na promociji bosanskohercegovačkog turizma kroz svoju stranicu hotel-navigator.ba. Kod izrade weba više pažnje posvećuje designu nego samom kodu, jer je to, kako on misli, ono po čemu se njegov web razlikuje od drugih, a jezici u kojima radi su HTML, PHP, MYSQL, JQUERY.',
      rating: 1.9
    },
{
      id: 2,
      name: 'Amar',
      about: 'Amar  već 13 godina radi u i jednu deceniju predaje na . Diplomirao je . Mnogi njegovi učenici su danas IT menadžeri ili poznati IT stručnjaci u regionu. Trenutno zaposlen u ICT kompaniji Baglama d.o.o. koja se bavi dizajnom, implementacijom i održavanjem kompleksnih informacionih i komunikacionih sistema.',
      rating: 3.2
    },
    {
      id: 3,
      name: 'Nemanja',
      about: 'Nemanja je diplomirao na . Zaposlen je u kompaniji  Certificirani je , a posjeduje znanja vezana za nadzor i kontrolu industrijskih procesa, kalibraciju i analizu stanja građevinskih konstrukcija termovizijom.    Često je angažovan kao predavač na temu termografije, procesne kalibracije, ali i mjerenja na telekomunikacionim mrežama, kako od strane obrazovnih institucija, tako i od strane kompanija koje za navedene teme imaju interes.       Znanje i iskustvo rado prenosi na sve one koji su spremni da nauče i unaprijede svoja znanja iz navedenih oblasti, kao i da razmijeni iskustva i pomogne naučnoistraživački rad.   ',
      rating: 2.9
    },
    {
      id: 4,
      name: 'Violeta',
      about: 'Violeta više od deset godina radi na poslovima analize podataka. Završila je u Sarajevu, a magistrirala u . Tokom karijere susretala se sa raznim alatima za obradu i analizu podataka, ali smatra da je R najbolji. Trenutno je zaposlena u Direkciji za ekonomsko planiranje na poslovima analize socijalne uključenosti, siromaštva, zdravstva, zapošljavanja i demografskih kretanja.',
      rating: 4.5
    }
  ];
  constructor() { }

  getAllTeachers() {
    return this.teachers;
  }
}
