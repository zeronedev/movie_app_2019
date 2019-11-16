import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2013/03/baechukimchi-150x150.jpg"
  },
  {
    id: 2,
    name: "Ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ramyun_cooking_image.png/220px-Ramyun_cooking_image.png"
  },
  {
    id: 3,
    name: "Samgiopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samgyeopsal_%28pork_belly%29.jpg/220px-Samgyeopsal_%28pork_belly%29.jpg"
  },
  {
    id: 4,
    name: "Chukumi",
    image: "https://blogthatcake.files.wordpress.com/2013/08/113.jpg"
  },
  {
    id: 5,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg"
  }
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
