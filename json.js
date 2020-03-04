const user={id:234,  name:"fahim"};
//{"id":234,"name":"fahim"}
const usrjson=JSON.stringify(user);
const fromjson=JSON.parse(usrjson);
console.log(fromjson);
console.log(usrjson);