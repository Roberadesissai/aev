// app/components/StaffLayout.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sidemenu } from "./Sidemenu";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex h-screen">
      <Sidemenu />
      <main className="flex-1 overflow-y-auto p-8 bg-gray-100 dark:bg-gray-800">
        {children}
      </main>
    </div>
  );
}