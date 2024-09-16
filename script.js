const text = "Hi, I'm Arya Naga.";
let index = 0;
const typingSpeed = 100;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.sub-heading p').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = typeWriter;

const hireMeBtn = document.getElementById('hireMeBtn');
const hireFormContainer = document.getElementById('hireFormContainer');
const closeFormBtn = document.getElementById('closeFormBtn');

hireMeBtn.addEventListener('click', () => {
    hireFormContainer.style.display = 'block';
    createOverlay();
});

closeFormBtn.addEventListener('click', () => {
    hireFormContainer.style.display = 'none';
    removeOverlay();
});

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.setAttribute('id', 'overlay');
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
}

function removeOverlay() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
    }
}

document.getElementById('hireForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
        hireFormContainer.style.display = 'none';
        removeOverlay();
    }
});
