document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card-subtitle button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});


