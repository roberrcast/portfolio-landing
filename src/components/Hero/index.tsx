import * as S from "./styles";
import heroImg from "../../assets/hero.webp";

export const Hero = () => {
    return (
        <S.HeroContainer>
            <S.BackgroundImage
                src={heroImg}
                alt="Imagen de fondo de estatua medieval"
                fetchPriority="high"
            />
            <S.GradientOverlay />
            <S.Content>
                <S.Title>Historias Talladas en Piedra</S.Title>
                <S.Description>
                    ...y otros medios. Una colección de reliquias y ecos
                    históricos capturados a través del continente europeo.
                </S.Description>

                <S.CTAButton>Explorar la colección</S.CTAButton>
            </S.Content>

            <S.ScrollIndicator>
                <S.ScrollText>Scroll</S.ScrollText>
                <S.ScrollLine />
            </S.ScrollIndicator>
        </S.HeroContainer>
    );
};
