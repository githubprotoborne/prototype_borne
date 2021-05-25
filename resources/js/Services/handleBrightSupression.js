export function handleBrightSupression() {
    document.getElementById("contain").style.opacity = "1"
    document.getElementById("contain").style.setProperty("background", "")// the div witch contain the component render except the sidebar
    $("#choiseBar").css("filter", "brightness(100%)"); // set the brightness to the choice bar from Choicebar component
    $(".desk-bread-cont").css("filter", "brightness(100%)"); //set the brightness to the breadscrum  from Cont component
    $(".section-position").css("filter", "brightness(100%)");// set the brightness to the sections items from Cont component 
    $(".category_button").css("filter", "brightness(100%)"); // set the brightness to the category button  items from Home component 
    $("#menu-container").css("filter", "brightness(100%)");
    $(".topic-item").css("filter", "brightness(100%)");
    $(".footer-container").css("filter", "brightness(100%)");
    // Container style
    $(".processes-position").css("filter", "brightness(100%)");
    $(".sections-items").css("filter", "brightness(100%)");
    $(".bread-text").css("filter", "brightness(100%)");
    //subcontainer style
    $(".subcontainer").css("filter", "brightness(100%)");
    $(".topic-item").csscss("filter", "brightness(100%)");

}