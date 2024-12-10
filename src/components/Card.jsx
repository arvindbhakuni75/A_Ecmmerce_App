import { useCallback, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../store/addToCardSlice";
import { Button, Image } from "../snippets";
import toast from "react-hot-toast";

const Card = ({data}) => {

  const { id, image, title, price, description } = data

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardData = useSelector(state => state.addToCardSlice.cardProducts);

  const handleAddToCard = useCallback(() => {
    if(!(cardData.map(item => item.id).includes(data.id))) {
      dispatch(addToCard({ ...data, quantity: 1 }))
      toast.success('added successfully!')  
    } else {
      toast.error("already added!")
    } 
  }, [cardData, data, dispatch]);


  return (
    <div className="w-[300px] flex flex-col justify-between border border-gray-300 shadow-2xl rounded-lg p-4 h-[420px] bg-white">
      <Link to={`/product/${id}`}>
        <div className="w-full">
          <Image
            className="rounded w-full h-[200px]"
            src={image}
            alt="image"
          />
          <div className="w-full felx justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              {title.length > 20 ? title.slice(0, 20) + "..." : title}
            </h2>
            <h2 className="text-lg font-bold text-gray-800">${price}</h2>
          </div>

          <p className="text-gray-600 pb-2">
            {description.length > 70
              ? description.slice(0, 70) + "..."
              : description}
          </p>
        </div>
      </Link>
      <div className="w-full flex justify-between items-center">
        <Button 
          onClick={() => navigate(`/product/${id}`)} 
          className="bg-transparent py-2 px-4 text-black border  rounded">
            View Details
        </Button>
        <Button 
          onClick={handleAddToCard} 
          className="bg-yellow-500 py-2 px-4 text-white rounded"
        >
          Add To Card
        </Button>
      </div>
    </div>
  );
};

export default memo(Card);
