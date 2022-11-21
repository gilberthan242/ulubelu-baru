var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            }
        function onClick(element) {
            document.getElementById("img01").src = element.src;
            document.getElementById("modal01").style.display = "block";
            }

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "fixed";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// modal windows sliding
function left() {
  if (document.getElementById('left').onclick) {
      document.getElementById('right').style.display = 'block';
      document.getElementById('left').style.display = 'none';
  }
  }

  function right() {
  if (document.getElementById('right').onclick) {
      document.getElementById('left').style.display = 'block';
      document.getElementById('right').style.display = 'none';
  }
  }

  var captionText = document.getElementById("caption");
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          }
      function onClick2(element) {
          document.getElementById("img02").src = element.src;
          document.getElementById("modal02").style.display = "block";
          }

  function allright() {
      onClick2(myImg17);
      right();
  }

  function allleft() {
      onClick2(myImg10);
      left();
  }

  function allrightin() {
    onClick2(myImg10);
    right();
  }

  function allleftin() {
      onClick2(myImg17);
      left();
  }



  function myFunction01() {
    document.getElementById("myDropdown").classList.toggle("show");
  }