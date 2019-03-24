import React from "react";
import { css } from "@emotion/core";
import profileImg from "../images/me.png";

const imgStyle = css`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`;
const Avatar = ({ src = profileImg, ...props }) => {
  return <img className={props.className} css={css(imgStyle)} src={src} />;
};

export default Avatar;
