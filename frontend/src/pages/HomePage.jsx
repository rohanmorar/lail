import HeroContainer from "../components/HeroPageContainer";
import Heading from "../components/Navbar";
import Pomodoro from "../components/Pomodoro/Pomodoro";

function Home(props) {
  return (
    <>
      <h1 className="text-5xl font-bold">{props.Text || "loading..."}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </>
  );
}
export default Home;
