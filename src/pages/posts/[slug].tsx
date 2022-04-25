import { GetStaticPaths, GetStaticProps } from "next";

import React, { ReactNode } from "react";
import { getAndSerializePost, getPosts, PostData } from "@/lib/get-posts";
import Tag from "@/components/Tag";
import Layout from "@/components/layouts";
import Link from "next/link";
import Footer from "@/components/Footer";

const ArticlePage = ({  frontMatter }: PostData): ReactNode => {
  return (
    <Layout title={frontMatter.title} description={frontMatter.description}>
      <h1>{frontMatter.title}</h1>
      <div className="meta-line">
        <div className="meta">
          <time>{new Date(frontMatter.date).toDateString()} • </time>
          {frontMatter.tags.map((t) => (
            <Tag key={t} tag={t} />
          ))}
        </div>
        <Link href="/">
          <a className="meta-back">Back</a>
        </Link>
      </div>
      <Footer />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {  frontMatter } = await getAndSerializePost(
    params.slug as string
  );
  return {
    props: {
     
      frontMatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  };
};

export default ArticlePage;
