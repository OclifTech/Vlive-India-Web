import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import gimg from "./../../../.../../../../assests/img/team.jpg";
import { masterPanelConfig } from "./../../../../../config";
import "./../../nav.css";
import "./gallery.css";

export const PopUpImg = (props) => {
  const [image , setImage] = React.useState('');

  const {id} = useParams();
  console.log(id);

  React.useEffect(()=>{
    console.log(id);
    axios
    .get(`${masterPanelConfig.apiBaseUrl}/api/image/image/${id}`)
    .then((res) => {
      if (res) {
        console.log(res.data);
        setImage(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  } , [1])
  return (
    <div className="popup-img-position">
      <div className="text-right mt-5 pr-lg-4 pr-1">
        <Link to="/gallery">
        <i
          className="far fa-times-circle text-light fa-3x cursrHover"
          onClick={() => {
          }}
        ></i>
        </Link>
      </div>
      <div className="imgPosition">
        <div className="px-5">
          <img src={image.img} alt="loading..." className="popUpImg" />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [click, setClick] = React.useState(false);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${masterPanelConfig.apiBaseUrl}/api/image/`)
      .then((res) => {
        if (res) {
          console.log(res);
          setImages(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <div>
        <img src={gimg} alt="banner" className="gallery-banner" />
      </div>
      <div className="container mt-5 pb-5">
        <div className="my-5">
          <h3 className="border-bottom-success text-light">Gallery</h3>
        </div>
        <div className="row">
          {images?.map((image, index) => {
            return (
              <div className="col-lg-4 col-sm-4 col-6 my-2  " key={index}>
                <Link to={`/gallery/${image._id}`} onClick={() => setClick(true)}>
                  <img src={image.img} alt="#img" className="img-fluid" />
                </Link>
                {/* {click ? <PopUpImg setClick={setClick} image={image} index={index} /> : null} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
