<script>
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".steps-slider").forEach(slider => {

        const track = slider.querySelector(".steps-track");
        const steps = slider.querySelectorAll(".step");
        const prevBtn = slider.querySelector(".arrow.left");
        const nextBtn = slider.querySelector(".arrow.right");
        const dots = slider.querySelectorAll(".dot");

        if (!track || !prevBtn || !nextBtn || steps.length === 0) {
            console.warn("Incomplete slider found, skipping");
            return;
        }

        let currentIndex = 0;

        function updateSlider() {
            const stepWidth = steps[0].offsetWidth;
            track.style.transform = `translateX(-${currentIndex * stepWidth}px)`;

            dots.forEach(d => d.classList.remove("active"));
            if (dots[currentIndex]) dots[currentIndex].classList.add("active");

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === steps.length - 1;
        }

        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener("click", () => {
            if (currentIndex < steps.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        updateSlider();
    });

});
</script>

