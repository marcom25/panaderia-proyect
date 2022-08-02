import styled from "styled-components";
import propTypes from "prop-types";

export const TitleAboutUs = styled.h1`
    text-align: center !important;
    ${(prop) => `padding-top: ${prop.pt}`}rem;
    ${(prop) => `padding-bottom: ${prop.pb}`}rem;
`

TitleAboutUs.defaultProps = {
    pt: 3,
    pb: 0
}

TitleAboutUs.propTypes = {
    pt: propTypes.number,
    pb: propTypes.number
}

export const TitleCarousel = styled.h2`
    text-align: center !important;
    ${(prop)=> `padding-top: ${prop.pt}rem;`}
    ${(prop)=> `padding-bottom: ${prop.pb}rem;`}
`

TitleCarousel.defaultProps = {
    pt: 5,
    pb: 5
}

TitleCarousel.propTypes = {
    pt: propTypes.number,
    pb: propTypes.number
}