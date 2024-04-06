import { Link } from "react-router-dom";
import AppInstance from "../Types/AppInstance";

interface CodesInterface {
  endpoint: string;
  requests: { code: number; time: string }[];
}

interface Props {
  reload: () => void;
  appDetails: AppInstance | undefined;
  codes: CodesInterface[];
}

function VeziEndpoints(props: Props) {
  return (
    <div>
      <h3>
        Endpoints: <span onClick={() => props.reload()}>RELOAD</span>
      </h3>

      {props.codes.map((code) => (
        <div>
          <h4>{code.endpoint}</h4>
          <ul>
            {code.requests.map((req) => (
              <li>
                {req.code} - {req.time}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Link to="/dashboard">Back</Link>
    </div>
  );
}

export default VeziEndpoints;
