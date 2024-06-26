import signOut from "../Scripts/SignOut";
import add from "../assets/add.png";
import view from "../assets/eye.png";
import logout from "../assets/logout.png";

interface Props {
  username: string | null | undefined;
  setPage: (page: string) => void;
}

function DashMenu(props: Props) {
  return (
    <div className="dashMenu">
      <div className="details">
        <h2>
          <img src={logout} onClick={() => signOut()} /> {props.username}
        </h2>
      </div>
      <ul>
        <h3>Actiuni</h3>
        <li onClick={() => props.setPage("AdaugaApp")}>
          <img src={add} /> Adauga Aplicatie
        </li>
        <li onClick={() => props.setPage("VeziAplicatii")}>
          <img src={view} /> Vezi Aplicatiile
        </li>
      </ul>
    </div>
  );
}

export default DashMenu;
