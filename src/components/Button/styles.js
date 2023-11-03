import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props => props.gap)};
    cursor: ${(props => props.cursor)};
    padding: ${(props => props.defaultSize ? '0.7rem 2rem' : props.alternative)};
    font-weight: 600;
    width: ${(props => props.width)};
    background-color: ${(props => props.primary)};
    color: ${(props => props.default ? '#00D395' : '#fff')};
    border: none;
    border-radius: 2px;
    font-family: 'Poppins', sans-serif;
    transition: 0.2s all ease-out;
    &:hover{
        transition: 0.2s all ease;
        opacity: 0.9;
    }
`