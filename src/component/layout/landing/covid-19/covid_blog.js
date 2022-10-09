import React, { Component } from "react";
import covidImg from './../../../../assests/img/covid_img.jpg'
import  './covid_blog.css';

export class Covid_blog extends Component{

    
    render(){

        return(
            <>
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-7 text-center">
                            <h2 className=""><span className="brd-bottom m-3 py-3 text-center">Battling</span>COVID19 through Goodness</h2>
                            <div className="text-left ml-5 mt-5">
                                <h4 className="ml-5 pl-5 h-bold">The Vlive Group</h4>
                            </div>
                            <div className="text-center  mx-auto px-5">
                            <p className="mx-5 px-5 t-bold">The Vlive Group, which stood united with the government in India’s fightback ever since the pandemic broke, ramped up its efforts to an unprecedented scale in wake of the 2nd wave hitting India. The diversified infrastructure giant deployed all resources at its command – from staff and logistics to ports and airports – to aid this nationwide fightback.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={covidImg} alt="" className="mt-2 mx-auto img-fluid1" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
} 

export default Covid_blog;