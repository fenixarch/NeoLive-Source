import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

/**
 * Renders the layout for the users page, including a sidebar with a user list and child components.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {Promise<JSX.Element>} A Promise that resolves to the rendered layout component.
 */
export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers();

  return (
    <Sidebar>
    <div className="h-full">
    <UserList items={users} />
    {children}
    </div>
    </Sidebar>
  );
}
