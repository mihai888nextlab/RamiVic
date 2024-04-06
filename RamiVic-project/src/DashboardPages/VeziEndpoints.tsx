import { Link } from "react-router-dom";
import AppInstance from "../Types/AppInstance";

interface CodesInterface {
  endpoint: string;
  time: string;
  code: number;
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
      {/* {props.appDetails?.endpoint.map((endpoint) => (
        <>
          <p key={endpoint}>{endpoint}</p>
          {props.codes.map((code) => (
            <>
              {code.endpoint == endpoint && (
                <p key={code.endpoint + code.time}>
                  {code.code} -{" "}
                  {new Date(parseInt(code.time) * 1000).getHours()} :{" "}
                  {new Date(parseInt(code.time) * 1000).getMinutes()} :{" "}
                  {new Date(parseInt(code.time) * 1000).getSeconds()}
                </p>
              )}
              <br />
            </>
          ))}
        </>
      ))} */}

      {props.appDetails?.endpoint.map((endpoint) => {
        let toShow: CodesInterface[] = [];
        return <p>{endpoint}</p>;
      })}
      <Link to="/dashboard">Back</Link>
    </div>
  );
}

export default VeziEndpoints;
