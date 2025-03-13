'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const TypingAnimation = ({ messages }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [completedMessages, setCompletedMessages] = useState([]);

  useEffect(() => {
    if (messages.length === 0) return;

    const currentMessage = messages[currentMessageIndex].chat;

    if (typingIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentMessage.charAt(typingIndex));
        setTypingIndex(prev => prev + 1);
      }, 50); // Kecepatan mengetik

      return () => clearTimeout(timeout);
    } else {
      if (currentMessageIndex < messages.length - 1) {
        setCompletedMessages(prev => [
          ...prev,
          { ID: messages[currentMessageIndex].ID, chat: displayedText }
        ]);

        const timeout = setTimeout(() => {
          setDisplayedText('');
          setTypingIndex(0);
          setCurrentMessageIndex(prev => prev + 1);
        }, 1000); // Jeda antar pesan

        return () => clearTimeout(timeout);
      } else {
        setCompletedMessages(prev => [
          ...prev,
          { ID: messages[currentMessageIndex].ID, chat: displayedText }
        ]);
      }
    }
  }, [typingIndex, currentMessageIndex, messages, displayedText]);

  return (
    <div>
      {completedMessages.map((message) => (
        <div key={message.ID} className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS chat bubble component"
                src="/ikon.webp"
                width={15}
                height={15}
              />
            </div>
          </div>
          <div className="chat-header">MeowMed</div>
          <div className="chat-bubble">{message.chat}</div>
        </div>
      ))}

      {displayedText && (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS chat bubble component"
                src="/ikon.webp"
                width={15}
                height={15}
              />
            </div>
          </div>
          <div className="chat-header">MeowMed</div>
          <div className="chat-bubble">{displayedText}</div>
        </div>
      )}
    </div>
  );
};

export default TypingAnimation;
