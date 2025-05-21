import React, { useState, useEffect } from 'react';
import Styles from '../css/SlideInstituicoes.module.css';

import destaque1 from '../images/apaedestaque.png';
import destaque2 from '../images/manodown.jpg';
import destaque3 from '../images/destaque3.png';
import destaque4 from '../images/unidown.png';
import destaque5 from '../images/df.avif';
import destaque6 from '../images/destaque6.png';

const instituicoes = [
  {
    nome: 'APAE',
    imagem: destaque1,
    descricao: 'A APAE oferece educação especializada, terapias e formação profissional em todo o Brasil, capacitando pessoas com síndrome de Down. Com ampla rede, apoia famílias, promovendo inclusão e independência por meio de cuidados multidisciplinares.',
    link: 'https://www.apaebrasil.org.br'
  },
  {
    nome: 'Instituto Mano Down',
    imagem: destaque2,
    descricao: 'Sediado em Belo Horizonte, o Instituto Mano Down fomenta inclusão por meio de educação, esportes e programas culturais. Capacita pessoas com síndrome de Down, apoiando famílias para construir autonomia e conexões comunitárias.',
    link: 'https://www.manodown.org.br'
  },
  {
    nome: 'Fundação Síndrome de Down',
    imagem: destaque3,
    descricao: 'Em Campinas, a Fundação Síndrome de Down promove inclusão com intervenção precoce, educação e treinamento profissional. Apoia famílias, defendendo oportunidades ao longo da vida em escolas e locais de trabalho.',
    link: 'https://www.fsdown.org.br'
  },
  {
    nome: 'Instituto UniDown',
    imagem: destaque4,
    descricao: 'Em São Paulo, o Instituto UniDown oferece 12 cursos especializados para desenvolver habilidades e autonomia em jovens com síndrome de Down, capacitando-os por meio da educação e promovendo inclusão social.',
    link: 'https://www.unidown.org.br'
  },
  {
    nome: 'Associação DF Down',
    imagem: destaque5,
    descricao: 'Em Brasília, a Associação DF Down defende direitos e inclusão, oferecendo grupos de apoio, oficinas e campanhas. Capacita pessoas com síndrome de Down, promovendo participação social e avanços políticos.',
    link: 'https://www.dfdown.org.br'
  },
  {
    nome: 'Instituto Serendipidade',
    imagem: destaque6,
    descricao: 'No Rio de Janeiro, o Instituto Serendipidade impulsiona inclusão profissional com treinamento e programas comunitários. Capacita pessoas com síndrome de Down, ajudando-as a obter empregos significativos e integração social.',
    link: 'https://www.serendipidade.org.br'
  },
];

function SlideInstituicoes() {
  const [indice, setIndice] = useState(0);
  const [visiveis, setVisiveis] = useState(3);

  const total = instituicoes.length;

  useEffect(() => {
    const atualizarQuantidadeVisiveis = () => {
      const largura = window.innerWidth;
      if (largura < 600) setVisiveis(1);
      else if (largura < 900) setVisiveis(2);
      else setVisiveis(3);
    };

    atualizarQuantidadeVisiveis();
    window.addEventListener('resize', atualizarQuantidadeVisiveis);
    return () => window.removeEventListener('resize', atualizarQuantidadeVisiveis);
  }, []);

  const proximo = () => {
    setIndice((indice + visiveis) % total);
  };

  const anterior = () => {
    setIndice((indice - visiveis + total) % total);
  };

  const cardsVisiveis = [];
  for (let i = 0; i < visiveis; i++) {
    cardsVisiveis.push(instituicoes[(indice + i) % total]);
  }

  return (
    <div className={Styles.destaqueContainer}>
      <h2>Descubra Instituições em Destaque</h2>
      <p className={Styles.destaqueSubtitulo}> Nossas instituições em destaque</p>
      <div className={Styles.destaqueSlide}>
        <button className={Styles.destaqueSeta} onClick={anterior}>{'<'}</button>

        {cardsVisiveis.map((inst, i) => (
          <div key={i} className={Styles.destaqueCard}>
            <img src={inst.imagem} alt={inst.nome} className={Styles.destaqueCardImg} />
            <div className={Styles.destaqueCardInfo}>
              <h3>{inst.nome}</h3>
              <p>{inst.descricao}</p>
              <div className={Styles.destaqueBotaoContainer}>
                <a href={inst.link} className={Styles.destaqueBotao} target="_blank" rel="noopener noreferrer">
                  Sobre
                </a>
              </div>
            </div>
          </div>
        ))}

        <button className={Styles.destaqueSeta} onClick={proximo}>{'>'}</button>
      </div>
    </div>
  );
}

export default SlideInstituicoes