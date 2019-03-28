import $ from "jquery";

$(document).ready(function(){
    $('.slider-container').slick();
  });   
    //Material components
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
