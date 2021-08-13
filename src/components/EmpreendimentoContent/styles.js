import styled from "@emotion/styled";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    flex-grow: 2;

    width: 100%;
`

const Items = styled.div`
    display: flex;
    justify-content: center;

    margin: 32px 0;

    > div {
        margin: 0 22px;
    }
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    height: 100%;
`

const Contact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 24px 0;

    p:first-of-type {
        margin-right: 16px;
    }
`

export {
    Wrapper,
    Items,
    Item,
    Contact
}