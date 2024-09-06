// var itemsArray = [
//     {name:"juice",price:"50", quantity:"3"},
//     {name:"cookie",price:"30", quantity:"9"},
//     {name:"shirt",price:"880", quantity:"1"},
//     {name:"pen",price:"100", quantity:"2"}];
//     for(var key in itemsArray){
//         var items = itemsArray[key]
//         // console.log(items)
//         var itemPrice = items.price * items.quantity
//         console.log(` The price of ${items.name} is Rs. ${itemPrice}`)
//     };

//     var userInformation = {
//         name : "hamna",
//         email : "hamnajawaid22@gmail.com",
//         password : 62851,
//         age : 22,
//         gender : "female",
//         city : "karachi",
//         country : "pakistan"
//     }
//     document.write("name" in userInformation ); 
//     document.write("lastName" in userInformation);


function createStudent(firstName, lastName) {
    let student = {
        firstName : firstName,
        lastName : lastName,
        getFullName: function () {
            console.log(`${this.firstName} ${this.lastName}`)
        }
    }
    return student;
}
let student3 = createStudent("hamna", "iman")
console.log(student3);