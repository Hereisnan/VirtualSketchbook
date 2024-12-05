document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/images')
        .then(response => response.json())
        .then(images => {
            const container = document.querySelector('.image-container'); 
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image.src;
                img.style.position = 'absolute';
                img.style.left = `${image.position.x}%`;
                img.style.top = `${image.position.y}%`;
                img.style.transform = `rotate(${image.rotation}deg)`;
                img.style.width = `${image.size.width}px`;
                img.style.height = `${image.size.height}px`; 
                container.appendChild(img);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
