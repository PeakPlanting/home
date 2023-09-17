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



function showMore(){
  const el2 = document.querySelector('#showMore')
  console.log(el2)
}
            // el.innerHTML = "reAD more"
            
            // function myFunction(obj) {
            //     obj.preventDefault();
            //     alert('It was clicked');
            // }

            // el.addEventListener('click', myFunction);