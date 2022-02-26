let obj = require("readline");
let abc =obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

abc.question("enter the Id",(Id)=>{
       abc.question("enter the name",(name)=>{
       abc.question("enter the age",(age)=>{
    console.log("Id is "+Id);
    console.log("name is "+name);
    console.log("age is "+age);

       })
   })

})