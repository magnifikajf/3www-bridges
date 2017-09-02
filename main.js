/*global $ */
$(document).ready(function () {
    'use strict';
    $(".burger-nav").on("click", function () {
        $("header nav ul").toggleClass("open");
    });
});