var age;
var yearOfBirth;
var currentYear = 2018;
function enterAge(){
    yearOfBirth = prompt("Please enter the year of birth: ");
    age = currentYear - yearOfBirth;
    document.getElementById("age").innerHTML = age;
    
    if(age>=18){
        alert("The person is fullage")
    }
    else if(age > 0 && age < 18){
        alert("The is not fullage")
    }
    else {
        alert("The person has not born yet!")
    }
    
}


