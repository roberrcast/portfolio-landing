import * as S from "./styles";
import { camera, cameraSm } from "../../assets";

export const TechnicalCraft = () => {
    return (
        <S.CraftSection>
            <S.Container>
                <S.TextContent className="reveal">
                    <S.Label>El Medio</S.Label>
                    <S.Title>Alquimia Digital</S.Title>

                    <S.BodyText>
                        <p>
                            Aprovechando las características ópticas únicas del{" "}
                            <strong>Sistema Micro Cuatro Tercios</strong>{" "}
                            extraemos una profundidad inigualable de las formas
                            estáticas.
                        </p>

                        <p>
                            Cada sombra se mapea con precisión matemática y cada
                            luz se preserva mediante un proceso patentado de
                            alquimia digital, transformando datos de luz crudos
                            en una experiencia táctil de la historia.
                        </p>
                    </S.BodyText>

                    <S.FeatureList>
                        <S.FeaturedItem>
                            Impresiones Maestras de Alto Rango Dinámico
                        </S.FeaturedItem>
                        <S.FeaturedItem>
                            Tintas de Pigmento de Archivo
                        </S.FeaturedItem>
                        <S.FeaturedItem>
                            Papel de Piedra Sostenible
                        </S.FeaturedItem>
                    </S.FeatureList>
                </S.TextContent>

                <S.ImageContainer className="reveal">
                    <S.Frame>
                        <S.Image
                            src={camera}
                            srcSet={`${cameraSm} 500w, ${camera} 900w`}
                            sizes="(max-width: 768px) 100vw, 450px"
                            alt="Imagen de camara micro cuatro tercios"
                        />
                        <S.Badge>
                            M4/3
                            <br />
                            System
                        </S.Badge>
                    </S.Frame>
                </S.ImageContainer>
            </S.Container>
        </S.CraftSection>
    );
};
