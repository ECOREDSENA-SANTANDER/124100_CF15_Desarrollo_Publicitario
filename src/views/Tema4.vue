<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Google Analytics</em>

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        br
        br
        .cajon.color-secundario.p-4.mb-4
          p.p-4.mb-0 <strong>Es una herramienta gratuita que permite la optimización de los sitios web para mejorar el ROI de los negocios online. Mediante esta herramienta es posible:</strong>   
        ul.lista-ul-.mb-2
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Mejorar la experiencia del usuario.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Incrementar conversiones.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Medir el rendimiento de palabras claves y de campañas
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Acceder a métricas relacionadas con el negocio.
      .col-sm-12.col-lg-4
       img(src='@/assets/curso/temas/tema4/imagen1.svg')

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema4/imagen2.svg')
      .col-sm-12.col-lg-6
        <br> <br>
        p Además, permite a un empresario saber:
        ul.lista-ul-.mb-2
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  La forma cómo los usuarios llegan a la web de la empresa.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Dónde viven los visitantes.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Cómo hacer campañas más efectivas.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Cómo es la interacción de los usuarios con la web.
          li
            i.fas.fa-check-circle.color-chulo.mb-3
            |  Si el contenido ofrecido es eficiente o deben hacerse mejoras en ese sentido.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/imagen2.png', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          h4.mb-0.text-white.fw-bold Para el funcionamiento de <em>Google Analytics</em> es necesario crear una cuenta que permite acceder al menú para realizar todos los análisis y métricas que permite la plataforma. En cada cuenta creada se enlaza, al menos, una web de la empresa que puede ser administrada por varios usuarios y para la que se pueden crear diversas visitas. Si una empresa tiene varios sitios web se puede hacer seguimientos a estos desde una misma cuenta.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-9
        img(src='@/assets/curso/temas/tema4/imagen3.png', alt='')

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 4.1  Informes de audiencia en <em>Google Analytics</em>

    .row.justify-content-center.align-items-center.bg3(data-aos="zoom-in-left")
      .col-sm-3
        img.mt-5.mb-5(src='@/assets/curso/temas/tema4/imagen4.svg')
      .col-md-7
        #t_1_1.titulo-segundo.color-secundario.ps-5
          h2 Informes de audiencia en <em>Google Analytics</em>
        p.mb-5.ps-5 Las mediciones de audiencia son una información con mucho valor para la empresa. Estas permiten conocer el perfil en detalle de los visitantes de una página para la toma de decisiones. Se encuentra:
        .row.ps-5
          .col-12
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=HhAMuQUXaDM" target="_blank")
              span Descargar
              i.fas.fa-download

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 4.2  Dimensiones

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5.mb-cus
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img1.svg')
        p.mb-0.br-cus #[b Tipo de usuario:] esta métrica discrimina entre usuarios nuevos y recurrentes y está ligada a las sesiones pero no a los usuarios. Por lo tanto, debe considerarse como una sesión en la que el usuario se comporta como nuevo o recurrente.
        br
        p.mb-4
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img2.svg')
        p.mb-0.br-cus #[b Idioma:]  determina el idioma que tiene configurado cada visitante de la página en su dispositivo o navegador.
        br
        p.mb-4
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img3.svg')
        p.mb-0.br-cus #[b Otras dimensiones:]  están ligadas a visitantes que se conectan desde un dispositivo móvil: navegador que utilizan, sistema operativo, resolución de la pantalla, colores de pantalla, versión de Flash, compatibilidad Java y proveedor de servicio.
        br
        p.mb-4
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img4.svg')
        p.mb-0 #[b Dispositivo:]  está ligada a las visitas desde móviles. Presenta una información variada en relación con los dispositivos desde los cuales se accede: marca, modelo y tipo de escritura (táctil, joystick o lápiz).
      .col-sm-12.col-lg-5.mb-cus
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img5.svg')
        p.mb-0 #[b Edad y género:]  esta información requiere una codificación especial en Google Analytics para que genere los datos a partir de páginas de terceros, así como otros datos demográficos. Una vez configurado, se muestran las cantidades de personas de cada género que han visitado el sitio web.
        br
        p.mb-4
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img6.svg')
        p.mb-0 #[b Ubicación geográfica:]  determina la ubicación de cada visitante a partir de la IP de conexión a internet.
        br
        p.mb-4
        img.w-cus.mb-4(src='@/assets/curso/temas/tema4/escala1/img7.svg')
        p.mb-0 #[b Tipo de dispositivo:]  determina el tipo de dispositivo desde el cual el usuario visita el sitio web: computador, móvil o tablet.
        br

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 4.3  Informes básicos de audiencia
    p Los datos de audiencia suelen ser los más relevantes para los usuarios, pues es allí donde se pondrán los contenidos y se generará el feedback; estos informes incluyen:
     
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-11.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-4.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema4/imagen5.svg', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde.p-5
              SlyderA(tipo="b")
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Usuarios activos</strong> 
                    p.mb-0 Muestra los usuarios que han iniciado una sesión en los últimos 1, 7, 14 o 30 días.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Análisis de grupo</strong> 
                    p.mb-0 Un grupo está conformado por varios usuarios que tienen características comunes. Este informe permite analizar el comportamiento de estos grupos.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Valor del ciclo de vida del cliente</strong> 
                    p.mb-0 Se puede determinar la rentabilidad de cada usuario en función del rendimiento de su ciclo de vida como usuario.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Versión de las aplicaciones</strong> 
                    p.mb-0 Esta métrica determina la versión de la app del usuario para determinar el nivel de actualización que realizan de la misma.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Datos demográficos</strong> 
                    p.mb-0 Permite conocer la edad y sexo de los visitantes. Sin embargo, no se puede obtener el 100% de la información, puesto que no todos los usuarios suministran esta información.
                    br
                    br
                    br
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Intereses</strong> 
                    p.mb-0 Esta información se obtiene de la misma forma que la edad y el sexo. Esta métrica permite conocer los gustos e intereses que tienen los visitantes al sitio web.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Comparativas</strong> 
                    p.mb-0 Este ítem permite comparar los resultados de la web analizada con otras similares, lo que permite mejorar las estrategias y trazar metas de alcance de la empresa.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>ID de usuario</strong> 
                    p.mb-0 Es una dificultad en el análisis, pues en realidad se registra un navegador y no un usuario, así si alguien abre el sitio en tres navegadores diferentes está generando tres sesiones y no una.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 4.4  Métricas de adquisición
    p Estas métricas están relacionadas con la audiencia del sitio web y la conversión. Encontrando:

    SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen1.svg')
        .title-card.bg8.mx-2.mb-4 IMPRESIONES
        p.mb-0.text-center Consiste en medir el número de veces que un anuncio ha sido visto por un usuario en cualquiera de las plataformas.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen2.svg')
        .title-card.bg8.mx-2.mb-4 CLICS
        p.mb-0.text-center Mide la cantidad de veces que los usuarios hicieron clic en los anuncios de la empresa.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen3.svg')
        .title-card.bg8.mx-2.mb-4 COSTO
        p.mb-0.text-center Determina el pago realizado por los clics que han conseguido los anuncios. Esto determina, en consecuencia, el costo de la campaña.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen4.svg')
        .title-card.bg8.mx-2.mb-4 CTR
        p.mb-0.text-center Click Through Rate, porcentaje de usuarios que hacen clic en los anuncios de la empresa en relación con las impresiones de estos.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen5.svg')
        .title-card.bg8.mx-2.mb-4 CPC
        p.mb-0.text-center Costo Por Clic, determina el precio que se paga por cada clic que realizan los usuarios en un anuncio.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen6.svg')
        .title-card.bg8.mx-2.mb-4 ROI
        p.mb-0.text-center Retorno sobre la inversión, mide el retorno que obtiene la empresa sobre la inversión generada. Se calcula restando a los ingresos el gasto y dividiendo por los ingresos obtenidos.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/tarjeta1/imagen7.svg')
        .title-card.bg8.mx-2.mb-4 AGRUPACIÓN DE CANALES
        p.mb-0.text-center Informa sobre la procedencia del tráfico; directo, búsqueda orgánica, referencia, correo electrónico, publicidad en buscadores, publicidad en otros medios y redes sociales.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 4.5  Informes básicos
    p <em>Google Analytics</em> genera informes de audiencia con datos generales relevantes a:

    .row.align-items-center.justify-content-center.mb-5
      .col-md-6
        .row.bg4.p-4
          ul.lista-ul-
            li.mb-5
              i.fas.fa-check-circle.color-chulo.mb-0
              |  <strong>Visión general:</strong> muestra de forma general las principales métricas de adquisición, comportamiento y conversión.
            li.mb-5
              i.fas.fa-check-circle.color-chulo.mb-0
              |  <strong>Todo el tráfico:</strong> en estas métricas se puede ver la procedencia de los visitantes: canales, mapas de árbol, fuente o medio y referencia.
            li.mb-5
              i.fas.fa-check-circle.color-chulo.mb-0
              |  <strong>Adwords:</strong> con estos informes se puede analizar el rendimiento de las campañas, anuncios y palabras clave.
            li.mb-5
              i.fas.fa-check-circle.color-chulo.mb-0
              |  <strong>Social:</strong> con esta métrica se analiza el comportamiento de los botones sociales que se hayan instalado en la web.
            li.mb-0
              i.fas.fa-check-circle.color-chulo.mb-0
              |  <strong>Campañas:</strong> permite medir la efectividad y el comportamiento de las campañas online.
      .col-md-6
        img(src='@/assets/curso/temas/tema4/imagen6.svg')





</template>

<script>
export default {
  name: 'Tema4',
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
