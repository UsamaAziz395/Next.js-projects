import blogPosts from "@/data/blog/blogPosts";
import BlogArticle from "@/components/blog/BlogArticle";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}