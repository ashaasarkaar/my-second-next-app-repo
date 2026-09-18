import { use } from "react";


const FoodDetailPage = async({params}) => {
    const {foodId} = await params;
    return (
        <div>
            <h1>Food Detail Id: {foodId}</h1>
        </div>
    );
};

export default FoodDetailPage;