import React from "react";

const Input = ({ name, label, onChange, value, autoFocus, type, error, min, max }) => {
  return (
    <div className="mb-3">
        <label className="form-label" htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          autoFocus={autoFocus}
          className="form-control"
          min={min}
          max={max}
          />
        {error && <div className="alert alert-danger" style={{width: "fit-content"}}>{error}</div>}
    </div>
  );
};

export default Input;
