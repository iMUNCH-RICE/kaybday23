import './QuoteDisplay.css';
import { BsSoundwave } from 'react-icons/bs';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { RiVideoLine } from 'react-icons/ri';


export default function QuoteDisplay(props) {
  return (
    <div className="quote">
      <h2 className="quote-text">
        {props.quote}
      </h2>
      <div className="icon-container" style={{ display: "flex", gap: "1rem", marginBlock: "1rem" }}>
        <BsSoundwave size="2rem" />
        <HiOutlinePhotograph size="2rem" />
        <RiVideoLine size="2rem" />
      </div>
      <p className="quote-author">
        - {props.author}
      </p>
    </div>
  );
}