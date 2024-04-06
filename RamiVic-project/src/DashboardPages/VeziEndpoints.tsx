import { Link } from "react-router-dom";
import AppInstance from "../Types/AppInstance";
import reload from "../assets/reload.png";

interface CodesInterface {
  endpoint: string;
  requests: { code: number; time: number }[];
}

interface Props {
  reload: () => void;
  appDetails: AppInstance | undefined;
  codes: CodesInterface[];
}

function VeziEndpoints(props: Props) {
  return (
    <div className="endpoints">
      <h3>
        Endpoints:{" "}
        <span onClick={() => props.reload()}>
          <img src={reload} />
        </span>
      </h3>

      {props.codes.map((code) => {
        let toShowTime = code.requests.sort((a, b) => {
          return b.time - a.time;
        });

        return (
          <div>
            <h4>{code.endpoint}</h4>
            <ul>
              {toShowTime.map((req) => (
                <li>
                  {req.code} - {req.time}
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <Link to="/dashboard" className="back">
        Back
      </Link>
    </div>
  );
}

export default VeziEndpoints;
