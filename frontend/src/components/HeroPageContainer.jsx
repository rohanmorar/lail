import { useEffect, useState } from "react";

function HeroPageContainer({ MainView }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.msg))
      .catch((error) =>
        console.error("error fetching message from backend", error)
      );
  });
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">{<MainView Text={message} />}</div>
        </div>
      </div>
    </>
  );
}

export default HeroPageContainer;
