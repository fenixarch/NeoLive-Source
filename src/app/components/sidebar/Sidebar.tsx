import getCurrentUser from "../../actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

/**
 * Renders a sidebar component with desktop and mobile versions, and a main content area.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered in the main area.
 * @returns {Promise<JSX.Element>} A Promise that resolves to the rendered sidebar component.
 */
async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter currentUser={currentUser!} />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
