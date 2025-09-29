fetch("navbar.html") // fetches navbar.html file from server
    .then(res => res.text()) // returns the file and converts the file into HTML markup
    .then(data => document.getElementById("navbar").innerHTML = data); // grabs the element with id (navbar) and inserts the HTML markup of navigation inside


fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);