const container = document.getElementById("shapesContainer");

// Neçə shape yaratmaq istəyirsənsə
const SHAPE_COUNT = 12;

// Gradient rənglər
const gradients = [
  "bg-gradient-to-r from-pink-500 to-red-500",
  "bg-gradient-to-r from-blue-500 to-indigo-500",
  "bg-gradient-to-r from-green-400 to-emerald-500",
  "bg-gradient-to-r from-yellow-400 to-orange-500",
  "bg-gradient-to-r from-purple-400 to-fuchsia-500",
];

for (let i = 0; i < SHAPE_COUNT; i++) {
  const shape = document.createElement("div");
  shape.className = `shape ${gradients[Math.floor(Math.random() * gradients.length)]}`;

  // Random position
  const x = Math.random() * 100; // %
  const y = Math.random() * 100; // %

  shape.style.left = `${x}%`;
  shape.style.top = `${y}%`;

  // Random size
  const size = Math.floor(Math.random() * 60) + 50; // 50–110px
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;

  // Random animation delay
  shape.style.animationDelay = `${Math.random() * 4}s`;

  container.appendChild(shape);
}
