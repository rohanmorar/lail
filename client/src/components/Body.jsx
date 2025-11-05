import Card from "../components/Card";
function Body(props) {
  return (
    <section className={props.styling}>
      <Card className={props.styling}></Card>
      <Card className={props.styling}></Card>
    </section>
  );
}
export default Body;
