"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Clothes {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.saldo;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa;
    }
}
const arrayClothes = [];
let url = "Abbigliamento.json";
// Begin Fetch
function addDress() {
    const beginFetch = function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mario = yield fetch(url);
                const data = yield mario.json();
                console.log(data);
                data.forEach((dress) => {
                    arrayClothes.push(new Clothes(dress.id, dress.codprod, dress.collezione, dress.capo, dress.modello, dress.quantita, dress.colore, dress.prezzoivaesclusa, dress.prezzoivainclusa, dress.disponibile, dress.saldo));
                });
                console.log(arrayClothes);
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    beginFetch();
}
addDress();
