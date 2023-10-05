$(document).ready(function () {
    function toggleClassOnClick(element, activeClass, clickClass) {
        element.click(function () {
            element.toggleClass(activeClass);
            element.siblings(clickClass).toggleClass(clickClass.substring(1));
        });
    }

    toggleClassOnClick($(".godfather"), "active", ".click");
    toggleClassOnClick($(".tyson"), "active2", ".click2");
    toggleClassOnClick($(".self-portrait"), "active3", ".click3");
    toggleClassOnClick($(".roman"), "active4", ".click4");
    toggleClassOnClick($(".boots"), "active5", ".click5");
    toggleClassOnClick($(".eye"), "active6", ".click6");
    toggleClassOnClick($(".engine"), "active7", ".click7");
    toggleClassOnClick($(".fruits"), "active8", ".click8");
    toggleClassOnClick($(".bubbles"), "active9", ".click9");
    toggleClassOnClick($(".flowers"), "active10", ".click10");
});
