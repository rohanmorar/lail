import Tasklist from "./Tasklist";
import Timer from "./Timer";

function Section(props) {
  return <>{props.showTimer ? <Timer></Timer> : <Tasklist></Tasklist>}</>;
}

export default Section;
