
const contactForm = document.querySelector('#form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        const subject = document.querySelector('#subject').value;
        const enquiry = document.querySelector('#enquiry').value;

        // console.log(name, email, message, subject, enquiry);


        if (name && email && message) {
            // toast message
            const toast = document.createElement("div");
            toast.classList.add("toast");
            toast.textContent = `Message sent successfully`;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 5000);

            // clear form fields
            contactForm.reset();
        }
    });
}