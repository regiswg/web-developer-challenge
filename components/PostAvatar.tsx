"use client";

import { Image as Icon, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import images from "@/utils/PostImages";

type Props = {
  auto: boolean;
};

const PostAvatar = ({ auto }: Props) => {
  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (auto === true) handleSetEndpoint();
  }, [auto]);

  const handleSetEndpoint = () => {
    setEndpoint(images[Math.floor(Math.random() * (50 - 1 + 1) + 1)]);
  };

  const resetEndpoint = () => {
    setEndpoint(null);
  };

  return (
    <div className="relative">
      <div
        className="w-[88px] rounded-[36px] border border-gray-300 border:opacity-20 h-[88px] flex items-center justify-center relative overflow-hidden"
        onClick={handleSetEndpoint}
      >
        {endpoint === null && (
          <div>
            <Icon />
          </div>
        )}
        {endpoint !== null && (
          <div>
            <Image
              src={endpoint!}
              width={95}
              height={95}
              alt="Avatar do usuario"
            />
          </div>
        )}
      </div>
      {endpoint !== null && auto === false && (
        <button
          className="absolute top-[75%] left-[75%] p-2 rounded-full bg-red-500 shadow-lg"
          onClick={resetEndpoint}
        >
          {" "}
          <Trash className="text-white" size={15} />
        </button>
      )}
    </div>
  );
};

export default PostAvatar;
