function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div classNmae="options">
      {question.option.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
        >
          {option} onClick=
          {() => dispatch({ type: "newAnswer", payload: index })}
        </button>
      ))}
    </div>
  );
}

export default Options;
