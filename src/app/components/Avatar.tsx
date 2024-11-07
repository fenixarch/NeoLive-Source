"use client";

import { User } from "@prisma/client";
import Image from "next/image";

import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: User;
}

/**
 * Renders an Avatar component for a user with an active status indicator.
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object containing email and image properties.
 * @returns {JSX.Element} A div containing the user's avatar image and an active status indicator if the user is active.
 */
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative h-9 md:h-11">
      <div
        className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
      "
      >
        <Image
          className="object-cover"
          fill
          src={user?.image || "/images/avatar-placeholder.png"}
          alt="Avatar"
        />
      </div>
      {isActive && (
        <span
          className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
            dark:ring-lightgray
          "
        />
      )}
    </div>
  );
};

export default Avatar;
