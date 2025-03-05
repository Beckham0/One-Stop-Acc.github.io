document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop-up");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show1");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop_up_img");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});
