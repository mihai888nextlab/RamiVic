import updateBug from "../Scripts/UpdateBug";
import reload from "../assets/reload.png";

interface Bug {
  id: string;
  desc: string;
  appId: string;
  fixed: boolean;
}

interface Props {
  reload: () => void;
  bugs: Bug[];
}

function SeeBugs(props: Props) {
  const updBug = (id: string) => {
    updateBug(id);
  };

  return (
    <div className="endpoints">
      <h3>
        Vezi bugurile{" "}
        <span onClick={() => props.reload()}>
          <img src={reload} />
        </span>
      </h3>

      <table>
        <thead>
          <tr>
            <td>Descriere Bug</td>
            <td>Stare</td>
            <td>Actiuni</td>
          </tr>
        </thead>

        <tbody>
          {props.bugs?.map((bug) => {
            return (
              <>
                <tr key={bug.appId + bug.desc}>
                  <td>{bug.desc}</td>
                  <td>{bug.fixed ? "Rezolvat" : "Nerezolvat"}</td>
                  <td>
                    <button onClick={() => updBug(bug.id)}>Fixeaza</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SeeBugs;
