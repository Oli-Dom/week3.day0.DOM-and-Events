function onClick() {
  console.log (pic.innerHTML);
    alert("You have been deleted!");
    document.getElementById("rengar").src = "assets/rengar.png" ;
    console.log (pic.innerHTML);
    
}

let pic = document.getElementsByClassName("main_container");
pic[0].addEventListener("click", onClick);
