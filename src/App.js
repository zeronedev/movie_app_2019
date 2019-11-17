import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2013/03/baechukimchi-150x150.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ramen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ramyun_cooking_image.png/220px-Ramyun_cooking_image.png",
    rating: 4.9
  },
  {
    id: 3,
    name: "Samgiopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samgyeopsal_%28pork_belly%29.jpg/220px-Samgyeopsal_%28pork_belly%29.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Chukumi",
    image:
      "https://mblogthumb-phinf.pstatic.net/20140925_83/idgfahcjkl_1411608722108YRous_JPEG/%B4%D9%BF%EE%B7%CE%B5%E5.jpg?type=w2",
    rating: 5.5
  },
  {
    id: 5,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
