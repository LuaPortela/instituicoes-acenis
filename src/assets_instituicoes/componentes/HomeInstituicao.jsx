import Styles from '../css/HomeInstituicao.module.css'
import iconFamilia from '../images/iconfamilia.png'
import iconInstitui from '../images/iconinstitui.png'


function HomeInstituicao() {
  return (
    <div className={Styles.instituicoesContainer}>
      <div className={Styles.instituicoesConteudo}>
        <header className={Styles.instituicoesCabecalho}>
          <h1>BOAS-VINDAS ÀS INSTITUIÇÕES ACENIS !</h1>
          <h2>Encontre instituições<br />que transformam vidas.</h2>
          <p>Apoio, cuidado e desenvolvimento para pessoas<br /> com Síndrome de Down.</p>
          <button className={Styles.instituicoesBotao}> <a href="#instituicoesProximas"> Saiba mais </a></button>
        </header>

        <div className={Styles.instituicoesCardUnico}>
          <div className={Styles.instituicoesItemEstatistica}>
            <div className={Styles.instituicoesItemContent}>
              <img src={iconFamilia} alt="Ícone de família" className={Styles.instituicoesIconeEstatistica} />
              <p>+80% das famílias relatam melhora na qualidade de vida.</p>
            </div>
          </div>
          
          <div className={Styles.instituicoesDivisoria}></div>
          
          <div className={Styles.instituicoesItemEstatistica}>
            <div className={Styles.instituicoesItemContent}>
              <img src={iconInstitui} alt="Ícone de instituição" className={Styles.instituicoesIconeEstatistica} />
              <p>Mais de 3.000 crianças são atendidas por instituições parceiras em todo o Brasil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInstituicao