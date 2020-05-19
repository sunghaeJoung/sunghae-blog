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
        현실에 안주하기보단 성장하길 원하고 혼자보단 함께 일할 때 즐거움을 느낍니다. 
        <br />
        동료 개발자들에게 함께 일하고 싶은 개발자가 되는 것을 목표로 
        <br />
        매일 달려가고 있는 주니어 개발자, 정성혜입니다. 
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
