import { useNavigate } from 'react-router-dom';
// material
import { List, ListProps } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { Conversation } from '../../../@types/chat';
//
import ChatConversationItem from './ChatConversationItem';

// ----------------------------------------------------------------------

interface ChatConversationListProps extends ListProps {
  conversations: { byId: Record<string, Conversation>; allIds: string[] };
  isOpenSidebar: boolean;
  activeConversationId: string | null;
}

export default function ChatConversationList({
  conversations,
  isOpenSidebar,
  activeConversationId,
  ...other
}: ChatConversationListProps) {
  const navigate = useNavigate();

  const handleSelectConversation = (conversationId: string) => {
    let conversationKey = '';
    const conversation = conversations.byId[conversationId];
    if (conversation.type === 'GROUP') {
      conversationKey = conversation.id;
    } else {
      const otherParticipant = conversation.participants.find(
        (participant) => participant.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
      );
      if (otherParticipant?.username) {
        conversationKey = otherParticipant?.username;
      }
    }
    navigate(`${PATH_DASHBOARD.chat.root}/${conversationKey}`);
  };

  return (
    <List disablePadding {...other}>
      {conversations.allIds.map((conversationId) => (
        <ChatConversationItem
          key={conversationId}
          isOpenSidebar={isOpenSidebar}
          conversation={conversations.byId[conversationId]}
          isSelected={activeConversationId === conversationId}
          onSelectConversation={() => handleSelectConversation(conversationId)}
        />
      ))}
    </List>
  );
}
