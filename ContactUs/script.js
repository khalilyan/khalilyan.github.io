const menuIcon = document.getElementById('mobileMenuIcon');
const header = document.getElementsByTagName('header');
const MobileMenu = document.getElementsByClassName('mobileMenu');
const mediaQuery = window.matchMedia('(min-width: 571px)')
let isOpen = false;


menuIcon.addEventListener('click',()=>{
    if(isOpen && !mediaQuery.matches){
        header[0].style.height = '4.5%'; 
        MobileMenu[0].style.display = 'none'
    } else {
        header[0].style.height = '16.8%'; 
        MobileMenu[0].style.display = 'flex';
    }
    isOpen = !isOpen;

});


function hideMobileMenuWhenOpen(e) {
    if (e.matches) {
      MobileMenu[0].style.display = 'none';
      header[0].style.height = '6.6%';
      console.log(e.matches)
    }
  }
  
  mediaQuery.addListener(hideMobileMenuWhenOpen);
  hideMobileMenuWhenOpen(mediaQuery);