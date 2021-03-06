import React, { ReactNode } from "react";
import { GetStaticProps } from "next";
import { getPostsFrontMatter, PartialFrontMatter } from "@/lib/get-posts";
import PostsList from "@/components/PostsList";
import Layout from "@/components/layouts";
import { generateMainFeeds } from "@/lib/feeds";
import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";

type HomeProps = {
  allPosts: PartialFrontMatter[];
};

const Home = ({ allPosts }: HomeProps): ReactNode => (
  <Layout title="Blog Index">
    <Nav>
      <Link href="tags">All Tags</Link>
    </Nav>
    <ul>
      <PostsList posts={allPosts} />
    </ul>
    <Footer />
  </Layout>
);

export const getStaticProps: GetStaticProps = () => {
  generateMainFeeds();
  const allPosts = getPostsFrontMatter();
  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
