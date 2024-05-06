// const obj = {
//     name: 'qqq'

//     changeName: (newName) => {
//         this.name = newName
//         console.log('changeName', this);
//     }


// }

// const obj1 = {
//     name: 'www'
// }



// // bind, call, apply

// obj.name.call(obj1, 'rurruruu')



// function someFoo2 (cb) {
//     console.log(this);
//     cb()
// }

// const obj5 = {
//     foo: someFoo2
// }

// someFoo2()
// obj5.foo()


const obj = {
    names: ['q', 'w', 'e', 'r', 't', 'y'],
    city: 'Vtb',

    sayHelloAll() {
        console.log(this);
        this.names.forEach((name) => {
            console.log(this);
            console.log(`hello ${name}. i am from ${this.city}`);
            
        })
    }
}

obj.sayHelloAll()


// function foo (cb) {
//         cb()
//         console.log(this);
//     }