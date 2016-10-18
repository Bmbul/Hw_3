const array = [1,2,3,4,5,6,7];
const reverse= function (arr){
const reversedArray = []
for (let i = 0;i<arr.length;i++){
reversedArray[i] = arr[(arr.length-1)-i];
}
console.log(reversedArray);}
reverse(array);
