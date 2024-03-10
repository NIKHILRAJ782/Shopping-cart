import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("printing cart");
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc,curr) => acc+curr.price , 0 ));
  },[cart])

  return (
  <div>
    {
      cart.length > 0 ?
      (<div className="flex lg:flex-row flex-col justify-center mx-auto space-x-16 my-10 w-11/12">
        <div className="max-w-[500px]">
          {
            cart.map((item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            } )
          }
        </div>
        <div className="flex flex-col justify-between">

          <div>
            <div className="text-green-700 font-semibold uppercase text-lg">Your Cart</div>
            <div className="text-green-700 font-semibold uppercase text-4xl">Summary</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>
          <div>
            <p className="font-medium text-md mr-2">Total Amount: <span className="font-semibold">${totalAmount}</span></p>
            <button className="bg-green-700  px-12 py-2 rounded-md text-white font-semibold">
              Checkout Now
            </button>
          </div>

        </div>
      </div>) 
        :
      (<div className="flex flex-col justify-center items-center w-screen h-screen space-y-4">
        <h1 className="text-2xl font-bold">Cart Empty</h1>  
        <Link to={"/"}>
          <button className="text-lg font-semibold bg-green-500 hover:bg-green-600 hover:text-white hover:shadow-xl px-4 py-2 rounded-md">
            Shop Now
          </button>
        </Link>
      </div>)
    }
  </div>)
};

export default Cart;
