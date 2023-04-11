
window.onload = function() {
    
    var button = document.getElementById("btn");
    
    
    var text = document.getElementById("text");
    
    
    button.addEventListener("click", function() {
      
      text.innerHTML = "The button was clicked.";
    });
  }
  