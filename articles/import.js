
function includeHTML(elId, file) {
  return new Promise((resolve, reject) => {
    let elmnt, xhttp;
    elmnt = document.querySelector("#" + elId);

    if (elmnt) {
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
   

    const button = document.getElementById('showMore')
    button.addEventListener("click", () => {
      alert('working')
    })
  } catch (error) {
    console.error(error);
  }
}

loadPage();
