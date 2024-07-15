
document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('myRange');
    var images = document.querySelectorAll('.demo-image');
    const img_prefix = {1:"../images/continues/frame_",
        2:"../images/continues/diff_",
        3:"../images/continues/attention_",
        4:"../images/continues/output_",
    }

    function updateImages() {
        images.forEach(function(img, index) {
            var path = img_prefix[index+1] + slider.value + ".png";
            img.src = path;
        });
    }

    // Update images when the slider value changes
    slider.addEventListener('input', updateImages);

    // Initial update
    updateImages();
});