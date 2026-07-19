var playerOne=window.prompt("Enter Your Move");
var playerTwo=window.prompt("Enter Your Move");



if (playerOne=="rock"&&playerTwo=="scissor"||playerOne=="scissors"&&playerTwo=="paper"||playerOne=="paper" &&playerTwo=="rock") {
    console.log(`playerOne is win`)
    
} else if(playerOne==playerTwo) {
    console.log(`Draw`)
    
}else{
    console.log(`playerTwo is win`)

}


