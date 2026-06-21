function mostrarMenu() {

    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");

}

function mostrarSeccion(id) {

    document.getElementById("menu").classList.add("oculto");

    document.getElementById(id).classList.remove("oculto");

}

function volverMenu() {

    const secciones = [
        "historia",
        "momentos",
        "razones",
        "secretos"
    ];

    secciones.forEach(seccion => {
        document.getElementById(seccion).classList.add("oculto");
    });

    document.getElementById("menu").classList.remove("oculto");

}const razones = [

"Por tu belleza ❤️",
"Por tu sonrisa ❤️",
"Por tus ojos (son muchos más hermosos que las estrellas) ❤️",
"Por tu voz ❤️",
"Por tu pelo (es muy bonito jsjs) ❤️",
"Por tu risa jsjs ❤️",
"Por tu personalidad ❤️",
"Por tus chistes ❤️",
"Por los momentos lindos que tenemos juntos ❤️",
"Por tus recuerdos espontáneos jsjs ❤️",
"Por tus gustos musicales ❤️",
"Por amarme, aunque sea mañoso ❤️",
"Por ser la inspiración para mis días ❤️",
"Por interesarte en mis cosas ❤️",
"Por hacerme sentir seguro ❤️",
"Por cómo me apoyas en todo ❤️",
"Por pensar en ti todo el día ❤️",
"Por confiar tus cosas en mí ❤️",
"Por darte el tiempo de escucharme ❤️",
"Por tus abrazos ❤️",
"Por tus besos ❤️",
"Por cómo somos de cariñosos ❤️",
"Por cómo me ves (me siento feliz siempre que te veo) ❤️",
"Por cómo yo te veo (siempre lo hago y nunca me cansaré de ver lo hermosa que eres) ❤️",
"Por enojona (broma jsjs) ❤️",
"Por cómo nos hacemos cosquillas ❤️",
"Por cómo te maquillas ❤️",
"Por tener un corazón bonito ❤️",
"Por cada detalle tuyo ❤️",
"Porque me gusta cuidarte ❤️",
"Por cómo me cuidas ❤️",
"Por cómo te preocupas por mí ❤️",
"Porque me encanta cuando te pones feliz jsjs ❤️",
"Porque puedo ser como soy contigo ❤️",
"Por ser alguien importante en mi vida ❤️",
"Por estar conmigo en las buenas y en las malas ❤️",
"Por molestarme a veces jsjs ❤️",
"Por cómo tenemos el mismo humor roto ❤️",
"Por cómo nos ponemos a molestar a la gente que vemos por el centro ❤️",
"Por cómo tenemos metas juntos ❤️",
"Por querer hartas mascotas ❤️",
"Por querer tener una vaquita ❤️",
"Porque te gusta Absol (también es uno de mis Pokémon favoritos) ❤️",
"Por tu gusto en flores ❤️",
"Por cómo te gustan los girasoles ❤️",
"Por nuestro gusto similar en comida chatarra jsjs ❤️",
"Por sacarte fotos conmigo (aunque no te gusten jsjs) ❤️",
"Por bañarte por mí jsjs te amooo ❤️",
"Por cómo eres con tu abuelita ❤️",
"Por cómo te gusta leer ❤️",
"Por hacerme sentir especial ❤️",
"Por darme razones para ir al colegio ❤️",
"Porque me haces sentir comprendido ❤️",
"Por cómo me emociono cuando me hablas ❤️",
"Por cómo me pongo nervioso aun cuando nos vamos a ver jsjs ❤️",
"Porque te admiro ❤️",
"Porque nunca me cansaré de verte ❤️",
"Por las llamadas que hacemos ❤️",
"Por cómo nos ponemos de acuerdo para ver qué comemos ❤️",
"Por cómo el verte me hace cambiar el día de malo a bueno ❤️",
"Porque haces que las canciones de amor tengan sentido ❤️",
"Porque tus pequeños gestos son realmente significativos ❤️",
"Porque me gusta escucharte ❤️",
"Porque antes de despertar estoy con el teléfono en la mano para decirte buenos días ❤️",
"Porque me gusta abrazarte ❤️",
"Porque me entiendes ❤️",
"Porque hasta durmiendo te pienso ❤️",
"Porque lo cotidiano lo haces especial ❤️",
"Por tu cuerpo (es muy bonito, wachita jsjs) ❤️",
"Por ser afortunado por tenerte ❤️",
"Porque me encanta tu forma de ser con la gente y conmigo jsjs ❤️",
"Por dejarme pagar las cosas que sé que tú quieres pagar jsjs ❤️",
"Por cómo eres con tu hermano ❤️",
"Por cómo eres con mi hermana ❤️",
"Porque siempre quiero saber de ti ❤️",
"Por ser mi Evangeline ❤️",
"Porque me motivas a ser mejor hombre ❤️",
"Por cómo eres con las demás personas ❤️",
"Porque me haces sentir suficiente ❤️",
"Porque me haces sentir bonito ❤️",
"Porque cuando nos tomamos la mano es muy bonito ❤️",
"Porque me gusta cómo me tratas ❤️",
"Porque hasta en la distancia te sigo amando ❤️",
"Porque ya no me imagino un futuro sin ti ❤️",
"Porque eres lo mejor que me pudo haber pasado ❤️",
"Por los apodos que me pones, realmente me gustan mucho ❤️",
"Por querer saber siempre de ti ❤️",
"Porque al verte sonrío sin darme cuenta ❤️",
"Por cómo guardas los pequeños detalles que te doy (alfajores, flores, etc.) ❤️",
"Porque eres todo lo que siempre busqué ❤️",
"Porque quiero seguir creando recuerdos contigo ❤️",
"Porque nunca querré estar lejos de ti ❤️",
"Porque no quiero una vida sin ti ❤️",
"Porque ya no sales de mi cabeza ❤️",
"Porque me encanta planear cosas juntos ❤️",
"Porque me tienes enamorado ❤️",
"Por cómo estás de enamorada ❤️",
"Por ser la mujer de mis sueños ❤️",
"Porque eres la mejor novia del mundo ❤️",
"Por ser tú, y porque eso a veces no tiene una explicación clara ❤️",
"Por llamarte Emiliana Antonia Muñoz Toledo jsjs ❤️"


];

const mensajes = [

"Lo más probable es que este pensando en ti ahora mismo ❤️",

"Gracias por hacer mis días más felices ❤️",

"Estoy muy orgulloso de ti, lo digo en serio linda ❤️",

"Tu sonrisa me arregla los días ❤️",

"Mi niña de ojitos bonitos jsjs ❤️",

"Me encanta cada momento que paso contigo ❤️",

"Gracias por seguir aguantando mis cosas jsjs ❤️",

"Me haces sentir afortunado todos los días ❤️",

"Te amo más de lo que estas palabras pueden explicar ❤️",

"Cuando veo una notificación tuya, no dudo en emocionarme ❤️",

"Mi recuerdo favorito siempre termina siendo uno contigo ❤️",

"Me encanta pensar en ti ❤️",

"Incluso en mis días más difíciles, pensar en ti me ayuda ❤️",

"Gracias por quedarte conmigo ❤️",

"Te elegiría una y mil veces ❤️",

"Cada día contigo es un regalo ❤️",

"Nunca olvides lo increíble que eres ❤️",

"Eres una de las mejores cosas que me han pasado ❤️",

"Si llegaste hasta aquí, te ganaste un abrazo gigante ❤️",

"Churrasco la vaca también te ama ❤️🐄",

"Eres mi Evangeline ❤️",

"Gracias por aguantar mis mañas jsjs ❤️",

"Me encanta escuchar tu voz ❤️",

"Siempre serás mi persona favorita ❤️",

"Te amo muchísimo, preciosa ❤️"

];

function nuevoMensaje() {

    const aleatorio = Math.floor(Math.random() * mensajes.length);

    document.getElementById("mensajeSecreto").innerText =
        mensajes[aleatorio];

}

