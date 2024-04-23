jQuery(document).ready(function() {
    jQuery("a.nav_link").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 2000);
    return false;
    });
});