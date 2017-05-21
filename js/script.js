function partCheck() {
  var active = document.getElementsByClassName("active"); //Find active el
  //change active el
  if (active.length > 0) {
    active[0].className = "task-name";
  }
  this.className += " active";
}

function progressChange(element) {
  element.style.backgroundColor = "#14a57e";
  element.innerHTML = '<i class="fa fa-check fa-3x" aria-hidden="true"></i>'
}

function go() {
  var active = document.getElementsByClassName("task-name");
  if(active[0].className.indexOf("active")!==-1) {
    part1();
    progressChange(document.getElementsByClassName("progress")[0]);    
  } 
  else if(active[1].className.indexOf("active")!==-1) {
    part2();
    progressChange(document.getElementsByClassName("progress")[1]);
  }
  else {
    alert("Check part and click Go");
  }
}

var parts = document.getElementsByClassName("task-name");
for (var i = 0; i < parts.length; i++) {
  parts[i].onclick = partCheck;
}

document.getElementsByClassName("go")[0].onclick = go;