import * as S from "./styles";

const Philosophy = () => {
    return (
        <S.PhilosophyContainer>
            <S.StaveLine />

            <S.QuoteContent className="reveal">
                <S.QuoteText>
                    "Capturando la textura del tiempo a través del lente de la
                    precisión moderna."
                </S.QuoteText>
                <S.Divider />
            </S.QuoteContent>
        </S.PhilosophyContainer>
    );
};

export default Philosophy;
