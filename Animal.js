export class Animal{
    #energy
    constructor(name){
        this.name = name
        this.#energy = 100
    }

    getEnergy(){
        return this.#energy
    }

    eat(amount){
        if(amount < 0){
            throw new Error("only negativ")
        }
        if(this.#energy+amount>100){
            throw new Error("Increase energy, but do not allow it to go above 100")
        }
    }

    speak(){
        return ""
    }

}