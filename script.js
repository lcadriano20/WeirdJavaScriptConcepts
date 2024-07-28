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

// Closure 
// Função que mantem o estado entre execuções da função 
// É função que captura variáveis do escopo lexo 
// Tem acesso a dados de funções do seu exterior 

// O resultado da multiplicação será guardado
function multiplicador(x) {
    return (y) => {
        return x*y
    }
}
const dobrar    = multiplicador(2) 
const triplicar = multiplicador(3)

console.log(dobrar(5))
console.log(triplicar(5))

function criarContador() {
    let contador = 0
        return function() {
            contador +=1
            console.log(contador)
        }
}
let meuContador = criarContador() 

meuContador() 
meuContador()

// Prototype Chain
function Animal(nome) {
    this.nome = nome
}
Animal.prototype.falar = function() {
    console.log(`${this.nome} faz um som.`)
}
function Cachorro(nome) {
    Animal.call(this,nome)
}

// Estabelecer cachorro com uma subclasse de Animal 
// Concluindo a herança, para extrair tudo
Cachorro.prototype = Object.create(Animal.prototype)

// Definindo o constructor de 'Cachorro'
Cachorro.prototype.constructor = Cachorro 

const meuCachorro = new Cachorro('Rex')
meuCachorro.falar()

//Override
Cachorro.prototype.falar = function() {
    console.log(`${this.nome} latiu!`)
}

// Async e Promises 
// Promises são objetos que representam conclusão ou falha
// Trabalha com promises de maneira síncrona 
// Tratamento de erros: catch(),try/catch()

let promessa = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve("Dados carregados com sucesso!")
    },2000)
})
promessa.then((mensagem)=> {
    console.log(mensagem)
})

let promessaFalha = new Promise((resolve,reject)=> {
    setTimeout(()=> {
    reject("Algo deu errado!")
    },2000)
})
promessaFalha.then((mensagem)=> {
    console.log(mensagem)
}).catch((err)=>{
    console.log(err)
})

async function fetchData() {
    try {
        let response = await new Promise((resolve,reject)=> {
            setTimeout(()=> {
                if(true) {
                    throw new Error("Falha ao acessar sistema!")
                }   
                resolve("Dados obtidos com sucesso!")
            },1000)
        })
        console.log(response)
    } catch(error) {
        console.log(error)
    }   
}
fetchData()

// Event Bubbling 
// Como os eventos se propagam pelo DOM 
// Método que para a propagação - stopPropagation
// Elemento filho pode ativar evento do pai
document.querySelector('#pai').addEventListener('click',function() {
console.log("Clicou no el. pai")
})
document.querySelector('#filho').addEventListener('click',function(e) {
    console.log("Clicou no el.filho")
    e.stopPropagation()
})


// Hoisting
// Variáveis com VAR e FUNÇÕES
// Let e Const não são afetadas pelo hoisting 

console.log(minhaVar)

var minhaVar = 10

let var2 = 20;

console.log(var2)

minhaFuncao()

function minhaFuncao() {
    console.log("Teste");
}

// Escopo 
// Variáveis não saem do escopo da função 
// let e const podem utilizar do escopo de ifs,for
// Variáveis são acessíveis em qualquer local

let b = 1; 
console.log(b) 


if(true) {
    let b = 10
    console.log(b)
    console.log(c) 
}
console.log(b) 

function testando() {
    const x = 90; 
    console.log(x)
}

testando()