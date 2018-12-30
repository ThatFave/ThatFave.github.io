
var submit = document.getElementById("submit");
submit.onclick = function(){
	var e = document.getElementById("select");
	var mode = e.options[e.selectedIndex].text;
	var line = Date() + " " + mode
  fs.writeFile('text.txt', line)

}
