$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* Slide toggle menu */
    $('#menu-btn').on('click', function () {
        if ($("#menu-btn").hasClass("menu-btn_burger")) {
            $("#menu-btn").removeClass("menu-btn_burger")
            $("#menu-btn").addClass("menu-btn_cross")
            $(".header__mobile").css("left", "0")
        } else if ($("#menu-btn").hasClass("menu-btn_cross")) {
            $("#menu-btn").removeClass("menu-btn_cross")
            $("#menu-btn").addClass("menu-btn_burger")
            $(".header__mobile").css("left", "-100%")
        }
    });

    /* Browser with Touch Events support */
    let mobile = 0;
    function defineTouch() {
        if ('ontouchstart' in window) {
            mobile = 1;
        };
        isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        if (isMobile.any()) {
            mobile = 1;
        };
    };
    defineTouch();


    /* Show/hide submenu */
    let child = document.querySelector('.menu__item_children'),
        childRef = child.querySelector('a'),
        submenu = document.querySelector('.submenu');
    console.log(mobile);
    child.addEventListener('touchstart', function (event) {
        console.log(mobile);
        if (!mobile) {
            submenu.classList.remove('hidden');
            return
        }
        if (event.target = childRef && submenu.classList.contains('hidden')) {
            event.preventDefault();
        }
        showHide();
    });

    function showHide() {
        if (submenu.classList.contains('shown')) {
            submenu.classList.remove('shown');
            submenu.classList.add('hidden');
        } else if (!submenu.classList.contains('shown')) {
            submenu.classList.remove('hidden');
            submenu.classList.add('shown');
        };
    }

    /* Resize window */
    $(window).resize(function () {
        defineTouch();
        submenu.classList.remove('hidden');
        submenu.classList.remove('shown');
    });



});
