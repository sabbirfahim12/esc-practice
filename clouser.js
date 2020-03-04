function add(){
let count =0;
return function(){
count++;
return count;
}

}
const clock=add();
console.log(clock());
console.log(clock());
console.log(clock());

const clock2=add();
console.log(clock2());
console.log(clock2());
console.log(clock2());