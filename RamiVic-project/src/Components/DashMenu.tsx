interface Props {
  username: string | null | undefined;
}

function DashMenu(props: Props) {
  return (
    <div className="dashMenu">
      <h1>Menu</h1>
      <div className="details">
        <br />
        <h2>{props.username}</h2>
      </div>
    </div>
  );
}

export default DashMenu;
