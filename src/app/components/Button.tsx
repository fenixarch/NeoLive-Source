import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

/**
 * A customizable button component for React applications.
 * @param {Object} props - The properties that define the button's behavior and appearance.
 * @param {"button" | "submit" | "reset"} [props.type="button"] - The type of the button.
 * @param {boolean} [props.fullWidth] - Whether the button should take up the full width of its container.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {() => void} [props.onClick] - The function to be called when the button is clicked.
 * @param {boolean} [props.secondary] - Whether to apply secondary styling to the button.
 * @param {boolean} [props.danger] - Whether to apply danger styling to the button.
 * @param {boolean} [props.disabled] - Whether the button should be disabled.
 * @returns {JSX.Element} A styled button component.
 */
const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900 dark:text-white" : "text-white",
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
