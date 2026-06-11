<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Puesta en marcha del proyecto
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La puesta en marcha del proyecto corresponde a la fase en la cual se ejecutan las actividades definidas durante el proceso de formulación, transformando la planificación en acciones concretas. En esta etapa se integran los recursos humanos, técnicos y financieros con el fin de dar cumplimiento a los objetivos establecidos.
    .row.mb-5.mt-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img2.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7        
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Desde un enfoque técnico, la puesta en marcha no es un proceso improvisado, sino una fase estructurada que requiere organización, coordinación y control. Implica la activación de todos los componentes del proyecto, incluyendo el cronograma, la asignación de responsabilidades, la gestión de recursos y la implementación de estrategias previamente definidas.
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
            p.mb-0.p-3.bg-color-6 En la práctica, esta etapa representa el momento en el que el proyecto se materializa, por lo que cualquier debilidad en la planificación puede evidenciarse durante su ejecución. Por esta razón, es fundamental que exista coherencia entre lo formulado y lo ejecutado.
    p(data-aos="fade-left") Además, la puesta en marcha permite validar las decisiones tomadas durante la formulación, identificar ajustes necesarios y responder a condiciones reales del entorno, lo que convierte esta fase en un proceso dinámico y de mejora continua. Entre los principales aportes de esta etapa se encuentran los siguientes:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Ejecución operativa
                    p Convierte la planificación en acciones concretas.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Integración de recursos
                    p Articula talento humano, recursos técnicos y financieros.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Validación de la formulación
                    p Permite comprobar si lo planeado funciona en condiciones reales.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Control y seguimiento
                    p Facilita supervisar avances y corregir desviaciones.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide01_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Mejora continua
                    p Favorece ajustes oportunos durante la ejecución.
    //- Fin Slideshow
    p(data-aos="fade-left") Una puesta en marcha bien estructurada incrementa la probabilidad de alcanzar los resultados esperados y fortalece la sostenibilidad del proyecto.    
    .row.bg-color-1
      .col-12
        .p-5
          //- Inicio Tema2.1
          .row.mt-5
              #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.1 Concepto de puesta en marcha
          .row.align-items-start.mb-10(data-aos="fade-left")  
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
            .col-lg
              p(data-aos="fade-left") La puesta en marcha se define como el proceso mediante el cual se inicia la ejecución del proyecto, integrando los recursos disponibles y desarrollando las actividades planificadas de acuerdo con un cronograma establecido.
          p(data-aos="fade-left") Sin embargo, desde una perspectiva aplicada, este concepto implica mucho más que iniciar actividades. Involucra la capacidad de coordinar procesos, gestionar recursos y tomar decisiones en tiempo real, garantizando que el proyecto avance conforme a lo planificado. En términos prácticos, la puesta en marcha permite cumplir funciones esenciales dentro del desarrollo del proyecto. Entre las principales se encuentran las siguientes:              
          //- Inicio Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Activar el cronograma
                        p.card-text.text-center
                        | Inicia formalmente las actividades programadas.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Asignar responsabilidades
                        p.card-text.text-center
                        | Define funciones para cada actor involucrado.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Utilizar recursos eficientemente
                        p.card-text.text-center
                        | Optimiza el uso del tiempo, dinero e insumos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Supervisar actividades
                        p.card-text.text-center
                        | Permite controlar avances y cumplimiento.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta01_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Aplicar ajustes
                        p.card-text.text-center
                        | Corrige desviaciones según los resultados obtenidos.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img3.png', style="max-width: 250px", data-aos="zoom-in").m-auto          
          p(data-aos="fade-left") Cada uno de estos propósitos contribuye a que el proyecto avance con mayor orden, coordinación y capacidad de respuesta frente a imprevistos.          
          .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img4.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 <b>Por ejemplo</b>, en un proyecto productivo, la puesta en marcha incluye desde la adecuación del espacio de trabajo hasta el inicio de la producción y la comercialización del producto.
          .row.mb-5.mt-5
            .col-lg-7
              .row.align-items-start.mb-3(data-aos="fade-left")
                .col-lg          
                  p.p-4.bg-color-6 Para desarrollar esta fase de manera organizada, se recomienda aplicar el siguiente proceso:
                    ul.lista-ul.mb-0
                      li.d-flex.mt-3
                        i.fas.fa-check-circle.me-3(style="color:#3a6673")
                        p.mb-0 <b>Verificar recursos:</b> confirmar disponibilidad humana, técnica y financiera. 
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#3a6673")
                        p.mb-0 <b>Revisar cronograma:</b> validar tiempos, secuencia de actividades y responsables. 
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#3a6673")
                        p.mb-0 <b>Asignar funciones:</b> establecer responsabilidades claras para cada participante. 
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#3a6673")
                        p.mb-0 <b>Iniciar actividades:</b> ejecutar las tareas programadas. 
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#3a6673")
                        p.mb-0 <b>Realizar seguimiento:</b> supervisar avances y resultados obtenidos. 
                p Este proceso permite garantizar que el proyecto se desarrolle de manera ordenada, controlada y alineada con los objetivos establecidos.
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/img5.png", data-aos="zoom-in" style="max-width: 458px")          
    Separador
    //- Inicio Tema2.2
    .row.mt-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Importancia de la implementación del proyecto
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-7.bg-color-7.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La implementación del proyecto es una etapa crítica, ya que determina si los objetivos definidos durante la formulación pueden alcanzarse en condiciones reales. Una adecuada ejecución permite materializar los resultados esperados, mientras que una implementación deficiente puede comprometer la viabilidad del proyecto.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img6.png', alt='', style="object-fit: cover;")          
    p(data-aos="fade-left") Desde un enfoque técnico, la importancia de esta etapa radica en que permite transformar la planeación en resultados medibles, manteniendo coherencia entre metas, recursos y tiempos establecidos. Además, facilita la validación práctica de las decisiones tomadas durante la fase de diseño. Entre las principales razones que explican su importancia se encuentran las siguientes:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Validar la planificación
                        p.card-text.text-center
                        | Permite comprobar la efectividad de lo diseñado.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Identificar desviaciones
                        p.card-text.text-center
                        | Detecta retrasos, fallas o sobrecostos.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Garantizar uso adecuado de recursos
                        p.card-text.text-center
                        | Favorece la eficiencia operativa y financiera.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Contribuir al cumplimiento de objetivos
                        p.card-text.text-center
                        | Mantiene el enfoque en los resultados esperados.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta02_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Reducir riesgos de ejecución
                        p.card-text.text-center
                        | Facilita la respuesta ante problemas operativos.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img7.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") En la práctica, la implementación permite enfrentar situaciones reales como cambios en el entorno, variaciones en los costos o dificultades operativas, lo que exige capacidad de adaptación, análisis y toma de decisiones oportunas. Una correcta implementación genera beneficios concretos como los siguientes:
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, en un proyecto de emprendimiento, una adecuada implementación garantiza que el producto llegue al mercado en el tiempo previsto y con las condiciones de calidad definidas.
    .row.mb-5.mt-5
      .col-lg-7
        .row.align-items-start(data-aos="fade-left")
          .col-lg          
            p.p-4 Para fortalecer esta etapa, se recomienda seguir el siguiente proceso metodológico:
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mt-3 
                  .lista-ol--cuadro__vineta
                    span A
                  span <b>Revisar la planificación:</b> confirmar objetivos, actividades y tiempos establecidos. 
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span B
                  span <b>Verificar recursos:</b> asegurar disponibilidad de recursos humanos, técnicos y financieros. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span C
                  span <b>Iniciar actividades:</b> ejecutar tareas conforme al cronograma definido. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span D
                  span <b>Realizar seguimiento:</b> controlar avances, tiempos y desempeño del proyecto. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span E
                  span <b>Identificar desviaciones:</b> detectar diferencias entre lo planeado y lo ejecutado. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span F
                  span <b>Aplicar ajustes:</b> corregir oportunamente situaciones que afecten la ejecución. 
        p.bg-color-6.p-4 Este proceso permite mantener el control del proyecto, fortalecer su ejecución y aumentar la probabilidad de alcanzar los objetivos propuestos.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img9.png", data-aos="zoom-in" style="max-width: 458px")      
    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Estrategias de implementación
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 Las estrategias de implementación corresponden al conjunto de acciones planificadas que orientan la ejecución del proyecto, permitiendo organizar los recursos, definir procedimientos y garantizar el cumplimiento de los objetivos en condiciones reales.
        .row.align-items-start.mb-10.bg-color-6.p-3.justify-content-center.mb-5.align-items-center(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Desde un enfoque técnico, estas estrategias guían la forma en que se desarrolla el proyecto y aseguran coherencia entre lo planificado y lo ejecutado. Su adecuada definición permite optimizar recursos, reducir riesgos y mejorar la eficiencia operativa.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in" style="max-width: 458px")              
    p(data-aos="fade-left") En la práctica, responden a preguntas clave como: ¿cómo se ejecutarán las actividades?, ¿cómo se llegará al mercado?, ¿cómo se organizará el equipo de trabajo? y ¿qué mecanismos permitirán mantener el control del proyecto? Para comprender su aplicación integral, las estrategias operativas, comerciales y organizacionales pueden analizarse de manera conjunta en la siguiente tabla comparativa:
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Tipos de estrategias para la puesta en marcha de proyectos
        .tabla-a
          table
            thead
              tr
                th(style="width: 10%") Tipo de estrategia
                th(style="width: 20%") Propósito principal
                th(style="width: 20%") Elementos clave
                th(style="width: 30%") Proceso recomendado
                th(style="width: 20%") Resultado esperado
            tbody
              tr
                td <b>Operativa</b>
                td Organizar la ejecución técnica del proyecto y asegurar eficiencia en los procesos.
                td Procesos de trabajo, secuencia de actividades, uso de recursos, estándares de calidad.
                td <b>Paso 1.</b> Identificar actividades. <br> <b>Paso 2.</b> Definir secuencia. <br><b>Paso 3.</b> Establecer recursos. <br><b>Paso 4.</b> Definir procedimientos. <br><b>Paso 5.</b> Implementar controles.
                td Mayor eficiencia operativa, reducción de errores y cumplimiento de estándares.
              tr
                td <b>Comercial</b>
                td Posicionar el proyecto en el mercado, atraer clientes y generar ingresos.
                td Público objetivo, canales de venta, promoción, política de precios.
                td <b>Paso 1.</b> Identificar mercado objetivo. <br><b>Paso 2.</b> Analizar competencia. <br><b>Paso 3.</b> Definir canales de venta. <br><b>Paso 4.</b> Diseñar promoción. <br><b>Paso 5.</b> Definir precios.
                td Incremento de visibilidad, demanda y sostenibilidad financiera.
              tr
                td <b>Organizacional</b>
                td Estructurar el equipo de trabajo y fortalecer la coordinación interna.
                td Roles y responsabilidades, estructura organizativa, comunicación, seguimiento.
                td <b>Paso 1.</b> Identificar necesidades del equipo. <br><b>Paso 2.</b> Definir roles. <br><b>Paso 3.</b> Establecer canales de comunicación. <br><b>Paso 4.</b> Definir seguimiento. <br><b>Paso 5.</b> Evaluar desempeño.
                td Mejor coordinación, claridad funcional y mayor productividad del equipo.              
    //- FinTabla
    .row.align-items-start.mb-10.bg-color-6.p-3.mt-5(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") La integración de estas tres estrategias permite que el proyecto funcione de manera equilibrada. Mientras la dimensión operativa asegura la ejecución, la comercial impulsa ingresos y posicionamiento, y la organizacional fortalece la gestión interna. Cuando estas estrategias se articulan adecuadamente, el proyecto incrementa su capacidad de adaptación, mejora resultados y fortalece su sostenibilidad en el tiempo.
    //- Inicio Tema2.4
    .row.mt-5
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Cronograma del proyecto
    .row.mb-10
      .col-lg-7
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") El cronograma del proyecto es una herramienta de planificación que permite organizar las actividades en el tiempo, definiendo su secuencia, duración y relación entre ellas. Desde un enfoque técnico, no solo establece fechas, sino que facilita la coordinación de recursos, la anticipación de riesgos y el cumplimiento de los objetivos dentro de los plazos previstos.
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0.bg-color-6.p-4 En la práctica, el cronograma traduce la planificación del proyecto en una estructura temporal concreta, favoreciendo la ejecución ordenada de las actividades. Su correcta elaboración permite evitar retrasos, optimizar recursos y mejorar el control general del proyecto.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img11.png", data-aos="zoom-in" style="max-width: 458px")
    p(data-aos="fade-left") Además, funciona como instrumento de seguimiento, ya que permite comparar el avance real con lo planificado, identificar desviaciones y aplicar decisiones correctivas oportunamente. Para comprender su utilidad integral, se exponen a continuación sus aspectos principales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3.mt-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Secuencia de actividades
              p Organiza el orden lógico de ejecución.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Duración de tareas
              p Define tiempos estimados para cada actividad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Fechas clave
              p Establece inicio, cierre y puntos de control.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Dependencias
              p Relaciona actividades que dependen unas de otras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Seguimiento
              p Permite comparar avance real frente a lo planeado.
    //- Fin Slideshow
    p(data-aos="fade-left") Un cronograma bien estructurado fortalece la organización del proyecto y mejora la capacidad de respuesta ante cambios o retrasos.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Definición
    //- Título con imagen
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") El cronograma del proyecto es la representación temporal de las actividades necesarias para su ejecución, en la cual se establecen fechas de inicio, duración y finalización, así como la secuencia lógica entre ellas.
    p(data-aos="fade-left") Desde una perspectiva aplicada, el cronograma facilita coordinar actividades, distribuir recursos y mantener claridad sobre el desarrollo del proyecto. No se limita a un listado de tareas, sino que integra la lógica operativa requerida para alcanzar los objetivos propuestos. Entre los principales beneficios de un cronograma estructurado se encuentran los siguientes:     
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
                        h4.card-title.text-center.mb-3 Organización secuencial
                        p.card-text.text-center
                        | Ordena las actividades según prioridad y dependencia.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Tiempos realistas
                        p.card-text.text-center
                        | Favorece una programación alcanzable.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Coordinación de recursos
                        p.card-text.text-center
                        | Relaciona personal, equipos y tiempos disponibles.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Seguimiento continuo
                        p.card-text.text-center
                        | Facilita control periódico del avance.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta07_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Prevención de retrasos
                        p.card-text.text-center
                        | Permite detectar riesgos con anticipación.
          p Por ejemplo, en un proyecto productivo no es posible iniciar la comercialización si previamente no se ha completado la producción, lo que evidencia la importancia de definir correctamente la secuencia de actividades.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Estructuración del cronograma
    //- Título con imagen
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") La estructuración del cronograma implica un proceso técnico orientado a organizar las actividades del proyecto en función del tiempo, considerando su secuencia, duración y relación entre ellas.
    p(data-aos="fade-left") Un cronograma bien construido permite convertir la planificación general en una programación operativa clara, facilitando la coordinación de tareas, el uso eficiente de recursos y el cumplimiento de los plazos establecidos. Para construir un cronograma funcional, es necesario incorporar algunos elementos esenciales:
    //- Inicio Carrusel
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta04_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Actividades del proyecto
                        p.card-text.text-center
                        | Define las tareas necesarias para ejecutar el proyecto.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta04_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Duración
                        p.card-text.text-center
                        | Establece el tiempo estimado para cada actividad.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta04_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Fecha de inicio y cierre
                        p.card-text.text-center
                        | Determina el horizonte temporal del proyecto.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta04_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Dependencias
                        p.card-text.text-center
                        | Relaciona actividades conectadas entre sí.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/tarjeta04_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Responsables
                        p.card-text.text-center
                        | Asigna encargados de ejecución o seguimiento.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img12.png', style="max-width: 250px", data-aos="zoom-in").m-auto
    //- Fin Carrusel
    p(data-aos="fade-left") En la práctica, esta estructuración permite ordenar la ejecución, establecer tiempos adecuados, identificar actividades críticas, coordinar recursos y prevenir retrasos.          
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, en un proyecto productivo, la compra de insumos debe realizarse antes del inicio de la producción, lo que evidencia una dependencia operativa entre actividades.
    .row.mb-5
      .col-lg-7
        .row.align-items-start(data-aos="fade-left")
          .col-lg          
            p.p-4 Para estructurar el cronograma de manera adecuada, se recomienda seguir el siguiente proceso:
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mt-3 
                  .lista-ol--cuadro__vineta
                    span A
                  span <b>Identificar actividades:</b> listar todas las tareas necesarias del proyecto. 
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span B
                  span <b>Definir secuencia lógica:</b> establecer el orden correcto de ejecución. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span C
                  span <b>Estimar duración:</b> calcular el tiempo requerido para cada actividad. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span D
                  span <b>Fijar fechas:</b> determinar inicio y finalización de las tareas. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span E
                  span <b>Asignar responsables:</b> definir encargados de cada actividad. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span F
                  span <b>Identificar actividades críticas:</b> reconocer tareas que no pueden retrasarse. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span G
                  span <b>Validar coherencia:</b> revisar consistencia entre tiempos, recursos y objetivos. 
              p Este proceso permite construir un cronograma realista, funcional y ajustado a las condiciones reales del proyecto.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in" style="max-width: 458px")
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Consideraciones técnicas
    //- Título con imagen
    p(data-aos="fade-left") Durante la elaboración del cronograma, conviene aplicar criterios que fortalezcan su utilidad y precisión. Entre las principales consideraciones se encuentran las siguientes:
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-6")
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/tarjeta05_1.svg', style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-3 Evitar tiempos irreales
                  p.card-text.text-center
                  | Reduce incumplimientos por exceso de optimismo.
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/tarjeta05_2.svg', style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-3 Considerar imprevistos
                  p.card-text.text-center
                  | Permite incorporar márgenes de contingencia.
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/tarjeta05_3.svg', style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-3 Coherencia entre actividades y recursos
                  p.card-text.text-center
                  | Ajusta programación a capacidad real.
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/tarjeta05_4.svg', style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-3 Actualizar periódicamente
                  p.card-text.text-center
                  | Mantiene vigencia del cronograma.
                .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/tarjeta05_4.svg', style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-3 Priorizar actividades críticas
                  p.card-text.text-center
                  | Protege tareas esenciales del proyecto.
    p(data-aos="fade-left") La aplicación de estos criterios mejora la confiabilidad del cronograma y facilita su uso como herramienta de control.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Herramientas para su elaboración
    //- Título con imagen
    .row.mb-3.mt-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4 La elaboración del cronograma puede apoyarse en diversas herramientas que facilitan su construcción, organización y seguimiento. La elección dependerá de la complejidad del proyecto y de los recursos disponibles. Entre las herramientas más utilizadas se encuentran:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Hojas de cálculo</b> como Excel o <i>Google Sheets,</i> útiles para proyectos de baja o media complejidad. Permiten registrar actividades, fechas y responsables. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Diagramas de Gantt</b>, adecuados para representar duración, secuencia y avance de actividades. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Herramientas digitales de gestión</b> como <i>Trello, Asana o Notion,</i> que facilitan asignación de tareas, coordinación del equipo y actualización en tiempo real.          
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in" style="max-width: 458px")          
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in" style="max-width: 458px")         
      .col-lg-7.bg-color-6
        .row.align-items-start(data-aos="fade-left")
          .col-lg
            p.p-4 Para seleccionar la herramienta más adecuada, se recomienda considerar:
            ol.lista-ol--cuadro.ms-4
              li.d-flex
                .lista-ol--cuadro__vineta
                  span A
                span La complejidad del proyecto. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span B
                span El número de actividades programadas. 
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span C
                span La cantidad de personas involucradas. 
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span D
                span La necesidad de seguimiento continuo. 
              li.d-flex.mb-5
                .lista-ol--cuadro__vineta
                  span E
                span El nivel de detalle requerido.
              p En la práctica, estas herramientas permiten organizar información, facilitar seguimiento, mejorar coordinación y actualizar el cronograma con mayor rapidez.           
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, en proyectos con varias actividades simultáneas, un diagrama de Gantt permite identificar retrasos o conflictos de programación oportunamente.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Importancia del cronograma en la ejecución del proyecto
    //- Título con imagen
    .row.mb-3.mt-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 El cronograma no solo permite organizar el tiempo, sino que se convierte en una herramienta de control que facilita la toma de decisiones durante la ejecución. Entre sus principales aportes estratégicos se encuentran los siguientes:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Favorece el cumplimiento de tiempos establecidos. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Optimiza recursos humanos, técnicos y financieros. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Reduce riesgos al detectar retrasos o conflictos potenciales. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Mejora la eficiencia al coordinar actividades relacionadas. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Facilita la toma de decisiones mediante información actualizada.           
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img18.png", data-aos="zoom-in" style="max-width: 458px")          
    p(data-aos="fade-left") Además, un cronograma bien gestionado permite redistribuir tareas, ajustar tiempos y mantener el control general del proyecto. En síntesis, el cronograma constituye una herramienta esencial para transformar la planificación del proyecto en una ejecución organizada, controlada y orientada al logro de resultados.
    //- Inicio Tema2.5
    .row.mt-5
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Plan de puesta en marcha    
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img20.png", data-aos="zoom-in" style="width: 550px")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 En la práctica, funciona como una guía operativa que orienta el desarrollo del proyecto en condiciones reales, facilitando la coordinación de actividades, la asignación de responsabilidades, el uso eficiente de los recursos y el seguimiento permanente del avance. Su correcta elaboración permite reducir la incertidumbre, anticipar riesgos y asegurar coherencia entre lo planificado y lo ejecutado.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Además, este plan articula componentes fundamentales como el cronograma, las estrategias de implementación, los recursos disponibles, la estructura organizativa y la financiación, consolidando el proyecto en una estructura operativa funcional.
    p.mt-5.mb-5(data-aos="fade-left") Entre los principales beneficios del plan de puesta en marcha se encuentran los siguientes:
    .row.bg-color-12
      .col-12
        .p-5
          .row.justify-content-center.align-items-center.mb-5.mt-3
            .col-lg-4.col-md-6.mb-4
              .card-custom
                .card-custom__side-icon
                  img(src="@/assets/curso/tema2/iconotarjeta.svg")
                .card-custom__content
                  p.mb-0 Organiza la ejecución de manera lógica y secuencial. 
            .col-lg-4.col-md-6.mb-4
              .card-custom
                .card-custom__side-icon
                  img(src="@/assets/curso/tema2/iconotarjeta.svg")
                .card-custom__content
                  p.mb-0 Facilita la coordinación entre personas, actividades y recursos. 
            .col-lg-4.col-md-6.mb-4
              .card-custom
                .card-custom__side-icon
                  img(src="@/assets/curso/tema2/iconotarjeta.svg")
                .card-custom__content
                  p.mb-0 Permite controlar tiempos, avances y resultados.     
            .col-lg-4.col-md-6.mb-4
              .card-custom
                .card-custom__side-icon
                  img(src="@/assets/curso/tema2/iconotarjeta.svg")
                .card-custom__content
                  p.mb-0 Reduce errores e improvisaciones durante la ejecución. 
            .col-lg-4.col-md-6.mb-4
              .card-custom
                .card-custom__side-icon
                  img(src="@/assets/curso/tema2/iconotarjeta.svg")
                .card-custom__content
                  p.mb-0 Mejora la capacidad de respuesta ante cambios o imprevistos. 
            .col-lg-4.col-md-6.mb-4
              .card-custom
                .card-custom__side-icon
                  img(src="@/assets/curso/tema2/iconotarjeta.svg")
                .card-custom__content
                  p.mb-0 Incrementa la probabilidad de cumplimiento de objetivos. 
    p(data-aos="fade-left") Un plan bien estructurado fortalece la eficiencia operativa y mejora la sostenibilidad del proyecto desde sus primeras etapas.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Estructura del plan
    //- Título con imagen
    p(data-aos="fade-left") La estructura del plan de puesta en marcha debe organizar la información del proyecto de manera clara, lógica y secuencial, permitiendo su comprensión, aplicación y seguimiento. Desde una perspectiva técnica, este documento debe contener los componentes esenciales que orientan la ejecución, facilitan la toma de decisiones y permiten controlar el desarrollo del proyecto. Para comprender mejor su composición, se presentan los principales elementos:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img21.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Descripción del proyecto")
              p.mb-4 Presenta el propósito del proyecto, el problema identificado, la solución propuesta y su alcance general.              
          .row(titulo="Objetivos del proyecto")
              p.mb-4 Define los resultados que se esperan alcanzar en términos operativos, financieros o comerciales.
          .row(titulo="Cronograma de actividades")
              p.mb-4 Establece la secuencia de tareas, tiempos estimados, fechas clave y responsables.
          .row(titulo="Recursos del proyecto")
              p.mb-4 Identifica los recursos humanos, técnicos, tecnológicos y financieros requeridos.
          .row(titulo="Estrategias de implementación")
              p.mb-4 Determina la forma en que se desarrollarán las actividades y se alcanzarán los objetivos.
          .row(titulo="Presupuesto y financiación")
              p.mb-4 Presenta costos estimados, inversión requerida y fuentes de recursos disponibles.
    //- Fin Accordion
    p.text-center(data-aos="fade-left") Cada uno de estos componentes cumple una función específica; sin embargo, su verdadero valor radica en la coherencia que exista entre ellos.     
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, no tendría sentido plantear objetivos ambiciosos si el cronograma es insuficiente o si no se cuenta con recursos financieros acordes con las necesidades del proyecto.
    .row.mb-3.mt-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg          
            p.p-4.bg-color-6 Una estructura clara permite:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Organizar la información del proyecto de forma técnica y comprensible. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Facilitar la ejecución ordenada de las actividades. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Mejorar el control y seguimiento del avance. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Detectar vacíos o inconsistencias antes de iniciar operaciones. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Reducir errores durante la implementación. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Servir como guía para ajustes futuros. 
            p En síntesis, la estructura del plan de puesta en marcha no solo ordena información, sino que establece la base operativa necesaria para ejecutar el proyecto con mayor precisión y eficiencia.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img22.png", data-aos="zoom-in" style="max-width: 458px")
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Integración de elementos del proyecto:
    //- Título con imagen
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración de elementos consiste en articular los diferentes componentes del proyecto (financieros, operativos y organizacionales) en un solo esquema coherente. Su propósito es asegurar que cada parte funcione de manera coordinada y orientada al cumplimiento de los objetivos establecidos.
    p(data-aos="fade-left") Desde un enfoque aplicado, esta integración permite evitar inconsistencias entre lo planificado y lo ejecutado, reduciendo errores operativos, retrasos y uso ineficiente de los recursos disponibles. Para comprender de forma ordenada este proceso, se presenta la siguiente síntesis:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3.mt-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide03_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Relación entre elementos
              p El cronograma define cuándo se ejecutan las actividades. Los recursos permiten desarrollar las tareas programadas. Las estrategias orientan la forma de ejecución. El presupuesto respalda financieramente la operación del proyecto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide03_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Aplicación en el proyecto
              p Permite asegurar coherencia entre actividades y recursos, optimizar la ejecución, evitar duplicidad o insuficiencia de recursos, mejorar la toma de decisiones y fortalecer la capacidad de respuesta ante cambios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide03_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Proceso recomendado
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 1.</b> Revisar todos los componentes del proyecto.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 2.</b> Verificar coherencia entre actividades, recursos y presupuesto.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 3.</b> Ajustar inconsistencias detectadas.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 4.</b> Consolidar la información en un solo documento de trabajo.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 5.</b> Validar la viabilidad operativa y financiera del plan.
    //- Fin Slideshow
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, no es posible ejecutar una actividad si no se cuenta con los recursos definidos o si dicha tarea no está contemplada dentro del cronograma.
    p(data-aos="fade-left") La adecuada integración fortalece la consistencia interna del proyecto, mejora su capacidad de ejecución y aumenta la probabilidad de alcanzar los resultados esperados.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Ejecución del proyecto
    //- Título con imagen
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0.bg-color-6.p-4 La ejecución del proyecto corresponde a la aplicación del plan de puesta en marcha, en la cual se desarrollan las actividades definidas, se utilizan los recursos disponibles y se implementan las estrategias establecidas. 
        .row.align-items-start.mb-10.justify-content-center.mb-5.align-items-center(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Desde una perspectiva técnica, la ejecución es un proceso dinámico que requiere seguimiento permanente, control y capacidad de adaptación, ya que durante su desarrollo pueden presentarse variaciones frente a lo inicialmente planificado. 
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img25.png", data-aos="zoom-in" style="max-width: 458px")                  
    p(data-aos="fade-left") Por esta razón, no se limita al cumplimiento de tareas, sino que implica coordinar personas, administrar recursos y tomar decisiones oportunas. Para comprender de manera integral esta fase, se presenta la siguiente síntesis:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img26.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Elementos clave en la ejecución")
              p.mb-4 Comprende el inicio de actividades según el cronograma, el uso adecuado de recursos, la coordinación del equipo de trabajo, el seguimiento del avance y la toma de decisiones frente a desviaciones o imprevistos.
          .row(titulo="Aplicación en el proyecto")
              p.mb-4 En la práctica, la ejecución permite materializar el proyecto, validar la planificación realizada, identificar ajustes necesarios y avanzar hacia el cumplimiento de los objetivos definidos.
          .row(titulo="Proceso recomendado")
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 1.</b> Iniciar las actividades según el cronograma establecido.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 2.</b> Asignar y utilizar los recursos definidos.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 3.</b> Realizar seguimiento continuo al avance.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 4.</b> Identificar desviaciones frente a lo planeado.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 5.</b> Aplicar ajustes correctivos oportunamente.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 6.</b> Evaluar resultados parciales obtenidos.
    //- Fin Accordion
    p(data-aos="fade-left") El seguimiento permite controlar el avance del proyecto, detectar problemas a tiempo, tomar decisiones oportunas y garantizar el cumplimiento de objetivos. Además, facilita la mejora continua durante la ejecución.
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, durante la ejecución puede ser necesario ajustar tiempos, redistribuir recursos o modificar estrategias según las condiciones reales del entorno.
    p(data-aos="fade-left") En síntesis, una ejecución bien gestionada convierte la planificación en resultados concretos y aumenta significativamente la probabilidad de éxito del proyecto.
    Separador
    //- Inicio Tema2.6
    .row.mt-5
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Ejemplo aplicado de puesta en marcha
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") Se plantea un proyecto de producción y comercialización de productos artesanales (accesorios elaborados a mano), cuyo objetivo es generar ingresos mediante ventas presenciales y a través de canales digitales.
    p(data-aos="fade-left") El proyecto ya cuenta con definición del problema, objetivos establecidos, presupuesto estructurado, fuentes de financiación identificadas y plan de negocio elaborado. Para comprender el proceso de manera integral, se presenta la siguiente secuencia aplicada:
    //- Accordeon Pasos          
    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Validación del plan de puesta en marcha") Antes de iniciar la ejecución, se realiza una revisión general del plan, verificando cronograma, recursos disponibles, estrategias definidas y presupuesto. Este paso permite asegurar que el proyecto está listo para ejecutarse y que no existen inconsistencias entre sus componentes.
          p(numero="2" titulo="Organización de recursos") Se asignan los recursos necesarios para iniciar el proyecto. Incluye recursos humanos para producción, ventas y administración; recursos técnicos como herramientas, insumos y espacio de trabajo; y recursos financieros para la operación inicial. Una adecuada organización evita retrasos y facilita el inicio de actividades.
          p(numero="3" titulo="Activación del cronograma") Se inicia la ejecución de actividades según el cronograma establecido, incluyendo compra de insumos, adecuación del espacio de trabajo, inicio de producción y preparación de canales de venta. El cronograma permite desarrollar las actividades en el orden correcto.          
          p(numero="4" titulo="Implementación de estrategias") Se ponen en marcha estrategias operativas, comerciales y organizacionales. Esto incluye estandarización de procesos productivos, promoción en redes sociales, ventas digitales, asignación de roles y coordinación del equipo. Estas acciones mejoran la eficiencia del proyecto.          
      .col-8.col-lg-4
        figure
          img.l(src="@/assets/curso/tema2/img28.png")
    //- Fin Accordeon Pasos
    //- Accordeon Pasos
    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img.l(src="@/assets/curso/tema2/img29.png")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="5" titulo="Inicio de operaciones") El proyecto comienza su funcionamiento mediante producción de los primeros productos, publicación en canales digitales e inicio de ventas. Este momento representa la entrada real del proyecto al mercado.
          p(numero="6" titulo="Seguimiento y control") Se verifica el cumplimiento del cronograma, se controlan gastos y se evalúan resultados iniciales como ventas y producción. El seguimiento permite detectar desviaciones y tomar decisiones oportunas.
          p(numero="7" titulo="Ajustes en la ejecución") Con base en la información obtenida, se realizan ajustes como modificación de estrategias comerciales, cambios en producción según la demanda y reorganización de recursos. La capacidad de adaptación es clave para la sostenibilidad.
          p(numero="8" titulo="Evaluación de resultados") Se analizan indicadores como cumplimiento de objetivos, rentabilidad, nivel de ventas y uso de recursos. Esta evaluación permite determinar el desempeño del proyecto y definir acciones futuras.      
    //- Accordeon Pasos
    .row.mb-3.mt-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
            p.p-4.bg-color-6 Este ejemplo evidencia que la puesta en marcha del proyecto es un proceso estructurado que integra planificación, ejecución, seguimiento y ajuste. No se trata únicamente de iniciar actividades, sino de gestionar de manera coordinada todos los elementos del proyecto para garantizar su éxito.
            p Un proyecto que aplica este proceso de manera adecuada logra:
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Mejorar su eficiencia operativa. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Reducir riesgos durante la ejecución. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Optimizar el uso de recursos disponibles. 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 Incrementar sus posibilidades de éxito y sostenibilidad.                
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img30.png", data-aos="zoom-in" style="max-width: 458px")          
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Errores comunes en la puesta en marcha del proyecto
    //- Título con imagen
    p(data-aos="fade-left") Durante esta fase pueden presentarse fallas que afectan el desarrollo normal del proyecto. Entre las más frecuentes se encuentran las siguientes:
    //- Inicio Carrusel
    .row.bg-color-12
      .col-12
        .p-5
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/TarjCarru01_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Iniciar actividades sin validar recursos disponibles
                        p.card-text.text-center
                        | Genera retrasos o interrupciones operativas.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/TarjCarru01_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 No seguir el cronograma establecido
                        p.card-text.text-center
                        | Produce desorden y atrasos en la ejecución.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/TarjCarru01_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Falta de asignación clara de responsabilidades
                        p.card-text.text-center
                        | Dificulta la coordinación del equipo.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/TarjCarru01_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 No realizar seguimiento al avance
                        p.card-text.text-center
                        | Impide detectar problemas oportunamente.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema2/TarjCarru01_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 No ajustar el plan frente a cambios del entorno
                        p.card-text.text-center
                        | Reduce capacidad de respuesta y sostenibilidad.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img31.png', style="max-width: 250px", data-aos="zoom-in").m-auto          
    .row.justify-content-center.mb-5.align-items-center 
      .col-lg-9
        p.text-center.p-4.bg-color-7 Prevenir estos errores fortalece la ejecución del proyecto y mejora la probabilidad de alcanzar los resultados esperados.                        
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
