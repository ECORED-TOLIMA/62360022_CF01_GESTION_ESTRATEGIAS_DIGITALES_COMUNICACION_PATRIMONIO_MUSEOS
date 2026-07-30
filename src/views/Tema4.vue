<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Marco normativo del patrimonio cultural

    p.mb-4 El patrimonio cultural se encuentra respaldado por un conjunto de normas que orientan su protección, gestión y divulgación. Estas disposiciones reconocen el patrimonio como un bien de interés colectivo y establecen responsabilidades para su conservación y transmisión cultural (Congreso de Colombia, 1997).

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #E5DFCA !important")
      .bloque-texto-g__img.img-bg-01.tema4
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Comprender este marco normativo es importante para identificar los deberes relacionados con el cuidado de los bienes y manifestaciones patrimoniales, así como los criterios que deben tenerse en cuenta para su comunicación en espacios físicos y digitales. Estas orientaciones buscan proteger los valores culturales asociados al patrimonio y respetar los derechos y saberes de las comunidades vinculadas a él.
    
    .row.justify-content-center
      .col.col-lg-10.col-12
        p Las normas sobre patrimonio cultural incluyen lineamientos nacionales e internacionales que sirven de referencia para la gestión y difusión del patrimonio desde instituciones como los museos.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1. Normatividad del patrimonio cultural en Colombia

    p.mb-4 En Colombia, la protección del patrimonio cultural se apoya en la Ley General de Cultura, que reconoce la cultura como parte fundamental de la identidad nacional y establece responsabilidades para su preservación y difusión (Congreso de Colombia, 1997). Esta norma define el patrimonio cultural como un bien de interés social y orienta las acciones relacionadas con su gestión y conservación.

    .row.justify-content-center.mb-4.recurso-ley-patrimonio.recurso-ley-patrimonio--sin-img-console
      .col-lg-4.col-md-5.col-12
        .recurso-ley-patrimonio__img
          figure.mb-0
            img(src='@/assets/curso/temas/t4/img-02.svg', alt='Imagen decorativa')

      .col-lg-6.col-md-7.col-12
        .recurso-ley-patrimonio__texto
          p.mb-4 La Ley 1185 de 2008 amplía esta definición al incluir bienes materiales, manifestaciones inmateriales y distintas expresiones culturales asociadas a la identidad del país. Además, plantea acciones relacionadas con la salvaguardia, conservación y divulgación del patrimonio, con el propósito de garantizar su permanencia y transmisión entre generaciones (Congreso de Colombia, 2008).
          p.mb-0 Estas disposiciones también sirven de guía para la comunicación del patrimonio en los museos. La comunicación de contenidos patrimoniales debe realizarse de manera responsable, evitando prácticas que distorsionen su significado o afecten su integridad cultural.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2. Normativa internacional aplicable al patrimonio cultural

    p.mb-4 El marco normativo internacional complementa la legislación nacional y establece orientaciones para la protección y salvaguardia del patrimonio cultural en distintos países. Estas disposiciones reconocen el valor de las prácticas, saberes, expresiones y manifestaciones culturales transmitidas entre generaciones, al tiempo que resaltan el papel de las comunidades en su preservación y continuidad. Promueven el respeto por la diversidad cultural, el acceso equitativo a las expresiones culturales y el desarrollo de prácticas de divulgación más incluyentes, participativas y respetuosas de las diferentes identidades presentes en las comunidades. Este enfoque es particularmente especial para los museos y demás instituciones culturales, ya que orienta el trabajo con patrimonio inmaterial, contenidos culturales vivos y estrategias de comunicación que favorezcan el reconocimiento y la participación de diversos públicos. De igual manera, fomenta acciones educativas y de sensibilización que contribuyen al fortalecimiento de la ciudadanía cultural, al diálogo intercultural y a la valoración de las múltiples formas en que las comunidades construyen y transmiten su herencia cultural. En conjunto, estas orientaciones buscan garantizar que el patrimonio cultural continúe siendo un recurso para la memoria, la identidad, la cohesión social y el desarrollo cultural. (UNESCO, 2005).

    .row.justify-content-center
      .col.col-lg-10.col-12
        figure
          img(src='@/assets/curso/temas/t4/img-03.png', alt='')

    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C04.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-0
            .col.col-lg-1.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img-04.svg', alt='')
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Desde esta perspectiva, las normas internacionales refuerzan la responsabilidad de los museos y de las plataformas digitales en la difusión del patrimonio cultural.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
