  let form = document.getElementById("data-form");


  let handleClick = function(event){
    event.preventDefault();

    let name = event.currentTarget.name.value;
    let age = event.currentTarget.age.value;
    let color = event.currentTarget.color.value;

    console.log("Hi my name is "+name+" and I am "+ age+" my favorite color is " + color);
    console.log(event.target.name.innerText);
  }

  form.addEventListener("submit", handleClick);
