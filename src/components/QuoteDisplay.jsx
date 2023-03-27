import './QuoteDisplay.css';


export default function QuoteDisplay(props) {
  return (
    <div className="quote">
      <h2 className="quote-text">
        {props.quote}
      </h2>
      <p className="quote-author">
        {props.author}
      </p>
    </div>
  );
}