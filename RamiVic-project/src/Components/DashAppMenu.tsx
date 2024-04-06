import signOut from "../Scripts/SignOut";
import add from "../assets/add.png";
import view from "../assets/eye.png";
import logout from "../assets/logout.png";

interface Props {
  username: string | null | undefined;
  setPage: (page: string) => void;
}

function DashAppMenu(props: Props) {
  return (
    <div className="dashMenu">
      <div className="details">
        <h2>
          <img src={logout} onClick={() => signOut()} /> {props.username}
        </h2>
      </div>
      <ul>
        <h3>Actiuni</h3>
        <li onClick={() => props.setPage("AdaugaEndpoint")}>
          <img src={add} /> Adauga Endpoint
        </li>
        <li onClick={() => props.setPage("VeziEndpoint")}>
          <img src={view} /> Vezi Endpointuri (+ status)
        </li>
      </ul>
    </div>
  );
}

export default DashAppMenu;
