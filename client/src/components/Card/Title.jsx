function Title(props) {
  return (
    <>
      {props.hasButtonGroup ? (
        <div class="flex gap-2 justify-center">
          <button class="btn btn-primary">pomodoro</button>
          <button class="btn btn-secondary">short break</button>
          <button class="btn btn-accent">long break</button>
        </div>
      ) : (
        <div class="flex justify-center">
          <h4>Time to focus!</h4>
        </div>
      )}
    </>
  );
}

export default Title;
