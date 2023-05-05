const menuIcon = document.getElementById('mobileMenuIcon');
const header = document.getElementsByTagName('header');
const MobileMenu = document.getElementsByClassName('mobileMenu');
let isOpen = false;


menuIcon.addEventListener('click',()=>{
    if(isOpen){
        header[0].style.height = '7.2%'; 
        MobileMenu[0].style.display = 'none'
    } else {
        header[0].style.height = '30.1%'; 
        MobileMenu[0].style.display = 'flex';
    }
    isOpen = !isOpen;

});



const mediaQuery = window.matchMedia('(min-width: 571px)')

function hideMobileMenuWhenOpen(e) {
  if (e.matches) {
    MobileMenu[0].style.display = 'none';
    header[0].style.height = '7.2%'; 
  }
}

mediaQuery.addListener(hideMobileMenuWhenOpen)

hideMobileMenuWhenOpen(mediaQuery)