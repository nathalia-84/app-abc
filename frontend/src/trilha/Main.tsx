
import React from 'react';
import ImageGallery from './ImageGallery';

const App: React.FC = () => {
  const images = [
    'https://i.pinimg.com/originals/d2/7b/9c/d27b9cfe0a2e4897b7e41ed6ff12ae9a.jpg',
    'https://i.pinimg.com/550x/9f/a7/14/9fa7145da9905dbaaa5380244f37544a.jpg',
    'https://m.media-amazon.com/images/I/71l3lknp7NL._AC_UF1000,1000_QL80_.jpg',
    'https://s3.amazonaws.com/img.iluria.com/product/91C3D1/173541F/450xN.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0mapPMhUum56Tqy5Ai5Xf9EmtTypg_jNhQ&usqp=CAU',
    'https://images-americanas.b2w.io/produtos/1249407244/imagens/painel-de-festa-infantil-mundo-bita-fundo-do-mar-1-80m-x-1-30m/1249407244_1_large.jpg',
    'https://www.desenhart.net/img/site/743/b/780510.jpg',
    'https://img.freepik.com/vetores-gratis/fundo-de-doodle-desenhado-a-mao_23-2149956565.jpg',
    'https://img.elo7.com.br/product/original/31D25B2/painel-festa-lona-fundo-do-mar-cavalo-marinho-peixes-180x120-banner-de-parede.jpg'
    // Adicione mais URLs de imagens aqui...
  ];

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;