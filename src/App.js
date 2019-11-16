import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt=""></img>
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2013/03/baechukimchi-150x150.jpg"
  },
  {
    name: "Ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ramyun_cooking_image.png/220px-Ramyun_cooking_image.png"
  },
  {
    name: "Samgiopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samgyeopsal_%28pork_belly%29.jpg/220px-Samgyeopsal_%28pork_belly%29.jpg"
  },
  {
    name: "Chukumi",
    image: "https://blogthatcake.files.wordpress.com/2013/08/113.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
