"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

/**
 * Renders an input field component for messages.
 * @param {Object} props - The component props.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.id - The ID for the input field.
 * @param {string} props.type - The type of the input field.
 * @param {boolean} props.required - Whether the input field is required.
 * @param {Function} props.register - The register function from react-hook-form.
 * @returns {JSX.Element} A div containing an input element with specified properties and styling.
 */
const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100 
          dark:bg-lightgray
          w-full 
          rounded-full
          focus:outline-none
          dark:text-white
        "
      />
    </div>
  );
};

export default MessageInput;
