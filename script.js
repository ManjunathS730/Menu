// Change navbar background color on scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    
    if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  function changeQuantity(button, change) {
    const input = button.parentElement.querySelector('.quantity-input');
    let currentValue = parseInt(input.value, 10);
    currentValue += change;

    // Ensure quantity doesn't go below 0
    if (currentValue < 0) {
        currentValue = 0;
    }

    input.value = currentValue;
}
  