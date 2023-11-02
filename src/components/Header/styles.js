import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #222831;
`

export const LogoHeader = styled.img`
    color: #fff;
`


export const ListaHeader = styled.ul`
    display: flex;
    gap: ${(props => props.default ? '2rem' : '0.5rem')};
    padding: 0.8rem 0;
`

export const ItemLista = styled.li`
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    color: #EEEEEE;

    &:hover{
        color: #00ADB5;
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 0.7rem 2rem;
    background-color: ${(props => props.primary ? '#fff' : "#00ADB5")};
    color: ${(props => props.default ? '#00ADB5' : '#fff')};
    border: none;
    border-radius: 2px;
    font-family: 'Poppins', sans-serif;
    transition: 0.2s all ease-out;
    &:hover{
        transition: 0.2s all ease;
        opacity: 0.9;
    }
`