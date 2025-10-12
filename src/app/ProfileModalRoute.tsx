"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProfileModal from "./components/ProfileModal";

export default function ProfileModalRoute() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams?.get("modal") === "profile";

  const close = () => {
    const params = new URLSearchParams(Array.from(searchParams?.entries() || []));
    params.delete("modal");
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  if (!isOpen) return null;

  return <ProfileModal onClose={close} />;
}
