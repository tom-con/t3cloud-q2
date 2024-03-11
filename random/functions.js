// const myFunc = () => {
// 	console.log("Something")
// }

// function myFunc() {
// 	console.log("Something")
// }

// const square = (number) => {
// 	return number * number
// }

// const squareRoot = (number) => {
// 	return Math.sqrt(number)
// }

// const addTwo = (number) => {
// 	return number + 2
// }

// const myArr = [1, 2, 3, 4, 5, 6] // [1, 4, 9, 16, 25, 36]

// const result = myArr.map(addTwo)

// console.log(result)

// const isEven = (number) => {
// 	if (number % 2 === 0) return true
// 	return false
// }

// const myArr = [10, 12, 14, 15, 16]

// const result = myArr.every(isEven)
// const result2 = myArr.some(isEven)

// console.log(result)
// console.log(result2)

// (function (whatever) {
// 	console.log(whatever)
// })("yes")



// const anotherFunc = myFunc

// anotherFunc()


// ((someString) => {
// 	console.log("HELLO " + someString)
// })("MY FRIEND")

// const summation = (acc, number) => {
// 	return acc + number
// }

// const myArr = [1, 2, 3, 4, 5, 6]

// const result = myArr.reduce(summation, 0)

// console.log(result)

const carData = [
	{
		type: "Suzuki",
		distanceTraveledInKm: 500.00,
	},
	{
		type: "Toyota",
		distanceTraveledInKm: 23500.00,
	},
	{
		type: "Ford",
		distanceTraveledInKm: 54300.00,
	},
	{
		type: "BMW",
		distanceTraveledInKm: 5012.50,
	},
	{
		type: "Honda",
		distanceTraveledInKm: 1500.83,
	},
]

const result = carData.reduce((acc, carInfo) => {
	acc.totalKm = acc.totalKm + carInfo.distanceTraveledInKm
	acc.types = acc.types.concat([carInfo.type])
	return acc;
}, {
	totalKm: 0,
	types: [],
})

console.log(result)

// const result = {
// 	totalKm: 34234,
// 	types: [""]
// }


