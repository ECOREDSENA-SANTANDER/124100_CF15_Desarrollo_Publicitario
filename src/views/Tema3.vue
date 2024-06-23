<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métricas en Instagram

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
       img(src='@/assets/curso/temas/tema3/imagen1.svg')
      .col-sm-12.col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.p-3 <strong>Instagram es hoy la red social con mayor popularidad en el mundo y se ha convertido en una plataforma esencial para procesos de comercialización. Hoy en día IG, como también se le conoce, tiene más de 1.000 millones de usuarios en el mundo y 25 millones de perfiles comerciales; además, alrededor de 2 millones de anunciantes utilizan las historias y los anuncios de esta red social.</strong> 
        p.mb-0 Para acceder a las métricas de IG es necesario crear una cuenta comercial. Desde allí se puede acceder a Instagram Insights, que es una plataforma gratuita que genera información acerca de seguidores, publicaciones e historias.
        p.mt-4 En IG se tienen en cuenta:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        img(src='@/assets/curso/temas/tema3/imagen2.png', alt='')

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 3.1  Métricas de las publicaciones
    p En este punto es posible ver todas las publicaciones ordenadas de las más a la menos vista. También es posible filtrarlas con los siguientes criterios:

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-md-6
        .row.bg4.p-4
          h3 Tipo de contenido
          p.mb-4 Fotos, videos, secuencias o publicaciones pagadas. 
          h3 Tiempo
          p.mb-4 Desde los últimos 7 días hasta los últimos 2 años.
          h3 Métricas
          p.mb-4 Alcance, clics “cómo llegar”, clics en el sitio web, comentarios, correos electrónicos, impresiones, interacciones, llamadas, Me gusta, mensajes de texto, seguimientos, veces compartido, veces guardado, vista al perfil.
      .col-md-6
        .row.justify-content-center.align-items-center.bg5
          img.img-ajustada.mt-5(src='@/assets/curso/temas/tema3/imagen3.svg', alt='')

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 9.
                span
                  |   Métricas de las publicaciones
              figure
                img(src='@/assets/curso/temas/tema3/imagen4.svg' alt="Imagen de una captura de pantalla de celular donde se presenta una ruta para acceder a visualizar interacciones con los seguidores.")

    .row.justify-content-center.align-items-center.mb-5.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/imagen2.png', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold Con este tipo de filtros es posible hacer un análisis de los mensajes en función con el rendimiento, así se pueden identificar, por ejemplo, aquellos anuncios que son preferidos por los usuarios y desarrollar más contenidos similares que atraigan nuevos usuarios o aumenten el flujo de lectores.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        p Cada una de las publicaciones tiene su información específica, dando clic sobre ellas se puede acceder a “Ver estadísticas”, donde es posible observar:
        ul.lista-ul-.mb-0
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Cantidad de “Me gusta”
          li.mb-0  
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Comentarios
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Veces compartida
          li.mb-4
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Veces guardada
        p También se pueden ver las interacciones y las acciones realizadas por los seguidores:
        ul.lista-ul-.mb-0
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Vistas al perfil
          li.mb-0  
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Clics en el sitio
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema3/imagen5.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema3/imagen6.svg')
      .col-sm-12.col-lg-4
        p Finalmente, se pueden detallar cifras relacionadas con el descubrimiento:
        ul.lista-ul-.mb-0
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Seguimientos
          li.mb-0  
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Alcance
          li.mb-4
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Impresiones
            ul.lista-ul-.mb-0.ps-5
              li.mb-2
                i
                | - Del inicio
              li.mb-2
                i
                | - Del perfil
              li.mb-2
                i
                | - De hashtags
              li.mb-0
                i
                | - De otro origen
  
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center
          .col-10
            .cajon.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 10.
                span
                  |   Estadísticas de publicaciones
              figure
                img(src='@/assets/curso/temas/tema3/imagen7.svg' alt="La imagen presenta un ejemplo de las estadísticas de publicaciones, donde se detallan con números las características.")

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 3.2  Métricas de historias
    p Para acceder a las estadísticas de las historias, es necesario ir a “Estadísticas” de la cuenta a analizar, luego a “Contenido”, en la parte inferior aparecen las historias, allí se debe hacer clic en “Ver todo” para acceder a la información detallada. Se puede seleccionar ver las historias de los últimos 14 o 7 días, así como las de las últimas 24 horas. Se debe seleccionar la historia a la que se desea ver las estadísticas.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center
          .col-10
            .cajon.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 11.
                span
                  |   Métricas de historias
              figure
                img(src='@/assets/curso/temas/tema3/imagen8.svg' alt="Imagen de captura de pantalla de un celular, donde se detalla información acerca de las historias.")

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-md-6
        .row.bg4.p-4.ps-5
          p.mb-4 En este punto se puede ver la siguiente información:
          ul.lista-ul-.mb-2
            li.mb-2
              i.fas.fa-check-circle.color-chulo.mb-3
              |  <strong>Interacciones:</strong> muestra el número de personas que interactuaron con la historia de la publicación.
              ul.lista-ul-.mb-0.ps-5
                li.mb-2
                  i
                  | ° Respuestas.
                li.mb-2
                  i
                  | ° Vistas al perfil.
            li.mb-2  
              i.fas.fa-check-circle.color-chulo.mb-3
              |  <strong>Descubrimiento:</strong>
              ul.lista-ul-.mb-0.ps-5
                li.mb-2
                  i
                  | ° Cuentas alcanzadas.
            li.mb-2
              i.fas.fa-check-circle.color-chulo.mb-3
              |  <strong>Seguimientos:</strong>
            li.mb-0
              i.fas.fa-check-circle.color-chulo.mb-3
              |  <strong>Navegación:</strong>
              ul.lista-ul-.mb-0.ps-5
                li.mb-2
                  i
                  | ° Retrocesos.
                li.mb-2
                  i
                  | ° Avances.
                li.mb-2
                  i
                  | ° Siguiente historia.
                li.mb-0
                  i
                  | ° Abandonos.
      .col-md-6
        .row.justify-content-center.align-items-center
          img(src='@/assets/curso/temas/tema3/imagen9.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-md-6.col-lg-12
        .cajon.color-secundario.p-4.mb-4
          p.p-3 <strong>Con esta información es posible conocer y analizar las historias con las que más ha interactuado el público y, de esta forma, realizar nuevas historias con los contenidos que más atraen y les gustan a los usuarios.</strong> 

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 3.3  Métricas de publicaciones promocionadas

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-md-4
        img(src='@/assets/curso/temas/tema3/imagen10.svg', alt='')
      .col-md-8
        p Estas estadísticas están disponibles únicamente para cuentas que han realizado promoción de alguna publicación.
        ul.lista-ul-.mb-2
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Vistas de perfil.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Número de personas que vieron la publicación promocionada.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Número de impresiones.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Número de engagement.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Segmento demográfico (género, rango de edad, ubicación).
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Valor invertido.
        .cajon.color-secundario.p-4.mb-4
          p.p-4 <strong>Adicionalmente, es posible realizar una comparación de estos resultados con la misma publicación realizada de forma orgánica.</strong> 

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 3.4  Métrica de los seguidores
    p Esta información es muy importante para conocer el arquetipo de los usuarios que siguen una cuenta. Es vital para la toma de decisiones del negocio en cuanto a promoción y comercialización. Para tener acceso a esta información es necesario acceder a “Estadísticas” y luego hacer clic en “Público”. Encontrando:


    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Sexo")
        .col-md-11.mb-4.mb-md-0
          .row.ps-5
            .col-1
              img(src='@/assets/curso/temas/tema3/acordeon1/icono1.svg', alt='')
            .col-11
              p Se recurre a un número inferior de intermediarios disponibles; es decir solo algunos pueden vender tu producto. Un solo distribuidor recibe el derecho de vender la marca y se compromete a no vender marcas competitivas en la misma categoría.:
          .row.justify-content-center.align-items-center
            .col-10
              .row.justify-content-center
                .col-10
                  .cajon.p-5.mb-4
                    .titulo-sexto.color-secundario
                      h5 Figura 12.
                        span
                          | Métricas de los seguidores
                    figure
                          img(src='@/assets/curso/temas/tema3/acordeon1/imagen1.svg' alt="Imagen de captura de pantalla donde se detallan características de hombres y mujeres que siguen el perfil.")
      .row(titulo="Lugares principales ciudades o países")
        .col-md-11.mb-4.mb-md-0
          .row.ps-5
            .col-1
              img(src='@/assets/curso/temas/tema3/acordeon1/icono2.svg', alt='')
            .col-11
              p Muestra el origen de las cuentas que siguen el perfil.
      .row(titulo="Rangos de edad")
        .col-md-10.mb-4.mb-md-0
          .row.ps-5
            .col-1
              img(src='@/assets/curso/temas/tema3/acordeon1/icono3.svg', alt='')
            .col-11
              p Muestra los rangos de edad que más siguen la cuenta y los discrimina entre hombres y mujeres.
          .row.justify-content-center.align-items-center
            .col-10
              .row.justify-content-center
                .col-10
                  .cajon.p-5.mb-4
                    .titulo-sexto.color-secundario
                      h5 Figura 13.
                        span
                          | Rango de edad
                    figure
                          img(src='@/assets/curso/temas/tema3/acordeon1/imagen2.svg' alt="Imagen de captura de pantalla que presenta una gráfica acerca de la edad de los seguidores.")
      .row(titulo="Crecimiento")
        .col-md-10.mb-4.mb-md-0
          .row.ps-5
            .col-1
              img(src='@/assets/curso/temas/tema3/acordeon1/icono4.svg', alt='')
            .col-11
              p Muestra los rangos de edad que más siguen la cuenta y los discrimina entre hombres y mujeres.
          .row.justify-content-center.align-items-center
            .col-10
              .row.justify-content-center
                .col-10
                  .cajon.p-5.mb-4
                    .titulo-sexto.color-secundario
                      h5 Figura 14.
                        span
                          | Crecimiento de seguidores
                    figure
                          img(src='@/assets/curso/temas/tema3/acordeon1/imagen3.svg' alt="Imagen que presenta  de manera gráfica el crecimiento de los seguidores.")


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
