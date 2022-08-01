import styled from "styled-components";
import propTypes from "prop-types";


export const ContainerHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${(prop) =>`padding-top: ${prop.pt}rem`};
    ${(prop) =>`padding-bottom: ${prop.pb}rem`};
`

ContainerHome.defaultProps = {
    pt: 10,
    pb: 10
}

ContainerHome.propTypes = {
    pt: propTypes.number,
    pb: propTypes.number
}


export const TitlesHome = styled.h2`
    letter-spacing: 2.7px;
    ${(prop) => `padding-top: ${prop.pt}rem`};
    ${(prop) => `padding-bottom: ${prop.pb}rem`};
`

TitlesHome.defaultProps ={
    pt: 0,
    pb: 3
}

TitlesHome.propTypes = {
    pt: propTypes.number,
    pb: propTypes.number
}