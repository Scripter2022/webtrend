const readline=require('readline');

exports.getDialog=()=>{
    
var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("What your host IP?",function(answer){
    //return(answer);
  return (answer)
});

}

