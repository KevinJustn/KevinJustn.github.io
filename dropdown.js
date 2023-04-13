function dropDown() {
  let dropList = document.getElementById("myDropdown").classList.toggle("show");
  dropList.onchange = (ev) => { 
    console.log("Year selected is: " + dropList.year)
  }
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}