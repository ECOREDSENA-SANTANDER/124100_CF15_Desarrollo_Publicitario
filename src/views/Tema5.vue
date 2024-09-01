<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Métricas en otras redes sociales

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-8
        p Teniendo en cuenta que este tipo de información es de gran utilidad para la toma de decisiones en relación con el negocio, otras redes sociales tienen un manejo similar de las estadísticas. Por lo tanto, para cuentas de LinkedIn, Twitter, Snapchat y TikTok es posible hacer análisis similares.
        .cajon.color-secundario.p-4.mb-4
          p.p-4.mb-0 #[b Sin embargo, debido al momento y la efectividad comercial de Facebook e Instagram, se profundizó en estas plataformas con el fin de hacer un análisis detallado de cada uno de los datos estadísticos que ofrecen para el desarrollo de estrategias de promoción y comercialización dirigidas a segmentos muy específicos de la población. ]   
      .col-8.col-md-6.col-lg-4
        img(src='@/assets/curso/temas/tema5/imagen1.svg')

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-12.col-md-12.col-lg-7.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/imagen2.svg')


</template>

<script>
export default {
  name: 'Tema5',
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
