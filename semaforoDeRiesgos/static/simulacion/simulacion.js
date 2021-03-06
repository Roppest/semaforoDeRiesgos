function getMovilidad(d_fis){
        ponderacion={
          '2.5' : 'No puedo desplazarme',
          '2': 'Dependo de la ayuda de otras personas para desplazarme',
          '1.5': 'Utilizo silla de ruedas o muletas para desplazarme.',
          '1': 'Puedo moverme con ligeras complicaciones, sin necesidad de ayuda',
          '0.5': 'Puedo evacuar en caso de emergencia sin ayuda.'
        };
        let key = String(d_fis)

        var movi_span = document.getElementById('movilidad');
        if(ponderacion[key] === undefined )
          console.log('Undefined ERROR: Valor d_fis=',key,' no tiene ponderacion.');
        else
          movi_span.innerHTML = ponderacion[key];
}
function getSensorial(d_sen){
    ponderacion={
        '2.5' : 'No puedo escuchar alarmas ni visualizar rutas de evacuación.',
        '1.5': 'Se me dificulta ver o escuchar alarmas e indicaciones de evacuación.',
        '0.5': 'Puedo escuchar indicaciones y alarmas claramente y observar rutas de evacuación.'
    };
    let key = String(d_sen)

    var sen_span = document.getElementById('sensorial');
    if(ponderacion[key] === undefined )
        console.log('Undefined ERROR: Valor d_sen=',key,' no tiene ponderacion.');
    else
        sen_span.innerHTML = ponderacion[key];
}
function getUbicacion(u){
    ponderacion={
        '2.5': 'Del séptimo piso en adelante de un inmueble.',
        '2': 'Del cuarto al sexto piso de un inmueble.',
        '1.5': 'En el tercer o segundo piso de un inmueble.',
        '1': 'En la planta baja de un inmueble.',
        '0.5': 'En zona despejada.'
    };
    let key = String(u)

    var u_container = document.getElementById('ubicacion');
    if(ponderacion[key] === undefined )
        console.log('Undefined ERROR: Valor d_sen =',key,'no tiene ponderacion.');
    else
        u_container.innerHTML = ponderacion[key];
}