import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div>
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
