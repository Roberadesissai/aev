// app/login/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <LoginForm />
    </div>
  );
}