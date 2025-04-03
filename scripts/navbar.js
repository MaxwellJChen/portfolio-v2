document.addEventListener("DOMContentLoaded", function() {
    fetch("../navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            if(!document.getElementById("navbar-style")) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "./styles/navbar.css";
                link.id = "navbar-style";
                document.head.appendChild(link);
            }
        })
        .catch(error => console.error("error loading navbar: ", error));
});
