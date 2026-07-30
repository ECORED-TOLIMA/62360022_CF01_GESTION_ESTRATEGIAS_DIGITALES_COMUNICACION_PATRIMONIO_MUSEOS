<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconocimiento de conceptos sobre patrimonio cultural y comunicación digital.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer los conocimientos relacionados con el patrimonio cultural, los museos y la comunicación responsable del patrimonio en entornos físicos y digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por patrimonio cultural?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conjunto de bienes y manifestaciones que tienen valor cultural para una comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente los monumentos históricos de un país.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los recursos económicos destinados a la cultura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los edificios modernos construidos por el Estado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que el patrimonio cultural reúne los bienes y manifestaciones con valor para una comunidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos pertenece al patrimonio cultural inmaterial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una escultura antigua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una colección de fósiles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una tradición oral transmitida entre generaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un edificio patrimonial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que las tradiciones orales forman parte del patrimonio cultural inmaterial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué función cumplen los museos en la sociedad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vender bienes culturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conservar y comunicar el patrimonio cultural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Almacenar objetos históricos y arqueológicos sin clasificarlos ni documentarlos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir el acceso a la información histórica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que los museos conservan y comunican el patrimonio cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué aspecto fortalece el patrimonio cultural en las comunidades?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La competencia comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El sentido de pertenencia e identidad cultural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La privatización de los bienes culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que el patrimonio cultural fortalece el sentido de pertenencia y la identidad cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué caracteriza a la comunicación bidireccional en entornos digitales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La transmisión de información desde la institución hacia el público sin posibilidad de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El intercambio entre instituciones y públicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La publicación exclusiva de contenidos impresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de los espacios de conversación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la comunicación bidireccional permite el intercambio entre las instituciones y los públicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una responsabilidad ética en la comunicación del patrimonio cultural?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Difundir contenidos respetando la diversidad cultural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Modificar relatos históricos para hacerlos más atractivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compartir información sensible sobre bienes patrimoniales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar información sin verificar su contexto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la comunicación del patrimonio debe respetar la diversidad cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué es un ecosistema digital en el ámbito cultural?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de normas para proteger el patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una colección física de bienes culturales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una red de plataformas, herramientas y actores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un espacio destinado únicamente al almacenamiento de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que un ecosistema digital integra plataformas, herramientas y actores que interactúan alrededor de contenidos culturales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito de la caracterización de públicos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar visitantes según su edad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar intereses y necesidades del público.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limitar el acceso a determinados grupos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los procesos de comunicación institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la caracterización de públicos permite identificar sus intereses, necesidades y formas de relación con los contenidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué permite una adecuada planeación de contenidos culturales?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar información sin definir objetivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la circulación de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el uso de medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar contenidos de forma coherente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la planeación de contenidos organiza los temas, formatos y canales de manera coherente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza una narrativa transmedia?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La difusión de un mismo contenido en un único medio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La presentación de información exclusivamente mediante texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La construcción de un relato a través de múltiples plataformas y formatos. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La publicación simultánea de contenidos sin relación temática.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que una narrativa transmedia desarrolla un relato a través de múltiples plataformas y formatos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué es la memoria colectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                ' El conjunto de recuerdos, experiencias y significados compartidos por una comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La recopilación organizada de documentos históricos conservados en bibliotecas y archivos especializados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La información publicada únicamente en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los registros económicos de una institución cultural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la memoria colectiva corresponde al conjunto de recuerdos y significados compartidos por una comunidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué favorece la apropiación comunitaria del patrimonio cultural?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La exclusión de la comunidad en las decisiones culturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La participación de las comunidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La comercialización de todos los bienes culturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El acceso restringido a la información histórica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la apropiación comunitaria promueve la participación de las comunidades en la valoración y cuidado del patrimonio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza una comunidad virtual?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un grupo de personas que solo interactúa presencialmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una organización dedicada exclusivamente a la venta de contenidos digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un conjunto de personas que interactúa en entornos digitales alrededor de intereses comunes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un espacio destinado únicamente a la publicidad institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que una comunidad virtual está conformada por personas que interactúan en entornos digitales alrededor de intereses comunes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué permite la interacción digital en los procesos de comunicación cultural?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar la participación del público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los procesos de divulgación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el patrimonio cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer diálogo e intercambio entre instituciones y audiencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la interacción digital favorece el diálogo y el intercambio entre instituciones y audiencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es el propósito principal de los derechos de autor?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Regular los horarios y condiciones de publicación de contenidos en medios digitales institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proteger las creaciones intelectuales y reconocer la autoría de las obras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Restringir el acceso a la cultura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar las redes sociales institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que los derechos de autor protegen las creaciones intelectuales y reconocen su autoría.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué principio debe respetarse al utilizar fotografías de personas en contenidos digitales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La publicación sin autorización previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La libre circulación de imágenes en internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El uso obligatorio de filtros digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La protección de datos personales y el consentimiento informado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que el uso de fotografías debe respetar la protección de datos personales y el consentimiento informado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es importante considerar el contexto sociocultural al comunicar el patrimonio?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite comprender y respetar el significado cultural de los contenidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque permite reemplazar completamente los procesos de investigación histórica y documental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reduce la participación ciudadana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque elimina la necesidad de planear contenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que el contexto sociocultural permite comprender y respetar el significado del patrimonio cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de los siguientes es un ejemplo de canal digital para divulgar patrimonio cultural?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una carretera nacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una sala de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una red social institucional o un sitio <em>web</em> cultural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un archivo físico cerrado al público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que las redes sociales institucionales y los sitios web son canales digitales para divulgar el patrimonio cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué busca una estrategia de comunicación digital?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar objetivos, mensajes, públicos y canales para comunicar de forma efectiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Publicar contenidos de manera permanente sin realizar una planificación previa de objetivos y públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los contenidos culturales por contenido comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la interacción con las audiencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que una estrategia de comunicación digital organiza objetivos, mensajes, públicos y canales para comunicar de forma efectiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué aspecto debe considerarse al divulgar patrimonio cultural en entornos digitales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de publicaciones realizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de seguidores obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El respeto por los valores culturales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El uso exclusivo de contenidos audiovisuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la divulgación del patrimonio cultural en entornos digitales debe respetar los valores culturales, la diversidad y la normatividad vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
