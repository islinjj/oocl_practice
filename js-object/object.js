var user={name:"John",surname:"Mike"}
//Modify the value of name attribute as Peter;
user.name = "Peter";
console.log(user.name);

//Delete name attribute of user.
delete user.name
console.log(JSON.stringify(user));


// calculate fruit
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
console.log(fruit.apple+fruit.pear+fruit.peach);
