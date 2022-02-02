function solution(reds, blues, fastest) {
  let sortedReds = reds.sort((a, b) => a - b);
  let sortedBlues = blues.sort((a, b) => a - b);

  let sum = 0;

  if (fastest) {
    for (let i = 0; i < sortedReds.length; i++) {
      let redNum = sortedReds[i];
      let blueNum = sortedBlues[sortedBlues.length - 1 - i];

      if (redNum > blueNum) sum += redNum;
      if (blueNum >= redNum) sum += blueNum;
    }
  } else {
    for (let i = 0; i < sortedReds.length; i++) {
      let redNum = sortedReds[sortedReds.length - 1 - i];
      let blueNum = sortedBlues[sortedBlues.length - 1 - i];

      if (redNum > blueNum) sum += redNum;
      if (blueNum >= redNum) sum += blueNum;
    }
  }

  return sum;
}

reds = [5,5,3,9,2];
blues = [3,6,7,2,1];
fastest = false;

console.log(solution(reds, blues, fastest));