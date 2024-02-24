class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo === 'monge') {
            ataque = ' artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = ' shuriken';
        } else {
            ataque = ' um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi = new Heroi('Luana', 25, 'mago');
heroi.atacar();

const heroi2 = new Heroi('heytor', 5, 'ninja');
heroi2.atacar();