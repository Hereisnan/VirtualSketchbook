document.addEventListener('DOMContentLoaded', function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40; 

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('background').appendChild(renderer.domElement); 

    // Earth
    const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x123456 }); 
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Moon
    const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
    const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(light);

    const radiusX = 10; // Horizontal radius of the ellipse
    const radiusY = 15; // Vertical radius of the ellipse
    let angle = 0; // Start angle

    function animate() {
        requestAnimationFrame(animate);

        // Update Moon's position
        angle += 0.01; // This controls the speed of the orbit
        moon.position.x = earth.position.x + radiusX * Math.cos(angle);
        moon.position.y = earth.position.y + radiusY * Math.sin(angle);

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
