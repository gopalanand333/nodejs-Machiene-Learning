/*jshint esversion: 6*/

/*
 * SAMPLE DATA
 */
const sampleData1 = [{ score: 3, day: 0 }, { score: 3, day: 1 }, { score: 1, day: 2 }, { score: 2, day: 3 }, { score: 2, day: 4 }, { score: 1, day: 5 }];
const sampleData2 = [{ "score": 2, "day": 0 }, { "score": 1, "day": 1 }, { "score": 1, "day": 2 }, { "score": 1, "day": 3 }, { "score": 1, "day": 4 }, { "score": 1, "day": 5 }];
const heartDataAggregates = require("./sample data/aggregate.json");
const stepsAggregate = require("./sample data/steps.json");
/**
 * Regression algorithm 
 *
 */

const regression = require('regression');


const createScoreArray =  objectArray =>{
    const temp=[];
    objectArray.forEach(element => {
    temp.push([element.day, element.score]);
});
    return temp;
};
const formatterdData = createScoreArray(sampleData1);

console.log(formatterdData);
const result = regression.linear(formatterdData);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
console.log(gradient);
console.log(yIntercept);
console.log(`predicted result for 7th day`,result.predict(7));
