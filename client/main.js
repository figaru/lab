// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';


import WayPoint from '/imports/ui/vendor/js/jquery.waypoints.min.js';
import Carousel from '/imports/ui/vendor/js/owl.carousel.min.js';

$(document).ready(function () {
    window["WayPoint"] = WayPoint;
    window["owlCarousel"] = Carousel;

});
