import $ from "jquery";

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
      });
  });   
    //Material components
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
