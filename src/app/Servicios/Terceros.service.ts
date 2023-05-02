import { Injectable } from "@angular/core";
import { Empleado } from "../Componentes-Generales/persona.mode";
import { LogginService } from "./LoggingService.service";



const PERSONA_KEY_STORAGE = 'personas';

@Injectable({
    providedIn: 'root',
})
export class TercerosService {

    private personas: Empleado[] = [

    ];

constructor(){
    const personas = localStorage.getItem(PERSONA_KEY_STORAGE)
    this.personas = personas ? JSON.parse(personas) : [];
}

getPersonas(){
    return this.personas;
}

buscarPersonasPorCedula(cedula: Number){
    const match = this.personas.find(empleado => empleado.cedula === cedula);
    return match;

}

verificacionContraseña(contraseña: string){
    const pass = this.personas.find(empleado => empleado.contraseña === contraseña);
    return pass;
}

personaAgregada(persona: Empleado){
    console.log({ mensaje: 'Agregar Nuevo Empleado :' + persona.nombre });

    const match = this.buscarPersonasPorCedula(persona.cedula);

    if (match){ alert('Ya Existe una Persona con este Número de Cedula' + persona.cedula);
        throw new Error('Ya Existe una Persona con este Número de Cedula' + persona.cedula);
    }

    this.personas.push(persona);
    
    this.grabarLocalStorage();
}

personaRenombrada(persona: Empleado){
    this.personas = this.personas.map(data=>{
        if(data.cedula === persona.cedula){
            return persona
        }
        return data

    })

    this.grabarLocalStorage();
}

private grabarLocalStorage(): void {
    localStorage.setItem(PERSONA_KEY_STORAGE, JSON.stringify(this.personas));
}
}