// app/api/users/bulk/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { users } = body;

        if (!Array.isArray(users) || users.length === 0) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        const createdUsers = await Promise.all(users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password || 'defaultPassword', 10);
            return prisma.user.create({
                data: {
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    password: hashedPassword,
                    role: 'student',
                },
            });
        }));

        return NextResponse.json({ message: 'Users created successfully', count: createdUsers.length }, { status: 201 });
    } catch (error) {
        console.error('Error bulk creating users:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}