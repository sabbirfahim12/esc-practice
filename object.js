const student=[
{id :12,name:"fahim"},
{id :13,name:"talha"},
{id :14,name:"ahsan"}

]
const names=student.map(s=> s.name);
const filter=student.filter(s =>s.id>12);
const find=student.find(s=>s.id>12);
console.log(names)
console.log(filter);
console.log(find);
