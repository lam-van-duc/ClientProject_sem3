import propTypes from "prop-types";
const ErrorText = ({ text }) => {
  return <div className="text-red-600">{text}</div>;
};

ErrorText.propTypes = {
  text: propTypes.string,
};
export default ErrorText;
