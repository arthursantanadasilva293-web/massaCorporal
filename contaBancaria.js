class Bancaria{
    constructor(cpf, nome, saldo){
        this.cpf = "456.789.293-36",
        this.nomePrimeiro = "Roberto",
        this.saldo = 300000
    }

    depositar(dinheiro){
         this.saldo += dinheiro
         console.log("Valor de deposito: R$" , dinheiro + ". Saldo Atual: R$" , this.saldo);
        
    }

    sacar(dinheiro){
        this.saldo -= dinheiro
        console.log("Valor de Saque: R$" , dinheiro + ". Saldo Atual: R$", this.saldo);

    }

    transferir(dinheiro, contaRecebedora){
         this.sacar(dinheiro);
         contaRecebedora.depositar(dinheiro);
        console.log("Valor de Transferencia: R$", dinheiro + ". Saldo Atual DESTINATARIO: R$", contaRecebedora.saldo);
         
    }

}

let Durateston = new Bancaria("244.675.876-34", "Enantato", 3000 )
let testoterona = new Bancaria("456.789.293-36", "Roberto",  2000)

Roberto.deposita(2000)
Roberto.saque(1000)
Roberto.transferencia(500, Durateston)