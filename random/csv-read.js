const { readFileSync } = require('node:fs')

const resultsFile = (readFileSync('student-results.csv')).toString().replace(/\r/g, "")

const resultsByLine = resultsFile.split("\n")

// console.log(resultsByLine)

const categories = resultsByLine[0].split(",").reduce((acc, key) => {
	acc[key] = null
	return acc
}, {})

const studentResults = resultsByLine.slice(1).map(studentString => {
	const studentValues = studentString.split(',')
	return {
		'Student Name': studentValues[0],
		'Exam 1': Number(studentValues[1]),
		'Exam 2': Number(studentValues[2]),
		'Exam 3': Number(studentValues[3]),
	}
})



const studentResultsWithAvg = studentResults.map(studentResult => {
	const average = (studentResult["Exam 1"] + studentResult["Exam 2"] + studentResult["Exam 3"]) / 3
	studentResult.Average = average
	return studentResult
})

console.log(studentResultsWithAvg)