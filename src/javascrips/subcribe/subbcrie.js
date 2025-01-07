// handle subscribe form
const subscribeForm = document.querySelector('#subscribeForm');

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = subscribeForm.email.value;
    if (email) {
        // toast message 
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.textContent = `Your email: ${email}`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 5000);

        // resete form 
        subscribeForm.reset();
    }
});