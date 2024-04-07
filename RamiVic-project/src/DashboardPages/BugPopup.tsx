interface Props {
  setPage: (page: string) => void;
}

function BugPopup(props: Props) {
  return (
    <div>
      <h1>What isn't working?</h1>
      <form>
        <input type="text" placeholder="Bug Description" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => props.setPage("VeziEndpoints")}>X</button>
    </div>
  );
}

export default BugPopup;
