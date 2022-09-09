// explain call, bind and apply

var person={
    name: 'Lucid',
    hello:function(intro){
        console.log(this.name+" says " + intro)
    }
}
person.hello('lets go')
// call takes an object which is going to become the context for the hello function
// lets create another person object

let Friend ={
    name: 'Anthony'
}

// person.hello.call(Friend,'come on')
console.log(person.hello.apply(Friend,['come on'])) //the only difference between apply and call is that call takes in the hello prams in an array
const newHello = person.hello.bind(Friend)//bind creates another instance of our hello function with our context