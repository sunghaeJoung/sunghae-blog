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
            현실에 안주하기보단 성장하길 원하고 혼자보단 함께 일할 때 즐거움을 느낍니다. 
            <br />
            동료 개발자들에게 함께 일하고 싶은 개발자가 되는 것을 목표로 
            <br />
            매일 달려가고 있는 주니어 개발자, 정성혜입니다. 
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
