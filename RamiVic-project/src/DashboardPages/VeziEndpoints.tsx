import { Link } from "react-router-dom";
import AppInstance from "../Types/AppInstance";
import reload from "../assets/reload.png";

interface CodesInterface {
  endpoint: string;
  requests: { code: number; time: number }[];
}

interface Bug {
  id: string;
  desc: string;
  appId: string;
  fixed: boolean;
}

interface Props {
  reload: () => void;
  appDetails: AppInstance | undefined;
  codes: CodesInterface[];
  bugs: Bug[];
}

function VeziEndpoints(props: Props) {
  let ma = 0;
  let index2 = 0;
  let dif = 0;

  return (
    <div className="endpoints">
      <h3>
        Endpoints:{" "}
        <span onClick={() => props.reload()}>
          <img src={reload} />
        </span>
      </h3>
      {/* {props.codes.map((code) => {
        let toShowTime = code.requests.sort((a, b) => {
          return b.time - a.time;
        });

        let stable = 0;
        let index = 0;
        toShowTime.forEach((r) => {
          if (index < 10) {
            if (r.code === 200 || r.code === 302) {
              stable++;
            }
          }
          index++;
        });

        console.log(code.endpoint, stable);
        return (
          <div key={code.endpoint}>
            <h4>
              {code.endpoint} -{" "}
              {stable == 0 ? "Down" : stable == 10 ? "Stable" : "Unstable"}
            </h4>
          </div>
        );
      })} */}

      <table>
        <thead>
          <tr>
            <td>Endpoint</td>
            <td>Stare</td>
            <td>Ultimul Status</td>
          </tr>
        </thead>

        <tbody>
          {props.codes?.map((code) => {
            let toShowTime = code.requests.sort((a, b) => {
              return b.time - a.time;
            });

            let stable = 0;
            let index = 0;
            toShowTime.forEach((r) => {
              if (index < 10) {
                if (r.code === 200 || r.code === 302) {
                  stable++;
                }
              }
              index++;
            });

            if (stable == 10) ma++;
            index2++;

            return (
              <tr key={code.endpoint}>
                <td>{code.endpoint}</td>
                <td>
                  <div className="together">
                    {stable == 0 ? (
                      <div className="red"></div>
                    ) : stable == 10 ? (
                      <div className="green"></div>
                    ) : (
                      <div className="yellow"></div>
                    )}
                    {stable == 0
                      ? "Down"
                      : stable == 10
                      ? "Stable"
                      : "Unstable"}
                  </div>
                </td>
                <td>{toShowTime[0].code}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {props.bugs.length > 0 && (
        <>
          {props.bugs.map((bug) => {
            if (bug.fixed == true) return null;
            dif--;
          })}
        </>
      )}

      {index2 != 0 && dif == 0 && (
        <h1 className="over">
          The overall app is:
          <span className="together">
            {index2 == ma ? (
              <>
                <div className="green"></div> Stable
              </>
            ) : ma == 0 ? (
              <>
                <div className="Red"></div> Down
              </>
            ) : (
              <>
                <div className="yellow"></div> Unstable
              </>
            )}
          </span>
        </h1>
      )}

      {dif != 0 && (
        <h1 className="over">
          The overall app is:
          <span className="together">
            <>
              <div className="yellow"></div> Unstable
            </>
          </span>
        </h1>
      )}

      <Link to="/dashboard" className="back">
        Back
      </Link>
    </div>
  );
}

export default VeziEndpoints;
