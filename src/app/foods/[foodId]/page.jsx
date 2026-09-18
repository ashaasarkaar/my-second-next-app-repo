import Image from "next/image";



const FoodDetailPage = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json()
    const {dish_name, image_link, main_ingredients, 
approximate_nutrition_per_serving} = data.data;
    // console.log('Specific food Detail', foods)
    return (
        <div>
            <h1>Food Detail Id: {foodId}</h1>
            <Image
                src={ image_link}
                alt={dish_name}
                width={300}
                height={300}
            ></Image>
            <h2 className="text-3xl text-green-500">{dish_name}</h2>

         <h2 className="text-2xl text-purple-500">Ingredient : </h2>
            
                <ul className="list-disc">
                {
                    main_ingredients.map((mainIngredient, index) => <li key={index}>
                        {mainIngredient}
                    </li>)
                }
            </ul>

            <h2 className="text-2xl text-blue-500 mt-3 my-3">Approximate_nutrition_per_serving : </h2>

            <div className="mb-4">
                {
                    Object.entries(approximate_nutrition_per_serving).map(([key, value]) => <p key={key}>{key} : {value}</p>)
                }
            </div>
           
        </div>
    );
};

export default FoodDetailPage;