import "./Select.css";

// eslint-disable-next-line react/prop-types
const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className="form-controller">
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
