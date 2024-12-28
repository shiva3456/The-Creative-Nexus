// Theme Toggle for Light/Dark Mode
const themeToggle = document.getElementById("toggle-theme");
let isDarkMode = true;

themeToggle.addEventListener("click", () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        themeToggle.textContent = "☀️";
    } else {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#fff";
        themeToggle.textContent = "🌙";
    }
    isDarkMode = !isDarkMode;
});

// 3D Background Animation using THREE.js
const container = document.getElementById("three-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Adding a dynamic glowing ring
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff0077, emissive: 0x330033, emissiveIntensity: 0.7 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Adding lights
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Animation for the 3D object
camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Responsive canvas
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        const mailToLink = `mailto:Srishiva5055@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AContact Email: ${encodeURIComponent(email)}`;
        window.location.href = mailToLink;
    } else {
        alert("Please fill in all fields before sending!");
    }
});

