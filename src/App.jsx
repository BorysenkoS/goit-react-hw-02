import "./App.css";
import Description from "./Components/Description/Description";
import Options from "./Components/Options/Options";
import Feedback from "./Components/Feedback/Feedback";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedback.good + feedback.neutral + feedback.bad;

  function onAddFeedback(kindFeedback) {
    setFeedback({ ...feedback, [kindFeedback]: feedback[kindFeedback] + 1 });
  }

  return (
    <div>
      <Description />
      <Options onAddFeedback={onAddFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
      />
    </div>
  );
}

export default App;
