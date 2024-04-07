import { FormEvent, useRef } from "react";

interface Props {
  setPage: (page: string) => void;
  addBug: (e: FormEvent<HTMLFormElement>, desc: string | undefined) => void;
  success: boolean;
}

function BugPopup(props: Props) {
  let input = useRef<HTMLInputElement>(null);

  return (
    <div className="bugForm">
      <button onClick={() => props.setPage("VeziEndpoints")} className="X">
        X
      </button>
      <h1>What isn't working?</h1>
      <form onSubmit={(e) => props.addBug(e, input.current?.value)}>
        <input type="text" placeholder="Bug Description" ref={input} />
        <br />
        <button type="submit" className="sub">
          Submit
        </button>
      </form>

      {props.success ? <h2>Success!</h2> : null}
    </div>
  );
}

export default BugPopup;
