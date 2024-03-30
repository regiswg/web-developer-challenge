import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  await prisma.$connect();

  const posts = await prisma.post.findMany({});

  await prisma.$disconnect();

  return Response.json(posts);
}
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  await prisma.$connect();

  const post = await prisma.post.delete({
    where: {
      id: Number.parseInt(postId!),
    },
  });

  await prisma.$disconnect();

  return Response.json(post);
}
export async function POST(req: Request) {
  const { postData } = await req.json();

  await prisma.$connect();

  const post = await prisma.post.create({
    data: {
      mensagem: postData.mensagem,
      nomeCompleto: postData.nomeCompleto,
    },
  });

  await prisma.$disconnect();

  return Response.json(post);
}
