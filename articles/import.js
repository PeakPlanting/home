// function includeHTML(elId, file) {
//   let elmnt, xhttp;
//   elmnt = document.querySelector("#"+elId);

//   if (file) {
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4) {
//         if (this.status == 200) {elmnt.innerHTML += this.responseText;}
//         if (this.status == 404) {elmnt.innerHTML += "Page not found.";}
//         includeHTML();
//       }
//     }
//     xhttp.open("GET", file, true);
//     xhttp.send();
//     return;
//   }
// }

function includeHTML(elId, file) {
  let elmnt, xhttp;
  elmnt = document.querySelector("#" + elId);

  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          elmnt.innerHTML += this.responseText;
        } else {
          elmnt.innerHTML += "Error loading the page.";
        }
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("showMore")
  console.log(button)
})