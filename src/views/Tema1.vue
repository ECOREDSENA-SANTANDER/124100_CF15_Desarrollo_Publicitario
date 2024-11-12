<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Analítica #[em web]
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.p-4.mt-2  De igual forma que en medios convencionales, la necesidad de información y medición de efectividad de la comunicación en medios digitales lleva a realizar una serie de mediciones derivadas de los indicadores que se han mencionado anteriormente y de los datos suministrados por las diferentes plataformas #[em web].   
        p.mb-0 Dichos datos son un insumo muy importante para el futuro desarrollo de estrategias y realizar correcciones casi en tiempo real de las acciones que se están realizando en la actualidad, dando la opción de redireccionarlas para el logro de los objetivos planteados, minimizar los riesgos al final de la campaña y optimizar la inversión que se haya realizado.
      .col-8.col-md-8.col-lg-4
       img(src='@/assets/curso/temas/tema1/imagen1.png')
    
    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.1 ¿Qué es la analítica #[em web]?

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-4.col-md-4.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/imagen2.png', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-md-12.col-lg-10
          h4.mb-0.text-white.fw-bold En el video presentado a continuación, se describe de manera concreta el significado y los objetivos del término, adicionalmente se hace un acercamiento a los antecedentes de esta estrategia y su importancia para mejorar la promoción y las ventas de una empresa.

    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/v8cwzCo6VtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: ¿Qué es la analítica #[em web]?

    Separador  
    #t_1_2.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.2  Tendencias de la analítica #[em web]
    
    .row.tarjeta--container(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg5.p-4
        .row.mb-0
          .col-6.col-md-3.col-lg-6
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta1/imagen1.svg')
          h2 #[em Social analytics]
          p.mb-4.mb-lg-0 La llegada de las redes sociales ha obligado a que tanto sus usuarios desde el ámbito comercial, como sus administradores; implementen técnicas de análisis de la información que en ese tipo de plataformas es masiva y muy relevante para el proceso comercial.
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg6.p-4
        .row.mb-0
          .col-6.col-md-3.col-lg-6
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta1/imagen2.svg')
        h2.text-white #[em Mobile analytics]
        p.text-white  La llegada de los teléfonos inteligentes trajo consigo un nuevo sistema de navegación, gestión, trabajo, entrenamiento y organización. Las aplicaciones (App), al igual que los sitios #[em web] y las plataformas #[em online], genera una gran cantidad de información y datos que, al ser organizados y analizados, permiten la toma de decisiones de forma oportuna y adecuada. 
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg7.p-4
        .row.mb-0
          .col-6.col-md-3.col-lg-6
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta1/imagen3.svg')
        h2 #[em Big data]
        p.mb-4  Nunca en el mundo se había tenido tanta información circulando y a disposición de casi cualquier persona que tenga acceso a internet. Los datos que generan las redes sociales, los sistemas de información, los sitios #[em web] y las entidades gubernamentales y privadas permiten conocer a un nivel superior como desarrollar el proceso comercial y de #[em marketing] en cualquier empresa.

    Separador  
    #t_1_3.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.3  Métricas en la analítica #[em web]

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/imagen4.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La analítica #[em web] tiene como finalidad la recopilación y estudio de cifras relacionadas con la actividad de los medios y estrategias que la empresa realiza en la #[em web] para la toma de decisiones. Sin embargo, estas cifras dependen de los contenidos, el modelo de negocio y el mercado al cual va dirigido; esto quiere decir que hay empresas que deben mover números muy altos de interacciones para lograr sus objetivos, mientras otras deben generar interacción con una cantidad limitada de potenciales clientes para generar un ROI representativo.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
