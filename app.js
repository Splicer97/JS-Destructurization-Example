function calcValues(a, b) {
	return [
		a + b,
		a - b,
		a * b,
		a / b
	]
}
// const result = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// //1
// const result = calcValues(42, 10)
// const [sum, sub] = result
// //2
// const [sum, sub] = calcValues(42, 10)
// //3
// //все способы идентичны
// console.log(sum, sub)

const [sum, sub = "Вычитания нет", mult, ...other] = calcValues(42, 10)
console.log(sum, mult, other, sub)
//sub = "Вычитания нет" сработает, если в массиве вместо a - b будет undefined

const person = {
	name: "Name",
	age: 20,
	address: {
		country: "United States",
		city: "Taganrog"
	}
}

// const name = person.name
// const { name } = person

// const {
// 	name: firstName,
// 	age,
// 	car = "lada",
// 	address: { country, city } } = person

const { name, ...info } = person