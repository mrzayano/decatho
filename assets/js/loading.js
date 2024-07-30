document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
        // Wrap each image in a container
        const container = document.createElement('div');
        container.classList.add('image-container');
        image.parentNode.insertBefore(container, image);
        container.appendChild(image);

        // Create the shimmer effect element
        const shimmer = document.createElement('div');
        shimmer.classList.add('shimmer');
        container.appendChild(shimmer);

        // Load high-quality image
        const highQualitySrc = image.src;

        // Create a low-quality version of the image using a canvas
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

            // Replace with the high-quality image after 1 second
            setTimeout(() => {
                image.src = highQualitySrc;

                // Remove shimmer effect once the high-quality image loads
                image.onload = () => {
                    shimmer.remove();
                    image.classList.add('loaded');
                };
            }, 1000);
        };
    });
});
