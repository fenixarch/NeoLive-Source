import getConversationById from "../../actions/getConversationById";
import getMessages from "../../actions/getMessages";
import EmptyState from "../../components/EmptyState";
import Body from "./components/Body";
import Form from "./components/Form";
import Header from "./components/Header";

interface IParams {
  conversationId: string;
}

/**
 * Renders a conversation page based on the provided conversation ID
 * @param {Object} params - The parameters object
 * @param {string} params.conversationId - The ID of the conversation to render
 * @returns {JSX.Element} The rendered conversation page component
 */
const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
