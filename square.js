const numbers=[2,3,4,5,6];
 const output=[];
for(let i=0;i<numbers.length;i++){
const element=numbers[i];
const result=element*element;
output.push(result);
}
//wow what a things map
const result= numbers.map(function(element){
return element*element;
})
console.log(result)
//arokta  upay
const result =numbers.map(x => x*x);
console.log(result);