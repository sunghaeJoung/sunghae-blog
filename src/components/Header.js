import React, { Component } from "react";
import { css } from "@emotion/core";
import { graphql, StaticQuery, Link } from "gatsby";
import { screen } from "../constants";
import { Search } from ".";

const header = css`
  padding: 10px;
  font-weight: 600;
  font-size: 1.3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
`;
const logo = css`
  flex: 0;
  cursor: pointer;
  h5 {
    margin: 0;
  }
`;
const menu = css`
  flex: 1;
  text-align: right;
`;
const icon = css`
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  margin-right: 20px;
`;
const link = css`
  margin-right: 20px;
`;
const mobileFooter = css`
  position: fixed;
  width: 100%;
  height: 2rem;
  bottom: 0;
  left: 0;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.3);

  background-color: #1f1f1f;
  z-index: 99;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 16px;

  a {
    margin-right: 0;
  }
`;
const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
class Header extends Component {
  state = {
    isSmallScreen: false,
    openSearch: false
  };
  componentDidMount() {
    this.setState({
      isSmallScreen: window.innerWidth <= screen.small
    });
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    const { isSmallScreen } = this.state;
    if (isSmallScreen && window.innerWidth > screen.small) {
      this.setState({
        isSmallScreen: false
      });
    } else if (!isSmallScreen && window.innerWidth <= screen.small) {
      this.setState({
        isSmallScreen: true
      });
    }
  };
  handleOpenSearch = () => {
    this.setState({
      openSearch: true
    });
  };
  handleCloseSearch = () => {
    this.setState({
      openSearch: false
    });
  };
  renderLinks = () => (
    <>
      <Link to="/blog" css={link}>
        Blog
      </Link>
      <Link to="/project" css={link}>
        Project
      </Link>
      <Link to="/categories" css={link}>
        Categories
      </Link>
      <Link to="/tags" css={link}>
        Tags
      </Link>
      <Link to="/about" css={link}>
        About
      </Link>
    </>
  );
  render() {
    const { isSmallScreen, openSearch } = this.state;
    return (
      <StaticQuery
        query={query}
        render={data => {
          const { siteMetadata } = data.site;
          const { title } = siteMetadata;

          return (
            <div css={header}>
              <div css={logo}>
                <Link to="/" css={link}>
                  {title}
                </Link>
              </div>
              <div css={menu}>
                <button css={icon} onClick={this.handleOpenSearch}>
                  <span role="img">🔍</span>
                </button>
                {isSmallScreen ? (
                  <div css={mobileFooter}>{this.renderLinks()}</div>
                ) : (
                  this.renderLinks()
                )}
                <div />
              </div>
              <Search open={openSearch} handleClose={this.handleCloseSearch} />
            </div>
          );
        }}
      />
    );
  }
}

export default Header;
