<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Museos y función social
    
    p.mb-4 Un museo es una institución dedicada al estudio, conservación, investigación y divulgación del patrimonio cultural. Entre sus funciones se encuentra la comunicación de bienes, conocimientos y manifestaciones culturales mediante exposiciones, actividades educativas y diferentes estrategias de mediación orientadas a diversos públicos.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #E5DFCA !important")
      .bloque-texto-g__img.img-bg-01.tema2
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Además de resguardar colecciones, los museos crean espacios de encuentro entre el patrimonio y la sociedad. Las exposiciones, actividades educativas y estrategias de mediación permiten interpretar los significados históricos, sociales y simbólicos de los bienes culturales. De esta manera, el museo participa en la construcción de memoria colectiva y en la transmisión de relatos compartidos.

    .row.justify-content-center
      .col.col-lg-10.col-12
        p En la actualidad, muchos museos amplían su alcance mediante plataformas digitales y contenidos en línea. Estas herramientas facilitan el acceso a colecciones y experiencias culturales para personas que no pueden visitar físicamente los espacios. Sin embargo, la difusión digital también implica un sentido de responsabilidad en la forma de representar las culturas y comunicar el patrimonio, procurando respeto por la diversidad y acceso equitativo a los contenidos culturales (UNESCO, 2005).

    .tarjeta.color-primario.video.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/img-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Se invita a consultar el siguiente video denominado: “Los museos en la sociedad”, el cual contextualiza un poco sobre esta temática:
            .col-sm-auto
              a.boton.color-acento-contenido.video.texto-blanco(href="https://www.youtube.com/watch?v=qvBJSN3pr14" target="_blank")
                span Abrir video
                i.fas.fa-file-video

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipologías de museos

    p Los museos pueden clasificarse según el tipo de patrimonio que conservan o los temas que abordan. Existen museos de arte, historia, arqueología, ciencia, etnografía y memoria, entre otros. Cada uno organiza sus colecciones y actividades de acuerdo con los intereses culturales, educativos o sociales que orientan su trabajo.
    p.mb-4 Identificar los tipos de museos ayuda a comprender cómo cambia la relación entre estos y la comunidad. Por ejemplo:

    .row.justify-content-center.mb-4
      .col-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/t2/img-03.svg' alt="")
          .tarjeta.tarjeta--C03.px-5.py-3
            .p-4
              h4 Museo de memoria
              p.mb-0 Busca promover la reflexión sobre hechos históricos y procesos sociales. 

      .col-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/t2/img-04.svg' alt="")
          .tarjeta.tarjeta--C03.px-5.py-3
            .p-4
              h4 Museo comunitario
              p.mb-0 Suele construirse con participación directa de la población y participa en la transmisión de relatos, prácticas y experiencias locales.

    .row.justify-content-center
      .col.col-lg-10.col-12
        figure.mb-4
          img(src='@/assets/curso/temas/t2/img-05.png', alt='')

    p.mb-4.text-center La siguiente tabla da una completa clasificación al respecto:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Clasificación de los museos según patrimonio y función social
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #F9E7E7;") Tipo de museo
                th(style="width: 20%; background-color: #F9E7E7;") Patrimonio predominante
                th(style="width: 20%; background-color: #F9E7E7;") Función social principal
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Museo de arte.
                td(style="background-color: #F6F6F6;") Patrimonio artístico (pinturas, esculturas, instalaciones).
                td(style="background-color: #F6F6F6;") Preservar y difundir el arte; fomentar la apreciación estética y la reflexión cultural.
              tr(data-aos="fade-right")
                td Museo de historia.
                td Patrimonio histórico (documentos, objetos, testimonios).
                td Conservar la memoria colectiva; educar sobre procesos históricos y eventos significativos.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Museo de ciencias naturales.
                td(style="background-color: #F6F6F6;") Patrimonio natural (fósiles, especímenes, minerales).
                td(style="background-color: #F6F6F6;") Promover el conocimiento de la biodiversidad; concienciar sobre conservación ambiental.
              tr(data-aos="fade-right")
                td Museo de ciencia y tecnología.
                td Patrimonio científico-tecnológico (inventos, maquinaria, experimentos).
                td Divulgar el conocimiento científico; estimular el pensamiento crítico y la innovación.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Museo arqueológico.
                td(style="background-color: #F6F6F6;") Patrimonio arqueológico (vestigios, artefactos, restos materiales).
                td(style="background-color: #F6F6F6;") Estudiar y preservar culturas antiguas; comprender la evolución de las sociedades.
              tr(data-aos="fade-right")
                td Museo etnográfico.
                td Patrimonio cultural inmaterial (tradiciones, costumbres, objetos cotidianos).
                td Valorar la diversidad cultural; fortalecer la identidad y el respeto intercultural.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Museo comunitario.
                td(style="background-color: #F6F6F6;") Patrimonio local mixto (historia, tradiciones, memorias locales).
                td(style="background-color: #F6F6F6;") Reforzar la identidad comunitaria; fomentar la participación ciudadana activa.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 El museo como agente de identidad y memoria

    p.mb-4 Los museos desempeñan una función social que va más allá de la conservación de colecciones. A través de la investigación, interpretación y difusión del patrimonio cultural, contribuyen a que diferentes públicos conozcan y comprendan hechos, procesos y manifestaciones que forman parte de la historia de las comunidades. Además de preservar objetos y testimonios, los museos organizan exposiciones, actividades educativas y espacios de mediación que facilitan el encuentro entre el patrimonio y la sociedad. Estas acciones ayudan a contextualizar los bienes culturales y a promover reflexiones sobre su significado dentro de distintos entornos sociales y culturales.

    .row.justify-content-center
      .col-lg-10
        .box___style_1.box___style_1--sin-img-console(data-aos="zoom-in").mb-4
          .row.align-items-stretch
            .col-xl.fit___box_container
              p Los museos participan en la construcción y preservación de la memoria colectiva al documentar, comunicar y poner en circulación relatos, experiencias y conocimientos asociados al patrimonio. De esta manera, contribuyen a mantener vigentes referentes culturales que permiten comprender el pasado y establecer relaciones con los desafíos y realidades del presente (UNESCO, 2005).
              p.mb-0 Estas funciones convierten al museo en un espacio de diálogo donde el patrimonio cultural puede ser interpretado desde diferentes perspectivas, favoreciendo el acceso al conocimiento y la valoración de la diversidad cultural.
            .col-xl-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img-06.svg', alt='').m-auto
            
    .tarjeta.color-primario.video.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/img-07.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Le invitamos a explorar el Museo Virtual Lilí, una experiencia digital interactiva que permite conocer colecciones arqueológicas y patrimoniales mediante recorridos virtuales y recursos inmersivos:
            .col-sm-auto
              a.boton.color-acento-contenido.video.texto-blanco(href="https://museo.uao.edu.co/" target="_blank")
                span Enlace web
                i.fas.fa-file-code

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
