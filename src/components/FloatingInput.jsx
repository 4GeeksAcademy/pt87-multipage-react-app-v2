const FloatingInput = ({
  value,
  label = "PLACEHOLDER",
  inputType = "text",
  onChange = () => null,
}) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={inputType}
        className="form-control"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default FloatingInput;
