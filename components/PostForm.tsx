"use client";
import PostService from "@/Services/PostService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import PostAvatar from "./PostAvatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const PostSschema = z.object({
  nomeCompleto: z.string(),
  mensagem: z.string(),
});

type PostSchemaT = z.infer<typeof PostSschema>;

const PostForm = () => {
  const { register, handleSubmit, reset } = useForm<PostSchemaT>({
    resolver: zodResolver(PostSschema),
  });

  const client = useQueryClient();

  const submitPost = async (data: PostSchemaT) => {
    await PostService.createOne(data)
      .then((res) => {
        toast.success("Post criado com sucesso");
        client.invalidateQueries({
          queryKey: ["posts"],
        });
        reset();
      })
      .catch((err) => {
        toast.error("Não foi possível criar o post");
        console.log(err);
      });
  };

  return (
    <section className="bg-[#313131] p-[24px] rounded-[3px] border-[1px] border-[#3b3b3b] mt-10 w-full xs:mx-6 lg:max-w-xl">
      <form onSubmit={handleSubmit(submitPost)}>
        <div className="flex items-center justify-center p-6 overflow-hidden">
          <PostAvatar auto={false} />
        </div>
        <Input {...register("nomeCompleto")} placeholder="Digite o seu nome" />
        <Textarea
          {...register("mensagem")}
          className="mt-2"
          placeholder="Mensagem"
        />
        <div className="flex items-center justify-end gap-4 mt-8">
          <Button type="reset" variant={"ghost"} className="underline">
            Descartar
          </Button>
          <Button type="submit">Publicar</Button>
        </div>
      </form>
    </section>
  );
};

export default PostForm;
