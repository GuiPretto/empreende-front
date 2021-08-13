import styled from "@emotion/styled"

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: ${({height}) => height}px;
`

export { Wrapper }