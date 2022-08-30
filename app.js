let addition=0;
let multiiplication=1;
let count=0;

function multiples(){
for(let i=200;i<301;i++){
    if(i%7==0){
        console.log(` Número múltiplo de 7: ${i}`);
        count++
    } 
}
return `Los multiples de 7 en total son:${count}`;
}
//   console.log(multiples())



  function add(){
for(let i=200;i<301;i++){
    if(i%7==0){
        addition+=i
    }
}
 return `La suma de los números múltiplos de 7 es ${addition}`;
} 
//  console.log(add())


function multiply(){
    for(let i=200;i<301;i++){
        if(i%7==0){
            multiiplication*=i;
        }
     }
     return `La multiiplication de los números múltiplos de 7 es ${multiiplication}`
}
        // console.log(multiply());

        function GenerateFibonacci(number){
            var fibonacci = [];
            fibonacci[0] = 0;
            fibonacci[1] = 1;
            for (var i = 2; i < number; i++) {
              fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
            }
            return fibonacci;
            }
            var f = GenerateFibonacci(10);
            console.log(f);