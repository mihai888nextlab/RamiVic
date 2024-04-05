import { useEffect, useState } from "react";
import { auth } from "../Scripts/FirebaseConfig";

function DashMenu() {
  const [user, setUser] = useState<string | null>();

  useEffect(() => {});
  return (
    <div className="dashMenu">
      <h1>Menu</h1>
      <div className="details">
        <br />
        <h2>{auth.currentUser?.displayName}</h2>
      </div>
    </div>
  );
}

export default DashMenu;
