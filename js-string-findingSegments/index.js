// CHAPTER 23: Chapter-23: String: finding-Segments

// methods we're gonna discuss
// indexof
// const book = "think and grow rich";
// const indexofk = book.indexOf("k");
// console.log(indexofk);

// // always return the result of very first match
// const greentings = "hello";
// console.log(greentings.indexOf("l"));

// // can pass string as well
// const book = "think and grow rich"
// console.log(book.indexOf("and grow"));

// it gives you index on which the string is present
// const email = "test@test.com";
// console.log(email.indexOf("@"));
// console.log(book.indexOf("and grow"));

// gives you -1 if string is not present
// console.log(email.indexOf("r"));

// we can use simple array as well
// const street = ["ali","ahmad","sohail","babar","fahad","ali"]
// console.log(street.indexOf("ali"));
// console.log(street.lastIndexOf("ali"));

// lastindexof

// as the name suggests,  it always returns the index of last match
// const greentings = "hello";
// console.log(greentings.lastIndexOf("l"));

// email validation (without using indexOf)
// const userEmail =prompt("please enter your email address");
// let isvalid = false;

// for(let charindex = 0; charindex < userEmail.length; charindex++ ){
//    if(userEmail[charindex] === "@"){
//       isvalid = true;
//       break;
//    }
// }
// if(isvalid){
//     console.log("valid email address");
// }else{
//     console.log("invaild email address");
// }

// email validation using indexOf
// const email = prompt("please enter your email address");
// const isvalid = email.indexOf("@");
// if(isvalid === -1){
//   console.log("invaild email");
// }else{
//     console.log("valid email");
// }








