import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #111111;

`

export const LogoHeader = styled.img`
    
`


export const ListaHeader = styled.ul`
    display: flex;
    gap: ${(props => props.default ? '2rem' : '0.5rem')};
    padding: 0.9rem 0;
    margin: 1rem 0 0 0;
`

export const SelectHeader = styled.select`
    box-shadow: none;
    outline: none;
    border: none;
    color: #fff;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    &:hover{
        color: #00D395;
    }
`

export const OptionSelect = styled.option`
    
`


export const ItemLista = styled.li`
    font-family: 'Poppins', sans-serif;
    font-size: 0.97rem;
    cursor: pointer;
    color: #EEEEEE;

    &:hover{
        color: #00D395;
    }
`

