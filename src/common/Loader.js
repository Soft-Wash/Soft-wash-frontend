import { Spinner } from "react-bootstrap";

export function Loader({ color = "primary", size = "md" }) {
    return <Spinner variant={color} size={size} />;
  }