import React from "react";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt="checkout ads"
        />
        
        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <p>
              You have no items in your basket.To buy click on "Add to basket"
              next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
export default Checkout;
