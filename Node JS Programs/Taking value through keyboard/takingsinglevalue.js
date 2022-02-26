let obj = require("readline");
let abc =obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

abc.question("enter the name",(name)=>{
    console.log("your name is "+name);

    abc.close();       //terminate our application
})