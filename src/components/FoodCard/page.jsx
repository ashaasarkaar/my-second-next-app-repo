import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
  const { id, dish_name, image_link, price, category } = food;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={image_link}
          alt={dish_name}
          width={200}
          height={200}
        >
        </Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral">Add To Cart</button>
          <Link href={`/foods/${id}`}>
          <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;