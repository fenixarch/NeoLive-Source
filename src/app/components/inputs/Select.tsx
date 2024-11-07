"use client";

import clsx from "clsx";
import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

/**
 * A React functional component for rendering a customized select input.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The label text for the select input.
 * @param {any} props.value - The current value of the select input.
 * @param {Function} props.onChange - Callback function triggered when the selection changes.
 * @param {Array} props.options - An array of options for the select input.
 * @param {boolean} [props.disabled] - Optional. If true, the select input is disabled.
 * @returns {JSX.Element} A div containing a label and a ReactSelect component.
 */
const Select: React.FC<SelectProps> = ({ label, value, onChange, options, disabled }) => {
  return (
    <div className="z-[100]">
      <label
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
          dark:text-gray-200
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isFocused
                ? "rgb(107 114 128)"
                : isSelected
                ? "rgb(156 163 175)"
                : "#3a3b3c",
            }),
          }}
          classNames={{
            control: (state) =>
              clsx(
                `
                text-sm 
                dark:bg-lightgray 
                dark:border-gray-500`,
                state.isFocused && "border-gray-400"
              ),
            menu: () => "dark:bg-lightgray",
          }}
        />
      </div>
    </div>
  );
};

export default Select;
