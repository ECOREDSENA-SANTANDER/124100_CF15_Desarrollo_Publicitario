<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Métricas en Instagram

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        p Teniendo en cuenta que este tipo de información es de gran utilidad para la toma de decisiones en relación con el negocio, otras redes sociales tienen un manejo similar de las estadísticas. Por lo tanto, para cuentas de LinkedIn, Twitter, Snapchat y TikTok es posible hacer análisis similares.
        .cajon.color-secundario.p-4.mb-4
          p.p-4.mb-0 <strong>Sin embargo, debido al momento y la efectividad comercial de Facebook e Instagram, se profundizó en estas plataformas con el fin de hacer un análisis detallado de cada uno de los datos estadísticos que ofrecen para el desarrollo de estrategias de promoción y comercialización dirigidas a segmentos muy específicos de la población.</strong>   
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema5/imagen1.svg')

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
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
