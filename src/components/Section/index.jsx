import * as S from "./styles";
import Student from "../../assets/student.jpg";
import { Button } from "../Button/styles";

export function Section() {
  return (
    <S.ContainerSection>
      <S.ContainerImage>
        <S.ImageStudent src={Student} />
      </S.ContainerImage>
      <S.ContainerText>
        <S.TitleSection>
          Be part of the largest study platform to accelerate your career as a
          <S.Strong> developer</S.Strong>
        </S.TitleSection>
        <S.Paragraph>
        In the ever-evolving landscape of technology, developers seek knowledge and innovation. Enter Learnovation, a dynamic platform designed to fuel growth and learning for developers worldwide.
        </S.Paragraph>
        <S.ContainerButton>
          <Button cursor='pointer' width="200px" primary="#00D395" alternative="0.7rem">
            Get started
          </Button>
          <Button cursor='default' gap="0.5rem" primary="#111111">
            <S.WatchPlay />
            Watch play
          </Button>
        </S.ContainerButton>
      </S.ContainerText>
    </S.ContainerSection>
  );
}
