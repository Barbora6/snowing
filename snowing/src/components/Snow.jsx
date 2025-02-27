import "./Snow.css";

export const Snow = (props) => {
  return (
    <>
      {/* <div className="snow-container">
        <h1>Sněžení</h1>
      </div>
      <div className="snow-icon"></div> */}
      <p className="snowFlake" id={`item${props.id}`} style={props.style}>
        *
      </p>
    </>
  );
};
