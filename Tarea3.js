/**
 * Construir array con minimo 2 objetos
 * Cada objeto debe tener adentro otro objeto.
 * Van a usar minimo 3 metodos de arreglos sobre el array.
 */

const hospital = [
    {
        nombre: 'San juan de Dios',
        pisos: 8,
        habitaciones: 560,
        medicoGerente:{
            nombre: 'Pastor Salcedo',
            titulo: 'Medico especialista en neurologia',
            yearExperience: 35,
            edad: 56
        },
        ciudad: 'Cartagena',
        departamento: 'Bolivar',
        regimenSubsidiado: true,
        regimenContributivo: true,
    },
    {
        nombre: 'Rosario',
        pisos: 12,
        habitaciones: 1215,
        medicoGerente:{
            nombre: 'Roberto Lopera',
            titulo: 'Medico especialista en cardiologia',
            yearExperience: 41,
            edad: 62
        },
        ciudad: 'Envigado',
        departamento: 'Antioquia',
        regimenSubsidiado: true,
        regimenContributivo: true,
    },
    {
        nombre: 'Clinica Noel',
        pisos: 10,
        habitaciones: 820,
        medicoGerente:{
            nombre: 'Monica Caicedo',
            titulo: 'Medico especialista en pediatria',
            yearExperience: 18,
            edad: 40
        },
        ciudad: 'Envigado',
        departamento: 'Antioquia',
        regimenSubsidiado: true,
        regimenContributivo: true,
    },
];

//every
const regimen = hospital.every(subsidiado => subsidiado.regimenSubsidiado === true);
console.log(regimen);

//filter
const departamento = hospital.filter((departamento) => departamento.departamento === 'Antioquia');
console.log(departamento);

//foreach
hospital.forEach(valor => console.log(valor.medicoGerente.nombre));