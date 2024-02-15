const headerHome = document.querySelector(".headerHome");

// Add scroll event listener
export function scrollheader() {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        // Check if scrollPosition is greater than 0
        if (scrollPosition > 0) {
            headerHome.classList.add("visible");
        } else {
            headerHome.classList.remove("visible");
        }
    });
}

if (document.querySelector(".headerContainer")) {
    scrollheader();
}
