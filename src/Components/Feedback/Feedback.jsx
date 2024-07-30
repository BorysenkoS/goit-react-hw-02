import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total }) {
  return (
    <div>
      <p className={css.feedbackText}>No feedback yet</p>
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
      </ul>
    </div>
  );
}

export default Feedback;
