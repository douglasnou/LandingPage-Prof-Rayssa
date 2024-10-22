import Heart from "../../assets/heart-1.png"
import styled from "./style.module.scss"

export const Howsection = () => {
    return (
        <section className={styled.HowSection}>
            <div className={styled.HowContainer}>
                <div className={styled.TitleSub}>
                    <img src={Heart} alt="Coração com coroa" />
                    <h2 className="how-title">Mas como vai funcionar?</h2>
                    <p className="how-text">É possível eu falar inglês perfeitamente em 3 meses??</p>
                </div>

                <div className={styled.TextSub}>
                    <p className="how-text">
                        Do nível 0 não posso garantir nada, pois o aprendizado da língua não depende só do professor o aluno precisa estudar TODOS os dias para se comunicar bem em 3 meses, mas aqui não vendemos promessas.
                    </p>

                    <p className="how-text">
                        <span>O aprendizado do inglês é um processo longo,</span> mas não significa que precisa ser chato ou estressante, embarque nessa jornada comigo.
                    </p>
                </div>
            </div>
        </section>
    )
}