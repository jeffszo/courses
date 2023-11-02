import * as S from "./styles"





export function Header(){
    return (
        <>
            <S.ContainerHeader>
                <S.LogoHeader/>
                <S.ListaHeader default>
                    <S.ItemLista>Home</S.ItemLista>
                    <S.ItemLista>Traks</S.ItemLista>
                    <S.ItemLista>Courses</S.ItemLista>
                    <S.ItemLista>Workshops</S.ItemLista>
                </S.ListaHeader>
                <S.ListaHeader>
                    <S.Button >Sign</S.Button>
                    <S.Button primary default>Sign up</S.Button>
                </S.ListaHeader>
            </S.ContainerHeader>
        </>
    )
}