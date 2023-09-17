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

async function includeHTML(elId, file) {
    let elmnt, xhttp;
    elmnt = document.querySelector("#" + elId);

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML += this.responseText;
          }
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
    } 
}

async function loadPage() {
  try {
    await includeHTML("article-posts", "articles/zasajdane_na_plodorodni_druvcheta.html");
   

    const button = document.getElementById("showMore")
    console.log(button)
  } catch (error) {
    console.error(error);
  }
}

loadPage(); // Call the function to start the process.
