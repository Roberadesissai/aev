// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient, Project } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const projects = await prisma.project.findMany({
      include: {
        assignedStudents: {
          select: {
            id: true,
            name: true,
            email: true,
            // Add other fields you want to include
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, description, deadline } = await request.json();

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        deadline: new Date(deadline),
        status: 'pending',
        createdBy: { connect: { email: session.user.email } },
      }
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}