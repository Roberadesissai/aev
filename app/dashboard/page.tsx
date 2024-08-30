// app/components/DashboardLayout.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sidemenu } from "../components/Sidemenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
    <div className="flex">
      <Sidemenu />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}