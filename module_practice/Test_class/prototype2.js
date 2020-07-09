const Person = {
    name: 'default',
    greeting: function () { return console.log(`My name is ${this.name}`) }
}



// const sheng = Object.create(Person)

// console.log(sheng.name)

Person.greeting()


// sheng.name = 'Sheng'
// ES5 property descriptor
// enumerable:false  可以被for in與否 迭代列舉
//configurable=>writable..等編輯屬性是否可以被修改
//value必給
//get //set getter setter
const sheng = Object.create(Person, { name: { value: 'Sheng', writable: true, enumerable: true, configurable: true }, get: function () { console.log('get'); return this._name_ }, set: function (name) { console.log('set'); this._name_ = name } })
// console.log('sheng.__proto__', sheng.__proto__)
// console.log(sheng.__proto__.__proto__)




sheng.greeting()
//原本建構出來是指向同一個method，但重新宣告後就會改參照，但不影響原本的prototype
//如果只修改建構式中的property，則所有繼承的obj皆會被改動到
// sheng.greeting = () => { console.log('change') }
console.log('改變sheng')
sheng.greeting()
Person.greeting()
Person.greeting = () => { console.log('change2') }
console.log('改變Person')
console.log('call person')
Person.greeting()
console.log('call sheng')
sheng.greeting()


const jay = Object.create(Person)

jay.greeting()

console.log(sheng.greeting === jay.greeting) //true


// 透過建構式可以共用同一個Obj裡的function
