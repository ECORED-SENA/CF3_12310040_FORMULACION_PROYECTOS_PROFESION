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
        .row.align-items-start.mb-10(data-aos="fade-left")  
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
