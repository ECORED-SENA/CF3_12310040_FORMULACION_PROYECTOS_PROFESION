<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 La formulación de proyectos constituye un proceso integral que permite transformar una idea en una propuesta estructurada, viable y orientada a la solución de necesidades en un contexto determinado. No obstante, el desarrollo de un proyecto no finaliza con la definición de objetivos, actividades y fases, sino que exige identificar los recursos necesarios para su ejecución y planificar estrategias que faciliten su adecuada implementación. En este sentido, la financiación y la puesta en marcha representan etapas esenciales dentro del ciclo de vida del proyecto, ya que inciden directamente en su viabilidad económica y en su capacidad de ejecución en escenarios reales.
          p.p-4.bg-color-6 La financiación del proyecto comprende el análisis y la selección de fuentes de recursos económicos destinadas a cubrir los costos asociados a su desarrollo. Este proceso incluye la identificación de alternativas financieras, la evaluación de condiciones como tasas de interés, plazos y requisitos, así como la elaboración de presupuestos que apoyen la planeación y el control de los recursos. De igual forma, el diseño de un plan de negocio permite consolidar la información del proyecto y sustentar su viabilidad ante posibles entidades financiadoras o inversionistas. Por su parte, la puesta en marcha corresponde al conjunto de acciones orientadas a la ejecución del proyecto, mediante la integración de recursos disponibles, la organización de actividades y la definición de estrategias para alcanzar los objetivos propuestos.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img1.png", data-aos="zoom-in" style="max-width: 458px")
    .row.justify-content-center.align-items-stretch.mb-2.g-0
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/intro/img2.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-7.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La articulación entre la financiación y la puesta en marcha establece una relación directa entre los recursos económicos y las acciones requeridas para ejecutar el proyecto. Esta integración favorece la toma de decisiones estratégicas, la optimización de recursos y la disminución de riesgos asociados a la implementación. Asimismo, fortalece la capacidad de análisis, planificación y gestión, permitiendo estructurar propuestas sostenibles y aplicables en distintos contextos profesionales. En este componente se abordan conceptos, procesos y herramientas relacionados con la financiación y la implementación del proyecto, proporcionando bases sólidas para consolidar iniciativas integrales, articuladas y viables.
</template>

<script>
export default {
  name: 'Introduccion',
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
