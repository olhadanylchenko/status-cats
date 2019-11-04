// function clicking() {
//     let mynumber = document.getElementById("myNumber").value;
//     console.log(mynumber);
//     window.location.assign(`https://http.cat/${mynumber}`);
// };




$(document).ready(function () {
    $("#show").click(function () {
        let mynumber = document.getElementById("myNumber").value;
        $("#main").empty();
        $("#main").append(`<img src="https://http.cat/${mynumber}.jpg" class="img-fluid" id="kitty"/>`);




        // console.log(mynumber);
        // window.location.assign(`https://http.cat/${mynumber}`)
    })
});
