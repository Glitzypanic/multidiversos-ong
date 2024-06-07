import CheckIcon from "./svg/Check";
import "../styles/components_style/Alert.css";

function Alert({ message }) {
  return (
    <div className="alert">
      <CheckIcon stroke="var(--at-good-dark)" />
      <p className="alert-info">{message}</p>
    </div>
  );
}

export default Alert;
