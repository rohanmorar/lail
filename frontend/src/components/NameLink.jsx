import { Link } from "react-router-dom";

function NameLink(props) {
  return (
    <Link to={props.to} state={props.name}>
      <h1>{props.name}</h1>
    </Link>
  );
}

export default NameLink;
