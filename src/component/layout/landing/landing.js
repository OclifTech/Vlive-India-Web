import React, { Component } from "react";
import "./landing.css";
import ImgCarousel from "../../common/carousel/carousel";
import Covid_blog from "./covid-19/covid_blog";
import FeatureStories from "./F_Stories/featureStories";
import Bussiness from "./bussiness/bussiness";
import Blog from "../../common/blog/blog";
import ChairMan from "./chairman-corner/chairman";
import Distribute from "./distribute/distribute";
import axios from "axios";
import {masterPanelConfig} from './../../../config';

const  Landing = () => {

const [blogs , setBlogs] = React.useState([]);

React.useState(()=>{
  axios.get(`${masterPanelConfig.apiBaseUrl}/api/blog`).then(res =>{
    if(res.data){
      console.log(res.data);
      const data= res.data;
      const arr=[]
      for (let index = 0; index < 3; index++) {
        arr[index]=data[index];
      }
      setBlogs(arr);
    }
  }).catch(err=>{
    throw new Error(err);
  })
} , [])


    return (
      <div>
        <ImgCarousel />
        <div className="bg-img">
          <Covid_blog />
        </div>
        <div className="">
          <FeatureStories />
          <Blog blogs = {blogs} />
        </div>
        <div className="bussiness-bg-img">
          <Bussiness />
        </div>
       
        <div className="bg-gray">
          <Distribute />
        </div>
        <div className="chairman-bg-img">
          <ChairMan />
        </div>
      </div>
    );
}

export default Landing;
