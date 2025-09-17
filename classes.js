class Apartamento{
   constructor(CorDoApartamento, tamanho){
     this.CorDoApartamento = CorDoApartamento
     this.tamanho = tamanho
   }
   Diametro (Altura){
   this.tamanho += Altura
    console.log("O Apartamento tem o tamanho:" ,Altura )
   }
   
   Andares (Pavimento){
    this.CorDoApartamento += Pavimento
    console.log("O Apartamento é:" ,Pavimento)
     }
}

let Andar1 = new Apartamento("branco", "15x15")
let Andar2 = new Apartamento("azul" , "20x20")
console.log(Andar1.tamanho)

Andar1.Diametro("15x15")
Andar2.Diametro("20x20")
Andar1.Andares("branco")
Andar2.Andares("azul")

