import { Animal } from "./Animal.js"
import { Dog } from "./Dog.js"
import { Cat } from "./Cat.js"

export class Zoo {
    #animals
    constructor() {
        this.#animals = []
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("only animal")
        }
        this.#animals.push(animal)
    }

    makeAllSpeak() {
        let speak = ""
        this.#animals.forEach((animal) => {
            speak += animal.speak()
        })
        return speak
    }
}

const dog = new Dog("")
const cat = new Cat("")
const zoo = new Zoo()
zoo.addAnimal(dog)
zoo.addAnimal(cat)
console.log(zoo.makeAllSpeak());


