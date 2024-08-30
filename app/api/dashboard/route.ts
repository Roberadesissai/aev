// app/api/dashboard/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const stats = await prisma.$transaction([
      prisma.project.count({ where: { users: { some: { id: user.id } } } }),
      prisma.task.count({ where: { userId: user.id, status: 'IN_PROGRESS' } }),
      prisma.task.count({ where: { userId: user.id, status: 'COMPLETED' } }),
      prisma.user.count({ where: { projects: { some: { users: { some: { id: user.id } } } } } }),
    ]);

    const recentActivities = await prisma.activity.findMany({
      where: { OR: [{ userId: user.id }, { project: { users: { some: { id: user.id } } } }] },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: { user: true, project: true, task: true },
    });

    const tasks = await prisma.task.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    const projects = await prisma.project.findMany({
      where: { users: { some: { id: user.id } } },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return NextResponse.json({
      user,
      stats: {
        totalProjects: stats[0],
        tasksInProgress: stats[1],
        completedTasks: stats[2],
        teamMembers: stats[3],
      },
      recentActivities,
      tasks,
      projects,
    });

  } catch (error) {
    console.error("Error in dashboard API:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}