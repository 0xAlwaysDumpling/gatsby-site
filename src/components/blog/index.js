import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import useBlog from "../../hooks/use-blog";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BlogPostRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 275px;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const BlogPostTitle = styled(Link)`
  color: ${ props => props.fontColor || 'black'};
  font-weight: 200px;
  margin: 0;
  text-decoration: none;
  &:hover {
   color: ${ props => props.hoverFontColor || 'blue'};
  } 
`;

const BlogPostDate = styled.div`
  margin: 0;
  color: grey;
`;

const formatDate = (date) => {
  return new Date(date).toDateString();
}

const BlogPost = ({ post }) => {
  return (
    <BlogPostRow>
      <BlogPostDate>{formatDate(post.date)}</BlogPostDate>
      <BlogPostTitle to={post.slug}>
        <strong>{post.title}</strong>
      </BlogPostTitle>
    </BlogPostRow>
  )
}

function Blog() {
  const blogPosts = useBlog();
  return (
    <Section>
      <BlogContainer>
        {
          blogPosts.map((blogPost, i) => <BlogPost post={blogPost} key={i} />)
        }
      </BlogContainer>
    </Section>
  )
}

export default Blog;