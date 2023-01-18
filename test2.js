let val='#';
let val2=' ';
let ris2="";
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