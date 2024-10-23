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
                <a href="https://api.whatsapp.com/send?phone=+559891041024&text=Oie%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+aulas+de+ingl%C3%AAs%21+%F0%9F%98%89%F0%9F%87%BA%F0%9F%87%B8" target="blank">
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