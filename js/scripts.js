window.onload = function() {
  console.log("welcome");
  subHandler();
}


//-----------------------------------------------------
function yell() {
  const shout = document.getElementById("shout").value;
  console.log(shout);
  return scream = shout.toUpperCase();
}

function subHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    yell();
    console.log(yell());
    const h2 = document.querySelector('h2');
    h2.innerText = scream;
    console.log(h2);
  }
}