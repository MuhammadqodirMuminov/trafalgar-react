import "./articleCard.css";
import image from "../../img/image.png";

const ArticleCard = () => {
  return (
    <div className="article-card">
      <img src={image} alt="" width={350} height={240} />
      <div className="card-body">
        <h4 className="article-card-title">
          Disease detection, check up in the laboratory
        </h4>
        <p className="article-card-subtitle">
          In this case, the role of the health laboratory is very important to
          do a disease detection...
        </p>
        <a className="card-link" href="#">Read more ➡️</a>
      </div>
    </div>
  );
};

export default ArticleCard;
