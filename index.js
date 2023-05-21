function myDetails(){
    let firstName = "Folarin";
    let lastName = "Alade";
    let fullName = firstName +" " + lastName;
    return fullName;
}
console.log(myDetails());

function add (a,b){
    let sum = a + b;
    if(sum > 10){
        console.log("More than a decade");
    }
    else{
        console.log("less than a decade");
    }
    return sum;
    

}
console.log(add(4,5));

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let i = numbers.length; i >=0; i--){
   console.log(numbers[i]);
}