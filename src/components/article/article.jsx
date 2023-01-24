import "./article.css";
import ArticleCard from "../articlecard/articeCard";

const Article = () => {
  return (
    <section className="article">
      <h3 className="article-title">Check out our latest article</h3>
      <hr />
      <div className="article-cards">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard /> 
      </div>
      <button className="article-btn">View all</button>
    </section>
  );
};

export default Article;
