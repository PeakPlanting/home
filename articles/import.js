

function includeHTML() {
  var par_div;
  par_div = document.querySelector("#article-posts");
  
  par_div.innerHTML = importText("\articles\zasajdane_na_plodorodni_druvcheta.html")
}

function importText(file) {
  var returnText, file, xhttp;
  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", file, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {returnText = this.responseText;}
        if (this.status == 404) {returnText = "Page not found.";}
      }
      return returnText;
    }
  } 
  return "Page not found"    
}