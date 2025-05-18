// // let doesIsIt = newName.includes(",")

// // function checkComma(){
// // var newName  =  [  'V', 'i', 'r', 'e', 'm',
// //     'd', 'r', 'a', 6, 8,
// //     7, 6, 7, 'd', 'a',
// //     'n', 'g', 'i']
// //     let storeValue  = ""
// //       let storeString = []
// //       let storeNumber = []
// //  for (let a = 0; a < newName.length; a++) {

// //  }

// //  return storeNumber
// // }

// // // clousers
// // console.log(checkComma())

// // var a = 4;
// // var b = 6;
// // var c = a+b
// // console.log(c)

// // var num = prompt('eter number 1');
// // // var realnum = Number(num)
// // console.log(num);

// // var a = 2;
// // var b = 9;
// // a>b ? console.log('hey its true') : console.log('hey its false');
// // let str = 'apple';
// // let ans = str.slice(1,3);

// // console.log(ans);

// var obj = {
//     name : 'virendra dangi' ,
//     email : 'dangi@12.com' ,
//     age : 18 ,
//     classname : 'bca m - 17'

// }

// console.log(obj.email);

// let newArr = [1,2,3,4,5,]

//   const s =  newArr.map(value=> value !== 1)

// console.log(s , "he")

// // function

// const newFunction = ()=>{

// }

// function abcd(){
//     console.log("hello")
// }

// abcd()

// // function add(a, b) {
// //     return a + b;
// // }

// // console.log(add(3, 4));

// // let multiply = function(x, y) {
// //     return x * y;
// // };

// // console.log(multiply(2, 3));  // Output: 6

// console.log(bird)

// const  bird = "Sparrow"

// console.log(2 == "2")

//  let clg =  (val , meter = "500")=> {
//     if(val === 8){
//         alert("mujhe clg jana hai ")
//     }else{
//         return alert(" sorry im late")
//     }

//     if(meter === "500"){
//         alert("mujhe pedal chalna hai")
//     }

//     let arr = ["pen" , "copy"]

//     const thhigs =  arr.map((val)=> val === "pen")

//     alert("mujhe " , thhigs , "lena hai" )

//  }

//  console.log(clg(8))
// function abcd(){
//     a=0;
//     return function(){
// console.log(a); a++

//     }
// }
// console.log(a);

//  let a = Number(prompt("enter your first number"));
//   console.log(a);
//  let b = Number (prompt("enter second number"));
//  console.log(b);
//  let c = a+b ;
//  console.log("the value of both number is " + c  );

// function abcd(){
//     let a = Number(prompt("enter your first number"));
//   console.log(a);
//  let b = Number (prompt("enter second number"));
//  console.log(b);
//  let c = a+b ;
//  console.log("the value of both number is " + c  ); c;
// c = a+b+a
// }

// let i = 11;
//  let a = i++ + ++i;
// console.log("i="+i);
// let a = 11,b = 22, c;
// c = a+b+a++ +b++ + ++a + ++b;

// day 2 practice questions

// let numb_1 = Number(prompt("enter first number"));
// let numb_2 = Number(prompt("enter second number"));
// let numb_3 = Number(prompt("enter third number"));

// if (isNaN(numb_1) || isNaN(numb_2) || isNaN(numb_3))  {

//     console.log("please enter valid input");

// }

// else if (numb_1>numb_2 && numb_1>numb_3) {

//     console.log( numb_1 +  "is gretest among of them");

// }

// else if(numb_2>numb_1&&numb_2>numb_3){
//     console.log( numb_2 +  "is gretest among of them");
// }

// else if(numb_3>numb_1&&numb_3>numb_2){
//     console.log( numb_3 +  "is gretest among of them");
// }

// else{
//    console.log("they are equal ");

// }

//  let a = Number(prompt("enter the amount"));
//  let p = Number(prompt("enter the principal"));
// let r = Number(prompt("enter the rate of interest"));
// let n = Number(prompt("enter the number of year"));

// // CI = Math.pow (((1+r/100),n)*p)-a ;

//     let a = (((1+r/100),n)*p);

// // let CI = a-p;
// console.log(a);

// let year = Number(prompt("enter year"));
// if (year%4==0 && year%100!=0 || year%400==0) {
//     console.log("this is leap year");

// }

// else{
//     console.log("this is not a leap year");

// }

// let amount = Number(prompt("enter amount"));

// if (amount>0 && amount<=5000) {
//     console.log(amount);

// }

// else if(amount>5001 && amount<=7000){
//     console.log(amount-((5*amount)/100));

// }

// else if(amount>7001 && amount<=9000){
//     console.log(amount-((10*amount)/100));

// }

// else if(amount>9000){
//     console.log(amount-((20*amount)/100));

// }
// else{
//     console.log("you enter wrong input");

// }

// let amount = Number(prompt("enter amount"));
// let dis = 0;

// if (amount>0 && amount<=5000) dis=0;

// else if(amount>5001 && amount<=7000) dis=5;

// else if(amount>7001 && amount<=9000) dis=10;

// else if(amount>9000) dis=20;

// else console.log("you enter wrong input");

// console.log(amount-((20*amount)/100));

// let unit = Number(prompt("enter unit"));
// let amount = 0;
// if (unit>0&&unit<=100) {
//     console.log(unit*4.2);

// }

// else if(unit>101&&unit<=200){
//    amount = console.log( (100*4.2) + ((unit-100)*6));

// }
// // 150 100*4.2
// else if (unit>201&&unit<400){
//     amount = console.log( (100*4.2) + (100*6) + (unit-200)*8  );

// }

// else if (unit>400){
//    amount = console.log( (100*4.2) + (100*6) + (200*8) + (unit-400)*13);

// }
// else{
//     console.log("wrong input");

// }

// let unit = Number(prompt("enter electricity unit"));
// let amount = 0;

// if(unit>400){
//     amount = ( unit-400 )*13;
// unit = 400 ;
// }

// if(unit>201&&unit<=400){
//     amount += (unit-200)*8;
//     unit = 200 ;
// }

// if(unit>101&&unit<=200){
//     amount+=(unit-100)*6;
//      unit = 100
// }

//     amount+=(unit*4.2);

// console.log(amount);

// let amount = Number(prompt("enter amount"));

// if(amount>=2000){

// console.log(Math.floor(amount/2000) + "=2000 ruppees");
// amount = amount%2000

// }

// if(amount>=500){
//     console.log(Math.floor(amount/500) + "=500 ruppees");
// amount = amount%500
// }

// if(amount>=200){
//     console.log(Math.floor(amount/200) + "=200 ruppees");
// amount = amount%200
// }

// if(amount>=200){
//     console.log(Math.floor(amount/200) + "=200 ruppees");
// amount = amount%200
// }

// if(amount>=100){
//     console.log(Math.floor(amount/100) + "=100 ruppees");
// amount = amount%100
// }

// if(amount>=50){
//     console.log(Math.floor(amount/50) + "=50 ruppees");
// amount = amount%50
// }

// if(amount>=20){
//     console.log(Math.floor(amount/20) + "=20 ruppees");
// amount = amount%20
// }

// if(amount>=10){
//     console.log(Math.floor(amount/10) + "=10 ruppees");
// amount = amount%10
// }

// if(amount>=5){
//     console.log(Math.floor(amount/5) + "=5 ruppees");
// amount = amount%5
// }

// if(amount>=2){
//     console.log(Math.floor(amount/2) + "=2 ruppees");
// amount = amount%2
// }

// if(amount>=1){
//     console.log(Math.floor(amount/1) + "=1 ruppees");
// amount = amount%1
// }

// if(isNaN==amount){
//     console.log("you entered wrong input");

// }

// let num = Number(prompt("enter number"));
// let facto = 1;
// for(var i =15;i<=num;i++){
//     facto=facto*i
// }

// console.log(facto);

// let start = Number(prompt("enter starting number"))
// let end = Number(prompt("enter ending number"));
// let evensum = 0;
// let oddsum = 0;

// for(let i=start;i<=end;i++){

// if (i%2==0) {
//     evensum = evensum+i;
// }
// else{
//     oddsum = oddsum+i;
// }

// }

// console.log( "evensum:" + evensum );
// console.log("oddsum:" + oddsum);

// let num = Number(prompt("enter number"));
// isprime = true;

// for(let i = 2;i<num;i++){
// if (num%i==0) {
//     isprime = false
//     break ;
// }
// }

// if (isprime) console.log("this is a prime number");
// else {console.log("this is not a prime number");
// }

// let num = Number(prompt("enter number"));
// isprime = isprimefun();
// if(isprime) console.log("prime number");
// else console.log("not a prime number");
// function isprimefun(num) {
//   if (num<=1) return false
//   if(num==2) return true
//   if(num%2==0) return false

// let num = Number(prompt("enter number"));
// let lastdigit = 0 ;
// let ans = 0;
//  while (num>0) {
//     lastdigit = num%10;
//     ans = ans+lastdigit ;
//         num = Math.floor(num/10)
//  }

//  console.log(ans);

// let num = Number(prompt("enter number"));
// let lastdigit = 0 ;
// let reverse = 0;

// while (num>0) {
//     lastdigit = num%10;
//     reverse = (reverse*10)+lastdigit;
//     num = Math.floor(num/10);

// }
// console.log(reverse);

// let num = Number(prompt("enter number"));

// let copy = num;

// let square = num*num ;

// let county = num;

// let count = 0 ;

// while (county>0) {
//     count++
//     county= Math.floor(county/10);
// }

// let divi = Math.pow(10,count)

// let lastdigit =square%divi;

// if (copy===lastdigit)  console.log("it is automorphic number");

// else console.log("not automorphic number");

// let num = Number(prompt("enter number"));
// let sum = 0 ;
// let digi = 0;
// let copy = num

// while (num>0) {

//     digi = num%10;
//     sum = sum+digi ;
//     num = Math.floor(num/10) ;
// }

// if(copy%sum===0) console.log("it is a harshad number");
// else console.log("it is not a harshad");

// let num = Number(prompt("enter number"));
// let divisor = 0  ;
// let sumofdivisor = 0 ;

// for(let i = 1; i<num; i++){

//     if (num%i===0) {
//         sumofdivisor = sumofdivisor+i ;
//     }

// }

// if (sumofdivisor>num) console.log("abundant number");
// else console.log("not abundant number");

// let userinput = (prompt("enter anyone between circle,triangle,rectangle to find area"));

// switch (userinput)
// {
//     case ('circle') : {
//         let radius =  Number(prompt("enter radius" ))
//     console.log(2*Math.PI*radius);

//     break;
//     }
//         case ('triangle') : {
//             var base =  Number(prompt("enter base" ))
//             var height =  Number(prompt("enter height" ))
//             console.log(0.5*base*height) ;
//         }
//             break;

//             case ('rectangle') : {
//                 var length =  Number(prompt("enter length" ))
//                 var breadth =  Number(prompt("enter breadth" ))
//                 console.log(length*breadth) ;
//             }
//                 break;

//     default:
// console.log("wrong input");

//         break;
// }

// let num = Number(prompt("enter number"));
// let square = num*num ;
// let lastdigit = 0 ;
// let sum = 0 ;
// while(square>0)
// {

//  lastdigit = square%10;
// sum = lastdigit+sum ;

// square = Math.floor(square/10) ;

// }

// if(num===sum)console.log("neon number");
// else console.log("not an neon number");

// let num = Number(prompt("enter number"));
// let lastdigit = 0;
// let val = 0 ;
// while (num>0) {

// lastdigit = num%10 ;

// if(val<lastdigit){
// val = lastdigit ;
// }
// num = Math.floor( num/10 )

// }

// console.log("biggest number is  : " + (val));`

// const prompt = require("prompt-sync")();

// let num = Number(prompt("enter number"));

// for (i = 1; i <= num; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write( "*" + " ");
//   }

//   console.log();
// }

// if (i === j) {
//   for (row = 1; row <= num; row++) {
//     for (col = 1; col+row-1 <= num; col++) {
//       process.stdout.write("*" + " ");
//     }

//     console.log();
//   }
// }

// let arr = [10 , 20 , 30 , 40 ,50] ;
// let sum = 0;
// for(let i = 0; i<=(arr.length-1); i++){

// sum = arr[i]+sum

// }

// console.log("sum = " + sum);

// let prompt = require("prompt-sync")();
// let size  = Number(prompt("enter array")) ;
// let arr = []
// let min = Infinity ;

// for(let i = 0 ; i<size ; i++){
//     arr[i] = Number(prompt("enter element")) ;
//     if(min>arr[i]) min = arr[i]

// }

// console.log(arr);
// console.log(min);

// let arr = [80 , 45, 20 , 74, 54 ,65,5] ;
// let max = Math.max(arr[0] , arr[1]) ;
// let secondMax = Math.min(arr[0] , arr[1]) ;

// for(let i = 3 ; i<arr.length ; i++){

// if(arr[i]>max){
// secondMax = max ;
// max = arr[i] ;
// }

// else if(arr[i]>secondMax){
//     secondMax = arr[i] ;
// }
// }

// console.log("second Max = " + secondMax);

// let arr = [24 , 43 , 23 , 56 , 45 , 56]
// let i = 0 ;
// let j = arr.length-1 ;

// while(i<j){

// let tem = arr[j]
// arr[j] = arr[i]
// arr[i] = tem
// i++ ;
// j--
// }

// console.log(arr);

// let arr = [0 , 1 , 0 ,1 , 0 , 1 , 1 , 0 , 1 , 0 ,1,0 ,1]
// let i = 0;
// let j = 0 ;
// while (i<arr.length) {
//     if(arr[i]==0){
// let tem = arr[i]
// arr[i] = arr[j]
// arr[j] = tem
// j++

//     }
//     i++
// }
// console.log(arr);

// let arr = [4, 8, 546, 5, 45, 88, 56, 50];
// let temp = arr[arr.length-1] ;
// for (let i = arr.length-1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr [0] = temp
// console.log(arr);


// let arr = [5 , 6 , 8 , 7 ,0 ,2 ,9];
// let k = 1 ;
// let temp = 0

// k = k%arr.length


// reverse(arr ,  0 , k-1)
// reverse(arr ,  k , arr.length-1)
// reverse(arr ,  0 , arr.length-1)

// console.log(arr);


// function reverse(arr , i , j) {
//   while (i<j) {
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
//   }
// }

// linear search algorithm

// let arr = [9 , 8 , 2 , 5 ,  0 ,65 , 77] ;
// let target = 11 ;

// for(let i = 0 ; i<arr.length ; i++){

// if(target==arr[i]){
//   console.log("taget on  = "  + i);
// break ; 
// }
// else console.log(-1);
// break ;

// }

// bubble sorting algorithm

// let arr = [4, 69, 7, 86, 84, 32, 8];

// for (let i = 0; i < (arr.length) - 1; i++) {
//   for (let j = 0; j < (arr.length - 1) - i; j++) {

//     if (arr[j] > arr[j + 1]) {

//       let temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp;

//     }
//   }
// }
// console.log(arr);


// let arr = [45 ,42, 21 , 1 ,54 ,6 , 3] ;


// for(let i = 0 ; i<arr.length-1 ; i++){
//   let smallindex = i ;
//   for(let j = i+1 ; j<arr.length ; j++){

//     if(arr[smallindex]>arr[j]){
//       smallindex = j
//     }
//   }
//   [arr[i] , arr[smallindex]] = [arr[smallindex] , arr[i]]
// }
// console.log(arr);


// bubble sorting with optimized approch
// let arr = [3 , 5 , 6 ,4 ,0 ,2] ;
// let isswap = false
// for(let i = 0 ; i<arr.length-1 ; i++){
//   for(let j = 0 ;j<(arr.length-1)-i ; j++){

//     if(arr[j+1]<arr[j]){
//     [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
//     isswap = true
//     }
//   }
//   isswap = false
// }

// console.log(arr);


// let arr = [[1,2,3] , [4,5,6] , [7,8,12] ] ;
// let leftsum = 0 ;
// let rightsum = 0 ;

// for(let i = 0 ; i<arr.length ; i++){

//   for(let j=0  ; j<arr[i].length ; j++){

//     if(i===j) leftsum = leftsum+arr[i][j]

//     if(i+j === arr.length-1)  rightsum = rightsum + arr[i] [ j] ;

//   }
// }
// console.log(rightsum);
// console.log(leftsum);

// let arr = [[1,2,3] , [4,5,6] ] ;
// let ans = Array.from({length:  arr[0].length},()=>Array(arr.length))

// for(let i = 0 ; i<ans.length ; i++){
//   for(let j = 0 ; j<ans[i].length ; j++){

// ans[i][j] = arr[j][i]

//   }

// }

// for (let row of ans) {
//   console.log(row.join(" "));
// }



// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < i; j++) {

//     let temp = arr[i][j]
//     arr[i][j] = arr[j][i]
//     arr[j][i] = temp
//   }
// }

// for (let i = 0; i < arr.length; i++) {


//   let start = 0;
//   let end = arr[i].length-1;
//   while (start < end) {

//     let tem = arr[i][start]
//     arr[i][start] = arr[i][end]
//     arr[i][end] = tem
//     start++;
//     end--;

//   }

// }
// console.log(arr);



// let image = [[1,1,0],[1,0,1],[0,0,0]] ;


// for(let i = 0 ; i<image.length ; i++){
// let start = 0 ;
// let end = image[i].length-1 ;

// while(start<end){
// let temp = image[i][start]
// image[i][start] = image[i][end]
// image[i][end] = temp

// start++ ;
// end-- ;

// }

// }

// for(let i = 0 ; i<image.length ; i++){
//   for(let j = 0 ; j<image[i].length;j++){

//     if(image[i][j]==0) {

//       image[i][j] = 1 ;
//     }
//     else image[i][j] = 0
//   }
// }

// console.log(image);

// basic questions of string

// let str = ("virendra") ;
// let rev = (" ")
// for(let i =str.length-1; i>=0 ; i--){
// rev = rev + str[i]

// }
// console.log(rev);

// let prompt = require("prompt-sync")() ;
// let str = prompt("enter string") ;
// let j = str.length-1 ;
// let i = 0 ;
// let ispalinedrome = true ;

//   while(i<j){
//   if(str[i]!=str[j]){
//      ispalinedrome = false ;
//      break ;
//   }
//   i++
// j--
//   }

// console.log(ispalinedrome);

// let prompt = require("prompt-sync")() ;
// let str = prompt("enter string") ;
// let ans = (" ") ;

// for(let i = 0; i<str.length ; i++){

//   let charcode = str.charCodeAt(i); // to convert in ascii value using function str.charCodeAt

// if(charcode>=65 && charcode<=90) {
//   ans = ans + String.fromCharCode(charcode+32) ; // to convert in string from charcode(ascii value)
// }
// else if(charcode>=97 && charcode<=122){
//       ans = ans + String.fromCharCode(charcode-32) ;

// }
// }
// console.log(ans);


// let str = ["hello" , "i" , "am" ,  "virendra" , "dangi" , "hero"] ;
// let s = "he" ;
// let count = 0;

// for(let i = 0; i<str.length ; i++){
//      if(str[i].startsWith(s)) count++

// }
// console.log(count);


// let str = ("hello bhai kese ho") ;
// let ans = (" ") ;
// let arrstr =  str.split(" ") // this function is used to break every word and this will give answet in string

// for(let i = 0 ; i<arrstr.length ; i++ ){
//      let word = arrstr[i];
//      if(word.length<=2){
//       ans = ans + word.toUpperCase() + " ";
//      }

//      else{
//       ans = ans + word.charAt(0).toUpperCase() +
//             word.substring(1 , word.length-1) +
//             word.charAt(word.length-1).toUpperCase() + " ";
//      }
// }

// console.log(ans);


// let str = ("shfudylgbsja") ;
// let freqarr = new Array(123).fill(0) ;


// for(let i = 0 ; i<str.length ; i++){
//   let ascii = str.charCodeAt(i)
//      freqarr[ascii] = freqarr[ascii]+1 ;

// }
// for(let i = 0 ; freqarr.length ; i++){
//       if(freqarr[i]>0){
//         console.log(String.fromCharCode(i) + " = "+  freqarr[i]);

//       }    

// }


// let str1 = ("state") ;
// let str2 = ("taste") ;
// let arr = new Array(123).fill(0) ; 
// let isanagram = true

// if(str1.length==str2.length){
//   for(let i = 0; i<str1.length; i++){
//     let ascii = str1.charCodeAt(i) ;
//     arr[ascii] = arr[ascii]+1 ;
//  }

//  for(let i = 0; i<str2.length ; i++){
//        let ascii = str2.charCodeAt(i) ;
//        arr[ascii] = arr[ascii] - 1 ;

//  }
//  for(let i = 0 ; i<arr.length ; i++){
//            if(arr[i]!=0){
//             isanagram = false ;
//             break ;
//            }  
//  }
// }

// if(isanagram){
//   console.log("they are anagram string");

// }
// else console.log("they are not anagram string");

// set

// question = check if a number is anagram or not  (leetcode question)

// let str = ("qwertyuiopasdfghjklmnbvcxzsdnjvdfnvdivn")
// let set = new Set(str) ;

// if(set.size==26) console.log("this string is pangram");
// else console.log("this is not pangram string");

// leetcode happy Number

// let prompt = require("prompt-sync")() ; 
// let n = Number(prompt("enter number"))
// let copy = n ;
// let lastdigit = 0 ;
// let set = new Set() ;

// while(true){
//   let sum = 0
//   while(n>0){
//    lastdigit =n%10 ;
//    n = Math.floor(n/10) ;
//    sum = sum +(lastdigit*lastdigit) ;
//   }
//    if(sum==1) {
//         console.log("happpy number");
//         break ;
//    }
//       if(set.has(sum)){
//         console.log("not happy number");
//         break ;
//       }
//   else {
//     set.add(sum) ;
//     n = sum ;
//   }
//   }

// leetcode jewels and stones 

// let jewels = "aA" ;
// let set = new Set(jewels) ;
// let stones = "aAAbbbbb" ;
// let count = 0 ;

// for(let i = 0 ; i<stones.length; i++){
//   let ch = stones.charAt(i) ;
//   if(set.has(ch)) count++

// }

// console.log(count);

// let str = ("hellolllll") ;
// let map = new Map() ;
// for(let i =0 ; i<str.length; i++ ){
//   let ch = str.charAt(i) ;

//   if(map.has(ch)){
//     map.set(ch,map.get (ch)+1)
//   }
// else  map.set(ch , 1)

// }

// console.log(map);


// let arr = [2 ,6 , 3 , 4 , 9 , 4] ;
// let taget = 13 ;
// let sum = 0;

// for(let i = 0 ; i<arr.length ; i++){
//    for(let j = i+1 ; j<=arr.length ; j++){
//      sum = arr[i] + arr[j] ;
//     if(sum==taget) {
//       console.log([i , j]);
//        break ;
//     }
//    }
//    if(sum==taget) 
//     break ;
// }


// let str = ("abcdbcbd") ;
// let map = new Map() ;

// for(let i = 0 ; i<str.length ; i++){
//   let ch = str.charAt(i) ;
//    if(map.has(ch)) {
//     console.log(ch);
//     break ; }

//    else map.set(ch , i) ;

// }


// let numbs = [11 , 15 , 7 , 2] ;
// let target = 9 ;
// let map = new Map() ;
// let ans = [-1 , -1] ;

// for(let i = 0; i<numbs.length; i++){
//   if(map.has(target-numbs[i])){
//     ans[0] = i ;
//     ans[1] = map.get(target-numbs[i]) ;

//   }
//   else map.set (numbs[i] , i)
// }

// console.log(ans);

// let names = ["tom" , "jerry" , "spike"] ;
// let height = [160 , 150 , 170] ;
// let map = new Map() ;

// for(let i = 0; i<height.length ; i++){
//     map.set(height[i] , names[i])
// }
//  height.sort((a,b) => b-a );

//    let ans = new Array (names.length) ;

//    for(let i =0 ; i<height.length; i++){
//     ans[i] = map.get(height[i]) ; 
//    }


// console.log(ans);


// let arr = [[4 , 6 ,3 ,] , [8 , 4 ,10] , [14 , 20 , 11]] ;
// let leftsum = 0;
// let rightsum = 0 ;

// for(let i = 0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){

//         if(i===j) {
//             leftsum = leftsum + arr[i][j]
//         }

//     if(i + j === arr.length-1){
//         rightsum = rightsum + arr[i][j]
//     }
//     }

// }


// let totalsum = leftsum+rightsum ;

// if(arr.length%2===1){
//     let mid = Math.floor(arr.length/2) ;
//     totalsum = totalsum - arr[mid][mid] ;   
// }

// console.log(totalsum);


// RECURSION 

// let n = 20 ;

// ab(n)
// function ab(a){

// if(a==0) return ;
// ab(a-1)
//     console.log(a);


// }


// fibonacci series question


// let n = 10 ;
// let first = 0;
// let second = 1;
// let third = 0 ;

// console.log(first);
// console.log(second);

// ab(n-2 , first , second)


// function ab(n , first , second){
//     if(n==0) return

//     third = first+second
//     console.log(third);   
//     first = second 
//     second = third
//     return ab(n-1 , first,second)

// }


// let n = 8 ;

// function sumfab(n){
//     if(n==0) return 0  ;
//     if(n==1) return 1 ;

//     return  sumfab(n-1) + sumfab(n-2) ;
// }

// console.log(sumfab(n));


// let n = 936 ;
// let sum = 0;
// let lastdigit = 0;

// function sumofdigit(n , sum , lastdigit){
//    if(n==0) return sum ;
//    lastdigit = n%10 ;
//    sum = sum+lastdigit;
//    n = Math.floor(n/10) ;
//  return sumofdigit(n,sum,lastdigit)
// }


// console.log(sumofdigit(n,sum,lastdigit));

// let n = 1234 ;
// let lastdigit = 0;
// reverse(n)
// function reverse(n){
//       if(n==0) return  
//       lastdigit = n%10 ;
//       n = Math.floor(n/10) ;
//       process.stdout.write(lastdigit.toString()) ;
//       reverse(n)
// }





// let n = 1234 ;

// function sod(n){
//       if(n<10) return n 

// return n%10 + sod (Math.floor(n/10))
// }

// console.log(sod(n));




// let n = 624;
// function reverse(n , rev) {
//     if (n === 0) return rev;
//     return  reverse(Math.floor(n/10) , (rev * 10 )+ (n%10))
// }
// console.log(reverse(n , 0));

// leetcode 1979. Find the greatest common divisor

// let nums = [42 , 54 , 28 , 33 , 29 ] ;


// let biggest = 0 ; 
// for(let i = 0 ; i<nums.length; i++){
//     if(nums[i]>biggest) biggest = nums[i]  ;
// }


// let smallest = Infinity ;
// for(let i = 0 ; i<nums.length; i++){
//     if(nums[i]<smallest) smallest = nums[i] ; 
// }


// for(let i = Math.min(biggest,smallest); i>1 ; i--){
//  if(biggest%i==0 && smallest%i==0){
//      console.log(i);
//      break ;
//  }
// }

// find prime number to the given number
// let n = 30 ;
// let arr = new Array(n+1).fill(true)


// for(let i = 2 ; i<=Math.floor(Math.sqrt(n)) ; i++){
//     if(arr[i]===true){
//         for(let j = i*i ; j<=n ; j = j+i){
//             arr[j] = false
//         }
//     }
// }

// for(let i = 2 ; i<arr.length; i++){
//    if(arr[i]) console.log(i);

// }


// let n = 8 ;
// let i =0 ;
// for(; i*i<=n ; i++){
//     if(i*i == n ) console.log(i);

// }
// console.log(i-1);

// let n = 10;
// let x = 2;
// let ans = 1;


// if (n < 0) {
//     x = 1 / x
//     n = -n
// }

// while (n > 0) {
//     if (n % 2 == 1) {
//         ans = ans * x;
//     }
//     x = x * x
//     n = Math.floor(n / 2)
// }
// console.log(ans);

// leetcode 50 ; pow(x,n)

// let n = -2 ;
// let x = 2 ;

// function power(x , n){

//     if(n<0) {
//         x = 1/x ;
//         n = -n
//     }
//     if(n==0) return 1 ;

//     let half = power(x,Math.floor(n/2))

//     if(n%2==0) {
//        return half*half ;
//     }
//      return x*half*half;
// }

// console.log(power(x,n));


// duplicate zero
//  arr = [1,0,2,3,6,0,5,9]
//  let count = 0 ;
//  for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]==0) count++
//  }


//  let i = arr.length-1;
//  let j = arr.length-1+count ;

// while(i!=j){

//     if(arr.length>j){
//         arr[j] = arr[i] ;  
//     }
//     j--
//     if(arr[i]==0){
//         if(j<arr.length){
//         arr[j] = arr[i]
//         }
//         j--
//     }
//     i--
// }

// console.log(arr);
















//  new array questions

// let arr1 = [1,2,3, 10]
// let arr2 = [4,6,8 ]

// let ans = new Array(arr1.length + arr2.length);
// let i = 0;
// let j = 0;
// let k = 0;

// while (i < arr1.length && j < arr2.length) {

//     if (arr1[i] > arr2[j]) {
//         ans[k] = arr2[j]
//         j++;
//         k++
//     }

//     else {
//         ans[k] = arr1[i]
//         i++;
//         k++
//     }
// }
// while (i < arr1.length) {
//     ans[k] = arr1[i]
//     k++;
//     i++
// }
// while (j < arr2.length) {
//     ans[k] = arr2[j]
//     j++;
//     k++;
// }


// console.log(ans);


// leetcode merge sorted array

// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]


// let m = 3 ; // arr1 actual length
// let n = 3 ; // arr2 length

// let i = m-1 ;
// let j = n-1 ;
// let k = m+n-1 ;

// while(i>=0 && j>=0){
//     if(nums1[i]>nums2[j]){
//         nums1[k] = nums1[i]
//         k--;
//         i--
//     }
//     else{
//         nums1[k] = nums2[j]
//         k-- ;
//         j-- ;
//     }
// }
// while(j>=0){
//     nums1[k] = nums2[j]
//     k-- ;
//     j-- ;
// }
// console.log(nums1);

// leetcode remove dublicate from sorted array

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// let j = 1;

// for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] != nums[i+1]) {
//         nums[j] = nums[i+1]
//         j++   ;
//     }
// }


// console.log(nums, j);


// maximum subarraay at array

// let nums = [-3, -2, 0, -1];

// let sum = 0;
// let maxsum = nums[0]; // intiliaze first element cause if all the element is negative so it will not give zero 

// for (let i = 0; i < nums.length; i++) {
//    sum = nums[i] + sum;

//    if (sum > maxsum) maxsum = sum;

//    if (sum < 0) sum = 0;


// }

// console.log(maxsum);

// leetcode 169. Majority Element / Boyer Moore's Voting Algo


// let nums = [2,2,1,1,1,2,2];
// let majority = nums[0] ;
// let count = 1 ;

// for(let i = 1 ; i<nums.length ; i++){
// if(count==0){
//    majority = nums[i] ;
// }

// if(majority == nums[i]) count++ ;
// else{
//    count-- ;
// }

// }

// console.log(majority);

// leetcode 121 : best time to buy and sell stock

// let prices = [3, 2, 6, 1, 4];
// let min = prices[0] ;
// let currentprofit = 0 ;
// let maxprofit = 0 ;

// for(let i = 0; i<prices.length; i++){

//    if(prices[i]<min) min = prices[i] ;

//    currentprofit = prices[i]-min ;
//    if(currentprofit>maxprofit) maxprofit = currentprofit ;
// }

// console.log(maxprofit);



// leetcode sort the color

// let   nums = [2,0,2,1,1,0] ;
// let i = 0 ;
// let j = 0 ;
// let k = nums.length-1 ;

// while(i<=k){

//    if(nums[i]===0) {
//       [nums[i],nums[j]] = [nums[j],nums[i]]
//       i++ ;
//       j++;
//    }

//   else if(nums[i]===2){
//    [nums[i], nums[k]] = [nums[k], nums[i]] ;
//       k-- ;
//    }
//  else {
//    i++   
//  }  
// }

// console.log(nums);


// leetcode 42 : trapping rain water

// let height =[0,1,0,2,1,0,1,3,2,1,2,1] ;
// let left = new Array(height.length) ;
// let right = new Array(height.length) ;
// let lefthighest = 0 ;
// let righthighest = 0 ;
// let sum = 0 ;

// for(let i = 0 ; i<height.length ; i++){
//     lefthighest  = Math.max(height[i] , lefthighest)
//     left[i] = lefthighest
// }

// for(let i = height.length-1 ; i>=0 ; i--){
//     righthighest  = Math.max(height[i] , righthighest)
//     right[i] = righthighest
// }

// for(let i = 0 ; i<height.length ; i++){
//    sum += Math.min(left[i],right[i]) - height[i] 

// }


// console.log(left);
// console.log(right);
// console.log(sum);


// leetcode 11 : container with most water

// let  height = [1,8,6,2,5,4,8,3,7] ;
// let i = 0 ;
// let j = height.length-1 ;
// let ans = 0 ;

// while(i<j){
//    ans = Math.max(ans , Math.min(height[i],height[j]) * (j - i))

//    if(height[i]<height[j]) i++ ;
//    else j-- ;
// }

// console.log(ans);



// leetcode 2206 : divide array into equal pair

// let nums = [2, 3, 2, 4, 3, 4, 2];
// let map = new Map();
// let count = 0;
// let ispair = true;
// for (let i = 0; i < nums.length; i++) {
//    if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1)
//    }
//    else {
//       map.set(nums[i], 1);
//    }
// }

// let values = Array.from(map.values());

// for (let i = 0; i < values.length; i++) {
//    if (values[i] % 2 != 0) {
//       ispair = false;
//       break ;
//    }
// }

// console.log(map, ispair);


// leetcode 283 : moves zer0
// let nums = [1,0 ,4,0,0,12,5] ;
// let i = 0 ;
// let j = i+1 ;

// while(j<nums.length){
//   if(nums[i]===0 && nums[j]!=0){
//       [nums[i] , nums[j]] = [nums[j] , nums[i]] ;
//       i++ ;
//       j++ ;
//    }
//  else if(nums[i]!=0) {
//    j++ ;
//    i++ ;
//  }

//    else {
//       j++ ;
//    }

// }

// console.log(nums);



// leetcode 2154. Keep Multiplying Found Values by Two

// let nums = [8,28,4,2,15,3] ;
// let original = 2 ;
// let i = 0 ;
// while(i<nums.length){
//   if(nums[i]===original){
//      original = original*2 ;
//       i = 0 ;
//   }
//   else i++ ;
// }

// console.log(original);


// leetcode 2057. Smallest Index With Equal Value

// let  nums = [7,1,3,5,2,6,3,1,1,4,5,4,8,7,2,0,9,9,0,5,0,1,6] ;
// for(let i =0 ;i<nums.length;i++){
//     if(i%10===nums[i]){
//        console.log(i);
//              break ;
//     }

// }


 // leetcode 2169. Count Operations to Obtain Zero

//  let num1 = 2 ;
//  let  num2 = 3 ;
//  let Operations = 0 ;

//  while(num1!=0 && num2!=0){
      
//     if(num1>=num2) num1 = num1-num2 ;
//     else num2 = num2-num1 ;
//        Operations++ ;
//  }
// console.log(Operations , num1);


// letcode 15. 3Sum

// let nums = [-1,0,1,2,-1,-4] ;
// let temp = []
// nums.sort((a,b)=>a-b) ;
// for(let i = 0 ; i<nums.length;i++){
//     let j = i+1 ;
//     let k = nums.length-1 ;

//     if(i!=0 && nums[i]==nums[i-1]) continue ;
//    while(j<k){
//       if(nums[i]+nums[j]+nums[k]==0){
//         temp.push( [nums[i],nums[j],nums[k]]) ;
//          j++ ;
//        k-- ;
          
//       while(j<k && nums[j]===nums[j-1]) j++ ;
//       while(j<k && nums[k]===nums[k+1]) k-- ;
      
//       }
//       else if(nums[i]+nums[j]+nums[k]<0) j++ ;
//       else  k-- ;

//    }
// }

// console.log(temp);

// leetcode 1732. Find the Highest Altitude

// let gain = [-5,1,5,0,-7] ;
// let start = 0 ;
// for(let i = 0 ; i<gain.length;i++){
//     start = start+(gain[i]) ;
//      gain[i] = start ;
// }
// let maxalti = 0 ;
// for(let i = 0 ; i<gain.length;i++){
//     if(gain[i]>maxalti) maxalti = gain[i] ;
// }

// console.log(maxalti);




























