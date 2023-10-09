import "./Input.css";

// eslint-disable-next-line react/prop-types
const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className="form-controller">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export default Input;
