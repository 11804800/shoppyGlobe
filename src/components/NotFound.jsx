import { Link, useRouteError } from "react-router-dom";

function NotFound() {

  const err = useRouteError();

  return (
    <div className="error-container">
      <div className="sub-container">
        <h1  style={{ color: "rgb(1, 117, 172)" }}>
          OPPS!
        </h1>
      </div>
      <img src="/error.png" alt="error-image" className="error-img" />
      <div className="sub-container">
        <p>{err.data}</p>
        <Link t="/" className="home-link">
          HomePage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
