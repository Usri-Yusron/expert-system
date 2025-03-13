import { NextResponse } from 'next/server';
import { getChats } from '@/controllers/chatController';

export async function GET() {
  try {
    const chats = await getChats();
    return NextResponse.json(chats);
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}
