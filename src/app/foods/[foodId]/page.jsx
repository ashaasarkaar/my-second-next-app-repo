import Image from "next/image";



const FoodDetailPage = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json()
    const {dish_name, image_link} = data.data;
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
            <h2>{dish_name}</h2>
        </div>
    );
};

export default FoodDetailPage;