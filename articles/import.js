function includeHTML(elId, file) {
  let elmnt, xhttp;
  elmnt = document.querySelector("#"+elId);

  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {elmnt.innerHTML += this.responseText;}
        if (this.status == 404) {elmnt.innerHTML += "Page not found.";}
        includeHTML();
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
  }
}