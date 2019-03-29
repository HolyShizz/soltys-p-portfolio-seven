    //jquery for slick-carousel
import $ from "jquery";
    //initializing slick-carousel
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        zIndex: 1,
        arrows: true,
        prevArrow: '.arrow-down',
        nextArrow: '.arrow-up',
        dots: true,
        appendDots: '.slider-dots-container'
      });
  });   
    //Material components
    import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTextField} from '@material/textfield';
// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
//const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    return new MDCTextField(el);
  });
const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    return new MDCRipple(el);
  });