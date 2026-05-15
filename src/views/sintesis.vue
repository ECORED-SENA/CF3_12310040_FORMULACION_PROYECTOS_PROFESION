<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Formulación de proyectos en mi profesión
        p.mb-0 
          | Síntesis:           
          | Puesta en marcha y financiación del proyecto    
    p.mt-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre puesta en marcha y financiación del proyecto que organiza etapas y componentes como financiación, fuentes de financiación, presupuesto, plan de negocio, puesta en marcha, cronograma e integración final, con aspectos relacionados con recursos, costos, organización, tiempos y sostenibilidad. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
