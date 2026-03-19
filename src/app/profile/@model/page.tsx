"use client";
import { motion } from "framer-motion";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";



export default function ProfileModal() {
    const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const closeModal = () => {
    const params = new URLSearchParams(Array.from(searchParams?.entries() || []));
    params.delete("modal");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-cyan-400 z-50"
        >
          ×
        </button>

        {/* Large Circular Profile Image */}
        <div className="w-96 h-96 rounded-full border-4 border-cyan-400 overflow-hidden shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="Profile Large"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
