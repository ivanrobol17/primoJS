let val='#';
let val2=' ';
let ris1="";
let ris2="";
let ris3="";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
        ris1+=val;        
    }    
    ris1+="\n";
}
console.log(ris1);
for (let i = 1; i <= 100; i++) {
    if(i%3==0 && i%5==0){
        ris2+="Fiz & Buzz;\n";
    }else if(i%3==0){
        ris2+="Fiz;\n";
    }else if(i%5==0){
        ris2+="Buzz;\n";
    }else{
        ris2+=i+";\n";
    }
}
console.log(ris2);
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if(i%2){
            if(j%2){
                ris3+=val;  
            }else{
                ris3+=val2;
            }
        }else{ 
            if(j%2){
                ris3+=val2;  
            }else{
                ris3+=val;
            }
        }
    }    
    ris3+="\n";
}
console.log(ris3);