//Fibonacci

var readline = require('readline'); //使用librery此方法 (=Java的import)



var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please input the number(1 to 10): ', function (num){
      
    
  
        console.log('For the num ' +num + ', your Fib num is ' + Fibonacci(num));
        rl.close();
        process.stdin.destroy();
    
 }); 
    

function Fibonacci(num){
    if(num===1 || num===2){
        return 1;
    }else{
        return(Fibonacci(num-1) + Fibonacci(num-2));
        }


//    }else if(num>2 || num<=10 ){
//       return(Fibonacci(num-1) + Fibonacci(num-2));
//    }else{
//       console.log('Please input the num between 1 to 10.')
//    }
}
//進行了遞歸運算，記得添加判斷條件，否則遞歸會無限循環下去(Maximum call stack size exceeded)

