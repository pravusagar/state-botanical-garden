{ 

  $('#menu-container').on('mouseenter mouseleave', '.nav-item', function(e) {
  if ($(window).width() > 750) {
    var _d = $(e.target).closest('.nav-item');
    _d.addClass('show');
    setTimeout(function() {
      _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 1);
  }
  });
  
  }
//jqurys for NAVBAR dropdown menu end

//start main slider SPLIDE
{
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      type: "loop",
      rewind: true,
      autoplay: true,
      //  interval: 3000, // stay comented for function works properly     
      perPage:1,
      pagination: false,
      pauseOnHover: false,
    });
    splide.on("mounted", function () {
      setTimeout(function () {
        splide.options.interval = 3000; // Set autoplay time for all slides to 3000ms
      }, 7000); // Change to 7000ms for the first slide
    });
    splide.mount();
    
      var newSplide = new Splide(".splide-new", {
        perPage: determinePerPage(),
        type: "loop",
        focus: 0,
        omitEnd: true,
        autoplay: true,
        interval: 2500,
        pagination: false,
        pauseOnHover: false,
      });

      newSplide.mount();
      function determinePerPage() {
         //  Check the screen width and return the appropriate perPage value
        if (window.innerWidth < 768) { //   Adjust this breakpoint as needed
          return 1;  //  Set perPage to 1 for mobile screens
        } else {
          return 4;  //  Set perPage to a different value for larger screens
        }
      }
      window.addEventListener("resize", function () {
        newSplide.options.perPage = determinePerPage();
        newSplide.destroy();   // Destroy the current instance
        newSplide.mount();   // Reinitialize the Splide slider with updated options
      });
     
    });
    
    


  };
  


//end main slider SPLIDE


// Loading script start
{
  var loader = document.getElementById("loader");
  var progressBar = document.getElementById("progress-bar");
  var pageContent = document.getElementById("page-content");
  var resourceCount = 0;   // Count of resources to load
  var loadedResources = 0; // Count of loaded resources
  
  // Function to update the progress bar based on loaded resources
  function updateProgressBar() {
    var percentLoaded = (loadedResources / resourceCount) * 100 ;
    progressBar.style.width = percentLoaded + "%" ;
  }
  
  // Show the page content and hide the loader when the page is fully loaded
  window.addEventListener("load", function () {
    loader.style.display = "none";
    pageContent.style.display = "block";
  });
  
  // Increment the loaded resource count and update the progress bar
  function resourceLoaded() {
    loadedResources++;
    updateProgressBar();
  
    // When all resources are loaded, show the page content
    if (loadedResources === resourceCount) {
      pageContent.style.display = "block";
      loader.style.display = "none";
    }
  }
  
  // Simulate loading of resources
  function simulateResourceLoading() {
    resourceCount = 10; // Set the number of resources to load
  
    for (var i = 0; i < resourceCount; i++) {
      setTimeout(resourceLoaded, i * 1000); // Simulate loading delay
    }
  }
}
// Loading script end



// Start navbarn MOUSE CONTROLS
{
  const navbar = document.querySelector('.navbar-three');
  // const dropdown
  const navbarOffsetTop = navbar.offsetTop;
  
  function toggleNavbarSticky() {
    if (window.scrollY >= navbarOffsetTop) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  }
  
  function updateNavbarPosition() {
    navbarOffsetTop = navbar.offsetTop;
    toggleNavbarSticky();
  }
  
  window.addEventListener('scroll', toggleNavbarSticky);
  window.addEventListener('resize', updateNavbarPosition);
////////////////////////////////////////////////////////////////////////////////////////////////////  


  simulateResourceLoading();

  window.addEventListener("scroll", function () {
    // const navbarThree = document.querySelector(".navbar-three");
    const overFlowSlider = document.querySelector('.over-flow-slider');
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    const scrollY = window.scrollY;
    const navbarTop = navbar.offsetTop;
    if (window.scrollY >= navbarTop) {
      // navbarThree.classList.add("fixed");
      overFlowSlider.classList.add('scrolled');
      // navbarThree.classList.add("fixed-gsap");
    } else {
      // navbarThree.classList.remove("fixed");
      overFlowSlider.classList.remove('scrolled');
      // navbarThree.classList.remove("fixed-gsap");
    }
  
    dropdownMenus.forEach((dropdownMenu) => {
      if (window.scrollY >= navbarTop) {
        dropdownMenu.classList.add("fixed");
      } else {
        dropdownMenu.classList.remove("fixed");
      }
    });
  
    // console.log('scrollY:', scrollY);
    // console.log('navbarThree.classList:', navbarThree.classList);
  });
}
// End simulating resource loading AND MOUSE CONTROLS




//  SPECIAL CONTENT WITH BUTTONS START
{
  document.addEventListener("DOMContentLoaded", function () {
    // Get all button elements
    const buttons = document.querySelectorAll('.button');
  
    // Get all content elements
    const contentElements = document.querySelectorAll('.content');
  
    // Show the content of the first button and set it as active
    contentElements[0].style.display = 'flex';
    buttons[0].classList.add('active');
  
    // Hide the content of the other buttons
    for (let i = 1; i < contentElements.length; i++) {
      contentElements[i].style.display = 'none';
    }
  
    // Add click event listeners to buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-content');
  
        contentElements.forEach(content => {
          content.style.display = 'none';
        });
  
        const selectedContent = document.getElementById(contentId);
        selectedContent.style.display = 'flex';
  
        buttons.forEach(btn => {
          btn.classList.remove('active');
        });
                          
        button.classList.add('active');
      });
    });
  });
}
//  SPECIAL CONTENT WITH BUTTONS END


