import Whats from "../../assets/whatsapp.png"
import Name from "../../assets/nome-branco.png"
import styled from "./style.module.scss"

export const FooterSection = () => {
    return (
        <section className={styled.FooterSection}>
            <div className={styled.FooterTitle}>
                <h2 className="footer-title">Não encontrou resposta <span>para sua dúvida?</span></h2>
            </div>

            <div className={styled.FooterBtn}>
                <a>
                    <div>
                        <img src={Whats} alt="whatsapp logo" />
                        <p>
                            ENTRE EM CONTATO COMIGO PELO WHATSAPP
                        </p>
                    </div>
                </a>
            </div>

            <div className={styled.FooterEnd}>
                <img src={Name} alt="Logo Rayssa" />
            </div>
        </section>
    )
}