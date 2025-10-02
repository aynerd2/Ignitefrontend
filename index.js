
// Everything is an object in javascript

// const object = {
//       name: "Pencil",
//       manufacturer: 'elegancer',
//       color: "red",
//       length: "30cm",
// }




const NiceCar = {
      name: "Toyota",
      model: 2025,
      color: "black",
      speed: '100km/hr',
      length: "20cm",
      drive: function(){
            console.log("The car is on drive mode...")
      }
}


console.log(NiceCar.drive())








class Car {
      constructor(name, model, color, speed){
            this.name = name
            this.model = model
            this.color = color
            this.speed = speed
      }

      drive(){
            console.log(`The ${this.name} car is on drive mode...`)
      }
}


let car1 = new Car("Toyota", "2025","Black","50km/hr")
let car2 = new Car("Lamboghinin", "2025","Black","50km/hr")
let car3 = new Car("Honda", "2025","Black","50km/hr")
let car4 = new Car("Bmw", "2025","Black","50km/hr")
let car5 = new Car("Benz", "2025","Black","50km/hr")
let car6 = new Car("Kia", "2025","Black","50km/hr")
let car7 = new Car("Nissan", "2025","Black","50km/hr")



// ARRAY
const Cars = [

{
      id: 0,
      name: "Toyota",
      model: 2025,
      color: "black",
      speed: '100km/hr',
      length: "20cm",
      drive: function(){
            console.log("The car is on drive mode...")
      }
},

{
      id: 1,
      name: "Toyota",
      model: 2025,
      color: "black",
      speed: '100km/hr',
      length: "20cm",
      drive: function(){
            console.log("The car is on drive mode...")
      }
},

{
      id: 2,
      name: "Toyota",
      model: 2025,
      color: "black",
      speed: '100km/hr',
      length: "20cm",
      drive: function(){
            console.log("The car is on drive mode...")
      }
},


{
      id: 3,
      name: "Toyota",
      model: 2025,
      color: "black",
      speed: '100km/hr',
      length: "20cm",
      drive: function(){
            console.log("The car is on drive mode...")
      }
}

]

// Methods of an Array
// index,length

const fruits = ["Banana", "Apple", "Orange", "Mango", "Water Menlo"]

console.log(`Kinds of fruits are: ${fruits}`)