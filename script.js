

    function bmi (w,h) {
let resulat=w/(h*h)





return resulat
}



console.log(bmi(50,1.6))






 
function status (bmi){
if     (   bmi<18.5)     {


  

return  `نقص وزن   `   
}







 else  if (bmi>=18.5&&bmi<25) {
   


    return`وزنك صحي`  
}
   







  else if (bmi>=25) {
   



    return`لديك زيلدة وزن`
}



}

function calculate() {
   
  let weight =document.getElementById(`weight`).value

  let height =document.getElementById(`height`).value


let bmi =(weight,height)

 let desc = status (bmi)

let div = document.getElementById(`div tag`).value

div.innerText = bmi + `==` +desc


}



















