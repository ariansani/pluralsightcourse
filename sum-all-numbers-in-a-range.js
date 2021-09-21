function sumAll(arr){
   const min = arr[0] < arr[1] ? arr[0] : arr[1];
   const max = arr[0] > arr[1] ? arr[0] : arr[1];


   let sum = 0;
   for(let i = min; i <= max;i++){
       sum += i;
   }
   return sum;

}

function secondSumAll(arr){
let sum = 0;
for (let i = Math.min(... arr);i<=Math.max(...arr);i++){
sum+=i;
}
return sum;
}

console.log(sumAll([4,1]));