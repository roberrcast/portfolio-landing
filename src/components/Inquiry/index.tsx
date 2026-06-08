import * as S from "./styles";

export const InquiryForm = () => {
    return (
        <S.InquirySection id="inquiry">
            <S.FormContainer className="reveal">
                <S.FloatingIcon>
                    <span className="material-symbols-outlined">edit_note</span>
                </S.FloatingIcon>

                <S.Title>Consultas sobre Obras y Licencias</S.Title>
                <S.Description>
                    Asegura una pieza de historia. Consulta sobre impresiones de
                    archivo personalizadas o uso comercial.
                </S.Description>

                <S.Form>
                    <S.FormGroup>
                        <S.Label>Nombre Completo</S.Label>

                        <S.Input type="text" placeholder="JUAN PÉREZ" />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Input type="text" placeholder="MAIL@MAIL.COM" />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label>Tipo de Consulta</S.Label>
                        <S.Select>
                            <option>Selección de Impresión de Archivo</option>
                            <option>Licencia Comercial</option>
                            <option>Solicitud de Exhibición</option>
                            <option>Consulta Técnica</option>
                        </S.Select>
                    </S.FormGroup>

                    <S.SubmitButton type="submit">
                        Enviar Solicitud
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </S.SubmitButton>
                </S.Form>
            </S.FormContainer>
        </S.InquirySection>
    );
};
