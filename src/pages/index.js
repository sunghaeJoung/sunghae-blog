import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Avatar,
  CustomLink,
  HEAD,
  Title,
  Layout,
  PostList,
  // ProjectList
} from '../components';

const info = css`
  margin-bottom: 100px;
`;
const profile = css`
  flex: 1;
`;
const mainTitle = css`
  display: flex;
  align-items: center;
`;
const avatar = css`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 10px;
`;
const linkContainer = css`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`;

export default ({ data }) => {
  const { edges: postEdges } = data.posts;
  // const { edges: projectEdges } = data.projects;
  return (
    <Layout>
      <HEAD />
      <div css={info}>
        <div css={profile}>
          <div css={mainTitle}>
            <Avatar css={avatar} />
            <h1>sunghae's site</h1>
          </div>
          <div>
            <p>
              안녕하세요 정성혜입니다. <br />
            </p>
          </div>
        </div>
      </div>
      <CustomLink to="/blog">
        <Title h2="Blogs" />
      </CustomLink>
      <PostList edges={postEdges} />
      <div css={linkContainer}>
        <CustomLink to="/blog">» 모든 글 보기</CustomLink>
      </div>

      {/* <CustomLink to="/project">
        <Title h2="Projects" />
      </CustomLink>
      <ProjectList edges={projectEdges} />
      <div css={linkContainer}>
        <CustomLink to="/project">» Read more on projects</CustomLink>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 5) {
      edges {
        node {
          excerpt(truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
// project 잠시 제외
// projects: allProjectsJson(sort: { order: DESC, fields: date }, limit: 9) {
//   edges {
//     node {
//       title
//       description
//       date
//       website
//       git
//       stacks
//     }
//   }
// }
