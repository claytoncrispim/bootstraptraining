// Sum function for Set's unique values
const sumSetAmounts = ((set) => {
    let sum = 0;
    set.forEach((value) => {
      sum += value;
    });
    console.log("sumAmounts result: ", sum);
    return sum;
});

export default sumSetAmounts;
