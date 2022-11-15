import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

export default function Blog({ blogs }) {
  return (
    <ul className="cards">
      {blogs.map((item , index) => {
        return(
         <li className="cards__item" key={index}>
         <div className="card">
           <img src={item.img} alt=""  className="card__image blogImg" />
           <div className="card__content">
             <div className="card__title">{item.title}</div>
             <p className="card__text">
               {item.subtitle}
             </p>
             <Link to={`/blog/${item._id}`} className="btn btn--block card__btn btn-success">Read More</Link>
           </div>
         </div>
       </li>
      )})}
     
     
    </ul>


  );
}
