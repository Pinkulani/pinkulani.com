let Counter = true;

function ToggleTheme() {
    let borders = document.querySelectorAll(".border"); // Don't forget the . (Justin)
    if (Counter == true) {
        borders.forEach((element) => {
            element.style.backgroundColor = "rgb(87, 65, 230)";
        });
    } else {
        borders.forEach((element) => {
            element.style.backgroundColor = "White";
        });
            
    }

    let table = document.querySelectorAll("table, td, th")
    table.forEach((element) => {
        element.classList.toggle("tabletheme")
    });

    //let p = document.querySelectorAll("p");
    //p.forEach((element) => {
    //    element.classList.toggle("divtheme");
    //});
    
    //let div = document.querySelectorAll("body div");
    //div.forEach((element) => {
    //    element.classList.toggle("divtheme");
    //});      
    
    let body = document.body;
    body.classList.toggle("bodytheme");
    
    let footer = document.querySelector("footer");
    footer.classList.toggle("footertheme");
    
    Counter = !Counter;
}
