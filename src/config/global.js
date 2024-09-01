export default {
  global: {
    componenteFormativo: 'Analítica web',
    descripcionCurso:
      'En este componente se abordarán conceptos relacionados con la analítica web, la cual es la medición, análisis y presentación de datos de monitorización a las actividades que una empresa realiza en medios <i>online</i>, con el fin de realizar acciones de mejoramiento de las estrategias y con ello, generar mayor efectividad de los planes de <i>marketing</i> y comunicación digital llevados a cabo por la empresa para dar cumplimiento a los objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-principal-ok.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-1.svg'),
      },
      {
        clases: ['decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Analítica web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es la analítica web?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tendencias de la analítica web',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Métricas en la analítica web?',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métricas en Facebook',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Resumen',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Seguidores',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Centro de anuncios',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '"Me gusta"',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Alcance',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Visitas a la página',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Publicaciones',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Historias',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métricas en Instagram',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Métricas de las publicaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métricas de historias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métricas de publicaciones promocionadas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Métricas de los seguidores',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Google <i>Analytics</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Informes de audiencia en Google <i>Analytics</i> ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Dimensiones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Informes básicos de audiencia',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métricas de adquisición',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Informes básicos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Métricas en otras redes sociales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //      {
      //        nombreRuta: 'complementario',
      //        icono: 'far fa-folder-open',
      //        titulo: 'Material complementario',
      //      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'Porcentaje o dato numérico que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago (Benitex, 2019).',
    },
    {
      termino: 'Alcance viral',
      significado:
        'Unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos.',
    },
    {
      termino: 'Analítica web',
      significado:
        'Forma de medir y analizar los datos de tráfico de un sitio web, a através del cual se permiten tomar las mejores decisiones y optimizar los objetivos de la empresa.',
    },
    {
      termino: '<i>Cookies</i>',
      significado:
        'Pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<i>Fanpage</i>',
      significado:
        'Tambien llamada página de fans es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios (Benitez, 2019).',
    },
    {
      termino: '<i>Hashtag</i>',
      significado:
        'Etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que trasmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o trexto.',
    },
    {
      termino: '<i>Marketing de contenidos</i>',
      significado:
        'Estrategias de <i>marketing</i> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del blog y del social media marketing.',
    },
    {
      termino: '<i>Retargeting</i>',
      significado:
        'Nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizados de productos y servicios en los que se está más receptivo recibir información. El producto te sigue por la red (Benitez, 2019).',
    },
  ],
  referencias: [
    {
      referencia:
        'Ávila, B. y Llamazares, F. (2018). Medición de audiencias. TOM Micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Benítez, M. (2019). Diccionario de marketing digital. MKT2U. ',
      link:
        'https://communitymanager2u.com/blog-diccionario-de-marketing-digital/ ',
    },
    {
      referencia: 'Cibrián, I. (2018). Marketing digital. ESIC Editorial.',
      link: '',
    },
    {
      referencia: 'Maldonado, S. (2016). Analítica web. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, I., Suárez, A. y García, M. (2008). Dirección publicitaria. Editorial UOC.',
      link: '',
    },
    {
      referencia: 'Roldan, S. (2016). Community Manager 2.0. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Soria, M. (2015). Plan de medios de comunicación e internet. Editorial CEP.',
      link: '',
    },
    {
      referencia:
        'Turletti, P. (2018). El ROI de marketing y ventas. ESIC Editorial.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Santander Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador web',
          centro: 'Regional Santander Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>Fullstack Junior</i>',
          centro: 'Regional Santander Centro Agroturístico',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
