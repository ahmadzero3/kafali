window.addEventListener('load', () => {
    const paragraphs = document.querySelectorAll('.warranty-conditions .condition');
    let delay = 0;

    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add('show');
        }, delay);

        delay += 1000; // Increase delay for each subsequent paragraph (adjust as needed)
    });
});
