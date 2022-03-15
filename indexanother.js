//$("#run").click(() => tryCatch(run));

/**
 * Price to words in Bulgarian
 * @customfunction
 * @param {string} price The price
 * @returns {string} The price in words
 */
function numtow(price) {
  //Where is B2, change it with your cell address

  var number = parseFloat(price.replace(",", "."));
  var stot = "stotinkii";
  var pari = "pari";
  var krsuma = "krainasuma";
  var first = Math.trunc(number / 100);
  var second = Math.trunc(number / 10) % 10;
  var third = Math.trunc(number % 10);
  //Variable with only 2 digits after the decimal point. The variable stores \
  //the result after decreasing number by the number without decimal.
  //.toFixed(how much digits after decimal point)
  var numdec = (number - Math.trunc(number)).toFixed(2).substring(2);
  //The number without decimal
  var numnodec = Math.trunc(number);

  const normal = ["Нула", "Един", "Два", "Три", "Четири", "Пет", "Шест", "Седем", "Осем", "Девет"];
  //От 10 до 19
  const dvo = [
    "Десет",
    "Единадесет",
    "Дванадесет",
    "Тринадесет",
    "Четиринадесет",
    "Петнадесет",
    "Шестнадесет",
    "Седемнадесет",
    "Осемнадесет",
    "Деветнадесет"
  ];
  //Двуцифрените отпред
  const dv = [
    "",
    "",
    "Двадесет",
    "Тридесет",
    "Четиридесет",
    "Петдесет",
    "Шестдесет",
    "Седемдесет",
    "Осемдесет",
    "Деветдесет"
  ];
  //Трицифрени отпред
  const tr = [
    "",
    "Сто",
    "Двеста",
    "Триста",
    "Четиристотин",
    "Петстотин",
    "Шестстотин",
    "Седемстотин",
    "Осемстотин",
    "Деветстотин"
  ];
  //Стотинки

  //With words
  //stot =  ('и '+normal[numdec*100]+" стотинки");
  //With number
  stot = "и " + numdec + " ст.";

  if (third == 0 && second == 1) pari = tr[first] + " и " + "десет " + "лв. ";
  else if (third == 0 && second != 0 && first == 0) pari = dv[second] + " лв. ";
  else if (first != 0 && second != 0 && third == 0) pari = tr[first] + " и " + dv[second].toLowerCase() + " лв. ";
  else if (second == 0 && third == 0) pari = tr[first] + " лв. ";
  else if (first == 0 && second != 0 && third != 0) pari = dv[second] + " и " + normal[third].toLowerCase() + " лв. ";
  else tr[first] + " " + dv[second].toLowerCase() + " и " + normal[third].toLowerCase() + " лв. ";

  var end = pari.concat(stot);

  //Where is B5, change it with your cell address
  return end;

  //Krai moq programa
}

/** Default helper for invoking an action and handling errors. */

