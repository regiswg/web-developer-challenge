"use client";

import PostService from "@/Services/PostService";
import Post from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import PostItem from "./PostItem";

const Feed = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: PostService.gelAll,
  });

  return (
    <div className="w-full xs:mx-6 lg:max-w-xl">
      {posts?.map((post: Post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
