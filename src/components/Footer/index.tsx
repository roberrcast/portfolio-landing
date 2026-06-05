import * as S from "./styles";

export const Footer = () => {
    return (
        <S.FooterContainer>
            <S.Brand>Roberto Rodríguez</S.Brand>

            <S.FooterNav>
                <S.FooterLink href="#">La Colección</S.FooterLink>
                <S.FooterLink href="#">Sobre el Artista</S.FooterLink>
                <S.FooterLink href="#">Proceso Técnico</S.FooterLink>
                <S.FooterLink href="#">Consultas</S.FooterLink>
            </S.FooterNav>

            <S.SocialIcons>
                <S.SocialIcon
                    href="https://github.com/roberrcast"
                    target="_blank"
                    rel="noopener"
                    aria-label="Perfil de github"
                    className="material-symbols-outlined"
                >
                    code
                </S.SocialIcon>

                <S.SocialIcon
                    href="https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer"
                    target="_blank"
                    rel="noopener"
                    aria-label="Perfil de LinkedIn"
                    className="material-symbols-outlined"
                >
                    planet
                </S.SocialIcon>

                <S.SocialIcon
                    href="https://www.instagram.com/rodriguezrobc/"
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                    className="material-symbols-outlined"
                >
                    photo_camera
                </S.SocialIcon>
            </S.SocialIcons>

            <S.Copyright>
                &copy; {new Date().getFullYear()} Roberto Rodríguez. Todos los
                derechos reservados.
            </S.Copyright>
        </S.FooterContainer>
    );
};
