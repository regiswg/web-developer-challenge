import Feed from "@/components/Feed";
import PostForm from "@/components/PostForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#343434]">
      <header className="w-full bg-[#2b2b2b] border-b border-[#232323] flex items-center justify-center py-[24px]">
        <Image
          src={"/logo/bx-logo.png"}
          width={103}
          height={45}
          alt="logo da empresa"
        />
      </header>
      <PostForm />
      <div className="mt-14 w-full xs:mx-6 lg:max-w-xl">
        <h2 className="font-semibold text-[#797979] mr-auto">Feed</h2>
        <Feed />
      </div>
    </main>
  );
}
