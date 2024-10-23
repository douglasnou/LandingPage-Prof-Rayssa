import Stars from "../../assets/stars-1.png"
import Arrow from "../../assets/arrow-2.png"
import Comments1 from "../../assets/comments-1.png"
import Comments2 from "../../assets/comments-2.png"
import Stars2 from "../../assets/stars-2.png"
import styled from "./style.module.scss"

export const CommentSection = () => {
    return (
        <section className={styled.CommentSection}>
            <div className={styled.CommentsText}>
                <div>
                    <img className={styled.Stars} src={Stars} />
                    <p className="comment-text">Muitas pessoas já testaram esse método e aprovaram!</p>
                </div>
            </div>

            <div className={styled.CommentsImg}>
                <img className={styled.Arrow} src={Arrow} alt="seta" />
                <img className={styled.Comments1} src={Comments1} alt="comentários" />
                <img className={styled.Comments2} src={Comments2} alt="comentários" />
                <img className={styled.Stars} src={Stars2} alt="estrelas" />
            </div>

            <div className={styled.BtnContainer}>
                <a href="https://api.whatsapp.com/send?phone=+559891041024&text=Oie%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+aulas+de+ingl%C3%AAs%21+%F0%9F%98%89%F0%9F%87%BA%F0%9F%87%B8" target="blank">QUERO GARANTIR MINHA VAGA</a>
            </div>
        </section>
    )
}