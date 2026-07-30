<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo desarrolla los fundamentos del patrimonio cultural, abordando sus manifestaciones materiales e inmateriales, el papel de los museos como instituciones dedicadas a su conservación y divulgación, así como su valor social en la construcción de la identidad, la memoria colectiva y la apropiación comunitaria. Además, presenta el marco normativo y los criterios éticos que orientan la protección y comunicación responsable del patrimonio en entornos físicos y digitales.
    p.mb-4 Posteriormente, profundiza en la comunicación digital aplicada a los museos, incluyendo los canales, comunidades virtuales, audiencias, estrategias de divulgación y planificación de contenidos. Desde esta perspectiva, integrar el patrimonio cultural con las herramientas digitales permite ampliar el acceso al conocimiento, fortalecer la participación de las comunidades y promover una difusión responsable que contribuya a la preservación, valoración y apropiación social del patrimonio.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con el patrimonio cultural y su divulgación digital. Inicia con los fundamentos del patrimonio cultural y el papel de los museos en su conservación y comunicación, continúa con la comunicación digital y los canales utilizados para difundir contenidos, incorpora las comunidades y audiencias que participan en los entornos digitales, y aborda las estrategias de divulgación y la planificación de contenidos. Finalmente, integra los recursos digitales empleados para promover el acceso, la valoración y la apropiación social del patrimonio cultural.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
