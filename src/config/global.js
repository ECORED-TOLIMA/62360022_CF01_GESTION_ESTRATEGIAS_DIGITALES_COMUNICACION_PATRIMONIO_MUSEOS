export default {
  global: {
    Name: 'Fundamentos de patrimonio cultural, museos y comunicación digital',
    Description:
      'Este componente formativo explica los fundamentos del patrimonio cultural y cómo los museos lo difunden mediante entornos digitales. Aborda los tipos y la función social de los museos, su relación con la identidad y la memoria, así como la normatividad y los criterios éticos para compartir contenidos respetando los derechos de autor, la propiedad intelectual y los datos personales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Patrimonio cultural material',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Patrimonio cultural inmaterial',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Museos y función social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipologías de museos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'El museo como agente de identidad y memoria',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Valor social del patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Patrimonio cultural e identidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Patrimonio cultural y memoria colectiva',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Apropiación comunitaria del patrimonio cultural',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Marco normativo del patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normatividad del patrimonio cultural en Colombia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Normativa internacional aplicable al patrimonio cultural',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Normativa legal y criterios éticos para la comunicación del patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Derechos de autor y propiedad intelectual',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Protección de datos personales en la comunicación cultural',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Criterios éticos para la divulgación del patrimonio cultural',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Comunicación digital para la divulgación del patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Canales digitales para museos y organizaciones culturales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Comunicación bidireccional e interacción digital',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ecosistemas digitales en la gestión cultural',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Comunidades virtuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Audiencias digitales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Participación cultural en entornos digitales',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Caracterización de públicos para la gestión cultural digital',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Estrategias de divulgación digital del patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Campañas e identidad institucional en entornos digitales',
            hash: 't_8_1',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Contenidos digitales para museos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Planeación de contenidos culturales',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Narrativas digitales y distribución de contenidos',
            hash: 't_9_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62360022_CF01_CFA.pdf',
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
  glosario: [
    {
      termino: 'Apropiación cultural',
      significado:
        'reconocimiento del patrimonio como parte de la vida comunitaria.',
    },
    {
      termino: 'Audiencia digital',
      significado:
        'personas que acceden a contenidos mediante medios digitales.',
    },
    {
      termino: 'Comunicación digital',
      significado:
        'intercambio de información mediante tecnologías conectadas a internet.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'red de plataformas, actores y relaciones en entornos digitales.',
    },
    {
      termino: '<em>Engagement</em>',
      significado: 'nivel de interés e involucramiento de los públicos.',
    },
    {
      termino: 'Identidad cultural',
      significado:
        'sentido de pertenencia construido a partir de referentes culturales.',
    },
    {
      termino: 'Interacción digital',
      significado:
        'intercambio de mensajes y experiencias en plataformas digitales.',
    },
    {
      termino: 'Memoria colectiva',
      significado: 'recuerdos y significados compartidos por una comunidad.',
    },
    {
      termino: 'Museo',
      significado:
        'institución dedicada a conservar, investigar y divulgar patrimonio cultural.',
    },
    {
      termino: 'Narrativa transmedia',
      significado:
        'relato distribuido mediante múltiples plataformas y formatos.',
    },
    {
      termino: 'Patrimonio cultural',
      significado: 'bienes y manifestaciones valorados por una comunidad.',
    },
    {
      termino: 'Patrimonio cultural inmaterial',
      significado: 'prácticas y saberes transmitidos entre generaciones.',
    },
    {
      termino: 'Patrimonio cultural material',
      significado: 'bienes físicos con valor histórico, artístico o cultural.',
    },
    {
      termino: 'Público objetivo',
      significado: 'grupo específico al que se dirige una acción comunicativa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comunidad Andina. (1993). <em>Decisión 351 de 1993: Régimen común sobre derecho de autor y derechos conexos.</em>',
    },
    {
      referencia:
        'Congreso de Colombia. (1982). <em>Ley 23 de 1982. Sobre derechos de autor. Diario Oficial No. 35.949.</em>',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3431',
    },
    {
      referencia:
        'Congreso de Colombia. (1997). Ley 397 de 1997. Ley General de Cultura. Por la cual se desarrollan los Artículos 70, 71 y 72 y demás Artículos concordantes de la Constitución Política y se dictan normas sobre patrimonio cultural, fomentos y estímulos a la cultura, se crea el Ministerio de la Cultura y se trasladan algunas dependencias. Diario Oficial No. 43.102.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=337',
    },
    {
      referencia:
        'Congreso de Colombia. (2008). Ley 1185 de 2008. Por la cual se modifica y adiciona la Ley 397 de 1997 –Ley General de Cultura– y se dictan otras disposiciones. Diario Oficial No. 46.929.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=29324',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012. Régimen general de protección de datos personales. Reglamentada parcialmente por el Decreto Nacional 1377 de 2013, Reglamentada Parcialmente por el Decreto 1081 de 2015. Ver sentencia C-748 de 2011. Ver Decreto 255 de 2022. Diario Oficial No.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Eve Museos e Innovación. (2024). <em>Museos conectados y comunidades digitales: Estrategias de interacción.</em> EVE Museografía.',
    },
    {
      referencia:
        'Google Arts & Culture. (s.f.). <em>Google Arts & Culture.</em>',
      link: 'https://artsandculture.google.com/',
    },
    {
      referencia:
        'International Council of Museums (ICOM). (2013). Código de deontología del ICOM para los museos.',
      link: 'https://icom.museum/wp-content/uploads/2018/07/ICOM-codigo-Es-web-1.pdf',
    },
    {
      referencia:
        'Jenkins, H. (2008). <em>Convergence culture: La cultura de la convergencia de los medios de comunicación.</em> Paidós.',
    },
    {
      referencia:
        'Kotler, N., Kotler, P., & Kotler, W. I. (2008). <em>Museum marketing and strategy: Designing missions, building audiences, generating revenue and resources</em> (2nd ed.). Jossey-Bass.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). (2003). <em>El texto de la Convención para la Salvaguardia del Patrimonio Cultural Inmaterial.</em>',
      link: 'https://ich.unesco.org/es/convenci%C3%B3n',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). (2005). <em>Convención sobre la Protección y Promoción de la Diversidad de las Expresiones Culturales.</em>',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000142919_spa',
    },
    {
      referencia:
        'Universidad Autónoma de Occidente. (s.f.). <em>Museo Lilí</em> [Museo virtual].',
      link: 'https://museo.uao.edu.co/',
    },
    {
      referencia:
        'Villaespesa, E. (2019). <em>Museum audiences: Data and insights.</em> Routledge.',
    },
    {
      referencia:
        'Van Dijck, J. (2016). <em>La cultura de la conectividad: Una historia crítica de las redes sociales.</em> Siglo XXI Editores.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dorian Sully Munera Rua',
          cargo: 'Experta temática',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
