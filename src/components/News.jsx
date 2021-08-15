import "../style/news.css";
import img2 from "../images/bg2.jpg";
import img1 from "../images/bg1.jpg";
import img3 from "../images/bg3.jpg";

const News = () => {
  return (
    <>
      <section className="news">
        <div className="news-container">
          <h1>Latest Stories from Campus</h1>
          <div className="news-gallery">
            <div className="news-img1">
              <img src={img1} alt="" />
            </div>
            <div className="news-img2">
              <img src={img2} alt="" />
            </div>
            <div className="news-img3">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
