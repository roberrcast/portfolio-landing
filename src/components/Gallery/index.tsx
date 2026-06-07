import * as S from "./styles";
import { galleryData } from "./data";

export const Gallery = () => {
    return (
        <S.GallerySection>
            <S.Grid>
                {galleryData.map((item) => (
                    <S.GridItem
                        key={item.id}
                        $columns={item.cols}
                        $aspectRatio={item.ratio}
                        className="reveal"
                    >
                        <S.Image
                            src={item.img}
                            srcSet={`${item.imgSm} 700w, ${item.imgMd} 1200w, ${item.img} 1500w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 660px"
                            loading="lazy"
                            alt={item.title}
                        />

                        <S.ContentOverlay>
                            <S.ItemCategory>{item.cat}</S.ItemCategory>
                            <S.ItemTitle>{item.title}</S.ItemTitle>
                        </S.ContentOverlay>
                    </S.GridItem>
                ))}
            </S.Grid>
        </S.GallerySection>
    );
};
