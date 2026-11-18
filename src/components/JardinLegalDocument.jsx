import React from "react";
import "../css/JardinLegalDocument.css";

const CONTENT = [
  {
    "i": 0,
    "type": "h1",
    "text": "Jardín · Pixel Room App — Términos de Uso y Política de Privacidad"
  },
  {
    "i": 1,
    "type": "p",
    "text": "Última actualización: 17 de noviembre de 2026 · Versión 1.0"
  },
  {
    "i": 4,
    "type": "h1",
    "text": "PARTE 1 — TÉRMINOS DE USO"
  },
  {
    "i": 5,
    "type": "h2",
    "text": "1. Quiénes somos y qué aceptas"
  },
  {
    "i": 6,
    "type": "p",
    "text": "«Jardín · Pixel Room App» (la «App») es una aplicación móvil para coleccionar flores en estilo pixel art, decorar un hogar y un jardín virtuales y compartir flores con otras personas mediante códigos escaneables. La App es ofrecida por Cristobal Oñate, RUT/identificación tributaria 21.890.152-2, con domicilio en Chile (en adelante, «nosotros»)."
  },
  {
    "i": 7,
    "type": "p",
    "text": "Al crear una cuenta, marcar la casilla «Acepto los Términos de Uso y la Política de Privacidad» o usar la App, declaras que has leído y aceptas estos Términos y nuestra Política de Privacidad. Si no estás de acuerdo, no uses la App."
  },
  {
    "i": 8,
    "type": "h2",
    "text": "2. Requisitos para usar la App"
  },
  {
    "i": 9,
    "type": "li",
    "text": "Debes tener al menos 14 años. Si eres menor de 18 años, declaras que tu madre, padre o representante legal ha autorizado el uso de la App y ha leído estos documentos."
  },
  {
    "i": 10,
    "type": "li",
    "text": "Debes entregar información veraz al registrarte y mantenerla actualizada."
  },
  {
    "i": 11,
    "type": "li",
    "text": "No puedes usar la App si previamente se suspendió o eliminó tu cuenta por infringir estos Términos."
  },
  {
    "i": 12,
    "type": "h2",
    "text": "3. Tu cuenta"
  },
  {
    "i": 13,
    "type": "li",
    "text": "Puedes registrarte con un nombre de usuario y una contraseña."
  },
  {
    "i": 14,
    "type": "li",
    "text": "Eres responsable de la actividad realizada con tu cuenta y de mantener tus datos de acceso seguros y confidenciales. Si sospechas un uso no autorizado, avísanos de inmediato en FlowersAppCL@gmail.com."
  },
  {
    "i": 15,
    "type": "li",
    "text": "Tu nombre de usuario debe ser único. Podemos rechazar, cambiar o eliminar nombres de usuario que sean ofensivos, engañosos, que suplanten a otras personas o que infrinjan derechos de terceros."
  },
  {
    "i": 16,
    "type": "li",
    "text": "Puedes eliminar tu cuenta cuando quieras desde Perfil → Ajustes o escribiéndonos a FlowersAppCL@gmail.com."
  },
  {
    "i": 17,
    "type": "h2",
    "text": "4. Qué puedes hacer en la App"
  },
  {
    "i": 18,
    "type": "p",
    "text": "La App te permite, entre otras funciones:"
  },
  {
    "i": 19,
    "type": "li",
    "text": "Escanear códigos para recibir flores de otras personas."
  },
  {
    "i": 20,
    "type": "li",
    "text": "Guardar flores como recuerdos en tu inventario, marcarlas como favoritas y ver su detalle (remitente, fecha, mensaje o frase)."
  },
  {
    "i": 21,
    "type": "li",
    "text": "Colocar flores en tu hogar y plantarlas en tu jardín."
  },
  {
    "i": 22,
    "type": "li",
    "text": "Personalizar tu perfil (nombre, avatar), subir de nivel y ajustar notificaciones, sonidos, música ambiente e idioma."
  },
  {
    "i": 23,
    "type": "p",
    "text": "Podemos agregar, modificar o retirar funciones en cualquier momento. Algunas secciones pueden estar en construcción."
  },
  {
    "i": 24,
    "type": "h2",
    "text": "5. Reglas de conducta"
  },
  {
    "i": 25,
    "type": "p",
    "text": "Al usar la App te comprometes a no:"
  },
  {
    "i": 26,
    "type": "li",
    "text": "Usarla para fines ilegales ni para acosar, amenazar, discriminar, molestar o hostigar a otras personas."
  },
  {
    "i": 27,
    "type": "li",
    "text": "Enviar o publicar mensajes, frases, nombres de usuario o imágenes que sean ofensivos, sexuales, violentos, de odio, engañosos o que vulneren derechos de terceros (incluida su privacidad e imagen)."
  },
  {
    "i": 28,
    "type": "li",
    "text": "Suplantar a otra persona o hacerte pasar por el equipo de la App."
  },
  {
    "i": 29,
    "type": "li",
    "text": "Intentar acceder sin autorización a cuentas, sistemas o datos; vulnerar o evadir medidas de seguridad; hacer ingeniería inversa, descompilar o copiar la App, salvo lo permitido por ley."
  },
  {
    "i": 30,
    "type": "li",
    "text": "Usar bots, scripts u otros medios automatizados para obtener flores, experiencia (XP) u otras ventajas, ni explotar errores de la App."
  },
  {
    "i": 31,
    "type": "li",
    "text": "Vender, intercambiar por dinero o transferir tu cuenta o sus elementos virtuales a terceros."
  },
  {
    "i": 32,
    "type": "li",
    "text": "Escanear o compartir códigos de personas que no te hayan autorizado a hacerlo."
  },
  {
    "i": 33,
    "type": "p",
    "text": "Podemos advertir, suspender o cerrar cuentas que infrinjan estas reglas, y retirar contenido que las vulnere."
  },
  {
    "i": 34,
    "type": "h2",
    "text": "6. Contenido de las personas usuarias"
  },
  {
    "i": 35,
    "type": "li",
    "text": "Mantienes la titularidad del contenido que crees o envíes (por ejemplo, mensajes y frases asociados a una flor, y tu nombre de usuario)."
  },
  {
    "i": 36,
    "type": "li",
    "text": "Nos otorgas una licencia no exclusiva, gratuita, mundial y limitada para alojar, procesar, mostrar y transmitir ese contenido únicamente para operar y mejorar la App y para entregarlo a las personas con quienes decidas compartirlo."
  },
  {
    "i": 37,
    "type": "li",
    "text": "Declaras que tienes derecho a enviar ese contenido y que no infringe leyes ni derechos de terceros."
  },
  {
    "i": 38,
    "type": "li",
    "text": "Cuando compartes una flor, la persona que la recibe verá tu nombre de usuario, la fecha y el mensaje que incluyas. Compártelos solo con personas de confianza."
  },
  {
    "i": 39,
    "type": "h2",
    "text": "7. Propiedad intelectual"
  },
  {
    "i": 40,
    "type": "p",
    "text": "La App, su diseño, código, marca, ilustraciones y sprites pixel art, iconografía, sonidos, música, textos y demás elementos son de Cristobal Oñate o de sus licenciantes y están protegidos por la legislación de propiedad intelectual e industrial. Te concedemos una licencia personal, limitada, revocable, no exclusiva e intransferible para usar la App en tu dispositivo, para fines personales y no comerciales. No se te transfiere ningún otro derecho."
  },
  {
    "i": 41,
    "type": "p",
    "text": "Las flores, medallas, niveles, XP y demás elementos del juego son elementos virtuales sin valor monetario; solo te otorgan una licencia de uso dentro de la App y no son propiedad tuya."
  },
  {
    "i": 42,
    "type": "h2",
    "text": "8. Compras y funciones de pago"
  },
  {
    "i": 43,
    "type": "p",
    "text": "La App es gratuita. Algunas funciones opcionales, como ciertos avatares, pueden tener un costo dentro de la App; el precio se muestra antes de confirmar la compra."
  },
  {
    "i": 44,
    "type": "p",
    "text": "Las compras se procesan a través de Apple App Store o Google Play, por lo que el pago, los impuestos y los reembolsos se rigen también por las condiciones de esa tienda y por los derechos que la Ley N.º 19.496 reconoce a las personas consumidoras. No almacenamos los datos de tu tarjeta."
  },
  {
    "i": 45,
    "type": "p",
    "text": "Lo que compras es una licencia de uso dentro de tu cuenta: no se puede transferir, vender ni cambiar por dinero, y deja de estar disponible si tu cuenta se elimina."
  },
  {
    "i": 46,
    "type": "h2",
    "text": "9. Disponibilidad y cambios en el servicio"
  },
  {
    "i": 47,
    "type": "p",
    "text": "Hacemos esfuerzos razonables para que la App funcione de forma continua, pero no garantizamos que esté libre de errores, interrupciones o pérdidas de datos. Podemos realizar mantenciones, actualizaciones o suspender temporal o definitivamente la App o alguna de sus funciones, avisándote dentro de la App cuando sea posible."
  },
  {
    "i": 48,
    "type": "h2",
    "text": "10. Servicios de terceros"
  },
  {
    "i": 49,
    "type": "p",
    "text": "La App puede apoyarse en servicios de terceros (por ejemplo, tiendas de aplicaciones, proveedores de alojamiento). Su uso está sujeto a los términos y políticas de esos terceros, de los cuales no somos responsables."
  },
  {
    "i": 50,
    "type": "h2",
    "text": "11. Suspensión y término"
  },
  {
    "i": 51,
    "type": "li",
    "text": "Puedes dejar de usar la App y eliminar tu cuenta en cualquier momento."
  },
  {
    "i": 52,
    "type": "li",
    "text": "Podemos suspender o cancelar tu cuenta si incumples estos Términos, si la ley lo exige o por razones de seguridad. Cuando sea razonable, te avisaremos con anticipación."
  },
  {
    "i": 53,
    "type": "li",
    "text": "Al eliminar tu cuenta, perderás el acceso a tus flores, jardín y progreso, y estos no podrán recuperarse, sin perjuicio de lo indicado en la Política de Privacidad sobre conservación de datos."
  },
  {
    "i": 54,
    "type": "h2",
    "text": "12. Limitación de responsabilidad"
  },
  {
    "i": 55,
    "type": "p",
    "text": "La App se ofrece «tal cual» y «según disponibilidad». En la máxima medida permitida por la ley, no seremos responsables por daños indirectos, pérdida de datos o de elementos virtuales, ni por el contenido que otras personas envíen a través de la App. Nada de lo aquí dispuesto excluye ni limita los derechos irrenunciables que la ley reconoce a las personas consumidoras, ni nuestra responsabilidad por dolo o culpa grave cuando la ley no permita limitarla."
  },
  {
    "i": 56,
    "type": "h2",
    "text": "13. Cambios a estos Términos"
  },
  {
    "i": 57,
    "type": "p",
    "text": "Podemos actualizar estos Términos. Si el cambio es relevante, te lo avisaremos dentro de la App con antelación razonable y, cuando la ley lo exija, te pediremos nuevamente tu aceptación. Si continúas usando la App después de la entrada en vigor del cambio, se entenderá que lo aceptas; si no estás de acuerdo, puedes eliminar tu cuenta."
  },
  {
    "i": 58,
    "type": "h2",
    "text": "14. Ley aplicable y resolución de controversias"
  },
  {
    "i": 59,
    "type": "p",
    "text": "Estos Términos se rigen por las leyes de Chile. Cualquier controversia se resolverá ante los tribunales competentes de Chile, sin perjuicio de los derechos que te correspondan como consumidor ante los tribunales de tu domicilio y ante el Servicio Nacional del Consumidor (SERNAC) u organismo equivalente de tu país."
  },
  {
    "i": 60,
    "type": "h2",
    "text": "15. Contacto"
  },
  {
    "i": 61,
    "type": "p",
    "text": "Soporte: FlowersAppCL@gmail.com"
  },
  {
    "i": 63,
    "type": "h1",
    "text": "PARTE 2 — POLÍTICA DE PRIVACIDAD"
  },
  {
    "i": 64,
    "type": "h2",
    "text": "1. Responsable del tratamiento"
  },
  {
    "i": 65,
    "type": "p",
    "text": "El responsable del tratamiento de tus datos personales es Cristobal Oñate, RUT 21.890.152-2, domicilio en Chile. Para consultas o para ejercer tus derechos escríbenos a FlowersAppCL@gmail.com."
  },
  {
    "i": 66,
    "type": "h2",
    "text": "2. Qué datos recopilamos"
  },
  {
    "i": 67,
    "type": "p",
    "text": "a) Datos que nos entregas"
  },
  {
    "i": 68,
    "type": "li",
    "text": "Cuenta: nombre de usuario y contraseña (almacenada de forma cifrada/«hasheada»; nunca la vemos en texto plano)."
  },
  {
    "i": 69,
    "type": "li",
    "text": "Perfil: avatar elegido, nivel, experiencia (XP) y estadísticas de juego (recuerdos, flores en el jardín)."
  },
  {
    "i": 70,
    "type": "li",
    "text": "Contenido: mensajes o frases asociadas a las flores que envías o recibes, y el nombre de usuario del remitente."
  },
  {
    "i": 71,
    "type": "li",
    "text": "Preferencias: configuración de notificaciones, sonidos, música ambiente e idioma."
  },
  {
    "i": 72,
    "type": "li",
    "text": "Comunicaciones: los mensajes que nos envíes a soporte."
  },
  {
    "i": 73,
    "type": "p",
    "text": "b) Datos que se generan al usar la App"
  },
  {
    "i": 74,
    "type": "li",
    "text": "Actividad en la App: flores obtenidas (con fecha y remitente), favoritas, flores en el hogar y en el jardín, y su ubicación dentro de ellos. Si compras un avatar u otro elemento opcional, guardamos un registro de la compra; el pago lo procesa Apple o Google y no accedemos a los datos de tu tarjeta."
  },
  {
    "i": 75,
    "type": "li",
    "text": "Datos técnicos: modelo de dispositivo, sistema operativo, versión de la App, identificadores del dispositivo o de notificaciones push, dirección IP, idioma, registros de errores y fallos (mediante Firebase)."
  },
  {
    "i": 76,
    "type": "p",
    "text": "c) Cámara"
  },
  {
    "i": 77,
    "type": "p",
    "text": "Usamos la cámara solo para escanear códigos de flores. Las imágenes no se guardan ni se comparten; se procesan en tu dispositivo para leer el código sin subirlas a nuestros servidores. Puedes denegar o revocar el permiso de cámara en los ajustes de tu dispositivo; en ese caso no podrás escanear, pero podrás seguir usando el resto de la App."
  },
  {
    "i": 78,
    "type": "p",
    "text": "También puedes escanear un código QR desde una imagen de tu galería. En ese caso solo accedemos a la imagen que elijas (o a las fotos que autorices, si tu dispositivo te ofrece acceso limitado o completo), y tampoco la guardamos ni la compartimos."
  },
  {
    "i": 79,
    "type": "p",
    "text": "d) Datos que no pedimos"
  },
  {
    "i": 80,
    "type": "p",
    "text": "No solicitamos datos sensibles (salud, origen racial, creencias, datos biométricos, etc.), ni tu ubicación precisa, contactos ni fotos de tu galería (salvo la imagen que elijas para escanear un código QR). Te pedimos que tampoco los incluyas en los mensajes que envíes."
  },
  {
    "i": 81,
    "type": "h2",
    "text": "3. Para qué usamos tus datos y con qué base legal"
  },
  {
    "type": "table",
    "rows": [
      [
        "Finalidad",
        "Datos",
        "Base de licitud"
      ],
      [
        "Crear y administrar tu cuenta, autenticarte y mantener tu sesión",
        "Cuenta, datos de acceso",
        "Ejecución del contrato (Términos de Uso)"
      ],
      [
        "Prestar las funciones de la App: guardar tu inventario, hogar y jardín; enviar y recibir flores; registrar tus compras opcionales",
        "Perfil, contenido, actividad",
        "Ejecución del contrato"
      ],
      [
        "Escanear códigos de flores",
        "Cámara (procesamiento local)",
        "Ejecución del contrato y tu consentimiento (permiso del sistema)"
      ],
      [
        "Enviar notificaciones dentro y fuera de la App (p. ej. nuevas flores)",
        "Identificador de notificaciones, preferencias",
        "Consentimiento (puedes desactivarlas en Ajustes)"
      ],
      [
        "Seguridad, prevención de fraude y abuso, cumplimiento de reglas de conducta",
        "Datos técnicos, actividad",
        "Interés legítimo"
      ],
      [
        "Soporte y atención de solicitudes",
        "Comunicaciones, datos de cuenta",
        "Ejecución del contrato e interés legítimo"
      ],
      [
        "Mejorar y mantener la App (errores, rendimiento, estadísticas agregadas)",
        "Datos técnicos, actividad",
        "Interés legítimo"
      ],
      [
        "Cumplir obligaciones legales y responder a requerimientos de autoridades",
        "Los que correspondan",
        "Obligación legal"
      ]
    ]
  },
  {
    "i": 82,
    "type": "p",
    "text": "No tomamos decisiones únicamente automatizadas que produzcan efectos jurídicos sobre ti."
  },
  {
    "i": 83,
    "type": "h2",
    "text": "4. Con quién compartimos tus datos"
  },
  {
    "i": 84,
    "type": "p",
    "text": "No vendemos tus datos personales a terceros. Solo los compartimos en estos casos:"
  },
  {
    "i": 85,
    "type": "li",
    "text": "Otras personas usuarias: cuando envías o compartes una flor, la persona destinataria ve tu nombre de usuario, el avatar y el mensaje asociado."
  },
  {
    "i": 86,
    "type": "li",
    "text": "Proveedores que nos prestan servicios (encargados del tratamiento), bajo contrato y solo para lo que les encomendamos: alojamiento y base de datos MongoDB, notificaciones push Firebase (Google), análisis y reporte de errores Firebase (Google), y soporte Gmail (Google)."
  },
  {
    "i": 87,
    "type": "li",
    "text": "Tiendas de aplicaciones (Apple App Store / Google Play), en lo necesario para distribuir la App."
  },
  {
    "i": 88,
    "type": "li",
    "text": "Autoridades y asesores: cuando la ley lo exija, una orden judicial lo ordene o sea necesario para defender nuestros derechos; y asesores legales o contables sujetos a confidencialidad."
  },
  {
    "i": 89,
    "type": "li",
    "text": "Operaciones corporativas: si la App fuera adquirida o fusionada, tus datos podrían transferirse al nuevo titular, que deberá respetar esta Política y avisarte."
  },
  {
    "i": 90,
    "type": "h2",
    "text": "5. Transferencias internacionales"
  },
  {
    "i": 91,
    "type": "p",
    "text": "Algunos de nuestros proveedores pueden almacenar o procesar datos fuera de tu país (por ejemplo, en Estados Unidos). En esos casos, adoptamos las garantías exigidas por la ley aplicable, como cláusulas contractuales o la verificación de que el país o el proveedor ofrezca un nivel adecuado de protección."
  },
  {
    "i": 92,
    "type": "h2",
    "text": "6. Cuánto tiempo conservamos tus datos"
  },
  {
    "i": 93,
    "type": "li",
    "text": "Datos de cuenta, perfil y juego: mientras tu cuenta esté activa."
  },
  {
    "i": 94,
    "type": "li",
    "text": "Tras eliminar tu cuenta: borramos o anonimizamos tus datos personales en un plazo máximo de 30 días, salvo los que debamos conservar por obligación legal o para defender reclamaciones (por ejemplo, registros de seguridad, hasta 3 meses)."
  },
  {
    "i": 95,
    "type": "li",
    "text": "Respaldos: pueden persistir por un periodo limitado de hasta 90 días hasta su sobrescritura."
  },
  {
    "i": 96,
    "type": "li",
    "text": "Mensajes enviados a otras personas: si eliminas tu cuenta, tu nombre de usuario en las flores ya recibidas por otras personas se reemplazará por una etiqueta genérica."
  },
  {
    "i": 97,
    "type": "li",
    "text": "Inactividad: podemos eliminar cuentas inactivas durante  3 meses, avisándote previamente."
  },
  {
    "i": 98,
    "type": "h2",
    "text": "7. Tus derechos"
  },
  {
    "i": 99,
    "type": "p",
    "text": "Según la ley aplicable, puedes ejercer en cualquier momento los siguientes derechos:"
  },
  {
    "i": 100,
    "type": "li",
    "text": "Acceso: saber qué datos tuyos tratamos y obtener una copia."
  },
  {
    "i": 101,
    "type": "li",
    "text": "Rectificación: corregir datos inexactos o incompletos (puedes editar tu perfil desde la App)."
  },
  {
    "i": 102,
    "type": "li",
    "text": "Supresión: pedir la eliminación de tus datos y de tu cuenta."
  },
  {
    "i": 103,
    "type": "li",
    "text": "Oposición: oponerte a ciertos tratamientos, como los basados en interés legítimo."
  },
  {
    "i": 104,
    "type": "li",
    "text": "Portabilidad: recibir tus datos en un formato estructurado y de uso común."
  },
  {
    "i": 105,
    "type": "li",
    "text": "Bloqueo / limitación: pedir que suspendamos temporalmente el tratamiento cuando corresponda."
  },
  {
    "i": 106,
    "type": "li",
    "text": "Retirar tu consentimiento: en cualquier momento, sin afectar la licitud del tratamiento anterior."
  },
  {
    "i": 107,
    "type": "li",
    "text": "Decisiones automatizadas: no ser objeto de decisiones basadas únicamente en tratamiento automatizado con efectos significativos para ti."
  },
  {
    "i": 108,
    "type": "p",
    "text": "Cómo ejercerlos: escribe a FlowersAppCL@gmail.com indicándonos tu nombre de usuario. Podemos pedirte datos adicionales para verificar tu identidad. Responderemos dentro de los plazos legales (en general, hasta 30 días desde la solicitud, prorrogables cuando la ley lo permita). Si consideras que no hemos atendido bien tu solicitud, puedes reclamar ante la autoridad de protección de datos de tu país; en Chile, la Agencia de Protección de Datos Personales, una vez que esta entre en funcionamiento, o los tribunales competentes."
  },
  {
    "i": 109,
    "type": "h2",
    "text": "8. Seguridad"
  },
  {
    "i": 110,
    "type": "p",
    "text": "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida, alteración o divulgación, como el cifrado de las comunicaciones (HTTPS/TLS), el almacenamiento cifrado de contraseñas, controles de acceso y el principio de mínimo privilegio . Ningún sistema es 100 % seguro; por eso te pedimos usar una contraseña fuerte y única (mínimo 8 caracteres, con mayúscula, número y símbolo) y no compartirla."
  },
  {
    "i": 111,
    "type": "p",
    "text": "Si ocurre una vulneración de seguridad que afecte tus datos, te lo comunicaremos y notificaremos a la autoridad competente en los casos y plazos exigidos por la ley."
  },
  {
    "i": 112,
    "type": "h2",
    "text": "9. Menores de edad"
  },
  {
    "i": 113,
    "type": "p",
    "text": "La App está dirigida a personas de 14 años o más. Si eres menor de 18 años, necesitas la autorización de tu madre, padre o representante legal. No recopilamos a sabiendas datos de menores de 14 años; si detectamos que una cuenta pertenece a una persona menor de esa edad sin autorización, la eliminaremos. Si eres madre, padre o tutor y crees que un menor a tu cargo nos entregó datos sin tu permiso, escríbenos a FlowersAppCL@gmail.com y los eliminaremos."
  },
  {
    "i": 114,
    "type": "h2",
    "text": "10. Cookies y tecnologías similares"
  },
  {
    "i": 115,
    "type": "p",
    "text": "La App móvil no usa cookies de navegador. Puede utilizar identificadores del dispositivo y almacenamiento local para mantener tu sesión y tus preferencias."
  },
  {
    "i": 116,
    "type": "h2",
    "text": "11. Enlaces y servicios de terceros"
  },
  {
    "i": 117,
    "type": "p",
    "text": "Si la App contiene enlaces o integra servicios de terceros, estos tienen sus propias políticas de privacidad, que te recomendamos leer. No somos responsables de sus prácticas."
  },
  {
    "i": 118,
    "type": "h2",
    "text": "12. Cambios a esta Política"
  },
  {
    "i": 119,
    "type": "p",
    "text": "Podemos modificar esta Política para reflejar cambios legales o en la App. Publicaremos la versión vigente con su fecha de actualización y, si el cambio es relevante, te avisaremos dentro de la App. Si el cambio requiere tu consentimiento, te lo pediremos nuevamente."
  },
  {
    "i": 120,
    "type": "h2",
    "text": "13. Contacto"
  },
  {
    "i": 121,
    "type": "p",
    "text": "Privacidad y soporte: FlowersAppCL@gmail.com"
  },
  {
    "i": 123,
    "type": "h1",
    "text": "PARTE 3 — RESUMEN PARA LA PANTALLA «TÉRMINOS Y PRIVACIDAD» DE LA APP"
  },
  {
    "i": 124,
    "type": "p",
    "text": "Textos cortos, coherentes con tu diseño de Figma, para mostrar dentro de la App (con enlace al documento completo):"
  },
  {
    "i": 125,
    "type": "p",
    "text": "Términos de uso"
  },
  {
    "i": 126,
    "type": "li",
    "text": "Jardín es una app para coleccionar flores pixel art en tu propio jardín."
  },
  {
    "i": 127,
    "type": "li",
    "text": "Eres responsable de tu cuenta y de mantener tus datos de acceso seguros."
  },
  {
    "i": 128,
    "type": "li",
    "text": "No uses la app para fines ilegales ni para molestar a otras personas."
  },
  {
    "i": 129,
    "type": "li",
    "text": "Podemos actualizar estos términos y te avisaremos dentro de la app."
  },
  {
    "i": 130,
    "type": "li",
    "text": "Debes tener al menos 14 años; si eres menor de 18, necesitas autorización de tu madre, padre o tutor."
  },
  {
    "i": 131,
    "type": "p",
    "text": "Política de privacidad"
  },
  {
    "i": 132,
    "type": "li",
    "text": "Guardamos tu nombre de usuario, avatar y las flores de tu inventario y de tu jardín."
  },
  {
    "i": 133,
    "type": "li",
    "text": "Usamos la cámara (o una imagen de tu galería que elijas) solo para escanear flores: las imágenes no se guardan ni se comparten."
  },
  {
    "i": 134,
    "type": "li",
    "text": "No vendemos tus datos personales a terceros."
  },
  {
    "i": 135,
    "type": "li",
    "text": "Puedes pedir la eliminación de tu cuenta y tus datos cuando quieras."
  },
  {
    "i": 136,
    "type": "p",
    "text": "Última actualización: 17 NOV 2026 · Ver términos y política completos"
  },
  {
    "i": 138,
    "type": "h1",
    "text": "ANEXO — NORMATIVA DE REFERENCIA (para el equipo, no es necesario publicarlo)"
  },
  {
    "i": 139,
    "type": "li",
    "text": "Chile: Ley N.º 19.628 sobre Protección de la Vida Privada, modificada por la Ley N.º 21.719, que crea la Agencia de Protección de Datos Personales y fija su entrada en vigencia el 1 de diciembre de 2026 (a la fecha de este documento existe un proyecto en tramitación que propone aplazarla hasta octubre de 2027: verifica el estado antes de publicar). Ley N.º 19.496 sobre Protección de los Derechos de los Consumidores. Ley N.º 17.336 sobre Propiedad Intelectual."
  },
  {
    "i": 140,
    "type": "li",
    "text": "Para usuarios en la Unión Europea: Reglamento General de Protección de Datos (RGPD), con representante en la UE cuando corresponda."
  },
  {
    "i": 141,
    "type": "li",
    "text": "Para usuarios en EE. UU.: COPPA (menores de 13), y leyes estatales como la CCPA/CPRA de California."
  }
];

const EMAIL = "FlowersAppCL@gmail.com";
const SUMMARY_URL = "https://flowersapp-condiciones.vercel.app";

function renderText(text) {
  const parts = text.split(/(FlowersAppCL@gmail\.com)/g);
  return parts.map((part, index) =>
    part === EMAIL ? <a key={index} href={`mailto:${EMAIL}`}>{part}</a> : part
  );
}

function LegalTable({ rows }) {
  return (
    <div className="jardin-legal__table-wrap">
      <table className="jardin-legal__table">
        <thead><tr>{rows[0].map((cell, i) => <th key={i}>{cell}</th>)}</tr></thead>
        <tbody>{rows.slice(1).map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
        ))}</tbody>
      </table>
    </div>
  );
}

/**
 * Documento legal de Jardín · Pixel Room App.
 * Conserva el contenido, nombres, correo y enlace del documento original.
 * `showInternalAnnex={false}` oculta el anexo normativo destinado al equipo.
 */
export default function JardinLegalDocument({ showInternalAnnex = true, className = "" }) {
  let inAnnex = false;
  return (
    <article className={`jardin-legal ${className}`.trim()}>
      {CONTENT.map((item, index) => {
        if (item.type === "h1" && item.text.startsWith("ANEXO")) inAnnex = true;
        if (inAnnex && !showInternalAnnex) return null;
        if (item.type === "table") return <LegalTable key={`table-${index}`} rows={item.rows} />;
        if (item.type === "h1") return <h1 className="jardin-legal__title" key={index}>{item.text}</h1>;
        if (item.type === "h2") return <h2 className="jardin-legal__heading" key={index}>{item.text}</h2>;
        if (item.type === "li") return <ul className="jardin-legal__list" key={index}><li className="jardin-legal__item">{renderText(item.text)}</li></ul>;
        if (item.type === "note") return <blockquote className="jardin-legal__note" key={index}>{renderText(item.text)}</blockquote>;
        if (item.text.includes("Ver términos y política completos")) {
          const label = "Ver términos y política completos";
          const before = item.text.slice(0, item.text.indexOf(label));
          return <p className="jardin-legal__paragraph" key={index}>{before}<a href={SUMMARY_URL} target="_blank" rel="noreferrer">{label}</a></p>;
        }
        return <p className="jardin-legal__paragraph" key={index}>{renderText(item.text)}</p>;
      })}
    </article>
  );
}
