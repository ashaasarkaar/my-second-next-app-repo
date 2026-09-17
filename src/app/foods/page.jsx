import FoodCard from '@/components/FoodCard/page';
import React from 'react';

const FoodsPage = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json()
    const foods = data.data
    console.log(data)
    return (
        <div>
            <h1>Foods: {foods.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {foods.map(food => <FoodCard food={food} key={food.id}>
                </FoodCard>)}
            </div>
        </div>
    );
};

export default FoodsPage;