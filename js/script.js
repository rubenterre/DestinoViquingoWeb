
// Sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

// Modal Cookies

  document.addEventListener("DOMContentLoaded", function() {
    const cookieModal = document.querySelector('#cookies');
    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
    const discardCookiesBtn = document.getElementById('discardCookiesBtn')

    // Verifica se o usuario xa aceptou as cookies
    if (!localStorage.getItem("acceptCookiesBtn")) {
      cookieModal.style.display = "block";
    }else{
      cookieModal.style.display = "none"
    }
    
    discardCookiesBtn.onclick = function(){
      cookieModal.style.display = "none";
    }

    acceptCookiesBtn.onclick = function() {
        localStorage.setItem("acceptCookiesBtn", "true");
        localStorage.setItem("discardCookiesBtn", "true");
        cookieModal.style.display = "none";
    }
});