   function fadein() {
        let img = document.getElementById("img");
        img.style.opacity = "0.5"; 
      }
      
    function fadeout() {
        let img = document.getElementById("img");
        img.style.opacity = "1"; 
      }
      function fadein2() {
        let img = document.getElementById("img2");
        img.style.opacity = "0.5"; 
      }
      
    function fadeout2() {
        let img = document.getElementById("img2");
        img.style.opacity = "1"; 
      }


      $(document).ready(function() {
        $(document).on("keypress", function(event) {
            if (event.key === "Escape") {
                window.location.href = "index.html";
            }
        });
    });


    