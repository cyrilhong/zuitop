$(document).ready(function () {
    console.log("ready!");
    var currentMenu = '';
    $('.menu > li').click(function () {
        currentMenu = $(this)[0].value;
        console.log(currentMenu);
        switch (currentMenu) {
            case 1:
                $('.sub-menu > ul').hide();
                $('.sub-01').toggle();
                break;
            case 2:
                $('.sub-menu > ul').hide();
                $('.sub-02').toggle();
                break;

            default:
                break;
        }
    })
});