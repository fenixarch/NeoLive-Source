"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

/**
 * Input component for form fields with label and error handling
 * @param {Object} props - The properties that define the Input component
 * @param {string} props.label - The label text for the input field
 * @param {string} props.id - The unique identifier for the input field
 * @param {Function} props.register - The register function from react-hook-form
 * @param {boolean} props.required - Indicates if the field is required
 * @param {Object} props.errors - The errors object from react-hook-form
 * @param {string} [props.type="text"] - The type of the input field (default: "text")
 * @param {boolean} [props.disabled] - Indicates if the input field is disabled
 * @returns {JSX.Element} A React component representing a form input field with label
 */
const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  errors,
  type = "text",
  disabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6
            dark:bg-lightgray
            dark:ring-gray-500
            dark:text-white`,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
