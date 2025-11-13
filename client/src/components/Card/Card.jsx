import Title from "./Title";
import Button from "./Button";
import MainSection from "./MainSection";
function Card(props) {
  return (
    <>
      {props.primaryCard ? (
        <>
          <div class="flex gap-2 justify-center">
            <button class="btn btn-primary">Pomodoro</button>
            <button class="btn btn-secondary">Short Break</button>
            <button class="btn btn-accent">Long Break</button>
          </div>
          <div class="flex justify-center">
            <MainSection showTimer={true}></MainSection>
          </div>
          <Button text="START"></Button>
        </>
      ) : (
        <>
          <Title></Title>
          <MainSection showTimer={false}></MainSection>
          <Button text="Add item"></Button>
        </>
      )}
    </>
  );
}

export default Card;
