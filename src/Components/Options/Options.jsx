import css from "./Options.module.css";

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div>
      <ul className={css.optionsList}>
        <li>
          <button type="button" onClick={() => updateFeedback("good")}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => updateFeedback("neutral")}>
            Neutral
          </button>
        </li>
        <li className={css.optionsItem}>
          <button type="button" onClick={() => updateFeedback("bad")}>
            Bad
          </button>
        </li>

        {totalFeedback > 0 ? (
          <li>
            <button
              className={css.optionsItem}
              type="button"
              onClick={() => resetFeedback()}
            >
              Reset
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Options;
