import { useContext, useEffect, useState } from "react";
import "./homepage.css";
import { CartContext } from "../contexts/context";
import {BsPlus} from 'react-icons/bs'


const Homepage = () => {
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    const fetchProducts = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setData(data)
    }
    fetchProducts()
},[])
  const state = useContext(CartContext);
  const dispatch = state.dispatch;
  console.log(state);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="container" key={index}>
            <div className="btn">
            <button className="press" onClick={() => dispatch({ type: "ADD", payload: item })}>
              <BsPlus />
            </button>
            </div>
            <img src={item.image} alt="" />
            <h6 className="text">{item.category}</h6>
            <p className="title">{item.title}</p>
            <h3 className="price">$.{item.price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;