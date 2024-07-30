function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hideSidebar();
      });
    });
  });

 
  /// sticky back

// Function for desktop devices
function activateStickyBackgroundDesktop() {
  window.addEventListener('scroll', function() {
    var secondNav = document.getElementById('second_nav-s');
    var scrollThreshold = 350; // Adjust as needed
  
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > scrollThreshold) {
      secondNav.classList.add('sticky-background');
    } else {
      secondNav.classList.remove('sticky-background');
    }
  });
}

// Function for mobile devices
function activateStickyBackgroundMobile() {
  window.addEventListener('scroll', function() {
    var secondNav = document.getElementById('second_nav-s');
    var scrollThreshold = 10; // Adjust as needed for mobile
  
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > scrollThreshold) {
      secondNav.classList.add('sticky-background');
    } else {
      secondNav.classList.remove('sticky-background');
    }
  });
}

// Detect device type and activate corresponding function
function detectDeviceAndActivateFunction() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile device detected
    activateStickyBackgroundMobile();
  } else {
    // Desktop device detected
    activateStickyBackgroundDesktop();
  }
}

// Call the detection function
detectDeviceAndActivateFunction();



// active menu 

//active menu


let sections = document.querySelectorAll('section');
let link = document.querySelectorAll('.links ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + hight) {
            link.forEach(links => {
                links.classList.remove('activate-menu');
                document.querySelector('.links ul li a[href*=' + id + ']').classList.add('activate-menu');
            })
           
        }

    })
}