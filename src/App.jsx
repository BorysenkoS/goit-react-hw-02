import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
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
  const positiveFeedback =
    Math.round((feedback.good / (totalFeedback - feedback.neutral)) * 100) || 0;
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
          feedback={feedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
