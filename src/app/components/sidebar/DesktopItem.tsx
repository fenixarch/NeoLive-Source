import clsx from "clsx";

import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

/**
 * Renders a desktop item as a list item with a link and an icon.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the desktop item (used for accessibility).
 * @param {string} props.href - The URL for the link.
 * @param {React.ComponentType} props.icon - The icon component to be rendered.
 * @param {boolean} [props.active] - Whether the item is currently active.
 * @param {Function} [props.onClick] - Optional click handler for the item.
 * @returns {React.ReactElement} A list item containing a styled link with an icon.
 */
const DesktopItem: React.FC<DesktopItemProps> = ({ label, href, icon: Icon, active, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          `
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
            dark:hover:bg-lightgray
            dark:hover:text-gray-100
          `,
          active && "bg-gray-100 text-black dark:bg-lightgray dark:text-gray-200"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
