import styled from "styled-components";
import propTypes from "prop-types";

export const TitleProducts = styled.h3`
    ${(prop) => `padding-top: ${prop.pt}rem`};
    ${(prop) => `padding-bottom: ${prop.pb}rem`}
`

TitleProducts.defaultProps = {
    pt: 7.5,
    pb: 1.5
}

TitleProducts.propTypes = {
    pt: propTypes.number,
    pb: propTypes.number
}