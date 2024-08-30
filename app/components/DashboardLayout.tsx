"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sidemenu } from "./Sidemenu";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex">
        <Sidemenu />
        <main className="flex-1 p-4 space-y-4">
          <div className="space-y-2">
            <Skeleton className="w-[200px] h-[30px] rounded" />
            <Skeleton className="w-[300px] h-[20px] rounded" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-full h-[150px] rounded" />
            <Skeleton className="w-[60%] h-[20px] rounded" />
          </div>
        </main>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex">
      <Sidemenu />
      <main className="flex-1">{children}</main>
    </div>
  );
}