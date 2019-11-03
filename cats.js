function clicking() {
    let mynumber = document.getElementById("myNumber").value;
    console.log(mynumber);
    window.location.assign(`https://http.cat/${mynumber}`);
}

