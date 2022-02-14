var number = 418;
const normal = ["", "един", "два", "три", "четири", "пет", "шест", "седем", "осем", "девет"];
//От 10 до 19
const dvo = ["", "единадесет", "дванадесет", "тринадесет", "четиринадесет", "петнадесет", "шестнадесет", "седемнадесет", "осемнадесет", "деветнадесет"];
//Двуцифрените отпред
const dv = ["", "", "двадесет", "тридесет","четиридесет", "петдесет", "шестдесет", "седемдесет", "осемдесет", "деветдесет"];
//Трицифрени отпред
const tr = ["", "сто", "двеста", "триста", "четиристотин", "петстотин", "шестстотин", "седемстотин", "осемстотин", "деветстотин"];
if(number > 9 && number < 20){
  var first = Math.trunc(number/10);
  var second = number%10;
  console.log(dvo[second], "лева");
}
//Двуцифрени
if(number > 19 && number < 100){
  var first = Math.trunc(number/10);
  var second = number%10;
  console.log(dv[first], "и", normal[second], "лева");
}else if(number > 99 && number < 1000){
  var first = Math.trunc(number/100);
  var second = Math.trunc(number/10)%10;
  var third = number%10;
  if(third!=0){
    if(second!=1){
  console.log(tr[first], dv[second], "и", normal[third],  "лева");
    }else console.log(tr[first], "и" ,dvo[third], "лева");
  }else console.log(tr[first],"и",dv[second]+"лева");
  
}