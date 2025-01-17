import clsx from "clsx";

export const Button = ({
  className,
  icon,
  label,
  type,
  onClick = () => {},
}) => {
  return (
    <div>
      <button
        type={type || "button"}
        className={clsx("px-3 py-2 outline-none", className)}>
        <span>{label}</span>
      </button>
    </div>
  );
};
