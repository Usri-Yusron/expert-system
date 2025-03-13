'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ChatBubble = ({ chat, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < chat.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + chat[index]);
                setIndex(index + 1);
            }, 50); // Kecepatan mengetik

            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete(); // Panggil ketika animasi selesai
        }
    }, [index, chat, onComplete]);

    return (
        <>
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
        </>
    );
};

export default ChatBubble;
