function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
}
AOS.init();

        // Scroll to Top Functionality
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        window.onscroll = function() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            // Send the form data using Fetch API
            const formData = new FormData(this);
            fetch(this.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You!',
                        text: 'Your message has been sent successfully.',
                        confirmButtonText: 'OK'
                    });
                    this.reset(); // Reset the form after submission
                } else {
                    // Show error message
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again later.',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.',
                    confirmButtonText: 'OK'
                });
            });
        });