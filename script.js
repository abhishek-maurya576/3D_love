document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    const outerCube = document.querySelector('.outer-cube');
    const innerCube = document.querySelector('.inner-cube');
    let isAnimating = true;
    let rotationX = -30;
    let rotationY = 0;

    // Function to update cube rotation
    const updateCubeRotation = () => {
        outerCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        innerCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(0.5)`;
    };

    // Mouse movement controls
    let isDragging = false;
    let previousX, previousY;

    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousX = e.clientX;
        previousY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - previousX;
        const deltaY = e.clientY - previousY;

        rotationY += deltaX * 0.5;
        rotationX = Math.max(-60, Math.min(60, rotationX + deltaY * 0.5));

        updateCubeRotation();

        previousX = e.clientX;
        previousY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch controls
    cube.addEventListener('touchstart', (e) => {
        isDragging = true;
        previousX = e.touches[0].clientX;
        previousY = e.touches[0].clientY;
    });

    cube.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const touch = e.touches[0];
        const deltaX = touch.clientX - previousX;
        const deltaY = touch.clientY - previousY;

        rotationY += deltaX * 0.5;
        rotationX = Math.max(-60, Math.min(60, rotationX + deltaY * 0.5));

        updateCubeRotation();

        previousX = touch.clientX;
        previousY = touch.clientY;
    });

    cube.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Double click to reset position
    cube.addEventListener('dblclick', () => {
        rotationX = -30;
        rotationY = 0;
        updateCubeRotation();
    });

    // Initial rotation
    updateCubeRotation();
});
