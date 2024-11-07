import { useMemo } from "react";

import { useParams } from "next/navigation";

/**
 * Custom hook to manage conversation state in the application.
 * @returns {Object} An object containing conversation state
 *   @property {boolean} isOpen - Indicates whether a conversation is currently open
 *   @property {string} conversationId - The ID of the current conversation, or an empty string if no conversation is open
 */
const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return "";
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
};

export default useConversation;
