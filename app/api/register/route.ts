// app/api/register/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, role } = body

    console.log('Received registration request:', { name, email, role })

    // Input validation
    if (!name || !email || !password || role !== 'staff') {
      return NextResponse.json({ message: 'Invalid input. Please provide all required fields and ensure the role is staff.' }, { status: 400 })
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ message: 'An account with this email already exists. Please use a different email.' }, { status: 409 })
    }

    // Password strength validation
    if (password.length < 8) {
      return NextResponse.json({ message: 'Password must be at least 8 characters long.' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    console.log('User created successfully:', user.id)

    return NextResponse.json({ message: 'User created successfully', userId: user.id }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ message: 'Internal server error. Please try again later.' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}