import styled from "./style.module.scss"
import Perfil from "../../assets/perfil-2.png"
import Heart from "../../assets/heart.png"
import Crown from "../../assets/crown.png"
import Arrow from "../../assets/arrow.png"
import Instagram from "../../assets/Instagram.png"
import Logo from "../../assets/logo-btn.png"

export const AboutSection = () => {
    return (
        <section className={styled.AboutSection}>
            <div className={styled.Colors}>
                <div className={styled.Color1}></div>
                <div className={styled.Color2}></div>
                <div className={styled.Color3}></div>
                <div className={styled.Color4}></div>
                <div className={styled.Color5}></div>
            </div>

            <div className={styled.Container}>
                <div className={styled.ImgContainer}>
                    <img className={styled.Perfil} src={Perfil} alt="Professora Rayssa" />
                    <div className={styled.AnimatedImg}>
                        <img src={Crown} alt="coroa" />
                        <div className={styled.ImgDown}>
                            <img src={Heart} alt="coração" />
                            <img src={Arrow} alt="flecha" />
                        </div>
                    </div>
                </div>
                <div className={styled.TextContainer}>
                    <div className={styled.Paragraph}>
                        <h2 className={`about-title`}>Olá, me chamo Rayssa.</h2>

                        <p className={`about-text`}>
                            Comecei a estudar inglês com 15 anos, mas não levava muito a sério, então um dia decidi que iria aprender e em menos de 3 anos cheguei a fluência!
                        </p>

                        <p className={`about-text`}>
                            Sempre quis ser professora, mas nunca gostei dessas aulas tradicionais em que você só lê e aprende gramática (que é importante,ok?) então desenvolvi o <span>meu método de aprender e ensinar inglês</span> para meus alunos, uma forma leve,divertida e que traz resultados imediatos.
                        </p>

                        <p className={`about-text`}>
                            Professora certificada com experiência em escolas,cursinhos e aulas particulares e a domicílio além de amante de livros e música.
                        </p>

                        <p className={`about-text`}>
                            Esse método já ajudou muitaaa gente a sair do básico ou começar do 0 e agora chegou a sua vez de sair da zona de conforto e fazer isso por você que trará benefícios não só profissionais, mas sociais.
                        </p>

                        <p className={`about-text`}>
                            <strong>
                                Como sua teacher vou te provar que é possível aprender inglês sem sair do Brasil e sem perder anos e muitoooo dinheiro em escolas tradicionais que não te direcionam para seu objeto.
                            </strong>
                        </p>
                    </div>
                    <a>
                        <img src={Instagram} alt="logo instagram" />
                        <img src={Logo} alt="logo rayssa" />
                    </a>
                </div>
            </div>
        </section>
    )
}