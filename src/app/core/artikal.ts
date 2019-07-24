export class Artikal {
    cena: number;
    ime: string;
    opis: string;
    sifra: string;
    slik:string;
    kolicina:number
    
    

        constructor(cena: number,ime: string, opis: string, sifra: string, slik:string, kolicina?:number){
            
            this.cena = cena;
            this.ime = ime;
            this.opis = opis;
            this.sifra= sifra;
            this.slik = slik;
            this.kolicina;
            
            
            
            
        }
}