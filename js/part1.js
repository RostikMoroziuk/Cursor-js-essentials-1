function part1() {
  var name, time, place, event;

  //User enter value
  name = prompt("Enter person name", "Rostik");
  while (name === null) {
    name = prompt("Enter person name", "Rostik");
  }

  time = prompt("Enter time", "14:00");
  while (time === null) {
    time = prompt("Enter time", "14:00");
  }

  place = prompt("Enter place", "Lviv");
  while (place === null) {
    place = prompt("Enter place", "Lviv");
  }

  event = prompt("Enter event", "football Karpaty - Vorskla");
  while (event === null) {
    event = prompt("Enter event", "football Karpaty - Vorskla");
  }

  console.log(name + " going on event " + event +
  " at " + time + " in " + place);
}