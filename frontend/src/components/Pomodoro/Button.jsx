function Button(props) {
  return (
    <div className="card-actions justify-center">
      <button className="btn btn-wide">{props.text}</button>
    </div>
  );
}

export default Button;
