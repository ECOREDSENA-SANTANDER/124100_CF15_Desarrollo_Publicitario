export default {
  global: {
    componenteFormativo: 'Analítica web',
    descripcionCurso:
      'En este componente se abordarán conceptos relacionados con la analítica web, la cual es la medición, análisis y presentación de datos de monitorización a las actividades que una empresa realiza en medios online, con el fin de realizar acciones de mejoramiento de las estrategias y con ello, generar mayor efectividad de los planes de marketing y comunicación digital llevados a cabo por la empresa para dar cumplimiento a los objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-principal-ok.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['decorativo1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['decorativo2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
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
            hash: 't_1_1',
          },
          {
            numero: '1.3',
            titulo: 'Métricas en la analítica web?',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métricas en Facebook',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métricas en Instagram',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Google <em>Analytics</em>',
        desarrolloContenidos: true,
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
      termino: '<em>Cookies</em>',
      significado:
        'Pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'Tambien llamada página de fans es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios (Benitez, 2019).',
    },
    {
      termino: '<em>Hashtag</em>',
      significado:
        'Etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que trasmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o trexto.',
    },
    {
      termino: '<em>Marketing de contenidos</em>',
      significado:
        'Estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del blog y del social media marketing.',
    },
    {
      termino: '<em>Retargeting</em>',
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
          nombre: 'Claudia Johana Gómez',
          cargo: 'Líder línea Santander',
          centro: 'Regional Santander Centro Agroturístico',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
