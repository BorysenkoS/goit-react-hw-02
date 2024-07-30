import css from "./Options.module.css";

function Options({ onAddFeedback }) {
  return (
    <div>
      <ul className={css.optionsList}>
        <li className={css.optionsItem}>
          <button type="button" onClick={() => onAddFeedback("good")}>
            Good
          </button>
        </li>
        <li className={css.optionsItem}>
          <button type="button" onClick={() => onAddFeedback("neutral")}>
            Neutral
          </button>
        </li>
        <li className={css.optionsItem}>
          <button type="button" onClick={() => onAddFeedback("bad")}>
            Bad
          </button>
        </li>
        <li className={css.optionsItem}>
          <button type="button" onClick={() => onAddFeedback("reset")}>
            Reset
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Options;
