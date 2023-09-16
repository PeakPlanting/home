

function includeHTML() {
  var par_div;
  par_div = document.querySelector("#article-posts");
  
  par_div.innerHTML = importText("\articles\zasajdane_na_plodorodni_druvcheta.html")
}

function importText(textFile) {
  "use strict";
  var rawFile = new XMLHttpRequest();
  var allText = "";
  rawFile.open("Get", textFile, false);
  rawFile.onreadystatechange = function()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
          }
      }
  }
  rawFile.send(null);
  return allText;
}