import Image from "next/image"

export default function Page() {
    return (
            <div className="flex flex-col justify-between h-svh bg-gray-100 items-center">
                <div className="pt-25 px-5 md:p-25">
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="Tailwind CSS chat bubble component"
                                    src="/ikon.webp"
                                    width={15}
                                    height={15} />
                            </div>
                        </div>
                        <div className="chat-header">
                            MeowMed
                        </div>
                        <div className="chat-bubble ">Hai, Saya adalah asistenmu untuk membantu mendiagnosis penyakit pada kucing!</div>
                    </div>
                    <div className="chat chat-end pt-5">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    width={10}
                                    height={10} />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">Seen at 12:46</div>
                    </div>
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
}