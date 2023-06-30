//for the given JSON iterate over all for loops(for,for in, for of,forEach)

const obj=[{
    id:1,
    name:"Abc",
    age:30
},
{
    id:2,
    name:"Def",
    age:28
},{
    id:3,
    name:"Ghi",
    age:25
},
{
    id:4,
    name:"Jkl",
    age:29
}]
//for loop
for(let i=0;i<obj.length;i++){
    console.log(obj[i].name)
}

//forEach loop
obj.forEach((element)=>{
    console.log(element.id)
});

//for of loop
for (let x of obj){
    console.log(x.age)
 }

//for in loop
let person = {
     fname: "Nick",
     lname: "Jonas",
      age: 26,
}
 for (let x in person) {
    console.log(x+": "+person[x])
 }
 