import Card from "./Card.jsx";
function Pomodoro() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div>
              <div className="flex flex-col gap-6 py-8 mt-12 card-body">
                <Card
                  primaryCard={true}
                  showTimer={false}
                  showButtonGroup={true}
                ></Card>
              </div>
              <div className="flex flex-col gap-6 py-8 mt-10 card-body">
                <Card
                  secondaryCard={true}
                  showTimer={true}
                  showButtonGroup={false}
                ></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pomodoro;
