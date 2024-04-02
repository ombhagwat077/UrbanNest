function toggleHeartIcon(icon) {
    // Toggle the 'active' class
    icon.classList.toggle('active');

    // Change color based on the 'active' class
    if (icon.classList.contains('active')) {
      icon.style.color = 'red';
    } else {
      icon.style.color = 'whitesmoke';
    }
  }