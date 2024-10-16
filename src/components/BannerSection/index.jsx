import Name from "../../assets/nome.png"
import Perfil from "../../assets/perfil-1.png"
import styled from "./style.module.scss"

export const BannerSection = () => {
    return (
        <section className={styled.BannerSection}>
            <div className={styled.TextSub}>
                <div>
                    <img src={Name} />
                    <p className={`banner-subtitle`}>
                        Saia do básico de uma vez por todas e se torne fluente na língua mais importante do mundo.
                    </p>

                    <p className={`banner-text`}>
                        <span>Aprenda inglês de forma leve e divertida, sem enrolação.</span> Aulas personalizadas para seus objetivos e necessidades,não caia mais nessa de cursinhos tradicionais que só te trarão benefícios ha longo prazo.
                    </p>
                </div>
            </div>

            <div className={styled.ImgSub}>
                <div>
                    <img src={Perfil} />
                </div>
            </div>
        </section>
    )
}