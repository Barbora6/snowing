import "./App.css";
import { Snow } from "./components/Snow";

export const App = () => {
  let snowing = () => {
    let animationDelay = "0s";
    let fontSize = "100px";
    let arr = Array.from("Snowflakes are awesome!!!");
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
      let style = {
        animationDelay,
        fontSize
      };
      return <Snow key={i} id={i} style={style} />;
    });
  };

  return (
    <div className="container">
      <h1>sněží</h1>
      {snowing()}
    </div>
  );
};
