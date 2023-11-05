import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs"

export const ContainerSection = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #111111;
    display: flex;
    align-items: center;
    border: black;

    @media(max-width: 997px){
        flex-direction: column;
        height: 100%;
    }



`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 8rem;

    
`

export const Paragraph = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #eee;
`

export const ContainerImage = styled.div`
    margin: 0 8rem;
    
    @media(max-width: 997px){
        display: none;
    }
`

export const ImageStudent = styled.img`
    height: 25rem;
`

export const TitleSection = styled.h1`
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #EEEEEE;
    line-height: 1.15;

    @media (max-width: 367px){
        font-size: 2rem;
    }

`

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    border: black;
    

`

export const Strong = styled.strong`
    color: #00D395;
`

export const WatchPlay = styled(BsFillPlayCircleFill)`
    font-size: 2.5rem;
    color: #fff;
    transition: 0.2s all ease-in-out;
    cursor: pointer;

    &:hover{
        color: #ffc300;
        transition: 0.2s all ease-in;
    }
`


