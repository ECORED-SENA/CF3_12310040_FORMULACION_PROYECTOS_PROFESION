<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Integración final del proyecto
    .row.mb-3
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
            p.mb-0 La integración final del proyecto corresponde a la fase en la cual se articulan todos los elementos desarrollados durante la formulación, financiación y puesta en marcha, con el fin de consolidar una propuesta coherente, viable y lista para su ejecución.
        .row.align-items-start.mb-10.bg-color-6.p-3.justify-content-center.mb-5.align-items-center(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/icono.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Desde un enfoque técnico, esta etapa permite validar que exista correspondencia entre los diferentes componentes del proyecto, tales como el presupuesto, las fuentes de financiación, el cronograma, las estrategias de implementación y los recursos disponibles. Esta articulación es fundamental para garantizar que el proyecto no presente inconsistencias que puedan afectar su desarrollo.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img1.png", data-aos="zoom-in" style="max-width: 458px")
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img2.png', alt='', style="object-fit: cover;")     
      .col-lg-7.bg-color-7.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 En la práctica, la integración final permite evaluar el proyecto de manera global, identificar posibles ajustes y asegurar que todos los elementos funcionen de manera coordinada. Esto facilita la toma de decisiones y reduce riesgos asociados a la ejecución. Un proyecto que no realiza este proceso de integración puede presentar problemas como falta de recursos, desorganización en las actividades o incoherencias entre lo planificado y lo ejecutado.
    Separador
    //- Inicio Tema3.1
    .row.mt-5
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Relación entre financiación y ejecución
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") La financiación y la ejecución del proyecto están directamente relacionadas, ya que los recursos económicos determinan la posibilidad real de desarrollar las actividades planificadas.
    p(data-aos="fade-left") Desde una perspectiva técnica, esta relación implica que no basta con definir actividades o establecer metas, sino que es indispensable contar con respaldo financiero suficiente para convertir la planificación en resultados concretos. En otras palabras, la ejecución depende tanto de una adecuada organización operativa como de la disponibilidad oportuna de recursos. Para comprender esta fase de manera integral, se presenta la siguiente explicación:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3.mt-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Relación entre financiación y ejecución
              p El presupuesto define los recursos necesarios para desarrollar el proyecto. La financiación determina la disponibilidad de esos recursos. La ejecución depende del uso adecuado del capital, del tiempo y de los insumos asignados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Aplicación en el proyecto
              p Esta relación se evidencia en la asignación de recursos a actividades específicas, la programación de gastos según el cronograma, la capacidad de cumplir tiempos establecidos y la sostenibilidad del proyecto en el tiempo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Impacto de una mala articulación
              p Si el proyecto no cuenta con recursos suficientes en una etapa determinada, pueden generarse retrasos, interrupciones operativas, incumplimientos o reducción en la calidad de los resultados esperados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Proceso recomendado
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 1.</b> Verificar el presupuesto del proyecto.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 2.</b> Confirmar las fuentes de financiación disponibles.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 3.</b> Relacionar los recursos con las actividades del cronograma.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 4.</b> Ajustar inconsistencias entre costos y ejecución.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 5.</b> Validar la viabilidad general del proyecto.
    //- Fin Slideshow
    p(data-aos="fade-left") Esto permite asegurar coherencia entre la planificación financiera y la ejecución operativa, reducir riesgos y mejorar la capacidad de cumplimiento de objetivos.
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, una fuente de financiación con condiciones restrictivas puede limitar la capacidad operativa del proyecto, mientras que una adecuada planificación financiera facilita el desarrollo normal de las actividades.
    p(data-aos="fade-left") En síntesis, la financiación y la ejecución no deben analizarse por separado. Ambas dimensiones se complementan y determinan la viabilidad real del proyecto. 
    Separador
    //- Inicio Tema3.2
    .row.mt-5        
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")        
          h2 3.2 Consolidación del proyecto
    .row.justify-content-center.align-items-stretch.mb-5.g-0      
      .col-lg-7.bg-color-7.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La consolidación del proyecto consiste en la integración de todos sus componentes en una estructura organizada y coherente, que permita su comprensión, evaluación y posterior ejecución. Desde un enfoque técnico, esta etapa implica reunir, ordenar y validar la información construida durante las fases anteriores, garantizando que cada elemento del proyecto mantenga relación lógica con los demás. De esta manera, se fortalece la consistencia interna del proyecto y se mejora su capacidad de implementación.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img4.png', alt='', style="object-fit: cover;")
    p(data-aos="fade-left") La consolidación no se limita a recopilar documentos. También supone revisar si los objetivos son viables, si el presupuesto responde a las necesidades reales, si el cronograma es ejecutable y si las fuentes de financiación respaldan adecuadamente las actividades previstas. Con el fin de abordar esta fase en su conjunto, se desarrolla la siguiente descripción:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/img5.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Componentes que se consolidan")
              p.mb-4 Incluye la descripción del proyecto, objetivos, presupuesto, fuentes de financiación, cronograma, estrategias de implementación y recursos requeridos para la ejecución.
          .row(titulo="Aplicación en el proyecto")
              p.mb-4 Permite contar con una visión integral del proyecto, facilitar su presentación ante terceros, mejorar la toma de decisiones e identificar posibles ajustes antes del inicio de operaciones.
          .row(titulo="Proceso recomendado")
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 1.</b> Reunir toda la información del proyecto.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 2.</b> Verificar coherencia entre los componentes.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 3.</b> Ajustar inconsistencias detectadas.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 4.</b> Organizar la información de manera estructurada.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  span <b>Paso 5.</b> Validar la viabilidad final del proyecto.                
          .row(titulo="Importancia estratégica")
              p.mb-4 Favorece una lectura clara del proyecto, fortalece su credibilidad técnica y mejora las probabilidades de ejecución exitosa.
          .row(titulo="Riesgos de no consolidar")
              p.mb-4 Puede generar contradicciones entre áreas del proyecto, falta de claridad operativa, debilidad financiera y dificultades para tomar decisiones oportunas.
    //- Fin Accordion
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, un proyecto consolidado permite evidenciar con claridad cómo se relacionan los costos con las fuentes de financiación, cómo se distribuyen las actividades en el tiempo y qué recursos serán necesarios en cada etapa.
    p(data-aos="fade-left") En síntesis, la consolidación del proyecto transforma información dispersa en una propuesta estructurada, lista para ser evaluada, gestionada y ejecutada con mayor eficiencia.
    Separador
    //- Inicio Tema3.3
    .row.mt-5
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Preparación para la implementación
    .row.align-items-start.mb-10(data-aos="fade-left")  
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
      .col-lg
        p(data-aos="fade-left") La preparación para la implementación corresponde a la fase previa al inicio de la ejecución, en la cual se realizan las últimas verificaciones y ajustes necesarios para garantizar que el proyecto pueda desarrollarse de manera adecuada.
    p(data-aos="fade-left") Desde una perspectiva aplicada, esta etapa permite asegurar que todos los elementos estén listos antes de iniciar operaciones, reduciendo riesgos, evitando improvisaciones y fortaleciendo la capacidad de respuesta frente a posibles contingencias. Preparar correctamente el inicio del proyecto no solo implica revisar documentos o recursos disponibles. También supone confirmar responsabilidades, validar tiempos de ejecución y garantizar que las condiciones operativas sean favorables para comenzar. Para analizar esta fase desde una perspectiva amplia, se exponen a continuación sus aspectos principales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3.mt-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide02_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Elementos clave de preparación
              p Incluye la verificación de recursos disponibles, confirmación del cronograma, validación de estrategias, organización del equipo de trabajo y disponibilidad de financiación para la etapa inicial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide02_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Aplicación en el proyecto
              p Permite iniciar el proyecto de manera organizada, reducir errores en la ejecución, optimizar el uso de recursos y favorecer el cumplimiento de objetivos desde las primeras etapas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide02_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Proceso recomendado
              ul.lista-ul.mb-0
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 1.</b> Revisar el plan de puesta en marcha.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 2.</b> Confirmar disponibilidad de recursos.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 3.</b> Validar cronograma y actividades programadas.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 4.</b> Verificar financiación disponible.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 5.</b> Asignar responsabilidades.
                li.d-flex.mt-3
                  i.fas.fa-check-circle.me-3(style="color:#3a6673")
                  p.mb-0 <b>Paso 6.</b> Preparar el inicio formal de actividades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide02_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Importancia estratégica
              p Reduce la incertidumbre inicial, mejora la coordinación operativa y aumenta la probabilidad de una ejecución ordenada y eficiente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/slide02_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Riesgos de una preparación deficiente
              p Puede generar retrasos, desorganización, uso inadecuado de recursos, incumplimiento de tiempos o dificultades operativas desde el inicio.
    //- Fin Slideshow
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Por ejemplo</b>, iniciar un proyecto sin verificar previamente la disponibilidad de insumos, personal o recursos financieros puede provocar interrupciones tempranas que afecten la confianza en el proyecto y sus resultados esperados.
    p(data-aos="fade-left") En síntesis, la preparación para la implementación constituye el puente entre la planificación y la ejecución real, permitiendo comenzar el proyecto con mayor orden, control y seguridad operativa.
</template>

<script>
export default {
  name: 'Tema3',
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
