let val1='#';
let val2=' ';
let ris3="";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if(i%2){
            if(j%2){
                ris3+=val1;  
            }else{
                ris3+=val2;
            }
        }else{ 
            if(j%2){
                ris3+=val2;  
            }else{
                ris3+=val1;
            }
        }
    }    
    ris3+="\n";
}
console.log(ris3);
