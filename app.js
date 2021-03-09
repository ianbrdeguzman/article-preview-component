class Button {
    update() {
        this.btn = document.getElementById('share');
        this.btn.addEventListener('click', () => {
            document.querySelector('.footer-social').classList.toggle('active');
            document
                .querySelector('.footer-social-desktop')
                .classList.toggle('active-desktop');
        });
    }
}

const button = new Button();
button.update();
