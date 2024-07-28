// 7 Recursos de JS 

// This: Comportamento Padrão -> Object Window 
// Método em Objeto -> Refere ao Objeto 
// Arrow function -> Não possui o próprio This
// Event handler  -> This é quem recebeu o evento

console.log(this) // Objeto Window

function teste() {
    console.log(this)
}
teste()

// Objeto com This => Próprio objeto
const pessoa = {
    nome: "João",
    saudar: function() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}
pessoa.saudar()

// Herança de Protótipo 
function Pessoa2(nome) {
    this.nome = nome
}
Pessoa2.prototype.saudar = function() {
    setTimeout(function() {
        console.log(this)
        console.log(`Olá meu nome é ${this.nome}`)
    }.bind(this),1000)
}
const pessoa2 = new Pessoa2("Carlos")
pessoa2.saudar()