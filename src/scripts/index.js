import '../styles/index.scss';
import logoImage from '../images/logo_key_visual.jpg';
import logoImageMobile from '../images/logo_key_visual_mobile.jpg';


var logo = document.getElementById('logo-desktop');
logo.srcset = logoImage;

var logo = document.getElementById('logo-mobile');
logo.srcset = logoImageMobile;

console.log('webpack starterkit');
