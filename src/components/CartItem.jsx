import {AiTwotoneDelete} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";


const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }


  return (
    <div>
      <div className="flex flex-row space-x-7 mt-4">
        <div className="h-[160px] aspect-square mb-3">
          <img src={item.image} alt="img" className="h-[160px]"/>
        </div>
        <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold text-md">{item.title}</h1>
            <h1 className="font-normal text-sm">{item.description.split(" ").slice(0,16).join(" ") + "..."}</h1>
            <div className="flex justify-between">
              <p className="text-green-600 font-semibold">${item.price}</p>
              <div onClick={removeFromCart} className="bg-red-300 p-2 rounded-full">
                <AiTwotoneDelete/>
              </div>
            </div>
        </div>
      </div>
      <div className="bg-black h-0.5 w-full"></div>
  </div>)
};

export default CartItem;
