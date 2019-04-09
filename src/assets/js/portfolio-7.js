
import '../../../node_modules/slick-carousel/slick/slick';
import $ from "jquery";

    //initializing slick-carousel
    $(document).ready(function () {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            arrows: true,
            prevArrow: '.arrow-down',
            nextArrow: '.arrow-up',
            dots: true,
            appendDots: '.slider-dots-container',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }]
        });
    });
import '../../../node_modules/masonry-layout/dist/masonry.pkgd';

    /*/Initialize Masonry*/
   
    var grid = document.querySelector('.grid');
    var msnry;

    //Initialize masonryImagesLoadedLib
    imagesLoaded(grid, function () {
        // init Isotope after all images have loaded
        msnry = new Masonry(grid, {
            itemSelector: '.content-card',
            columnWidth: '.grid-sizer',
            fitWidth: true
        });
    });

//Material components
import {
    MDCRipple
} from '@material/ripple';

import {
    MDCDrawer
} from "@material/drawer";


import {
    MDCTopAppBar
} from '@material/top-app-bar';


import {
    MDCTextField
} from '@material/textfield';
import Masonry from 'masonry-layout';
//Material components

    const selector = '.mdc-button, .mdc-card__primary-action';
    const ripples = [].map.call(document.querySelectorAll(selector), function (rl) {
        return new MDCRipple(rl);
    });
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });
    const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
        return new MDCTextField(el);
    });



