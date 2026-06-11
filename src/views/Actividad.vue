<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de evaluación sobre financiación y puesta en marcha de proyectos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión del aprendiz sobre los conceptos, procesos y estrategias relacionadas con la financiación y la puesta en marcha de proyectos, mediante la resolución de un cuestionario estructurado.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la financiación del proyecto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar actividades del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtener recursos económicos para su desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar estrategias comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el desempeño del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Una fuente de financiación interna corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crédito bancario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inversión extranjera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Capital propio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Subsidios del estado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento permite determinar si un proyecto es viable financieramente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cronograma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Flujo de caja.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategia comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El presupuesto del proyecto permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer costos del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir roles del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promocionar el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar el producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué se debe considerar al seleccionar una fuente de financiación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imagen del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tasas y condiciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El plan de negocio tiene como función principal:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar el equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustentar el proyecto. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar el cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un componente del plan de negocio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clima laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uniformes del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Horarios personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proyección financiera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'La relación entre plan de negocio y financiación permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Justificar recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La puesta en marcha del proyecto corresponde a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inicio de ejecución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseño de plan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cierre del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué elemento organiza las actividades en el tiempo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cronograma',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presupuesto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organigrama',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño de plan',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Las estrategias operativas se enfocan en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contratación externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción de producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseño de logo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecución de actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Las estrategias comerciales permiten:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir procesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar ventas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crear cronogramas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué tipo de recurso corresponde al dinero del proyecto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Financiero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es un ejemplo de recurso técnico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equipo de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capital humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Herramientas de trabajo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'El plan de puesta en marcha permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar el producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar la ejecución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué permite el seguimiento del proyecto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Detectar desviaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crear estrategias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'La integración del proyecto implica:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar procesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Unir componentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar objetivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué ocurre si no hay coherencia entre financiación y ejecución?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Genera fallas en la ejecución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumenta la productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No afecta el resultado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'La sostenibilidad del proyecto depende de:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión de recurso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseño gráfico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ubicación física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la finalidad de la preparación para la implementación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Terminar el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Iniciar sin planificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar condiciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
