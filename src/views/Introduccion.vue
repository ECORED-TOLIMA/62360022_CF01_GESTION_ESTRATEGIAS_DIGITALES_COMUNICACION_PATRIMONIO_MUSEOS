<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El patrimonio cultural desempeña un papel importante en la comprensión de las formas de vida, los procesos históricos y las expresiones que contribuyen a la construcción de la identidad de las comunidades. Su reconocimiento y preservación favorecen el fortalecimiento de la memoria colectiva y el respeto por la diversidad cultural. En este contexto, los museos cumplen una función social relevante al conservar, investigar, interpretar y difundir el patrimonio cultural mediante procesos de mediación dirigidos a distintos públicos.

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-secundario.px-4.py-3
          p.mb-0 La incorporación de tecnologías digitales ha ampliado las posibilidades de acceso, circulación y apropiación de los contenidos culturales. Sitios #[i web], redes sociales, recorridos virtuales y recursos multimedia permiten acercar el patrimonio a nuevos públicos y generar formas de interacción que complementan la experiencia presencial. Estos escenarios también plantean desafíos relacionados con la interpretación adecuada de los contenidos, el respeto por la diversidad cultural y el cumplimiento de criterios éticos y legales.

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img-01.png', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p Este componente formativo aborda los conceptos fundamentales del patrimonio cultural, la función social de los museos y los marcos normativos que orientan su gestión y divulgación. Asimismo, presenta elementos relacionados con la comunicación digital, las audiencias y comunidades en línea, la planificación de contenidos y las estrategias utilizadas para la difusión del patrimonio cultural en diferentes entornos y plataformas.
        p Por lo anterior y para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
