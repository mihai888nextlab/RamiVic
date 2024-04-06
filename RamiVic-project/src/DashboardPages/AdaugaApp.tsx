interface Props {
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  nume: React.MutableRefObject<HTMLInputElement | null>;
  url: React.MutableRefObject<HTMLInputElement | null>;
  success: boolean;
}

function AdaugaApp(props: Props) {
  return (
    <div className="adaugaApp">
      <h2>Adauga Aplicatie</h2>
      <form onSubmit={(e) => props.handleAdd(e)}>
        <input type="text" placeholder="Nume Aplicatie" ref={props.nume} />
        <br />
        <input type="text" placeholder="First Endpoint" ref={props.url} />
        <br />

        <button type="submit">SUBMIT</button>
      </form>

      {props.success ? <p>Aplicatia a fost adaugata cu succes</p> : null}
    </div>
  );
}

export default AdaugaApp;
