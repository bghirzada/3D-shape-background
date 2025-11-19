const container = document.getElementById("shapesContainer");

const positions = [
  { x: 10, y: 20, size: 80 },
  { x: 30, y: 10, size: 70 },
  { x: 80, y: 40, size: 90 },
  { x: 70, y: 25, size: 60 },
  { x: 20, y: 60, size: 100 },
  { x: 40, y: 75, size: 50 },
  { x: 60, y: 79, size: 85 },
  { x: 80, y: 65, size: 70 },
  { x: 12, y: 80, size: 60 },
  { x: 55, y: 20, size: 95 },
  { x: 85, y: 20, size: 55 },
];

const logos = [
  "https://cdn.simpleicons.org/facebook",
  "https://cdn.simpleicons.org/google",
  "https://cdn.simpleicons.org/apple",
  "https://cdn.simpleicons.org/netflix",
  "https://cdn.simpleicons.org/github",
  "https://cdn.simpleicons.org/spotify",
  "https://cdn.simpleicons.org/airbnb",
  "https://cdn.simpleicons.org/trello",
  "https://cdn.simpleicons.org/docker",
  "https://cdn.simpleicons.org/intel",
  "https://cdn.simpleicons.org/tesla",
  "https://cdn.simpleicons.org/twitter",
  "https://cdn.simpleicons.org/linkedin",
  "https://cdn.simpleicons.org/figma",
  "https://cdn.simpleicons.org/behance",
];

positions.forEach((pos, i) => {
  const shape = document.createElement("img");
  shape.src = logos[i];
  shape.className = "shape";

  shape.style.left = `${pos.x}%`;
  shape.style.top = `${pos.y}%`;
  shape.style.width = `${pos.size}px`;
  shape.style.height = `${pos.size}px`;

  container.appendChild(shape);
});
