import './ResetButton.css';

export default function ResetButton(props) {
  return (
    <div className="reset-button">
      <button className="btn-reset" id="reset" onClick={props.onClickReset}>RESET</button>
    </div>
  );
}