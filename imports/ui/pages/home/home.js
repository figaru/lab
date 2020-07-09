import './home.html';



import '../../components/hello/hello.js';
import '../../components/info/info.js';

import '../../components/menus/menus.js';

var storageKey = '__cookiesAccepted__';
Template.App_home.onRendered(function () {
    $('.centernonloop').owlCarousel({
        center: true,
        items: 1,
        loop: false,
        margin: 10,
        dots: true,
        responsive: {
            300: {
                items: 2
            },
            600: {
                items: 4
            }
        }
    });


    var i = 0;
    $('.element-animate').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .element-animate.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn element-animated');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft element-animated');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight element-animated');
                        } else {
                            el.addClass('fadeInUp element-animated');
                        }
                        el.removeClass('item-animate');
                    }, k * 100);
                });

            }, 100);

        }

    }, { offset: '95%' });


    if (isStorageAllowed() && !isSetPreference()) {
        initializeNotice();
    }

    let lang = localStorage.getItem('lang');
    if (!lang || typeof lang == "undefined" || lang == "undefined") {
        Session.set("lang", "pt");
        setTimeout(function () {
            $("#lang").click();
            Session.set("lang", "pt");
        }, 1200);
    } else {
        Session.set("lang", lang);
    }
});

Template.App_home.helpers({
    'lang': function () {
        return Session.get("lang");
    },
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    }
})

Template.App_home.events({
    'click .js-select-lang': function (e) {
        let lang = $(e.target).data("lang");

        if (lang) {
            localStorage.setItem("lang", lang);
            Session.set("lang", lang);
        }


        $(".close").click();
    }
})





function initializeNotice() {
    var el = $('.cookie-notice');
    var dismissEl = $('.cookie-notice-dismiss');

    el.css("display", 'block');

    el.on('click', function () {
        el.css("display", 'none');
        setPreferenceAccepted();
    });
}


function setPreferenceAccepted() {
    localStorage.setItem(storageKey, true);
    console.log("cookie acceptance set");
    console.log(localStorage.getItem(storageKey));
}


function isSetPreference() {
    return JSON.parse(localStorage.getItem(storageKey) || false);
}


function isStorageAllowed() {
    var test = '__localStorageTest__';

    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);

        return true;
    } catch (e) {
        console.warn('Storage not allowed, please allow cookies');
        return false;
    }
};