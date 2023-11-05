import * as S from "./styles";
import Logo from "../../assets/logo-course.png";
import { Button } from "../Button/styles";

export function Header() {
  return (
    <>
      <S.ContainerHeader>
        <S.LogoHeader src={Logo} />
        <S.ListaHeader default>
          <S.ItemLista>🏠 Home</S.ItemLista>
          <S.ItemLista>
            <S.SelectHeader>
              <S.OptionSelect hidden>🛤️ Roadmaps</S.OptionSelect>
              <S.OptionSelect>Front</S.OptionSelect>
              <S.OptionSelect>Back</S.OptionSelect>
              <S.OptionSelect>Devops</S.OptionSelect>
              <S.OptionSelect>DBA</S.OptionSelect>
            </S.SelectHeader>
          </S.ItemLista>
          <S.ItemLista>
            <S.SelectHeader>
              <S.OptionSelect hidden>📚 Courses</S.OptionSelect>
              <S.OptionSelect>Python</S.OptionSelect>
              <S.OptionSelect>Javascript</S.OptionSelect>
              <S.OptionSelect>MySQL</S.OptionSelect>
              <S.OptionSelect>PHP</S.OptionSelect>
              <S.OptionSelect>Java</S.OptionSelect>
            </S.SelectHeader>
          </S.ItemLista>
          <S.ItemLista>🏬 Workshops</S.ItemLista>
        </S.ListaHeader>
        <S.ListaHeaderButton>
          <Button cursor='pointer' primary="#00D395" defaultSize>
            Sign up
          </Button>
          <Button 
            cursor='pointer' 
            primary="#fff" 
            default 
            defaultSize
            style={{
              
            }}
            >
            Sign in
          </Button>
        </S.ListaHeaderButton>
        <S.ListaMenuMobile>
          <S.Menu/>
        </S.ListaMenuMobile>
      </S.ContainerHeader>
    </>
  );
}
