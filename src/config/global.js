export default {
  global: {
    Name: 'Puesta en marcha y financiación del proyecto',
    Description:
      'Este componente orienta al aprendiz en la identificación de fuentes de financiación y en el análisis de estrategias necesarias para la puesta en marcha de un proyecto. Se abordan elementos relacionados con la gestión de recursos económicos, la elaboración de presupuestos y la evaluación de alternativas financieras, así como la definición de estrategias de implementación, organización de recursos y planificación de actividades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Financiación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de financiación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la financiación en los proyectos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes de financiación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Requisitos y condiciones de financiación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Presupuesto del proyecto',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Plan de negocio',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Ejemplo aplicado de financiación de un proyecto ',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Puesta en marcha del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de puesta en marcha',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia de la implementación del proyecto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estrategias de implementación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cronograma del proyecto',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Plan de puesta en marcha',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Ejemplo aplicado de puesta en marcha ',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Integración final del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Relación entre financiación y ejecución',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Consolidación del proyecto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Preparación para la implementación',
            hash: 't_3_3',
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
        download: 'downloads/12310040_CF3_DU.pdf',
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
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cronograma',
      significado:
        'Plan con fechas que funciona como hoja de ruta para indicar qué hacer, cuándo hacerlo y en qué orden, permitiendo organizar actividades de manera visual y ordenada.',
    },
    {
      termino: 'Financiación',
      significado:
        'Proceso mediante el cual se asignan recursos económicos, como dinero o crédito, para hacer viable y mantener en marcha un proyecto, negocio o emprendimiento.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'Movimiento de dinero que entra y sale de una empresa durante un periodo determinado, incluyendo ingresos operativos y gastos de operación, inversión y financiación.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Documento que detalla los gastos y ganancias previstos para una entidad, empresa u organismo en un periodo determinado.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'Grado de posibilidad de ejecutar un proyecto o asunto, considerando factores físicos, lógicos, económicos u otros que influyen en su realización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Candamil, A. (2025, enero 16). ¿Qué es el flujo de caja? Importancia y utilidad en la gestión financiera. Libre Gestión.',
      link:
        'https://web.libregestion.com/que-es-el-flujo-de-caja-importancia-y-utilidad-en-la-gestion-financiera/',
    },
    {
      referencia:
        'Ruiz, S. R. (2025, agosto 28). Qué es un cronograma y cómo hacerlo paso a paso. AIC. ',
      link:
        'https://aicomplutense.com/blog/que-es-un-cronograma-y-como-hacerlo-paso-a-paso/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. <br>Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
