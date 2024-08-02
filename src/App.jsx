import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

import { useEffect, useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("key")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  function updateFeedback(feedbackType) {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }

  function resetFeedback() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      <Notification />
    </div>
  );
}

export default App;
