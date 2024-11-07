import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

/**
 * Renders the layout for conversations, including a sidebar with a conversation list and child components.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {Promise<JSX.Element>} A Promise that resolves to the rendered layout component.
 */
export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
    <div className="h-full">
    <ConversationList initialItems={conversations} users={users} />
    {children}
    </div>
    </Sidebar>
  );
}
