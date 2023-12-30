document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    const menuSection = document.getElementById("bottomSection");

    scrollButton.addEventListener("click", () => {
        const menuSectionPosition = menuSection.offsetTop;
        const scrollDuration = 1000; // Set the duration in milliseconds (e.g., 1000ms = 1s)

        const startTime = performance.now();

        function scrollToSection(currentTime) {
            const elapsed = currentTime - startTime;
            const easing = easeInOutQuad(elapsed, 0, 1, scrollDuration);
            window.scrollTo(0, menuSectionPosition * easing);

            if (elapsed < scrollDuration) {
                requestAnimationFrame(scrollToSection);
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollToSection);
    });
});
