    //jquery for slick-carousel
    import $ from "jquery";

    //initializing slick-carousel
    $(document).ready(function () {
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
    

    //Initialize Masonry
    import Masonry from 'masonry-layout';
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
    const selector = '.mdc-button, .mdc-card__primary-action';
    const ripples = [].map.call(document.querySelectorAll(selector), function (rl) {
        return new MDCRipple(rl);
    });
    import {
        MDCDrawer
    } from "@material/drawer";
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    import {
        MDCTopAppBar
    } from '@material/top-app-bar/index';

    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });
    import {
        MDCTextField
    } from '@material/textfield';
    const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
        return new MDCTextField(el);
    });
