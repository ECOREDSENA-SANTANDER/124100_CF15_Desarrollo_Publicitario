<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métricas en Facebook

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
       img(src='@/assets/curso/temas/tema2/imagen1.svg')
      .col-sm-12.col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.p-4 <strong>Siendo la red social con el mayor número de usuarios a nivel mundial, Facebook es una plataforma por excelencia para el desarrollo de estrategias de marketing viral.</strong> 
          p.ps-4 <strong>Los diferentes servicios de pago y gratuitos que ofrece permiten que las empresas realicen diferentes tipos de actividades comerciales y promocionales que pueden medir con datos estadísticos puntuales, los cuales se pueden monitorizar semanalmente.</strong>  
        p.mb-0 Facebook en la actualidad permite realizar unas mediciones muy completas de la actividad de las fanpage. Para el ingreso a estas estadísticas es necesario acceder a la página y en el menú en la parte izquierda, ingresar a estadísticas, allí se verá la información en forma detallada.
        p.mt-4 A continuación, se resaltan algunas de las estadísticas más importantes que ofrece Facebook:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-11
        img(src='@/assets/curso/temas/tema2/imagen2.png', alt='')

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.1  Resumen
    p Muestra datos generales de la actividad de la página, en un periodo de 7 o 28 días o de los últimos dos días.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 1.
                span
                  |  Estadística resumen
              figure
                img(src='@/assets/curso/temas/tema2/imagen3.svg' alt="Imagen de una captura de pantalla donde se presentan de manera gráfica y numérica varias interacciones con el público.")
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      p.text-center Entre ellos se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5
        ul.lista-ul-.mb-0
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Acciones en la página:] muestra el número de clics en el contacto de la página y en el botón de Call to Action que esta tenga.
          li.mb-5  
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Vistas previas a la página:] muestra el número de veces que las personas pasaron el mouse sobre la foto de perfil para obtener una vista previa.
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Visitas a la página:] muestra el número de veces que las personas vieron el perfil de la página.
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Me gusta de la página:] indica el número de personas nuevas que dieron “me gusta” a la página, discriminados entre orgánicos y pagados.
      .col-sm-12.col-lg-5
        img(src='@/assets/curso/temas/tema2/imagen4.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5
        img(src='@/assets/curso/temas/tema2/imagen5.svg')
      .col-sm-12.col-lg-5
        ul.lista-ul-.mb-0
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Alcance de la publicación:] indica el número de personas que vieron algunas de las publicaciones al menos una vez.
          li.mb-5  
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Alcance de la historia:] indica el número de personas que se les mostró en pantalla alguna historia de la página, diferenciando entre orgánicas, promocionales y totales.
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Recomendaciones:] indica el número de veces que otras personas recomendaron la página.
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Interacción con la publicación:] indica el número de veces que las personas interactuaron con una de las publicaciones a través de reacciones, comentarios, contenido compartido y clics.
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Nivel de respuesta:] indica el porcentaje de los mensajes que se respondieron a través de Messenger.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5
        ul.lista-ul-.mb-0
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Videos:] muestra el número de veces que los videos de la página fueron reproducidos por, al menos, 3 segundos, discriminado por pagados, totales y no pagados.
          li.mb-5  
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Seguidores de la página:] número de personas nuevas que comenzaron a seguir la página, distinguiendo por pagado y no pagado.
          li.mb-5
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b Páginas en observación:]  este componente permite comparar el rendimiento de la página y las publicaciones que se hagan en ella con otras páginas similares.
          li.mb-0
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Tus 5 publicaciones más recientes:]  Facebook muestra un resumen de las 5 últimas publicaciones mostrando la cantidad de personas que interactuaron con ellas a través de reacciones, compartidas o comentadas
      .col-sm-12.col-lg-5
        img(src='@/assets/curso/temas/tema2/imagen6.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/imagen2.png', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          h3.mb-0.text-white.fw-bold Además del resumen, Facebook permite analizar estadísticas detalladas de muchos de los datos que son más relevantes para la empresa y que permiten tomar decisiones en el desarrollo de estrategias promocionales y comerciales. Ahora, se detallarán algunas de ellas:

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.2  Seguidores
    p Muestra de forma más detallada y para un periodo seleccionado, el total de seguidores de la página, los seguidores pagos y orgánicos y el origen de seguimiento de la página: computador, la página misma, por búsqueda o por aplicación. Dando clic en cada ítem, se muestran las estadísticas detalladas y datos promediados.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 2.
                span
                  |  Estadísticas de seguidores
              figure
                img(src='@/assets/curso/temas/tema2/imagen7.svg' alt="Imagen de captura de pantalla donde se presentan 3 gráficas acerca de características de los seguidores.")
      p.mt-5 Para las estadísticas de seguidores se muestran tres gráficas fundamentales:

    .row.tarjeta--container.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg5.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-5(src='@/assets/curso/temas/tema2/tarjeta1/imagen1.svg')
        h2.mt-5 Total de seguidores
        p Muestra el acumulado de seguidores por día a través de una gráfica lineal.
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg6.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-5(src='@/assets/curso/temas/tema2/tarjeta1/imagen2.svg')
        h2.mt-5.text-white Seguidores de la página
        p.text-white  Muestra la cantidad de personas que siguen la página, clasificando en orgánicos, pagados y anulaciones de seguimientos. 
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg7.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-5(src='@/assets/curso/temas/tema2/tarjeta1/imagen3.svg')
        h2.mt-5 Origen de seguimientos de la página
        p Muestra el número de veces que se comenzó a seguir la página diferenciando el origen de seguimiento; si fue desde un computador, desde la propia página, a través de una búsqueda, desde una aplicación u otro.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.3  Centro de anuncios
    p Este es un componente muy importante para las empresas. Permite obtener información de los últimos 7, 30, 60 o 90 días de la actividad de los anuncios que se publiquen en la página y relacionando, además, el presupuesto invertido en dicha actividad.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 3.
                span
                  |  Estadísticas de centro de anuncios
              figure
                img(src='@/assets/curso/temas/tema2/imagen8.svg' alt="Imagen de captura de pantalla donde se presenta la información acerca de los anuncios publicados.")
      p.mt-5 El informe muestra tres variables fundamentales:

    .row.tarjeta--container.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg5.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-3(src='@/assets/curso/temas/tema2/imagen9.svg')
        h2.mt-5 Alcance
        p Se refiere al número de personas que vieron los anuncios de la página; el alcance debe diferenciarse de las impresiones que incluyen varias visualizaciones de una misma persona.
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg6.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-3(src='@/assets/curso/temas/tema2/imagen9.svg')
        h2.mt-5.text-white Interacciones
        p.text-white  Indica el número de acciones que las personas realizan en relación con los anuncios de la página. 
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg7.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-3(src='@/assets/curso/temas/tema2/imagen9.svg')
        h2.mt-5 Clics en el enlace
        p Esta métrica indica el número de clics en los enlaces del anuncio que direccionan a destinos específicos dentro y fuera de Facebook.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.4  Me gusta
    p Esta sección de las estadísticas de Facebook muestra una de las variables más importantes para las empresas. Se puede calcular desde los últimos tres meses y ver la información día a día, permitiendo observar el progreso diario de la página en cuanto al total de “Me gusta” que esta obtiene.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 4.
                span
                  |  Estadísticas de me gusta
              figure
                img(src='@/assets/curso/temas/tema2/imagen10.svg' alt="Imagen de una captura de pantalla que presenta tres gráficos con características acerca de los me gusta recibidos en la pagina.")
      p.mt-5 Las siguientes son tres tipos de estas métricas:

    .row.tarjeta--container.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg5.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-3(src='@/assets/curso/temas/tema2/imagen11.svg')
        h2.mt-5 Total de “Me gusta” de la página
        p.text-small Indica el número total de las personas que han dado “Me gusta” y el rendimiento promedio a lo largo del tiempo, muestra el total acumulado de cada día.
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg6.p-5.mb-cus
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-3(src='@/assets/curso/temas/tema2/imagen11.svg')
        h2.mt-5.text-white “Me gusta” de la página
        p.text-white.text-small  Este punto muestra el número de “Me gusta” de la página tanto orgánicos, pagos y “Ya no me gusta”. A través de una gráfica lineal se muestran los picos de estas variables y el detalle de cada uno de ellos en los que se puede verificar el origen de los “Me gusta” y el porcentaje de cada uno de ellos. 
      .col-sm-12.col-md-12.col-lg-4.tarjeta.bgimg7.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
              img.mt-3(src='@/assets/curso/temas/tema2/imagen11.svg')
        h2.mt-5 Dónde se produjeron los “Me gusta”
        p.text-small Este punto muestra el número de “Me gusta” de la página tanto orgánicos, pagos y “Ya no me gusta”. A través de una gráfica lineal se muestran los picos de estas variables y el detalle de cada uno de ellos en los que se puede verificar el origen de los “Me gusta” y el porcentaje de cada uno de ellos.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.5  Alcance
    p Es una de las métricas más relevantes en un plan de medios y hace parte de los objetivos KPI que desde las estrategias de medios se plantean.

    .row.justify-content-center.align-items-center.bg3(data-aos="zoom-in-left")
      .col-sm-3
        img.mt-5.mb-5(src='@/assets/curso/temas/tema2/imagen12.svg')
      .col-md-6
        #t_1_1.titulo-segundo.color-secundario
          h2 Alcance
        p.mb-5 Es una de las métricas más relevantes en un plan de medios y hace parte de los objetivos KPI que desde las estrategias de medios se plantean.
        a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=HhAMuQUXaDM" target="_blank")
          span Descargar
          i.fas.fa-download
      
    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.6  Visitas a la página
    p Otra métrica con alto nivel de relevancia para la empresa es la cantidad de visitas que recibe la página. En este punto se pueden verificar las estadísticas por trimestres y periodos más cortos, incluso desde el mismo periodo del año anterior.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 5.
                span
                  |  Estadísticas de visitas a la página
              figure
                img(src='@/assets/curso/temas/tema2/imagen13.svg' alt="Imagen de una captura de pantalla que presenta tres gráficas acerca de características de las visitas a la pagina.")
      p.mt-5.mb-5.text-center En esta sección es posible ver una serie de datos de forma muy detallada:

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5.mb-cus
        img.w-cus.mb-4(src='@/assets/curso/temas/tema2/escala1/imagen1.svg')
        p.mb-0 #[b Visitas totales:] muestra el total de visitas que tuvo el perfil de la página en determinado día o periodo.
        br
        p.mb-4.bb-cus
        img.w-cus.mb-4(src='@/assets/curso/temas/tema2/escala1/imagen2.svg')
        p.mb-0 #[b Visitas por sección:]  indica el total de visitas que tuvo cada pestaña del perfil de la página: inicio, publicaciones, fotos, videos, comunidad.
        br
        p.mb-4.bb-cus
        img.w-cus.mb-4(src='@/assets/curso/temas/tema2/escala1/imagen3.svg')
        p.mb-0 #[b Orígenes principales:]  muestra el total de los usuarios conectados por origen de referencia: Facebook, Google.com, Google.com.co, Google.es o Yahoo!.
      .col-sm-12.col-lg-5.mb-cus
        img.w-cus.bl-cus-img.mb-4.mt-4.ps-3(src='@/assets/curso/temas/tema2/escala1/imagen4.svg')
        p.bl-cus #[b Total visitantes:]  este indicador muestra el número de personas que, con las sesiones iniciadas, vieron el perfil de la página. Esta sección muestra, además, otros datos importantes:
        ul.lista-ul.ps-3.bl-cus
          li.mb-2
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Por sección:]  personas que iniciaron sesión y vieron las diferentes pestañas del perfil de la página.
          li.mb-2  
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Por edad y sexo:]  personas que iniciaron sesión que vieron el perfil de la página diferenciados por edad y sexo.
          li.mb-2
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Por país:]  personas que iniciaron sesión que vieron el perfil de la página discriminados por país de origen.
          li.mb-2
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Por ciudad:]  personas que iniciaron sesión y que vieron el perfil de la página mostrando la ciudad de origen.
          li.mb-2
            i.fas.fa-check-circle.color-chulo.mb-3
            | #[b  Por dispositivo:]  personas que iniciaron sesión y que vieron el perfil de la página, permitiendo diferenciar el tipo de dispositivo desde el cual accedieron: computador o móvil.
        br.bl-cus
        br.bl-cus
      
    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.7  Publicaciones
    p Es una métrica que resulta muy relevante para la empresa, tanto si la estrategia consiste en el desarrollo de una campaña o un anuncio individual.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 6.
                span
                  |  Estadísticas de publicaciones
              figure
                img(src='@/assets/curso/temas/tema2/imagen14.svg' alt="Imagen de una captura de pantalla donde se presenta una grafica acerca de horas en que se ven la publicaciones, y una tabla con características del rendimiento de cada publicación.")

    .row.justify-content-center.align-items-center.mb-5.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/imagen2.png', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold En esta sección se muestran dos tipos de datos en relación con las publicaciones; el primero es la información del momento en que están conectados los fans de la página y el segundo es el rendimiento de los tipos de publicaciones.
    p.mb-4-mt-4 En este mismo apartado, Facebook permite ver datos y estadísticas relacionadas con cada anuncio y que son de alta relevancia para la toma de decisiones: fecha de publicación, tipo de publicación y otros datos más detallados:

    .row.justify-content-center.mb-5.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta2/imagen1.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Segmentación
              p.mb-0.text-center Muestra el segmento de mercado al que se dirigió la publicación.
      .col-sm-12.col-lg-4.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta2/imagen2.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Alcance
              p.mb-0.text-center Muestra a cuántas personas llegó la publicación y separa entre fans y no fans.
      .col-sm-12.col-lg-4.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta2/imagen3.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Interacción 
              p.mb-0.text-center En este punto muestra el total de clics que recibe cada publicación y las reacciones, comentarios y las veces que se compartió el mismo.
    
    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.8  Historias
    p Este apartado muestra de forma detallada las cifras de historias publicadas en la página. La información está desglosada en: veces únicas abiertas, interacciones y número de historias publicadas.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 7.
                span
                  |  Estadísticas de historias
              figure
                img(src='@/assets/curso/temas/tema2/imagen15.svg' alt="Imagen de captura de pantalla donde se presenta de forma numérica, información acerca de la historias.")

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.9  Personas
    p Esta sección de las estadísticas de Facebook es también muy importante. Muestra el número de personas que vieron alguna de las publicaciones realizadas en la página con variables como sexo y edad; datos que han sido suministrados por los mismos usuarios.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-10
        .row.justify-content-center.bg2
          .col-10
            .cajon.bg2.p-5.mb-4
              .titulo-sexto.color-secundario
                h5 Figura 8.
                span
                  |  Estadísticas de personas
              figure
                img(src='@/assets/curso/temas/tema2/imagen16.svg' alt="Imagen de captura de pantalla que presenta características de las personas que siguen la pagina.")

    .row.justify-content-center.mb-5.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta3/imagen1.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Tus fans
              p.mb-0.text-center Muestra el total por rango de edad y sexo de las personas que vieron alguna publicación de la página.
      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta3/imagen2.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Tus seguidores
              p.mb-0.text-center Muestra el total de las personas que siguen la página con rangos de edad y sexo.
      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta3/imagen3.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Personas alcanzadas
              p.mb-0.text-center Indica el número de personas a las que se les mostró contenido de la página y clasificadas por edad y sexo.
      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tarjeta3/imagen4.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Personas que interactúan 
              p.mb-0.text-center Hace referencia al número de personas que hablan de la página, catalogadas por rango de edad y sexo.

    .row.justify-content-center.align-items-center.mb-5.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/imagen2.png', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold Adicionalmente, esta sección muestra el país de origen de las personas que siguen e interactúan con la página y las publicaciones, así como la ciudad y el idioma.


</template>

<script>
export default {
  name: 'Tema2',
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
