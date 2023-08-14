function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
    this.saudacao = function() {
        console.log(`${this.nome} olá, tudo bem?`)
    }
}

function Funcionario (nome, idade, salario, cargo) {
    this.salario = salario
    this.cargo = cargo

    Pessoa.call(this, nome, idade)
}

function TimeDeFutebol (time, nome, idade) {
    this.time = time
    Pessoa.call(this, nome, idade)
}

const joao = new Pessoa('João', 30)
console.log(joao)
const vinicius = new Funcionario('Vinicius', 25, 5000, 'Dev front end')
console.log(vinicius)
const mike = new TimeDeFutebol('Bahia', 'Mike', 28)
console.log(TimeDeFutebol)