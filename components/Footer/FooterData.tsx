import SocialMedia from '../Header/SocialMedia';

const aboutUs = {
  title: 'Sobre Nosotros',
  width: '240px',
  height: '51px',
  items: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
  ],
};

const myAccount = {
  title: 'Mi cuenta',
  width: '145px',
  height: '140px',
  items: [
    'Informacion Personal',
    'Direcciones',
    'Mascotas',
    'Ordenes',
    'Agenda',
  ],
};

const information = {
  title: 'Informacion',
  width: '159px',
  height: '110px',
  items: [
    'Formulario de contacto',
    'Preguntas frecuentes',
    'Terminos y condiciones',
    'Politica de privacidad',
  ],
};

const customerSupport = {
  title: 'Atencion al Cliente',
  width: '214px',
  height: '163px',
  items: [
    'Bello Monte, calle XXXX, local 1',
    '(0212) 575 54 12',
    'soporte@maxipet.com',
    'Lunes a Viernes',
    '9:00 a.m. - 5:00 p.m.',
    <SocialMedia
      template=""
      data={[
        { src: '/instagram 1 black.png', height: 13, width: 13 },
        { src: '/twitter 1 black.png', height: 13, width: 16 },
        { src: '/facebook 1 black.png', height: 13, width: 7 },
      ]}
    />,
  ],
};

export const FOOTER_DATA = [aboutUs, myAccount, information, customerSupport];
