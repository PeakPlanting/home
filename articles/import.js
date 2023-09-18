
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
   

    const button = document.getElementById('article-posts')
    button.addEventListener("click", (el) => {
      el = el.target;
      el.parentElement.style.display = "none";
      if (el.id == "showMore"){
        let oth = el.parentElement.parentElement.querySelector('#showLess');
        oth.parentElement.style.display = "block";
      }else if (el.id == "showLess"){
        let oth = el.parentElement.parentElement.querySelector('#showMore');
        oth.parentElement.style.display = "block";
      }
    })
  } catch (error) {
    console.error(error);
  }
}

loadPage();
