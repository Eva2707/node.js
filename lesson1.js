let n = 20;
let list = new Array;
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)) {
      break;
    } else {
        list.push(i.toString())
      break;
    }
  }
}
console.log(list);
