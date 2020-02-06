import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogLanding from "../components/blog";

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogLanding />
    </Layout>
  )
}

export default Blog;