import "./App.css";
import Description from "./Components/Description/Description";
import Options from "./Components/Options/Options";
import Feedback from "./Components/Feedback/Feedback";
import Notification from "./Components/Notification/Notification";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
