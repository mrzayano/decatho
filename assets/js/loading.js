document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
        const highQualitySrc = image.src;

        // Create a low-quality version of the image
        const lowQualityImage = new Image();
        lowQualityImage.src = highQualitySrc;
        lowQualityImage.onload = function() {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            // Set canvas dimensions to a fraction of the original image size
            canvas.width = lowQualityImage.width / 10;
            canvas.height = lowQualityImage.height / 10;

            // Draw the image to the canvas
            context.drawImage(lowQualityImage, 0, 0, canvas.width, canvas.height);

            // Get the low-quality data URL
            const lowQualitySrc = canvas.toDataURL("image/jpeg", 0.5);

            // Set the image src to the low-quality version
            image.src = lowQualitySrc;

            // Replace with the high-quality image after 3 seconds
            setTimeout(() => {
                image.src = highQualitySrc;
            }, 3000);
        };
    });
});
