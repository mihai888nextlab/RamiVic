import { FormEvent } from "react";
import { Link } from "react-router-dom";

interface Props {
  addEndpoint: (e: FormEvent<HTMLFormElement>) => void;
  newEndpoint: React.RefObject<HTMLInputElement>;
}

function AdaugaEndpoint(props: Props) {
  return (
    <div className="adaugaForm">
      <form onSubmit={(e) => props.addEndpoint(e)}>
        <input type="text" placeholder="New Endpoint" ref={props.newEndpoint} />
        <br />
        <button type="submit">Add Endpoint</button>
      </form>
      <Link to="/dashboard" className="back">
        Back
      </Link>
    </div>
  );
}

export default AdaugaEndpoint;
