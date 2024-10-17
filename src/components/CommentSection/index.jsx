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
                <a>QUERO GARANTIR MINHA VAGA</a>
            </div>
        </section>
    )
}