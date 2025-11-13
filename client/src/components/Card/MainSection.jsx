import Tasklist from "./Tasklist";
import Timer from "./Timer";

function MainSection(props) {
  return <>{props.showTimer ? <Timer></Timer> : <Tasklist></Tasklist>}</>;
}

export default MainSection;
