const arr = [1, 2, 3, 4, 5];
let newArr = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i] * arr[i];
    newArr.push(num);
}

for (let j = 0; j < newArr.length; j++) {
    sum += newArr[j];
    console.log(sum);
}


