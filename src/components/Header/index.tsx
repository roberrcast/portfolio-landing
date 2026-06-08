import { useScrollDirection } from "../../hooks/useScrollDirection";
import * as S from "./styles";

export const LINKS = [
    { id: 1, name: "La colección", path: "#" },
    { id: 2, name: "Acerda de", path: "#" },
    { id: 3, name: "Técnica", path: "#" },
];

export const Header = () => {
    const scrollDirection = useScrollDirection();
    const isVisible = scrollDirection === "up";

    return (
        <S.Header $visible={isVisible}>
            <S.LogoSection>
                <S.Icon>menu</S.Icon>
                <S.TitleGroup>
                    <S.LogoText>Roberto Rodríguez</S.LogoText>
                    <S.Subtitle>Fotógrafo</S.Subtitle>
                </S.TitleGroup>
            </S.LogoSection>

            <S.NavLinks>
                {LINKS.map((link) => (
                    <S.NavLink
                        key={link.id}
                        href={link.path}
                        className={link.id === 1 ? "active" : ""}
                    >
                        {link.name}
                    </S.NavLink>
                ))}
            </S.NavLinks>

            <S.Icon>shopping_bag</S.Icon>
        </S.Header>
    );
};
