import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const TextBox = React.forwardRef(
  ({ type, placeholder, label, className, register, name, error }) => {
    return (
      <div className="w-full flex flex-col gap-1 py-3">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}
        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-transparent px-3 py-2.5  2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
          {error && <p className="text-red-600 text-lg mt-2">{error}</p>}
        </div>
      </div>
    );
  }
);

// set the display name for debugging
TextBox.displayName = "This is TextBox componets by using forwardRef";

// Define prop types
TextBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  register: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default TextBox;
