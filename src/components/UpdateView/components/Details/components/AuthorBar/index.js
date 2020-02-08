import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexBar = styled.div`
    display: flex;
    margin-bottom: 32px;
`;

const Avatar = styled.img`
    height: 48px;
    width: 48px;
    margin-right: 8px;
    border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const DetailsLine = styled.div`
    font-size: ${({variant}) => (variant === "small") ? '11px' : '14px'};
    color: rgba(0, 0, 0, 0.74);
`;

const AuthorBar = ({ photoThumbUrl, name, readTime }) => (
   <FlexBar>
    <Avatar src={photoThumbUrl} alt={"Author"} />
    <Details>
        <DetailsLine>{name}</DetailsLine>
        <DetailsLine variant={'small'}>{readTime} min read</DetailsLine>
    </Details>
  </FlexBar>
);

AuthorBar.propTypes = {
  photoThumbUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default AuthorBar;
