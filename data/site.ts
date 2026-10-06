export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Jéssica Menegotto',
  monogram: 'JM',
  headline: 'A beleza de continuar sendo você.',
  cro: 'CRBM 6013',
  bio: 'Sou Jéssica Menegotto, biomédica esteta em Caxias do Sul. Acredito em um cuidado que começa na escuta e valoriza seus traços, sua expressão e a sua identidade.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Estética facial', 'Cuidado individual'],
  phone: '+55 54 9117-9646',
  whatsapp: '555491179646',
  whatsappUrl: 'https://wa.me/555491179646?text=Ol%C3%A1%2C%20Dra.%20J%C3%A9ssica!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Caxias do Sul, RS',
  professionalPhilosophy: 'Valorizar o que torna você única.',
  instagram: 'https://www.instagram.com/drajessicamenegotto/',
  instagramHandle: '@drajessicamenegotto',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA MELHOR VERSÃO.'],
  colors: { paper: '#f7f2f0', ink: '#372a2e', taupe: '#9c7880', champagne: '#dfc5c7', dark: '#201b1e', wine: '#68464f', muted: '#76666c' },
  images: { hero: '/images/jessica-hero.webp', essence: '/images/jessica-essencia.webp', about: '/images/jessica-sobre.webp', beauty: '/images/jessica-experiencia.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Harmonia em cada ângulo', alt: 'Registro de antes e depois do rosto em visão de três quartos, enviado pela Dra. Jéssica.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1122 / 1402 },
    { image: '/images/resultado-02.webp', label: 'Identidade em primeiro lugar', alt: 'Registro frontal de antes e depois de cuidado facial, enviado pela Dra. Jéssica.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1586 },
    { image: '/images/resultado-03.webp', label: 'Beleza em equilíbrio', alt: 'Registro frontal de antes e depois, enviado pela Dra. Jéssica.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1589 },
    { image: '/images/resultado-04.webp', label: 'Um olhar para o perfil', alt: 'Registro lateral de antes e depois do perfil facial, enviado pela Dra. Jéssica.', orientation: 'horizontal', beforeShare: .507, comparisonRatio: 1122 / 1402 },
    { image: '/images/resultado-05.webp', label: 'Sua expressão, valorizada', alt: 'Registro frontal de antes e depois com expressão preservada, enviado pela Dra. Jéssica.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1122 / 1402 },
    { image: '/images/resultado-06.webp', label: 'Leveza no olhar', alt: 'Registros de antes e depois da região do olhar dispostos de cima para baixo.', orientation: 'vertical', beforeShare: .521, comparisonRatio: 1122 / 1402 },
    { image: '/images/resultado-07.webp', label: 'Detalhes que fazem parte de você', alt: 'Registros frontais de antes e depois dispostos de cima para baixo.', orientation: 'vertical', beforeShare: .498, comparisonRatio: 1122 / 1402 },
    { image: '/images/resultado-08.webp', label: 'Proporção e naturalidade', alt: 'Registro lateral de antes e depois do perfil facial, enviado pela Dra. Jéssica.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1122 / 1402 },
  ] },
  seo: { title: 'Dra. Jéssica Menegotto | Harmonização Facial em Caxias do Sul', description: 'Um olhar para a sua melhor versão. Conheça a Dra. Jéssica Menegotto, biomédica esteta, CRBM 6013, e agende sua avaliação em Caxias do Sul.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
