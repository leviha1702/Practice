console.log('hello')
//khai bao bien
let name ="Ha";
let age = 20;
let isStudent= true;
 console.log("Name : " +name);
 console.log("Age: "+age);
 console.log("la hoc sinh "+ isStudent);
//ham tong
function sum(a, b){
    let s=0;
    s=a+b;
    return s;
 }
console.log('tong hai so:' + sum(5.1, 6));
console.log('tong hai so la:' + sum( 7, 12));
// kiem tra so chan và so le
function checkOddEven(number){
    if(number%2==0)
        console.log(number +" la so chan.");
    else console.log(number +" la so le.");
}
checkOddEven(9);
checkOddEven(18);
// vong lap
for(let i=0;i<=10;i++){
    console.log(i);
}
// vong lap va mang
let number = [12,35,33,44];
let total =0;
for(let i=0;i<4;i++){
    total +=number[i];
}
console.log("tong cac phan tu trong mang: "+total);
// chuoi
function toUpperCase(str){
    return str.toUpperCase();
}
console.log(toUpperCase("Le Viet Ha"));//"LE VIET HA"
// so nguyen to
function kt_SNT(num){
    if (num<2) return false;
    else for(let i=2;i<num/2;i++){
        if(num%i==0) return false;
    }
    return true;
}
console.log(kt_SNT(9));
console.log(kt_SNT(5));
// dao nguoc chuoi
function reverseString(str){
    let newString="";
    for(let i=str.length;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
console.log(reverseString(' L Vit Ha '));
// mang va doi tuong
let students=[{name:"Ha",grade:10},{name:"Hamter",grade:8.5},{name:"Allice",grade:5.5}];
for(let student of students ){
    if(student.grade>=8) console.log(student.name +" gioi");
}
// FizzBuzz
function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0&&i%5!=0) console.log('Fizz');
        else if(i%5==0&&i%3!=0) console.log('Buzz');
        else if(i%3==0&&i%5==0) console.log('FizzBuzz');
        else console.log(i);
    }
}
fizzBuzz(15);
// sap xep thu tu tang dan cua mang
function compareNumbers(a,b){
    return a-b;
}
let a = [1,5,4,2];
console.log(a.sort(compareNumbers));
// tong ptu trong mang
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log('tong mang :' + sumArray([6,9,10,11]));





