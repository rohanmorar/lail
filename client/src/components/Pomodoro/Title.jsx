function Title(props) {
  return (
    <>
      {props.hasButtonGroup ? (
        <div class="flex gap-2 justify-center">
          <button className="btn btn-primary">pomodoro</button>
          <button className="btn btn-secondary">short break</button>
          <button className="btn btn-accent">long break</button>
        </div>
      ) : (
        <div className="flex justify-center">
          <h4>Time to focus!</h4>
        </div>
      )}
    </>
  );
}

export default Title;
