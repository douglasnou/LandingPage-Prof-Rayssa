import Spin from "../../assets/spin.png"
import Name from "../../assets/nome.png"
import Teacher from "../../assets/cost.png"
import styled from "./style.module.scss"

export const CostSection = () => {
    return (
        <section className={styled.CostSection}>
            <div className={styled.TextContainer}>
                <img src={Spin} alt="Spin" />

                <div className={styled.Title}>
                    <h2 className="cost-title">QUANTO CUSTA UM CURSO DE INGLÊS COM A </h2>
                    <img src={Name} alt="Logo Rayssa" />
                    <p className="cost-text">
                        As turmas não abertas periodicamente e cada uma delas <strong>possui valores e bônus diferentes</strong> que ficam disponíveis por tempo limitado.  Mas você vai receber os detalhes direto no seu <span>WhatsApp todas as informações</span> ⚠️
                    </p>
                    <div className={styled.Btn}>
                        <a href="https://api.whatsapp.com/send?phone=+559891041024&text=Oie%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+aulas+de+ingl%C3%AAs%21+%F0%9F%98%89%F0%9F%87%BA%F0%9F%87%B8" target="blank">GARANTA SUA VAGA</a>
                    </div>
                </div>
            </div>

            <div className={styled.ImgContainer}>
                <img src={Teacher} alt="Professora e alunos" />
            </div>
        </section>
    )
}