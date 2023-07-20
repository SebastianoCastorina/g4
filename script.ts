class Clothes {
    constructor(
      public id: number,
      public codprod: number,
      public collezione: string,
      public capo: string,
      public modello: number,
      public quantita: number,
      public colore: string,
      public prezzoivaesclusa: number,
      public prezzoivainclusa: number,
      public disponibile: string,
      public saldo: number
    ) {}
    getSaldoCapo(): number {
      return this.saldo;
    }
    getAcquistoCapo(): number {
      return this.prezzoivainclusa;
    }
  }
  
  const arrayClothes: Clothes[] = [];
  
  let url = "Abbigliamento.json";
  
  // Begin Fetch
  
  function addDress() {
    const beginFetch = async function () {
      try {
        const mario = await fetch(url);
        const data = await mario.json();
        console.log(data);
        data.forEach((dress: any) => {
          arrayClothes.push(
            new Clothes(
              dress.id,
              dress.codprod,
              dress.collezione,
              dress.capo,
              dress.modello,
              dress.quantita,
              dress.colore,
              dress.prezzoivaesclusa,
              dress.prezzoivainclusa,
              dress.disponibile,
              dress.saldo
            )
          );
        });
        console.log(arrayClothes);
    } catch (err) {
        console.log(err);
      }
    };
    beginFetch();
  }
  addDress();