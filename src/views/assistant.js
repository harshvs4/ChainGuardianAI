import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import './assistant.css';

const SmartAssistant = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: 'How can I assist you today?' },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const chatContainerRef = useRef(null);

  const prefilledCommands = [
    'What are blockchain regulations?',
    'Show me my recent transactions.',
    'How do I verify AML compliance?',
    'Explain cryptocurrency risk analysis.',
  ];

  const handleCommandClick = async (command) => {
    await handleSendMessage(command);
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setUserInput('');
    setMessages((prev) => [...prev, { sender: 'assistant', text: '' }]);

    await callAPI(text);
  };

  const callAPI = async (message) => {
    setIsStreaming(true);

    try {
        const payload = {
            session_id: Date.now().toString(),
            message,
        };

        const response = await fetch('http://127.0.0.1:5000/agent_chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let fullMessage = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            fullMessage += chunk;

            // Update assistant message dynamically
            setMessages((prev) => {
                const updatedMessages = [...prev];
                const lastMessageIndex = updatedMessages.length - 1;

                if (updatedMessages[lastMessageIndex]?.sender === 'assistant') {
                    updatedMessages[lastMessageIndex] = {
                        ...updatedMessages[lastMessageIndex],
                        text: parseResponse(fullMessage),
                    };
                } else {
                    updatedMessages.push({
                        sender: 'assistant',
                        text: parseResponse(chunk),
                    });
                }

                return updatedMessages;
            });

            scrollToBottom();
        }
    } catch (error) {
        console.error('Error while fetching the streamed response:', error);
        setMessages((prev) => [
            ...prev,
            { sender: 'assistant', text: 'Something went wrong. Please try again.' },
        ]);
    } finally {
        setIsStreaming(false);
    }
};

  const stripHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const parseResponse = (rawResponse) => {
    try {
      const data = JSON.parse(rawResponse);

      if (data.response) {
          // Strip HTML tags using the custom function
          const strippedResponse = stripHTML(data.response);
          return strippedResponse;
      }
        return 'No response data found.';
    } catch (error) {
        console.error('Error parsing response:', error);
        return rawResponse; // Fallback to raw response if parsing fails
    }
};

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="smart-assistant-container">
      <Helmet>
        <title>ChainGuardian AI - Smart Assistant</title>
        <meta property="og:title" content="Smart Assistant - ChainGuardian AI" />
      </Helmet>

      <Navbar8
        link1={<Fragment><span>Home</span></Fragment>}
        link2={<Fragment><span>Dashboard</span></Fragment>}
        link3={<Fragment><span>Regulatory Library</span></Fragment>}
        link4={<Fragment><span>AI Assistant</span></Fragment>}
        action1={<Fragment><span>Sign In</span></Fragment>}
        action2={<Fragment><span>Get Started</span></Fragment>}
      />

      <div className="assistant-header">
        <h1 className="assistant-heading">Smart Assistant</h1>
        <p className="assistant-subheading">
          Engage with ChainGuardian AI for real-time insights and assistance.
        </p>
      </div>

      <div className="assistant-chat-container">
        <div className="prefilled-commands">
          {prefilledCommands.map((command, index) => (
            <button
              key={index}
              className="command-button"
              onClick={() => handleCommandClick(command)}
            >
              {command}
            </button>
          ))}
        </div>

        <div className="chat-box" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.sender === 'user' ? 'user-message' : 'assistant-message'
              }`}
            >
              {message.text || (message.sender === 'assistant' && isStreaming ? 'Generating response...' : '')}
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(userInput)}
          />
          <button className="send-button" onClick={() => handleSendMessage(userInput)}>
            Send
          </button>
        </div>
      </div>

      <Footer4
        link1={<Fragment><span>Dashboard</span></Fragment>}
        link2={<Fragment><span>Regulatory Library</span></Fragment>}
        link3={<Fragment><span>AI Assistant</span></Fragment>}
        link4={<Fragment><span>Help/FAQ</span></Fragment>}
        link5={<Fragment><span>Settings</span></Fragment>}
        termsLink={<Fragment><span>Terms of Use</span></Fragment>}
        cookiesLink={<Fragment><span>Cookies Policy</span></Fragment>}
        privacyLink={<Fragment><span>Privacy Policy</span></Fragment>}
      />
    </div>
  );
};

export default SmartAssistant;