import React, { Component } from "react";
import covidImg from './../../../../assests/img/covid_img.jpg'
import  './covid_blog.css';

export class Covid_blog extends Component{

    
    render(){

        return(
            <>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-7 text-center">
                            <h3 className="font-size  text-md-left"><span className="brd-bottom m-lg-3 py-3 text-center">Battling</span>COVID19 through Goodness</h3>
                            <div className="text-left ml-4 ml-lg-5 mt-5">
                                <h4 className=" pl-3 h-bold">The Vlive Group</h4>
                            </div>
                            <div className="text-center  mx-auto px-5">
                            <p className=" px-lg-3 t-bold">The Vlive Group, which stood united with the government in India’s fightback ever since the pandemic broke, ramped up its efforts to an unprecedented scale in wake of the 2nd wave hitting India. The diversified infrastructure giant deployed all resources at its command – from staff and logistics to ports and airports – to aid this nationwide fightback.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img src={covidImg} alt="" className="mt-2 mx-auto img-fluid1" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
} 

export default Covid_blog;