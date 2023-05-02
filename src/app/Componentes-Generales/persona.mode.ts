export class Empleado{

    value: any;
    push: any;

    constructor(
        public cedula: number,
        public nombre: string,
        public apellido: string,
        public cargo: string,
        public area: string,
        public salario: number,
        public correo: string,
        public fechaNacimiento: Date,
        public fechaIngreso: Date,
        public fechaFinal: Date,
        public estadoEmpleado: string,
        public contraseña: string,
    ){}
}