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
            appendDots: '.slider-dots-container'
        });
    });


    //Material components
    import {
        MDCRipple
    } from '@material/ripple';
    const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action, .mdc-card__primary-action--dark';
    const ripples = [].map.call(document.querySelectorAll(selector), function (rl) {
        return new MDCRipple(rl);
    });
    import {
        MDCTopAppBar
    } from '@material/top-app-bar/index';
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    topAppBar.unbounded = true;
    import {
        MDCTextField
    } from '@material/textfield';
    const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
        return new MDCTextField(el);
    });


    