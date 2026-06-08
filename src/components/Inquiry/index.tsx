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
                        <S.Label htmlFor="nombre">Nombre Completo</S.Label>

                        <S.Input
                            id="nombre"
                            type="text"
                            placeholder="JUAN PÉREZ"
                        />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="email">Correo Electrónico</S.Label>

                        <S.Input
                            id="email"
                            type="email"
                            placeholder="MAIL@MAIL.COM"
                        />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="consulta">Tipo de Consulta</S.Label>

                        <S.Select id="consulta">
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
