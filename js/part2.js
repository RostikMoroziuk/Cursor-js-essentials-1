function part2() {
  var euro, dollar;

  var EURO = 29.00, DOLLAR = 26.60;

  //User enter value
  do {
    euro = prompt("Enter euro", "1");
  } while (euro === null);

  do {
    dollar = prompt("Enter dollar", "1");
  } while (dollar === null);

  alert(euro + " euros are equal " + (euro*EURO).toFixed(3) + "grn. " +
  dollar + " dollars are equal " + (dollar*DOLLAR).toFixed(3) + "grn. " +
  "1 euro is equal " + (EURO/DOLLAR).toFixed(3) + " dollars");
}