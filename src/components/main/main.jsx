import "./main.css";
import Hero from "../hero/hero";
import Service from "../service/service";
import Leading from "../leading/leading";
import Download from "../download/download";
import Costumer from "../costumer/costumer";
import Article from "../article/article";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Service />
      <Leading />
      <Download />
      <Costumer />
      <Article />
    </main>
  );
};

export default Main;
