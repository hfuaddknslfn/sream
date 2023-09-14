import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = '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';
const systemMessage = {
  role: 'system',
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async message => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map(messageObject => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiRequestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      if (data.choices && data.choices.length > 0) {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
          },
        ]);
      } else {
        // Handle the case when data.choices is empty or undefined
        console.error("No choices available in the response");
      }

      setIsTyping(false);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error according to your application's logic
    }
  }

  return (
    <div>
      <div>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
      <div></div>
    </div>
  );
};
