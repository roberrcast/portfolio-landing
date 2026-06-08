import * as S from "./styles";
import { heroImg, heroImgMd, heroImgSm } from "../../assets";

export const Hero = () => {
    return (
        <S.HeroContainer>
            <S.BackgroundImage
                src={heroImg}
                srcSet={`${heroImgSm} 768w, ${heroImgMd} 1200w, ${heroImg} 2560w`}
                sizes="(max-width: 768px) 100vw, 100vw"
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

                <S.CTAButton>Adquirir Impresiones y Licencias</S.CTAButton>
            </S.Content>

            <S.ScrollIndicator>
                <S.ScrollText>Scroll</S.ScrollText>
                <S.ScrollLine />
            </S.ScrollIndicator>
        </S.HeroContainer>
    );
};
