let val='#';
let val2=' ';
let ris2="";
for (let i = 1; i <= 100; i++) {
    ris2+=i;
    if(i%3==0){
        ris2+=", Fiz";
    }
    if(i%5==0){
        ris2+=", Buzz";
    }
        ris2+=";\n";
}
console.log(ris2);