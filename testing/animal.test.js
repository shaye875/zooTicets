import assert from 'node:assert'
import test from 'node:test'
import { Animal } from '../Animal.js'
import { Dog } from '../Dog.js'
import { Cat } from '../Cat.js'
import { Zoo } from '../Zoo.js'

test('if energy groun',()=>{
    const animal = new Animal("leo")
    assert.throws(()=>animal.eat(10),{message:"Increase energy, but do not allow it to go above 100"})
})

test('if dog speak Woof',()=>{
 const dog = new Dog("dogi")
 assert.equal(dog.speak(),"Woof")
})

test('if cat speak Meow',()=>{
 const cat = new Cat("cati")
 assert.equal(cat.speak(),"Meow")
})

test('adding not animal',()=>{
    const zoo = new Zoo()
    assert.throws(()=>zoo.addAnimal("j"),{message:"only animal"})
})

test('if array good',()=>{
    const dog = new Dog("")
    const cat = new Cat("")
    const zoo = new Zoo()
    zoo.addAnimal(dog)
    zoo.addAnimal(cat)
    assert.equal(zoo.makeAllSpeak(),"WoofMeow")
})