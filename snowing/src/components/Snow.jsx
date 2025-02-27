import "./Snow.css";

export const Snow = (props) => {
  return (
    <>
      <p className="snowFlake" id={`item${props.id}`} style={props.style}>
        *
      </p>
    </>
  );
};
