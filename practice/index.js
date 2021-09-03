/* // practice -- 1
const object = {
    string: 'abcd',
    number: 1990,
    boolean:false,
    object1: {
        name:'arif',
        age:20,
    },
    arrayObject:[
        'one' , 'two' , 'three'
    ],
    keyboard: function (currentYear){
        this.number =  currentYear - this.number;
        return this.number
    }

} 
// const currentAge =object.keyboard(2021)
// console.log(currentAge)
// console.log(object) */

/* // practice -- 2
const templateString = console.log(`aita holo template ${object.string}`)
const templatenumber = console.log(`aita holo template ${object.number}`)
const templateBoolean = console.log(`aita holo template ${object.boolean}`)
const nastedObject = console.log(`nasted object ${object.object1.name} `)
const arraySecondElement = console.log(`array ${object.arrayObject[1]}`)
const result = object.keyboard(2000)
console.log(result)
const functionObject = console.log(`functionHolo ${result}`) */

// pracrice -- 3.1
const noPera = () => 89;
const  noPeraArrowFunction = noPera();
// console.log(noPeraArrowFunction)

// practice -- 3.2 
const onePera = one => one / 7;
const onePeraArrowFunction = onePera(21)
// console.log(onePeraArrowFunction)

// practice 3.3
const twoPera = (one, two) => (one + two) / 2;
const twoPeraArrowFunction = twoPera(10, 20)
// console.log(twoPeraArrowFunction)

// practice 3.4
const multiPera = (one, two, adder) => {
    const first = one + adder;
    const second = two + adder;
    const result = first + second;
    return result
}
const multiPeraArrowFunction = multiPera(3, 13, 7);
// console.log(multiPeraArrowFunction)

// practice -- 4 
const arrays = [7,14,21,28,35,42]
const result = arrays.map(array => array / 7)
// console.log(result)
arrays.forEach(array => console.log(array/7))
