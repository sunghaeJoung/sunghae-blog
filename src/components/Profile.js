import React from 'react';
import { css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import { useTheme } from '../theme';

const query = graphql`
  {
    site {
      siteMetadata {
        profile {
          email
          github
        }
      }
    }
  }
`;
const container = primaryColor => css`
  margin: 3rem 0;
  padding: 10px;
  padding-right: 30px;
  border-right: 5px solid ${primaryColor};
  text-align: right;
`;
const text = css`
  font-size: 16px;
  margin: 0;
`;
const link = css`
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
const Profile = () => {
  const { theme } = useTheme();

  return (
    <StaticQuery
      query={query}
      render={data => {
        const { email, github } = data.site.siteMetadata.profile;
        return (
          <div css={container(theme.primaryColor)}>
            <span>Sunghae</span>
            <p css={text}>
              안녕하세요. front-end developer 정성혜입니다.
              <br />
             2019년 12월부터 개발자라는 꿈에 한 발씩 딛기 시작했습니다.
              <br />
              현재는 동료들에게 같이 일하고 싶은 개발자를 목표로 매일 달려가고 있습니다.
            </p>
            <a css={link} href={email}>
              » Mail
            </a>
            <a css={link} href={github}>
              » Github
            </a>
          </div>
        );
      }}
    />
  );
};

export default Profile;
