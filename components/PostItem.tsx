"use client";

import Post from "@/types/Post";
import PostAvatar from "./PostAvatar";
import { XCircleIcon } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import PostService from "@/Services/PostService";
import { toast } from "react-toastify";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  const client = useQueryClient();

  const removePost = async () => {
    await PostService.deleteOne(post.id!)
      .then((res) => {
        toast.success("Post removido com sucesso");
        client.invalidateQueries({
          queryKey: ["posts"],
        });
      })
      .catch((err) => {
        toast.success("Não foi possível remover o post");
      });
  };

  return (
    <div className="bg-[#313131] rounded-[3px] border-[1px] border-[#3b3b3b] mt-4 w-full xs:mx-6 lg:max-w-xl">
      <div
        className="flex items-center justify-end p-2.5 cursor-pointer"
        onClick={removePost}
      >
        <XCircleIcon
          size={20}
          className="stroke-1 text-orange-600 hover:scale-125 transition"
        />
      </div>
      <div className="flex p-6 space-x-6">
        <div className="relative">
          <PostAvatar auto={true} />
        </div>
        <div>
          <p className="text-[#9f9f9f] line-clamp-3">{post.mensagem}</p>
          <div className="mt-6">
            <small className="text-[#5f5f5f] font-semibold tracking-wide">
              Enviado por
            </small>
            <p className="text-sm text-[#7a7a7a] font-semibold">
              {post.nomeCompleto}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
