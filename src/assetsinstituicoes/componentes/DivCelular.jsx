import Styles from '../css/DivCelular.module.css'
import iconFamilia2 from '../images/iconfamilia.png'
import iconInstitui2 from '../images/iconinstitui.png'

function DivCelular(){
    return(
        <main className={Styles.caixacelular}>
        <div className={Styles.divcelular}>
            <img src={iconFamilia2} alt="Ícone de família" className={Styles.celularIconeEstatistica} />
            <p>+80% das famílias relatam melhora na qualidade de vida.</p>
        </div>

        <div className={Styles.divcelular2}>
            <img src={iconInstitui2} alt="Ícone de instituição" className={Styles.celularIconeEstatistica2} />
            <p>Mais de 3.000 crianças são atendidas por instituições parceiras em todo o Brasil.</p>
        </div>
    </main>
                   
    )
}

export default DivCelular