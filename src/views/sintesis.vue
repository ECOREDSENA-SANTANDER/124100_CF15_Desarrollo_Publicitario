<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La medición, análisis y presentación de datos e información de una empresa de manera online en sus redes sociales, determina la efectividad de sus planes de marketing y comunicación, y con esto la eficacia de las estrategias manejadas para alcanzar los objetivos planteados. En el siguiente diagrama, se presentan los temas trabajados dentro del componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="En el diagrama se presentan los temas abordados dentro del componente formativo, se detallan y relacionan los conceptos más importantes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
