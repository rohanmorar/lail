import Title from "./Title";
import Button from "./Button";
import Section from "./Section";
function Card(props) {
  return (
    <>
      {props.primaryCard ? (
        <>
          <div className="flex gap-2 justify-center">
            <button className="btn btn-primary">Pomodoro</button>
            <button className="btn btn-secondary">Short Break</button>
            <button className="btn btn-accent">Long Break</button>
          </div>
          <div className="flex justify-center">
            <Section showTimer={true}></Section>
          </div>
          <Button text="START"></Button>
        </>
      ) : (
        <>
          <Title></Title>
          <Section showTimer={false}></Section>
          <Button text="Add item"></Button>
        </>
      )}
    </>
  );
}

export default Card;
