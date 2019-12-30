/*jshint esversion: 6*/

/*
 * SAMPLE DATA
 */
const sampleData1 = [{ score: 3, day: 0 }, { score: 3, day: 1 }, { score: 1, day: 2 }, { score: 2, day: 3 }, { score: 2, day: 4 }, { score: 1, day: 5 }];
const sampleData2 = [{ "score": 2, "day": 0 }, { "score": 1, "day": 1 }, { "score": 1, "day": 2 }, { "score": 1, "day": 3 }, { "score": 1, "day": 4 }, { "score": 1, "day": 5 }];
/**
 * Regression algorithm library
 *
 */
const regression = require('regression');

/**
 * 
 * @param {*} objectArray recieves sampleData1 as parameter and breaks into day, score format. ie. [[1,2],[2,3]]
 */
const createScoreArray =  objectArray =>{
    const temp=[];
    objectArray.forEach(element => {
    temp.push([element.day, element.score]);
});
    return temp;
};

/**
 * get the formatted data
 */
const formatterdData = createScoreArray(sampleData1);
console.log(formatterdData);

// running various algorithms
const result = regression.linear(formatterdData);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
console.log("linear gradient: ",gradient);
console.log("linear yIntercept",yIntercept);
console.log(`predicted result for 6th day`,result.predict(6));

const polynomicalResult = regression.polynomial(formatterdData);
console.log(`\npolynomial gradient:${polynomicalResult.equation[0]},polynomial yIntercept: ${polynomicalResult.equation[1]},  polynomial Prediction: ${polynomicalResult.predict(6)}`);

const exponential = regression.exponential(formatterdData);
console.log(`\nexponential gradient:${exponential.equation[0]},exponential yIntercept: ${exponential.equation[1]},  exponential Prediction: ${exponential.predict(6)}`);

const logarithmic = regression.logarithmic(formatterdData);
console.log(`\nlogarithmic gradient:${exponential.equation[0]},logarithmic yIntercept: ${exponential.equation[1]},  logarithmic Prediction: ${exponential.predict(6)}`);
