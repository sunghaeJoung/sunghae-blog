import React from 'react';
import { css } from '@emotion/core';

const container = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
`;

const aa = css`
width: 100%;
height: 100%;
background-color: red;
`

const Project = ({ tags, tagsCount, ...props }) => (
  <div css={container}>
    <div css={aa}>프로젝트</div>
    {/* {tags &&
      tags.map(tag => (
        <CustomLink key={tag} css={tagItem} to={`/tags/${tag}`} {...props}>
          # {tag} {tagsCount && tagsCount[tag]}
        </CustomLink>
      ))} */}
  </div>
);

export default Project;
