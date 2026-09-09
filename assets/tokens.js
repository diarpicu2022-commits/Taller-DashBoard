/* Tokens del contrato de diseño — Taller DashBoard
   Muestreados por dominancia de píxel sobre image.png (1230x874).
   Ver docs/ux/anexos/2026-09-09-dashboard-ecommerce.md
   Ningún valor de color, radio o duración fuera de este archivo. */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#443EFF', // pill activo del sidebar, tarjeta promocional
          soft:    '#EAE9FE', // fondo de iconos de tarjetas KPI
          ink:     '#3730E0', // hover del primario
        },
        success: {
          DEFAULT: '#1BA364', // Download Report, Go Pro Now
          badge:   '#11A163', // badge de Messages
          soft:    '#E6F6EF',
        },
        amber:  { DEFAULT: '#E8A300' }, // hexágono del logotipo
        page:   '#E9E8EE',              // fondo exterior
        panel:  '#EEEDF2',              // panel del área de contenido
        surface:'#FFFFFF',              // sidebar, tarjetas
        ink:    '#0F0F1E',              // cifras y títulos
        muted:  '#8B9195',              // etiquetas de KPI
        'muted-soft': '#B7B7C2',        // ejes y texto terciario
        danger: '#F04438',              // delta negativo
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'label': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'body':  ['14px', { lineHeight: '20px' }],
        'card':  ['16px', { lineHeight: '24px', fontWeight: '600' }],
        // 'title', no 'page': el color `page` ya ocupa el nombre y `text-page`
        // resolveria al color en vez de al tamano.
        'title': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'kpi':   ['32px', { lineHeight: '40px', fontWeight: '700' }],
      },
      borderRadius: {
        'icon': '12px',
        'card': '16px',
        'shell': '24px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(16,16,30,.06)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
};
