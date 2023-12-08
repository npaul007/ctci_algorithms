let jobs = [100, 10, 55, 32, 6, 1, 2000, 300, 110, 67, 24];
const N = jobs.length;
let queue = [];

while (jobs.length) {
  let val = jobs.shift();
  if (queue.length === 0) queue.push(val);
  else if (val >= queue[0]) {
    queue.unshift(val);
  } else {
    let c = 0;
    while (queue[c] > val && c < queue.length) {
      c++;
    }

    if (c === queue.length) {
      queue.push(val);
    } else {
      queue.splice(c, 0, val);
    }
  }
}

console.log(queue);
