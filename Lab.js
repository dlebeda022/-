const readlineSync = require('readline-sync');
let A = [0,0,0,0];
let a = 0, counter =0;
let game_over = false;

function random(){
    a = Math.floor(Math.random() *10);
}

for(let i = 0; i < A.length; i++){
    if(i === 0){
    while(a === 0){
        random();
        }
        A[i] = a;
        
    }
    else if(i === 1){
        do{
            random();
        }while(a === A[0]);
        A[i] = a;
        }
    
    else if(i === 2){
        do{
            random();
        }while(a === A[0] || a === A[1]);
        A[i] = a;
    }
    else if(i === 3){
        do{
            random();
        }while(a === A[0] || a === A[1] || a === A[2]);
        A[i] = a;
    }   
}

while(true){
    let c = 0, b = 0;
    const value = readlineSync.question("Спроба: ");
    for(let i = 0; i < A.length; i++){
        if (value[i] == A[i]) {
            b++;
        }
        for(let j = 0; j < A.length; j++){
          if(value[i] == A[j])
          {
            c++;
          }
        }
    }
    if (b === 4) {
        counter++;
        console.log('Це правильне число! Спроб: ' + counter);
        process.exit();
    }
    let h = c - b;
    console.log("Бики: " + b + "; " + " Корови: " + h + '.');
    console.log();
    counter++;
}