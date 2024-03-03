
export function observe() {
    const observer = new IntersectionObserver((objects) => {
        objects.forEach((object) => {
            if (object.isIntersecting) {
                object.target.classList.add(`appear`);
            }
            else {
                object.target.classList.remove(`appear`);
            }
        })
    })
    const hiddenElements = document.querySelectorAll(".hiddenElement");
    hiddenElements.forEach((object) => observer.observe(object));
}
observe();