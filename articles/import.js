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
  return new Promise((resolve, reject) => {
    let elmnt, xhttp;
    elmnt = document.querySelector("#" + elId);

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML += this.responseText;
            resolve(); // Resolve the promise when the HTML is included.
          } else {
            reject("Error loading the page."); // Reject the promise on error.
          }
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
    } else {
      reject("File not specified."); // Reject the promise if no file is specified.
    }
  });
}

async function loadPage() {
  try {
    await includeHTML("article-posts", "articles/zasajdane_na_plodorodni_druvcheta.html");
    console.log('loaded')
    // The HTML is now included.

    // Add event listener after the HTML is included.
    document.addEventListener("DOMContentLoaded", () => {
      console.log('loaded 2')
      const button = document.getElementById("showMore");
      console.log(button);
    });
  } catch (error) {
    console.error(error);
  }
}

loadPage(); // Call the function to start the process.
