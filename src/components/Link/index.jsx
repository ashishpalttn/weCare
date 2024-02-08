import { Link } from "react-router-dom";

export default function NewLink({to,component}) {
  return (
    <div style={{ flex: 1 }}>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={to}
      >
        {component}
      </Link>
    </div>
  );
}
