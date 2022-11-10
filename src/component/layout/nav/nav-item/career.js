import carrerImg from './../../../../assests/img/New folder/career-banner.png';

const Career = () => {
  return (
    <>
      <div >
        <div className="pb-5 text-center">
          <img
            src={carrerImg}
            alt=""
            className="about-img"
          />
        </div>
        <div className="container">
          <h4 className="text-dark font-weight-bold border-bottom-success ">Career </h4>
          <p className="mt-3 ">
            Vlive India is one of India's fastest growing companies that
            is investing in lots of ventures and startups for the betterment of
            them and the nation as well. Currently 500+ employees are working
            with the company in various positions. The company always searches
            for fresh talents and new faces that want to achieve something in
            life. The happy and satisfied faces of each and every employee of
            the company proves that it has an amazing working environment and
            management that always pushes the employee to grow in a positive
            way.
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
