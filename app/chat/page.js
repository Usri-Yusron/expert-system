'use client';

import { useEffect, useState } from 'react';
import ChatBubble from '../components/ChatBubble';

const Page = () => {
    const [chats, setChats] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const fetchChats = async () => {
            const response = await fetch('/api/chats');
            const data = await response.json();
            setChats(data);
        };

        fetchChats();
    }, []);

    const handleOptionClick = (option) => {
        setShowOptions(false);

        // Tambahkan pilihan user ke dalam chat dengan posisi di sebelah kanan
        setChats(prev => [...prev, { ID: Date.now(), chat: option === 'ya' ? 'Ya' : 'Tidak', type: 'user' }]);

        // Tambahkan respon sistem berdasarkan pilihan user
        if (option === 'ya') {
            setChats(prev => [...prev, { ID: 3, chat: 'Apakah kucing kamu lebih agresif akhir-akhir ini?', type: 'question' }]);
        } else if (option === 'tidak') {
            setChats(prev => [...prev, { ID: 4, chat: 'Yeayy, kucing kamu dalam keadaan sehat!' }]);
        }
    };

    const handleTypingComplete = () => {
        if (currentIndex < chats.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        
        if (chats[currentIndex]?.type === 'question') {
            setTimeout(() => {
                setShowOptions(true);
            }, 10000);
        }
    };

    return (
        <div className="flex flex-col justify-between  items-center">
            <div className='pt-25 px-5 md:p-25'>
                {chats.map((chat, index) => (
                    <div key={chat.ID} className={`chat ${chat.type === 'user' ? 'chat-end' : 'chat-start'}`}>
                        <div className="">
                            {index <= currentIndex && (
                                <ChatBubble chat={chat.chat} onComplete={handleTypingComplete} />
                            )}
                        </div>
                    </div>
                ))}
                {showOptions && (
                    <div className="space-x-4 mt-6 flex items-center justify-center">
                        <button onClick={() => handleOptionClick('ya')} className="btn btn-primary">Ya</button>
                        <button onClick={() => handleOptionClick('tidak')} className="btn btn-secondary">Tidak</button>
                    </div>
                )}
            </div>

            <div className="w-5/6 p-4 flex items-center px-6">
                <textarea
                    className="w-full p-3 border border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="2"
                    placeholder="Ketik pesan..."
                ></textarea>
                <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600">
                    Kirim
                </button>
            </div>
        </div>
    );
};

export default Page;
