import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Avatar, HEAD, Title, Layout,  Content } from '../components';

const avatar = css`
  width: 15rem;
  height: 15rem;
margin: 0 auto 40px;
display: flex;
justify-content: center;
`
const container = css`
margin-top: 20px;
font-weight: 500;
`
const link = css`
margin-left: 20px;
`

export default ({ data, location }) => {
  return (
    <Layout>
      <HEAD pathname={location.pathname} />
      <Title h2="About" />
      <Content>
      <Avatar css={avatar}/>
        <p style={{ textAlign: 'center' }}>
        안녕하세요. front-end developer 정성혜입니다.
          <br />
          2019년 12월부터 개발자라는 꿈에 한 발씩 딛기 시작했습니다.
          <br />
          현재는 동료들에게 같이 일하고 싶은 개발자를 목표로 매일 달려가고 있습니다.
          <br />    
          <div css={container}>
          <a  href="ppl870988@gmail.com">
              » Mail
         </a>
         <a css={link} href="https://github.com/sunghaeJoung">
              » Github
            </a>
            </div>
        </p>
      </Content>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        repository
      }
    }
  }
`;
