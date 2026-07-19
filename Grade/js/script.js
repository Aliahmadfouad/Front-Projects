var grade=Number(window.prompt("Enter your Grade")) ;

if (grade>=90) {
    console.log(`Exellent`)
    
}else if (grade >= 80 && grade <= 89) {
    console.log("Good");
}
else if (grade >= 70 && grade <= 79) {
    console.log("Average");
}
else if (grade >= 60 && grade <= 69) {
    console.log("Pass");
}else{
     console.log(`Fail`);
    
}