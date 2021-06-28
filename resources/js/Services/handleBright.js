// handle the filter brightness 
export function handleBright() {
    document.getElementById("contain").style.opacity = "0.9"
    document.getElementById("contain").style.setProperty("background", "#555", "important")// the div witch contain the component render except the sidebar

    $("#choiseBar").css("filter", "brightness(30%)"); // set the brightness to the choice bar from Choicebar component
    $(".desk-bread-cont").css("filter", "brightness(30%)"); //set the brightness to the breadscrum  from Cont component
    $(".section-position").css("filter", "brightness(30%)");// set the brightness to the sections items from Cont component 
    $(".category_button").css("filter", "brightness(30%)"); // set the brightness to the category button  items from Home component 
    $("#menu-container").css("filter", "brightness(30%)");
    $(".topic-item").css("filter", "brightness(30%)");
    $(".footer-container").css("filter", "brightness(30%)");

    // Container style
    $(".processes-position").css("filter", "brightness(30%)");
    $(".sections-items").css("filter", "brightness(30%)");
    $(".bread-text").css("filter", "brightness(30%)");
    $(".title").css("filter", "brightness(30%)");
    $(".section-position").css("filter", "brightness(30%)");
    $(".desk-bread").css("filter", "brightness(30%)");
    $(".state_containers").css("filter", "brightness(30%)");
    $(".contain-title").css("filter", "brightness(30%)");
   
    //subcontainer style
    $(".subcontainer").css("filter", "brightness(50%)");
    // $(".topic-item").css("filter", "brightness(100%)");
  
   // administration style
   $(".administration-item").css("filter", "brightness(30%)");
//body style
$("body").css("background-color", "#777");


}