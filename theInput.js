var readline = require('readline');

/*
 * We need to create a readline interface.
 * The interface takes 2 streams.
 * The input field points to the readable input stream
 * and the output field to the writable output stream. 
 */
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please tell me your name: ', function (name) {
      
    rl.question('Hello ' + name + ' how old are you: ', function (age) {
        // process.stdout.write('Well hello ' + answer);
        // Console.log creates a formatted output from process.stdout.write().
        console.log(name + ', you are ' + age + ' years old');
    
        rl.close();
        process.stdin.destroy();
    });
    
});