import React, { createRef, Component } from "react";
import { Helmet } from "react-helmet";
import { createInstantSearch } from "react-instantsearch-dom/server";
import {
  connectStateResults,
  SearchBox,
  Hits,
  Highlight
} from "react-instantsearch-dom";
import { css } from "@emotion/core";
import { Layout, Title, CustomLink } from "../components";

const { InstantSearch, findResultsState } = createInstantSearch();

const searchContainer = open => css`
  position: fixed;
  top: ${open ? "50%" : "-1000px"};
  left: 50%;
  margin-top: -250px;
  margin-left: -200px;
  width: 450px;
  min-height: 500px;
  padding: 20px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: #1f1f1f;

  z-index: 100;

  transition: top 0.3s ease-in-out;
`;
const container = css`
  width: 100%;
  height: 500px;
`;
const searchBox = css`
  width: 95%;
  height: 20%;
  margin: auto;
  form {
    display: flex;
    justify-content: space-between;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    color: #fefefe;
    background-color: inherit;
  }
  button {
    color: #fefefe;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #fefefe;
  }
`;
const hitList = css`
  overflow-y: auto;
  height: 80%;
  ul {
    margin: 0;
  }
  li {
    margin-bottom: 2rem;
  }
  em {
    color: #fb7da7;
  }
`;
const noResult = css`
  text-align: center;
`;
const Post = ({ hit }) => (
  <div>
    <CustomLink to={hit.path}>
      <Highlight attribute="title" hit={hit} />
    </CustomLink>
  </div>
);
const SearchResults = connectStateResults(
  ({ searchState, searchResults, children }) => {
    if (!searchState || !searchState.query) {
      return null;
    }
    if (!searchResults || searchResults.hits.length <= 0) {
      return <div css={noResult}>No results for {searchState.query}</div>;
    }
    return children;
  }
);
class Search extends Component {
  wrapper = createRef();
  componentDidMount() {
    window.addEventListener("mousedown", this.handleMousedown);
  }
  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleMousedown);
  }
  handleMousedown = e => {
    if (
      this.props.open &&
      this.wrapper.current &&
      !this.wrapper.current.contains(e.target)
    ) {
      this.props.handleClose();
    }
  };
  render() {
    const { open, searchState, resultsState } = this.props;
    return (
      <div css={searchContainer(open)} ref={this.wrapper}>
        <InstantSearch
          appId="YWOT3IQZET"
          apiKey="ff2853082ab74fa8a7dc75f0a3f2317b"
          indexName="gatsby_site"
        >
          <div css={container}>
            <div css={searchBox}>
              <SearchBox />
            </div>
            <SearchResults>
              <div css={hitList}>
                <Hits hitComponent={Post} />
              </div>
            </SearchResults>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Search;

export { Search, findResultsState };
