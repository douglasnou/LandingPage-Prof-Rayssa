import Arrow from "../../assets/history-arrow.png"
import List from "../../assets/list.png"
import styled from "./style.module.scss"

export const HistorySection = () => {
    return (
        <section className={styled.HistorySection}>
            <div className={styled.TextContainer}>
                <div>
                    <p className="history-text">
                        Eu já fui como você, fiz cursinho free, mas de nada adiantou, nunca tive a oportunidade de fazer um intercâmbio ou morar com alguém americano ou nativo, não fiz anos e anos de escola tradicional e <span>mesmo assim atingi a Fluência</span> para conquistar tudo que eu sempre quis:
                    </p>
                </div>

                <img src={Arrow} alt="arrow up" />
            </div>

            <div className={styled.TextList}>
                <div>
                    <img src={List} alt="lista de vantagens" />
                </div>
            </div>
        </section>
    )
}