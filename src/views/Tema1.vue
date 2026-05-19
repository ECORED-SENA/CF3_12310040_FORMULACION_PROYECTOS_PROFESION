<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Financiación del proyecto
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-7.bg-color-7.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La financiación del proyecto constituye uno de los elementos más relevantes dentro del proceso de formulación, ya que permite garantizar la disponibilidad de los recursos económicos necesarios para la ejecución de las actividades planteadas. Sin una adecuada planificación financiera, el proyecto puede presentar dificultades en su desarrollo, lo que afecta el cumplimiento de sus objetivos.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img1.png', alt='', style="object-fit: cover;")
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img2.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7        
        .row.align-items-start.mb-10.justify-content-center.align-items-center(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") La financiación no solo implica la obtención de recursos económicos, sino también el análisis de las diferentes alternativas disponibles, la evaluación de sus condiciones y la toma de decisiones orientadas a seleccionar la opción más viable. Este proceso permite establecer una relación directa entre los costos del proyecto y las fuentes de recursos que lo respaldan.
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
            p.mb-0.p-3.bg-color-6 Asimismo, la financiación facilita la organización de los recursos, la estimación de costos y la proyección de gastos, elementos que contribuyen a la sostenibilidad del proyecto en el tiempo.
    Separador
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto de financiación
    .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
      .col-lg-7.bg-color-7.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La financiación corresponde al proceso mediante el cual se gestionan y obtienen los recursos económicos necesarios para ejecutar un proyecto. Sin embargo, desde un enfoque técnico, este concepto trasciende la simple obtención de capital, ya que implica la estructuración de estrategias financieras orientadas a garantizar la viabilidad y sostenibilidad del proyecto.  En la práctica, la financiación permite responder preguntas fundamentales relacionadas con la ejecución del proyecto. Entre ellas se encuentran las siguientes:
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img3.png', alt='', style="object-fit: cover;")        
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon-tarjeta.svg', alt='' style="width:100px").m-auto          
          p.text-center ¿Cuánto cuesta ejecutar el proyecto? 
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon-tarjeta.svg', alt='' style="width:100px").m-auto          
          p.text-center ¿Qué recursos se requieren? 
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon-tarjeta.svg', alt='' style="width:100px").m-auto          
          p.text-center ¿De dónde provendrán esos recursos? 
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon-tarjeta.svg', alt='' style="width:100px").m-auto          
          p.text-center ¿En qué condiciones pueden obtenerse? 
    //- Fin Tarjetas
    p(data-aos="fade-left") Estas preguntas son esenciales para establecer un marco financiero que soporte la ejecución del proyecto. Para comprender mejor las principales alternativas de financiación, se exponen a continuación sus características principales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Capital propio
                    p Recursos aportados por los propietarios o emprendedores. No genera endeudamiento, pero compromete recursos personales.                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Crédito
                    p Recursos obtenidos de entidades financieras. Implica pago de intereses y cumplimiento de obligaciones periódicas.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Inversión externa
                    p Aportes de terceros a cambio de participación o beneficios acordados. Puede fortalecer la capacidad financiera del proyecto.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide01_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Otras fuentes
                    p Incluye subvenciones, alianzas estratégicas o programas de apoyo institucional.
    //- Fin Slideshow
    p(data-aos="fade-left") Desde una perspectiva aplicada, la financiación se convierte en un proceso de toma de decisiones en el cual se analizan diferentes alternativas, evaluando factores como el costo del dinero, el riesgo financiero y la capacidad de pago. Esta evaluación permite seleccionar la opción más adecuada y optimizar el uso de los recursos disponibles.
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, en un proyecto de emprendimiento, la decisión entre utilizar capital propio o acceder a un crédito bancario no depende únicamente de la disponibilidad de recursos, sino del análisis de variables como tasas de interés, retorno esperado y nivel de riesgo asumido.
    p(data-aos="fade-left") En este sentido, la financiación no solo soporta la ejecución del proyecto, sino que influye directamente en su estructura, alcance y sostenibilidad en el tiempo.    
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Importancia de la financiación en los proyectos
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 La financiación desempeña un papel fundamental en la ejecución de proyectos, ya que permite materializar las ideas planteadas durante la fase de formulación. Sin recursos económicos suficientes, las actividades no pueden desarrollarse de manera adecuada, lo que limita el cumplimiento de los objetivos establecidos. Desde un enfoque aplicado, la financiación contribuye al fortalecimiento de la gestión del proyecto mediante los siguientes aspectos:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Asegura la disponibilidad de recursos para la ejecución de actividades críticas. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Establece una planificación financiera coherente con los objetivos del proyecto. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Reduce la incertidumbre asociada a la ejecución y al uso de los recursos. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Optimiza la asignación de recursos según prioridades y necesidades operativas. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Permite evaluar la viabilidad económica del proyecto antes y durante su desarrollo. 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img5.png", data-aos="zoom-in" style="max-width: 458px")          
    p(data-aos="fade-left") Para comprender su aporte en la gestión de proyectos, se desarrolla a continuación una descripción general:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Disponibilidad de recursos
                        p.card-text.text-center
                        | Garantiza capital para operar, adquirir insumos y ejecutar actividades.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Planeación financiera
                        p.card-text.text-center
                        | Organiza ingresos, costos y gastos conforme a metas definidas.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Reducción del riesgo
                        p.card-text.text-center
                        | Disminuye retrasos e imprevistos derivados de falta de recursos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Uso eficiente de recursos
                        p.card-text.text-center
                        | Facilita priorización y control del presupuesto.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Viabilidad económica
                        p.card-text.text-center
                        | Permite determinar si el proyecto es sostenible y rentable.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img6.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") Adicionalmente, la financiación facilita la toma de decisiones estratégicas, ya que permite priorizar actividades, ajustar el alcance del proyecto y definir mecanismos de control financiero.
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, en proyectos con recursos limitados, una adecuada gestión financiera permite identificar cuáles actividades deben ejecutarse primero y cuáles pueden ajustarse o reprogramarse, garantizando el cumplimiento de los objetivos principales.
    Separador
    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Importancia de la financiación en los proyectos
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-7
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Las fuentes de financiación corresponden a los mecanismos mediante los cuales se obtienen los recursos económicos necesarios para el desarrollo del proyecto. Estas fuentes pueden clasificarse según su origen, naturaleza y condiciones de acceso, lo que permite identificar diferentes alternativas de financiación de acuerdo con las características y necesidades del proyecto. La selección de una fuente de financiación requiere analizar variables clave que inciden directamente en la sostenibilidad financiera. Entre las principales se encuentran:
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img8.png', style="object-fit: cover;")
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta03_1.svg', style="width:100px").m-auto
          p.text-center Costo del capital.          
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta03_1.svg', style="width:100px").m-auto
          p.text-center Nivel de riesgo.          
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta03_1.svg', style="width:100px").m-auto
          p.text-center Condiciones de acceso.          
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta03_1.svg', style="width:100px").m-auto
          p.text-center Impacto en la estructura financiera del proyecto.           
    //- Fin Tarjetas
    p(data-aos="fade-left") Para comprender mejor las opciones disponibles, se presenta la siguiente clasificación:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Entidades financieras")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Entidades financieras
                p Recursos obtenidos mediante créditos u otros productos financieros, sujetos a intereses y condiciones contractuales.
          .py-3.py-md-4(titulo="Inversión privada")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_2.png')
              .col-md-6
                h4 Inversión privada
                p Capital aportado por terceros a cambio de participación en utilidades, propiedad o decisiones estratégicas.
          .py-3.py-md-4(titulo="Capital propio")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_3.png')
              .col-md-6
                h4 Capital propio
                p Recursos aportados directamente por los propietarios o promotores del proyecto.
          .py-3.py-md-4(titulo="Convocatorias y fondos de apoyo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana01_4.png')
              .col-md-6
                h4 Convocatorias y fondos de apoyo
                p Recursos concursables provenientes de entidades públicas o privadas, orientados al impulso de proyectos específicos.
    //- Cierres Pestanas horizontales
    p(data-aos="fade-left") La elección adecuada dependerá del nivel de madurez del proyecto, su capacidad de generar ingresos, el riesgo asumido y los objetivos estratégicos planteados.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Entidades financieras
    //- Título con imagen
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") Las entidades financieras representan una de las alternativas más utilizadas para la obtención de recursos externos. Sin embargo, su uso requiere un análisis técnico previo que permita determinar la conveniencia de asumir obligaciones crediticias dentro del proyecto.
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            .p-4.bg-color-6 
              p.mb-4 En la práctica, el acceso a financiación mediante créditos implica evaluar la capacidad del proyecto para generar flujos de ingresos suficientes que permitan cumplir con las obligaciones adquiridas. Este análisis considera variables como:
                .row.justify-content-center
                  .col-md-6.col-lg-5
                    ul.lista-ul.mb-0
                      li.d-flex.mb-2
                        i.fas.fa-check-circle.me-2(style="color:#3a6673")
                        p.mb-0 Monto del crédito. 
                      li.d-flex.mb-2
                        i.fas.fa-check-circle.me-2(style="color:#3a6673")
                        p.mb-0 Tasa de interés efectiva. 
                      li.d-flex.mb-2
                        i.fas.fa-check-circle.me-2(style="color:#3a6673")
                        p.mb-0 Plazos de amortización.                   
                  .col-md-6.col-lg-5
                    ul.lista-ul.mb-0
                      li.d-flex.mb-2
                        i.fas.fa-check-circle.me-2(style="color:#3a6673")
                        p.mb-0 Períodos de gracia. 
                      li.d-flex.mb-2
                        i.fas.fa-check-circle.me-2(style="color:#3a6673")
                        p.mb-0 Garantías exigidas.
              p Desde un enfoque aplicado, la financiación bancaria resulta adecuada cuando el proyecto presenta una estructura financiera sólida, proyecciones de ingresos estables y un nivel de riesgo controlado. En contraste, su uso en proyectos sin validación de mercado o sin flujo de ingresos definido puede generar desequilibrios financieros.          
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img9.png", data-aos="zoom-in" style="max-width: 458px")
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, en un proyecto de comercialización, acceder a un crédito para ampliar inventario puede ser viable si existe una demanda comprobada. De lo contrario, se incrementa el riesgo de incumplimiento.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Inversión privada
    //- Título con imagen
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 La inversión privada constituye una alternativa de financiación que permite transferir parte del riesgo del proyecto a terceros, a cambio de una participación en los beneficios o en la toma de decisiones.
        .row.align-items-start.mb-10.bg-color-6.p-3(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Desde una perspectiva técnica, este tipo de financiación requiere un proceso de valoración del proyecto, en el cual se analizan aspectos como el potencial de crecimiento, la rentabilidad esperada y la escalabilidad del modelo de negocio. 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in" style="max-width: 458px")
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-7
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img12.png', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Estos elementos son determinantes para atraer inversionistas y establecer condiciones de participación. En la práctica, la inversión privada es especialmente relevante en proyectos innovadores o con alto potencial de expansión, donde el acceso a capital permite acelerar su desarrollo. No obstante, implica ceder cierto nivel de control, aspecto que debe valorarse dentro de la estrategia general del proyecto.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Capital propio
    //- Título con imagen
    p(data-aos="fade-left") El uso de capital propio representa una alternativa de financiación que permite iniciar o desarrollar un proyecto sin generar obligaciones financieras externas. Sin embargo, su aplicación requiere un análisis cuidadoso del riesgo asumido y de la capacidad de recuperación de la inversión.
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img13.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0.bg-color-6.p-4 Desde un enfoque aplicado, el capital propio es recomendable en etapas iniciales del proyecto, cuando aún no se cuenta con suficiente validación para acceder a fuentes externas. Esta estrategia permite mantener el control total sobre el proyecto y facilita la toma de decisiones.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") No obstante, el uso exclusivo de recursos propios puede limitar el crecimiento del proyecto, especialmente cuando se requieren inversiones mayores. Por esta razón, suele combinarse con otras fuentes de financiación en etapas posteriores.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Convocatorias y fondos de apoyo
    //- Título con imagen
    p(data-aos="fade-left") Las convocatorias y fondos de apoyo constituyen una alternativa de financiación que, en muchos casos, no implica la devolución de recursos, lo que las convierte en una opción favorable para el desarrollo de proyectos. Sin embargo, el acceso a estos recursos exige cumplir criterios técnicos específicos, entre los cuales se destacan:
    //- Inicio Tarjetas
    .row.justify-content-center(data-aos="fade-right")
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.h-100.bg-color-7.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_1.png', alt='').w-100
          .p-4            
            p.text-center.mb-0 Alineación del proyecto con los objetivos de la convocatoria. 
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.h-100.bg-color-7.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_2.png', alt='').w-100
          .p-4            
            p.text-center.mb-0 Calidad técnica de la propuesta presentada. 
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.h-100.bg-color-7.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema1/tarjeta04_3.png', alt='').w-100
          .p-4            
            p.text-center.mb-0 Capacidad operativa y financiera para ejecutar el proyecto. 
    //- Fin Tarjetas
    .row.align-items-start.mb-10.bg-color-6.p-3.justify-content-center.align-items-center(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") En la práctica, estos mecanismos de financiación resultan especialmente útiles en proyectos de innovación, emprendimiento o impacto social. No obstante, su carácter competitivo implica que no todos los proyectos logran acceder a estos recursos, por lo que deben asumirse como una alternativa complementaria y no como única fuente de financiación. En síntesis, una estrategia financiera sólida suele combinar diversas fuentes de financiación, equilibrando costo, riesgo y sostenibilidad según la etapa de desarrollo del proyecto.
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Requisitos y condiciones de financiación
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") La selección de una fuente de financiación no debe basarse únicamente en la disponibilidad de recursos, sino en el análisis de los requisitos y condiciones asociados, ya que estos determinan el impacto financiero del proyecto en el tiempo.
    p(data-aos="fade-left") En términos técnicos, este análisis permite evaluar el costo real de la financiación, la capacidad de cumplimiento de las obligaciones y el nivel de riesgo asociado. Ignorar estos factores puede comprometer la viabilidad del proyecto, incluso si inicialmente se cuenta con los recursos necesarios. Para una adecuada toma de decisiones, es conveniente considerar los siguientes componentes:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta05_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Documentación requerida
                        p.card-text.text-center
                        | Sustenta la viabilidad técnica, financiera y legal del proyecto.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta05_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Tasas de interés
                        p.card-text.text-center
                        | Determinan el costo del dinero en el tiempo.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta05_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Plazos de pago
                        p.card-text.text-center
                        | Inciden en el valor de las cuotas y en el flujo de caja.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta05_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Garantías exigidas
                        p.card-text.text-center
                        | Respaldan el cumplimiento de las obligaciones financieras.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta05_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Viabilidad financiera
                        p.card-text.text-center
                        | Define la capacidad real del proyecto para sostener la financiación.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img14.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") El análisis integral de estos factores permite seleccionar alternativas acordes con la capacidad operativa y financiera del proyecto.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Documentación requerida
    //- Título con imagen
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") La documentación requerida en los procesos de financiación no debe entenderse únicamente como un requisito administrativo, sino como un instrumento técnico que permite sustentar la viabilidad del proyecto y respaldar la toma de decisiones por parte de entidades financieras o inversionistas.
    p(data-aos="fade-left") Desde una perspectiva aplicada, la calidad, coherencia y precisión de la documentación influyen directamente en la posibilidad de acceder a recursos, ya que evidencian que el proyecto ha sido estructurado de manera organizada, con claridad en sus objetivos, costos y proyecciones. En términos técnicos, la documentación cumple tres funciones principales:
    //- Inicio Tarjetas
    .row.mt-5.justify-content-center.mb-5
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Soporte financiero</b>
          .card-body.bg-white
            | Evidencia la estructura de costos, inversión y proyección de ingresos.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Soporte técnico</b>
          .card-body.bg-white
            | Describe el proyecto, su alcance y su viabilidad operativa.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Soporte estratégico</b>
          .card-body.bg-white
            | Demuestra la coherencia entre el problema identificado y la solución propuesta.
    //- Fin Tarjetas
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 Entre los documentos más relevantes se encuentran:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Plan de negocio. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Presupuesto detallado del proyecto. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Proyecciones financieras de ingresos y gastos. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Flujo de caja proyectado. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Documentación legal del solicitante.                  
            p En la práctica, la elaboración rigurosa de esta documentación permite fortalecer la estructuración del proyecto y mejorar su nivel de credibilidad ante terceros. Entre sus principales aportes se destacan los siguientes:
            ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Organiza la información estratégica de manera lógica y consistente. 
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Identifica debilidades técnicas o financieras antes de presentar la solicitud. 
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Permite ajustar costos, tiempos y proyecciones con criterios más realistas. 
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Facilita la evaluación externa por parte de entidades financiadoras. 
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Incrementa la confianza sobre la capacidad de ejecución del responsable del proyecto. 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img15.png", data-aos="zoom-in" style="max-width: 458px")          
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, un proyecto con alto potencial comercial puede ser rechazado si presenta inconsistencias entre el presupuesto, las proyecciones financieras y el flujo de caja, ya que ello genera dudas sobre su viabilidad real.
    p.mb-5(data-aos="fade-left") Para estructurar la documentación con criterio técnico, se recomienda desarrollar un proceso secuencial que garantice coherencia entre todos los componentes:
    //- Inicio Infografia
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Etapa 1
              p Consolidar la información general del proyecto: objetivos, actividades, recursos y alcance. 
              p <b>Resultado esperado:</b> base técnica organizada.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea01_1.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea01_2.png').img125
            .col-lg.text-start
              h3 Etapa 2
              p Elaborar el presupuesto detallado con costos directos e indirectos. 
              p <b>Resultado esperado:</b> necesidades reales de inversión definidas.
          .row
            .col-lg
              h3 Etapa 3
              p Construir proyecciones de ingresos y gastos con supuestos sustentados. 
              p <b>Resultado esperado:</b> escenario financiero estimado.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea01_3.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea01_4.png').img125
            .col-lg.text-start
              h3 Etapa 4
              p Diseñar el flujo de caja proyectado por periodos. 
              p <b>Resultado esperado:</b> capacidad de liquidez identificada.
          .row
            .col-lg
              h3 Etapa 5
              p Integrar toda la información en el plan de negocio o expediente financiero. 
              p <b>Resultado esperado:</b> documento final listo para presentar.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea01_5.png').img125          
    //- Fin Infografia
    p(data-aos="fade-left") Este proceso favorece la coherencia entre los diferentes componentes del proyecto, mejora la calidad de la solicitud y aumenta la probabilidad de acceder a financiación en mejores condiciones.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Tasas, plazos y condiciones
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las tasas, plazos y condiciones constituyen los elementos que determinan el costo real de la financiación y su impacto en la sostenibilidad del proyecto. Por esta razón, su análisis debe realizarse de manera técnica antes de tomar cualquier decisión.
    p(data-aos="fade-left") Desde un enfoque aplicado, no basta con conocer el monto solicitado. También es necesario revisar las condiciones bajo las cuales se otorga el financiamiento, ya que estas pueden afectar la rentabilidad, la liquidez y la capacidad operativa del proyecto. Para comprender mejor estos factores, se presentan los principales elementos de análisis:
    //- Inicio Tarjetas
    .row.mt-5.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Tasa de interés</b>
          .card-body.bg-white
            | Representa el costo del dinero en el tiempo. Puede ser fija o variable.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Plazo de financiación</b>
          .card-body.bg-white
            | Tiempo establecido para el pago total de la obligación.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Período de gracia</b>
          .card-body.bg-white
            | Tiempo durante el cual no se realizan pagos de capital o se pagan parcialmente.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .card.h-100.border-0.shadow-sm
          p.text-center.p-2.bg-color-2.mb-0.rounded-2 <b>Garantías</b>
          .card-body.bg-white
            | Respaldos exigidos por la entidad financiera para aprobar el crédito.
    //- Fin Tarjetas
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 Cada uno de estos componentes influye directamente en el valor total a pagar, en el monto de las cuotas periódicas y en el nivel de riesgo asumido. En la práctica, revisar estas variables permite:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Comparar distintas alternativas de financiación. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Seleccionar una opción acorde con la capacidad de pago. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Evitar sobrecargas financieras futuras. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Ajustar el presupuesto del proyecto. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Mejorar la sostenibilidad financiera. 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in" style="max-width: 458px")          
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, elegir una alternativa con baja tasa de interés, pero sin período de gracia, puede afectar proyectos que requieren varios meses para iniciar la generación de ingresos. Aunque el costo financiero aparente ser menor, la presión sobre la liquidez inicial puede comprometer la operación.
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 Para reducir riesgos financieros y seleccionar una opción conveniente, se recomienda seguir este proceso:
          ol.lista-ol--cuadro.ms-4
            li.d-flex.mb-3.mt-3 
              .lista-ol--cuadro__vineta
                span A
              | Identificar las alternativas disponibles. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span B
              | Comparar tasas de interés efectivas. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span C
              | Evaluar plazos y condiciones de pago. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span D
              | Analizar el impacto en el flujo de caja. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span E
              | Seleccionar la opción más viable. 
        .row.bg-color-6.p-3.justify-content-center.align-items-center(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 50px").mx-auto
          .col-lg
            p(data-aos="fade-left") Este análisis permite tomar decisiones informadas, prevenir desequilibrios financieros y alinear la financiación con las necesidades reales del proyecto.
      .col-lg-5.mb-3
        figure
          img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in" style="max-width: 458px")
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Análisis de viabilidad financiera
    //- Título con imagen
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") El análisis de viabilidad financiera es un proceso técnico que permite determinar si el proyecto es capaz de sostenerse económicamente en el tiempo, considerando sus ingresos, costos y obligaciones financieras.
    p(data-aos="fade-left") Este análisis no solo permite validar la posibilidad de ejecutar el proyecto, sino también identificar riesgos, ajustar su estructura y definir estrategias orientadas a garantizar su sostenibilidad. Para desarrollar esta evaluación, es necesario considerar algunos componentes esenciales:        
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta06_1.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Ingresos proyectados
          p.text-center Estimación de los recursos que el proyecto puede generar.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta06_1.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Costos y gastos
          p.text-center Identificación de los egresos necesarios para su ejecución.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta06_1.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Flujo de caja
          p.text-center Relación entre ingresos y egresos a lo largo del tiempo.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-white.border
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta06_1.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Punto de equilibrio
          p.text-center Momento en el que los ingresos cubren los costos totales.          
    //- Fin Tarjetas
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 Estos elementos permiten construir una visión financiera integral y anticipar el comportamiento económico del proyecto antes de comprometer recursos. En la práctica, el análisis de viabilidad financiera resulta útil porque permite:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Determinar si el proyecto puede generar beneficios. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Identificar posibles déficits financieros. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Ajustar costos o estrategias antes de ejecutar. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Evaluar la capacidad de pago frente a financiación externa. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Reducir la incertidumbre financiera. 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img21.png", data-aos="zoom-in" style="max-width: 458px")          
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, un proyecto que presenta flujo de caja negativo durante sus primeros meses puede requerir estrategias como períodos de gracia, capital de trabajo adicional o una implementación gradual que reduzca la presión financiera inicial.
    .row.mb-5
      .col-lg-7
        .row.align-items-start(data-aos="fade-left")
          .col-lg
          p.mb-0 Para desarrollar este análisis de manera técnica, se recomienda seguir un proceso estructurado:
          ol.lista-ol--cuadro.ms-4
            li.d-flex.mt-3 
              .lista-ol--cuadro__vineta
                span A
              | Definir los ingresos esperados del proyecto. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span B
              | Identificar todos los costos y gastos asociados. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span C
              | Elaborar el flujo de caja proyectado por periodos. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span D
              | Calcular el punto de equilibrio. 
            li.d-flex 
              .lista-ol--cuadro__vineta
                span E
              | Evaluar la rentabilidad esperada del proyecto. 
        .row.align-items-start.mb-10.bg-color-6.p-1(data-aos="fade-left")            
          .col-lg
            p(data-aos="fade-left") Este procedimiento permite relacionar ingresos, costos y rentabilidad con mayor precisión, facilitando decisiones más seguras. En términos estratégicos, el análisis de viabilidad financiera no solo permite decidir si un proyecto es viable, sino también establecer cómo debe estructurarse para garantizar su sostenibilidad y crecimiento. Por ello, este proceso constituye una base fundamental para la toma de decisiones financieras, la selección de fuentes de financiación y la reducción de riesgos asociados a la inversión.
      .col-lg-5.mb-3
        figure
          img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in" style="max-width: 458px")
    Separador
    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Presupuesto del proyecto: 
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-7(data-aos="fade-right")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El presupuesto del proyecto constituye una herramienta fundamental dentro de la gestión financiera, ya que permite estimar, organizar y controlar los recursos económicos necesarios para la ejecución de las actividades definidas. Desde un enfoque técnico, no se limita a un listado de costos, sino que integra necesidades operativas, tiempos de ejecución y fuentes de financiación disponibles.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img24.png', style="object-fit: cover;")
    p.mb-5(data-aos="fade-left") Su adecuada elaboración permite anticipar requerimientos financieros, distribuir recursos con criterios de prioridad y reducir la incertidumbre durante el desarrollo del proyecto. Además, facilita la coordinación entre las áreas técnica, administrativa y financiera. En la práctica, el presupuesto permite responder preguntas esenciales relacionadas con la viabilidad económica del proyecto:
    .row.justify-content-center.align-items-center.mb-5.mt-3
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 ¿Cuánto cuesta ejecutar el proyecto?
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 ¿Qué recursos se requieren?
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 ¿En qué momento deben utilizarse?
    
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 ¿Cómo se financiarán las actividades?
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 ¿Qué margen existe para contingencias?
    .row.justify-content-center.mb-10
      .col-lg-8
        .row.align-items-start.mb-10.bg-color-6.p-4(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 50px").mx-auto
          .col-lg
            p(data-aos="fade-left") Estas preguntas permiten garantizar coherencia entre la formulación técnica del proyecto y su respaldo económico.
    p.mt-5(data-aos="fade-left") Asimismo, el presupuesto cumple una función de control, ya que permite comparar lo planeado con lo ejecutado, identificar desviaciones y aplicar correctivos oportunamente. Entre los principales beneficios derivados de una adecuada presupuestación se encuentran los siguientes:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta08_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Optimización de recursos
                        p.card-text.text-center
                        | Permite asignar el capital según prioridades estratégicas.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta08_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Control financiero
                        p.card-text.text-center
                        | Facilita seguimiento permanente a costos y gastos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta08_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Reducción de riesgos
                        p.card-text.text-center
                        | Disminuye probabilidades de sobrecostos o falta de liquidez.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta08_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Toma de decisiones
                        p.card-text.text-center
                        | Brinda información objetiva para ajustes operativos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta08_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Sostenibilidad
                        p.card-text.text-center
                        | Favorece continuidad y cumplimiento de objetivos.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img25.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") Por el contrario, un presupuesto incompleto o mal estructurado puede ocasionar retrasos, uso ineficiente de recursos o inviabilidad financiera.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Costos del proyecto
    //- Título con imagen
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") Los costos del proyecto corresponden al conjunto de recursos económicos necesarios para ejecutar las actividades previstas. Su identificación y clasificación adecuada es fundamental para construir un presupuesto confiable y alineado con la realidad operativa.
    p(data-aos="fade-left") Desde una perspectiva técnica, conocer los costos reales permite calcular el valor total del proyecto, establecer prioridades de inversión y diseñar mecanismos de control financiero. Para comprender mejor su estructura, los costos suelen clasificarse de la siguiente manera:     
    //- Inicio Tarjetas
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-2(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta09_1.svg', alt='' style="width:100px").m-auto
          h4 Costos directos
          p Se relacionan directamente con la ejecución de actividades específicas, como materia prima, mano de obra directa o insumos.
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-10(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta09_2.svg', style="width:100px").m-auto
          h4.text-white Costos indirectos
          p.text-white Son necesarios para operar, aunque no se vinculan a una actividad puntual, como administración, transporte o servicios.
    //- Fin Tarjetas
    .row.mb-5.mt-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 En la práctica, identificar correctamente los costos permite fortalecer la gestión financiera mediante los siguientes aportes:
            ul.lista-ul.mb-0
              li.d-flex.mt-3
                i.fas.fa-check-circle.me-3(style="color:#3a6673")
                p.mb-0 Determinar el valor real del proyecto. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#3a6673")
                p.mb-0 Priorizar actividades según recursos disponibles. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#3a6673")
                p.mb-0 Evaluar viabilidad económica. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#3a6673")
                p.mb-0 Evitar subestimaciones presupuestales. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#3a6673")
                p.mb-0 Fortalecer el control financiero. 
        
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img26.png", data-aos="zoom-in" style="max-width: 458px")
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, si un proyecto productivo incluye solo costos de materiales y omite transporte, servicios públicos o mantenimiento, puede presentar déficits durante la ejecución.
    p.text-center(data-aos="fade-left") Para realizar una adecuada identificación de costos, se recomienda seguir el siguiente proceso metodológico:
    //- Inicio Infografia
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row
                  .col-lg
                    h3 A. Identificación
                    p Listar actividades del proyecto.
                  .col-auto
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/linea02_1.png').img125
                .row
                  .col-auto
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/linea02_2.png').img125
                  .col-lg.text-start
                    h3 B. Recursos
                    p Determinar materiales, talento humano y servicios requeridos.
                .row
                  .col-lg
                    h3 C. Valoración
                    p Asignar valor económico a cada recurso.
                  .col-auto
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/linea02_3.png').img125
                .row
                  .col-auto
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/linea02_4.png').img125
                  .col-lg.text-start
                    h3 D. Clasificación
                    p Organizar costos en directos e indirectos.
                .row
                  .col-lg
                    h3 E. Consolidación
                    p Integrar la información al presupuesto general.
                  .col-auto
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/linea02_5.png').img125
          //- Fin Infografia
        p.text-center(data-aos="fade-left") Este procedimiento mejora la precisión financiera y facilita una ejecución ordenada.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Inversión inicial
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inversión inicial corresponde al conjunto de recursos económicos necesarios para poner en marcha el proyecto. Incluye todos los gastos previos al inicio de operaciones y aquellos requeridos para garantizar el funcionamiento durante las primeras etapas.
    P(data-aos="fade-left") Desde un enfoque aplicado, la inversión inicial representa el punto de partida financiero del proyecto y define el nivel mínimo de recursos requeridos para comenzar sin interrupciones. Por esta razón, su estimación debe realizarse con criterios técnicos y financieros claros.
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img29.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 Una adecuada valoración es fundamental, ya que una subestimación puede generar insuficiencia de capital en etapas tempranas, mientras que una sobreestimación puede dificultar el acceso a financiación o comprometer recursos innecesariamente. En términos estratégicos, la inversión inicial permite:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Determinar cuánto capital se requiere para iniciar operaciones. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Diseñar una estructura financiera adecuada. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Medir el nivel de riesgo económico inicial. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Planificar la puesta en marcha del proyecto. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Reducir problemas de liquidez en los primeros periodos. 
    p(data-aos="fade-left") Para estimarla correctamente, es necesario reconocer los componentes que normalmente la integran:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta10_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Equipos y maquinaria
                        p.card-text.text-center
                        | Herramientas, tecnología o activos productivos necesarios.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta10_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Infraestructura o adecuaciones
                        p.card-text.text-center
                        | Adaptaciones físicas o tecnológicas requeridas.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta10_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Compra inicial de insumos
                        p.card-text.text-center
                        | Inventario básico para iniciar actividades.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta10_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Capital de trabajo
                        p.card-text.text-center
                        | Recursos destinados a cubrir gastos iniciales de operación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta10_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Gastos legales y administrativos
                        p.card-text.text-center
                        | Registros, licencias o trámites requeridos.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img30.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") Cada uno de estos elementos debe valorarse de forma realista para evitar desviaciones presupuestales durante el inicio del proyecto.    
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, un emprendimiento comercial que inicia sin capital de trabajo suficiente puede presentar dificultades para pagar nómina, proveedores o servicios en los primeros meses de operación.
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 Para calcular este valor con mayor precisión, se recomienda seguir el siguiente proceso:
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mt-3 
                  .lista-ol--cuadro__vineta
                    span A
                  | Identificar los recursos necesarios para iniciar el proyecto. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span B
                  | Estimar el costo individual de cada recurso. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span C
                  | Determinar el capital de trabajo requerido para la operación inicial. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span D
                  | Consolidar el valor total de la inversión inicial. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span E
                  | Relacionar la inversión con las fuentes de financiación disponibles.               
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 50px").mx-auto
          .col-lg
            p(data-aos="fade-left") Este análisis permite iniciar operaciones con una base financiera más sólida, mejorar la planeación económica y reducir riesgos en la etapa de arranque del proyecto.                  
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img32.png", data-aos="zoom-in" style="max-width: 458px")                  
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Proyección básica de gastos
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-7(data-aos="fade-right")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La proyección básica de gastos consiste en estimar los egresos del proyecto a lo largo del tiempo, permitiendo anticipar necesidades financieras y evaluar su sostenibilidad operativa. A diferencia del presupuesto inicial, esta herramienta incorpora el comportamiento económico del proyecto en diferentes periodos, lo que facilita una planeación más realista y dinámica.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img33.png', style="object-fit: cover;")
    p(data-aos="fade-left") Desde una perspectiva técnica, permite prever momentos de alta exigencia financiera, programar recursos oportunamente y reducir riesgos derivados de una inadecuada administración del gasto. Por ello, se convierte en un instrumento clave para la toma de decisiones durante la ejecución del proyecto. Entre los principales beneficios de esta herramienta se encuentran los siguientes:
    .row.justify-content-center.align-items-center.mb-5.mt-3
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 Anticipar necesidades de financiación futura. 
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 Detectar meses o etapas con mayores egresos. 
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 Ajustar estrategias operativas y financieras. 
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 Evaluar la sostenibilidad económica del proyecto. 
      .col-lg-4.col-md-6.mb-4
        .card-custom
          .card-custom__side-icon
            img(src="@/assets/curso/tema1/tarjeta07_1.svg")
          .card-custom__content
            p.mb-0 Mejorar el control entre gastos estimados y gastos reales. 
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img34.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, un proyecto puede requerir mayores egresos durante su fase inicial debido a contratación de personal, adquisición de insumos, mercadeo o adecuaciones locativas, lo que exige contar con liquidez suficiente para operar sin interrupciones.
    p(data-aos="fade-left") Para construir una proyección confiable, conviene identificar los principales tipos de gasto:        
    //- Inicio Carrusel
    .row.bg-color-12
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta12_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Operativos
                        p.card-text.text-center
                        | Transporte, mantenimiento, comunicaciones y funcionamiento diario.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta12_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Variables
                        p.card-text.text-center
                        | Cambian según el nivel de producción o actividad desarrollada.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta12_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Fijos
                        p.card-text.text-center
                        | Salarios, arriendo y servicios periódicos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta12_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Administrativos
                        p.card-text.text-center
                        | Papelería, <i>software,</i> honorarios contables y gestión interna.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta12_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Contingencias
                        p.card-text.text-center
                        | Recursos destinados a imprevistos o emergencias operativas.
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 La identificación adecuada de estos egresos permite proyectar con mayor precisión el comportamiento financiero del proyecto y prevenir faltantes de recursos. Una vez definidos los gastos, se recomienda seguir el siguiente proceso:
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mt-3 
                  .lista-ol--cuadro__vineta
                    span A
                  | Identificar los gastos previstos del proyecto. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span B
                  | Clasificarlos en fijos, variables y extraordinarios. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span C
                  | Estimar aumentos, variaciones o estacionalidades en el tiempo. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span D
                  | Elaborar una proyección mensual, trimestral o anual. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span E
                  | Analizar el impacto sobre el flujo de caja. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span F
                  | Ajustar la proyección según resultados reales obtenidos.            
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img35.png", data-aos="zoom-in" style="max-width: 458px")
      p(data-aos="fade-left") La proyección de gastos permite tomar decisiones estratégicas, como ajustar el alcance del proyecto, redefinir estructuras de costos o replantear fuentes de financiación. Por ello, constituye una herramienta esencial para garantizar la viabilidad económica, la continuidad operativa y la estabilidad financiera del proyecto.                
      Separador
      //- Inicio Tema1.6
      .row.mt-5
          #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.6 Plan de negocio
      .row.mb-10
        .col-lg-7
          .row.align-items-start.mb-10(data-aos="fade-left")  
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p(data-aos="fade-left") El plan de negocio constituye una herramienta estratégica que permite estructurar de manera integral un proyecto, articulando sus componentes técnicos, operativos, comerciales y financieros en un solo documento. Desde un enfoque profesional, no se limita a describir una idea, sino que permite evaluar su viabilidad, proyectar su comportamiento en el tiempo y sustentar la toma de decisiones.
          .row.align-items-start.mb-3(data-aos="fade-left")
            .col-lg
            p.mb-0.bg-color-6.p-4 En la práctica, el plan de negocio funciona como una guía para la ejecución del proyecto y como un instrumento de presentación ante terceros, especialmente cuando se requiere acceder a fuentes de financiación. A través de este documento se evidencia la coherencia entre el problema identificado, la solución propuesta y los recursos necesarios para su implementación.
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/img36.png", data-aos="zoom-in" style="max-width: 458px")
        p(data-aos="fade-left") Además, permite organizar la información del proyecto de manera estructurada, facilitando el análisis de aspectos clave como el mercado, los costos, la operación y la rentabilidad. Entre los principales aportes del plan de negocio se destacan los siguientes:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta13_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Organización integral
                        p.card-text.text-center
                        | Reúne en un solo documento los componentes esenciales del proyecto.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta13_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Toma de decisiones
                        p.card-text.text-center
                        | Facilita evaluar alternativas antes de ejecutar.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta13_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Gestión financiera
                        p.card-text.text-center
                        | Permite identificar necesidades de inversión y financiación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta13_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Presentación externa
                        p.card-text.text-center
                        | Fortalece procesos ante inversionistas o entidades financieras.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta13_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Seguimiento
                        p.card-text.text-center
                        | Sirve como guía para controlar avances y resultados.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img37.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") Un plan de negocio bien estructurado fortalece la formulación del proyecto y mejora sus posibilidades de ejecución exitosa.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Definición
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-7(data-aos="fade-right")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El plan de negocio es un documento técnico que describe de forma estructurada los elementos fundamentales de un proyecto, incluyendo su propósito, alcance, estrategia de operación y proyección financiera. Desde una perspectiva aplicada, no debe entenderse únicamente como un requisito formal, sino como una herramienta de análisis que permite validar la viabilidad del proyecto antes de su ejecución.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img38.png', style="object-fit: cover;")
    p(data-aos="fade-left") Su elaboración exige revisar cada componente del proyecto, identificar posibles riesgos y definir estrategias de desarrollo. En la práctica, un plan de negocio bien elaborado permite obtener beneficios concretos como los siguientes:          
    //- Inicio Infografia
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Clarificación de objetivos
              p Define metas y dirección estratégica.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea03_1.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea03_2.png').img125
            .col-lg.text-start
              h3 Identificación de oportunidades y riesgos
              p Facilita prevención y aprovechamiento de escenarios.
          .row
            .col-lg
              h3 Organización de recursos
              p Determina requerimientos humanos, técnicos y financieros.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea03_3.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea03_4.png').img125
            .col-lg.text-start
              h3 Evaluación de sostenibilidad
              p Permite analizar permanencia en el tiempo.
          .row
            .col-lg
              h3 Mejor toma de decisiones
              p Brinda información estructurada para actuar con mayor seguridad.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/linea03_5.png').img125
    //- Fin Infografia
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img39.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, un proyecto que no cuenta con plan de negocio difícilmente puede demostrar su viabilidad ante una entidad financiera o un inversionista.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Componentes del plan de negocio
    //- Título con imagen
    p(data-aos="fade-left") A continuación se presentan los componentes principales del plan de negocio.
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
      .row.g-0.align-items-stretch
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema1/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#000") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Componentes del plan de negocio
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema1/img40.png')
    //- Fin Podcast
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Relación con la financiación
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img41.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de negocio tiene una relación directa con la financiación del proyecto, ya que constituye uno de los principales soportes técnicos y financieros para la obtención de recursos. Desde un enfoque aplicado, este documento permite sustentar la necesidad de capital, demostrar capacidad operativa y evidenciar posibilidades reales de generación de ingresos. 
    p(data-aos="fade-left") Por esta razón, suele ser requerido por entidades financieras, inversionistas y programas de apoyo empresarial. Entre los principales aportes del plan de negocio frente a la financiación se encuentran los siguientes:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta14_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Demostrar viabilidad
                        p.card-text.text-center
                        | Evidencia que el proyecto puede ejecutarse con éxito.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta14_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Sustentar necesidad de financiación
                        p.card-text.text-center
                        | Justifica el monto requerido y su destinación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta14_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Probar capacidad de ingresos
                        p.card-text.text-center
                        | Presenta proyecciones económicas razonables.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta14_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Reducir percepción de riesgo
                        p.card-text.text-center
                        | Genera mayor confianza en financiadores.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta14_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Respaldar decisiones de inversión
                        p.card-text.text-center
                        | Facilita procesos de evaluación externa.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img42.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") En la práctica, las entidades financieras y los inversionistas analizan el plan de negocio para decidir sobre la asignación de recursos. Por ello, la calidad técnica del documento influye directamente en las posibilidades de acceso a financiación.
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img43.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo,</b> un plan de negocio que no presenta proyecciones financieras claras o que no justifica adecuadamente sus costos difícilmente será considerado viable.
    .row.mb-5.mt-5
      .col-lg-7
        .row.align-items-start(data-aos="fade-left")
          .col-lg
          p.mb-0 Además, el plan de negocio integra elementos esenciales del proyecto en un solo documento, lo que facilita su análisis, gestión y ejecución. Entre los principales componentes integrados se encuentran:
            ul.lista-ul.mb-0
                  li.d-flex.mt-3
                    i.fas.fa-check-circle.me-3(style="color:#3a6673")
                    p.mb-0 <b>Presupuesto del proyecto</b>, que consolida costos, inversión y uso de recursos. 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#3a6673")
                    p.mb-0 <b>Fuentes de financiación</b>, que identifican alternativas de capital disponibles. 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#3a6673")
                    p.mb-0 <b>Estructura operativa</b>, que define cómo se ejecutarán las actividades. 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#3a6673")
                    p.mb-0 <b>Proyecciones financieras</b>, que permiten estimar sostenibilidad económica.                  
        .row.align-items-start.mb-10.bg-color-6.p-4(data-aos="fade-left")            
          .col-lg
            p(data-aos="fade-left") Esta integración mejora la coherencia entre los diferentes componentes del proyecto y fortalece la toma de decisiones estratégicas. En síntesis, el plan de negocio no solo organiza la información del proyecto, sino que se convierte en una herramienta estratégica para gestionar recursos, reducir riesgos y aumentar las probabilidades de éxito.
      .col-lg-5.mb-3
        figure
          img(src="@/assets/curso/tema1/img44.png", data-aos="zoom-in" style="max-width: 458px")
    //- Inicio Tema1.7
    .row.mt-5
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7 Ejemplo aplicado de financiación de un proyecto
    p(data-aos="fade-left") Para comprender la aplicación práctica de los conceptos abordados, se presenta un ejemplo orientado a la estructuración financiera de un proyecto productivo dedicado a la producción y comercialización de productos artesanales. El objetivo consiste en generar ingresos mediante ventas directas, participación en ferias locales y canales digitales. Con el fin de organizar el proceso de financiación de manera secuencial, se resume a continuación cada una de las etapas principales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span A
                        | <h4>Definición de necesidades del proyecto</h4>
                      | Se identifican los recursos indispensables para iniciar actividades, como materia prima inicial, herramientas de producción, adecuación del espacio de trabajo y estrategias de comercialización. Esta etapa permite reconocer los requerimientos reales del proyecto y prevenir omisiones.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span B
                        | <h4>Elaboración del presupuesto</h4>
                      | Se estiman los costos asociados a la inversión inicial, costos operativos y gastos administrativos. Como resultado, se obtiene el valor total requerido para iniciar operaciones con una base financiera realista.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span C
                        | <h4>Proyección de ingresos y gastos</h4>
                      | Se calculan ingresos esperados por ventas, gastos mensuales y flujo de caja proyectado. Esto permite determinar la capacidad del proyecto para sostenerse en el tiempo y generar beneficios.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span D
                        | <h4>Identificación de fuentes de financiación</h4>
                      | Se analizan alternativas como capital propio, crédito financiero y convocatorias o fondos de apoyo. Cada opción debe revisarse según requisitos, condiciones y nivel de riesgo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span E
                        | <h4>Evaluación de alternativas</h4>
                      | Se comparan ventajas y limitaciones de cada fuente. El capital propio no genera deuda, el crédito amplía capacidad financiera y las convocatorias ofrecen recursos competitivos sin devolución.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_6.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span F
                        | <h4>Selección de la estrategia de financiación</h4>
                      | Se define la opción más conveniente o una combinación de varias fuentes. Por ejemplo, capital propio para iniciar, convocatorias para fortalecimiento y crédito para expansión futura.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_7.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span G
                        | <h4>Integración con el plan de negocio</h4>
                      | Se consolidan presupuesto, proyección financiera y estrategia de financiación en un documento estructurado. Esto facilita la presentación del proyecto ante terceros y orienta su ejecución.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_8.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    ol.lista-ol--cuadro.ms-4
                      li.d-flex.mb-3 
                        .lista-ol--cuadro__vineta
                          span H
                        | <h4>Evaluación final de viabilidad</h4>
                      | Se verifica capacidad para cubrir costos, flujo de caja positivo y sostenibilidad en el tiempo. Esta revisión permite decidir si el proyecto debe ejecutarse o ajustarse previamente.
    //- Fin Slideshow
    .row.justify-content-center.mb-10
      .col-lg-10
        .row.align-items-start.mb-10.bg-color-6.p-4.justify-content-center.align-items-center(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 100px").mx-auto
          .col-lg
            p(data-aos="fade-left") La secuencia anterior evidencia que la financiación del proyecto no depende únicamente de conseguir recursos económicos, sino de un proceso técnico que integra análisis, planeación y toma de decisiones estratégicas. Cuando cada paso se desarrolla de forma rigurosa, el proyecto mejora sus probabilidades de éxito, reduce riesgos financieros y fortalece su capacidad de crecimiento sostenible.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Errores comunes en la financiación del proyecto
    //- Título con imagen
    p(data-aos="fade-left") Durante la estructuración financiera pueden presentarse fallas frecuentes. Entre las más relevantes se encuentran las siguientes:
    .row.bg-color-12
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Subestimar costos reales
                        p.card-text.text-center
                        | Genera faltantes de recursos durante la ejecución.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 No analizar tasas y plazos
                        p.card-text.text-center
                        | Incrementa carga financiera futura.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Depender de una sola fuente
                        p.card-text.text-center
                        | Aumenta vulnerabilidad financiera.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 No elaborar proyecciones claras
                        p.card-text.text-center
                        | Dificulta la toma de decisiones.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Ignorar el flujo de caja
                        p.card-text.text-center
                        | Puede generar problemas de liquidez.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
