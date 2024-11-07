import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import useConversation from "./useConversation";

/**
 * Returns an array of route objects for navigation.
 * @returns {Array<Object>} An array of route objects, each containing:
 *   - label: {string} The display text for the route
 *   - href: {string} The URL path for the route
 *   - icon: {Component} The icon component for the route
 *   - active: {boolean} Whether the route is currently active
 *   - onClick: {Function} (Optional) Click handler for the route
 */
const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        onClick: () => signOut(),
        href: "#",
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
