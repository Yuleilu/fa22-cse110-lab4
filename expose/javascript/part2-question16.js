let statistics={
    redCars: 21,
    blueCar:45,
    greenCars: 12,
    raceCars:5,
    blackCars:40,
    rareCars: 2
};

//Given the above Object, write a for...in loop that will iterate through it and print out the value of the perty if the perty starts with the letter r, or if the value of that perty is an odd number.  (This should be in a JS file part2-question16.js)

for (let p in statistics) {
    if (
      p.startsWith("r") || (typeof statistics[p] === "number" && statistics[p] % 2 !== 0)
    ) {
      console.log(statistics[p]);
    }
  }