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
    localizacao: 'Brasil',
    imagem: destaque1,
    descricao: 'Educação especializada e terapias.',
    link: 'https://www.apaebrasil.org.br'
  },
  {
    nome: 'Instituto Mano Down',
    localizacao: 'Belo Horizonte, MG',
    imagem: destaque2,
    descricao: 'Inclusão por meio de educação, esportes e cultura.',
    link: 'https://www.manodown.org.br'
  },
  {
    nome: 'Fundação Down',
    localizacao: 'Campinas, SP',
    imagem: destaque3,
    descricao: 'Intervenção precoce e treinamento profissional.',
    link: 'https://www.fsdown.org.br'
  },
  {
    nome: 'Instituto UniDown',
    localizacao: 'São Paulo, SP',
    imagem: destaque4,
    descricao: 'Cursos especializados para desenvolver autonomia.',
    link: 'https://www.unidown.org.br'
  },
  {
    nome: 'Associação DF Down',
    localizacao: 'Brasília, DF',
    imagem: destaque5,
    descricao: 'Defesa de direitos e grupos de apoio.',
    link: 'https://www.dfdown.org.br'
  },
  {
    nome: 'Instituto Serendipidade',
    localizacao: 'Rio de Janeiro, RJ',
    imagem: destaque6,
    descricao: 'Inclusão profissional e programas comunitários.',
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
              <p className={Styles.localizacao}>{inst.localizacao}</p>
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