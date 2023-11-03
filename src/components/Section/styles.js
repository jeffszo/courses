import styled from "styled-components";
import {BsFillPlayCircleFill} from "react-icons/bs"

export const ContainerSection = styled.section`
    width: 100%;
    height: 40rem;
    background-color: #111111;
    display: flex;
    align-items: center;
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

`

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Strong = styled.strong`
    color: #00D395;
`

export const WatchPlay = styled(BsFillPlayCircleFill)`
    font-size: 2.5rem;
    color: #fff;
    transition: 0.2s all ease;
    cursor: pointer;

    &:hover{
        color: #ffc300;
    }
`
