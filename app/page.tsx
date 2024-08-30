// app/page.tsx

"use client";

import LoginForm from './components/LoginForm'

import { useState } from 'react'

export default function Home() {
  const [userType, setUserType] = useState<'student' | 'staff' | null>(null)

  return (
    <div className="">
        <LoginForm onUserTypeChange={setUserType} />
    </div>
  )
}