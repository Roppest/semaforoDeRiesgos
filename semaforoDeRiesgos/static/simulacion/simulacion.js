
function getColor(valor){
    if(valor < 5.0)
        return '#00D024'
    else if(valor < 7.0)
        return '#FFD400'
    else
        return 'crimson'
}
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
function renderMovilidadOptions(container_id){
   
    let movilidad={
        '2.5' : 'No puedo desplazarme',
        '2': 'Dependo de la ayuda de otras personas para desplazarme',
        '1.5': 'Utilizo silla de ruedas o muletas para desplazarme.',
        '1': 'Puedo moverme con ligeras complicaciones, sin necesidad de ayuda',
        '0.5': 'Puedo evacuar en caso de emergencia sin ayuda.'
    };
    let opciones=[]
    for(key in movilidad){
        let opt=document.createElement('option');
        opt.text=movilidad[key];
        opt.value=key;
        opt.className='vulnerabilidades';
        opciones.push(opt);  
    }
    
    opciones.sort((a,b)=>{
        if (a.value < b.value)
            return -1;
        else
            return 1;
    });
    let container=document.getElementById(container_id);
    for(op in opciones){
        container.appendChild(opciones[op]);
    }
        
}

function renderSensorialOptions(container_id){
   
    let sensorial={
        '2.5' : 'No puedo escuchar alarmas ni visualizar rutas de evacuación.',
        '1.5': 'Se me dificulta ver o escuchar alarmas e indicaciones de evacuación.',
        '0.5': 'Puedo escuchar indicaciones y alarmas claramente y observar rutas de evacuación.'
    };
    let opciones=[]
    for(key in sensorial){
        let opt=document.createElement('option');
        opt.text=sensorial[key];
        opt.value=key;
        opt.className='vulnerabilidades';
        opciones.push(opt);  
    }
    
    opciones.sort((a,b)=>{
        if (a.value < b.value)
            return -1;
        else
            return 1;
    });
    let container=document.getElementById(container_id);
    for(op in opciones){
        container.appendChild(opciones[op]);
    }
        
}
function renderUbiOptions(container_id){
   
    let ubicacion={
        '2.5': 'Del séptimo piso en adelante de un inmueble.',
        '2': 'Del cuarto al sexto piso de un inmueble.',
        '1.5': 'En el tercer o segundo piso de un inmueble.',
        '1': 'En la planta baja de un inmueble.',
        '0.5': 'En zona despejada.'
    };
    let opciones=[]
    for(key in ubicacion){
        let opt=document.createElement('option');
        opt.text=ubicacion[key];
        opt.value=key;
        opt.className='vulnerabilidades';
        opciones.push(opt);  
    }
    
    opciones.sort((a,b)=>{
        if (a.value < b.value)
            return -1;
        else
            return 1;
    });
    let container=document.getElementById(container_id);
    for(op in opciones){
        container.appendChild(opciones[op]);
    }
        
}
function recalcularIR(v){
    let vulnerabilidad_original = document.getElementById('vulnerabilidad').innerText;
    let d_fis = parseFloat(document.getElementById('movilidad_select').value);
    let d_sen = parseFloat(document.getElementById('sensorial_select').value);
    let u = parseFloat(document.getElementById('ubi_select').value);
    let vul = DISTANCIA+d_fis+d_sen+u;
    document.getElementById('vulnerabilidad').innerHTML = vul;
    let p = parseFloat(document.getElementById('peligro').innerText);
    let ir= (p+vul)/2;
    setIR(ir);
    console.log('IR:',ir);
    let semaforo=indiceASemaforo(ir);
    console.log('semaforo:',semaforo);
    document.getElementById('semaforo_header').innerHTML=semaforo.charAt(0).toUpperCase()+semaforo.slice(1);
    document.getElementById('semaforo').innerHTML=getSemaforo(semaforo);
    inicializar();
}
function setSelectedOption(select_id,option_value){
    let options=document.getElementById(select_id).options;
    let sorted_opts=Array.prototype.slice.call(options);
    sorted_opts.sort((a,b)=>{
        if (a.value < b.value)
            return -1;
        else
            return 1;
    });
    for( option in sorted_opts){
        if(option.value==option_value)
            option.selected=true;
        else
            option.selected=false;
    }
}
function setIR(ir){
    document.getElementById('indice').innerHTML=ir;
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
function getSemaforo(sem){
    ponderacion={
        'verde':'#00D024',
        'amarillo': '#FFD700',
        'rojo': 'crimson'
    };
    let key = String(sem);
    if(ponderacion[sem]=== undefined)
        console.log('Undefined ERROR: Valor de sem =',sem,'no tiene ponderacion');  
    else
        document.getElementById('semaforo').style.backgroundColor=ponderacion[sem];
    return'';
}
function indiceASemaforo(ir){
    if(ir <= 5)
        return 'verde';
    else if(5.1<ir && ir<=6.9){
        return 'amarillo';
    }
    else{
        return 'rojo';
    }
}

function inicializar(){
    let indices = document.getElementsByClassName('indice');
    for(i of indices)
    {
        i.style.color = getColor(i.innerHTML)
        i.style.backgroundColor = '#eee';
    }
    
}