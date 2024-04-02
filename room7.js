const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click',function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});


rightArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});

function toggleHeartIcon(icon) {
    // Toggle the 'active' class
    icon.classList.toggle('active');

    // Change color based on the 'active' class
    if (icon.classList.contains('active')) {
      icon.style.color = 'red';
    } else {
      icon.style.color = '#aaa';
    }
  }