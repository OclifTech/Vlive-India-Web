import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { masterPanelConfig } from "../../../../config";
import './blogById.css';

export default function BlogById() {

    const [blog , setBlog] = React.useState('');
    const {id} = useParams();

  React.useEffect(()=>{

    axios.get(`${masterPanelConfig.apiBaseUrl}/api/blog/blog/${id}`).then(res =>{
      if(res.data){
        console.log(res.data);
        setBlog(res.data);
      }
    }).catch(err=>{
      throw new Error(err);
    })
    
  } , [])

  return (
    <div className="">
      <div className="img-section">
        <img src={blog.img} alt="blog img" className="blog-img" />
        <div className="b-title">
        <h4 className="text-light b-text-font w-50">{blog.title}</h4>
        </div>
      </div>
      <div className="title-section container mt-5 pt-4">
        <h4 className="text-center font-weight-bold">{blog.subtitle} </h4>
      </div>
      <div className="blog-text-section container mt-5 pt-5">
        <div dangerouslySetInnerHTML={{__html : `${blog.desc}` }} />
      </div>
    </div>
  );
}
