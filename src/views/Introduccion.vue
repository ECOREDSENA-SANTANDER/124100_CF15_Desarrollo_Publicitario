<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="zoom-in-left") En el siguiente video se da introducción a los temas que se trabajarán en este componente formativo: 

    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/5Giwvhi2qjk?si=nBigM19Q1n2uV2pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Analítica Web.   

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
