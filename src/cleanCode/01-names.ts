(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; 
    const filesToEvaluated = [
        { id: 1, file: false },
        { id: 2, file: false },
        { id: 3, file: true },
        { id: 4, file: false },
        { id: 5, file: false },
        { id: 7, file: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );
    const filesToDeleted = filesToEvaluated.map( file => file.file );
    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const ddmmyyyy = new Date();
    const today: object = new Date();
    
    // días transcurridos - elapsed time in days
    const d: number = 23;
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const dir = 33;
    const numberOfFilesOnDirectory: number = 33;
    
    // primer nombre - first name
    const nombre = 'Fernando';
    const firstName: string = 'Fernando';
    
    // primer apellido - last name
    const apellido = 'Herrera';
    const lastName: string = 'Herrera';

    // días desde la última modificación - days since modification
    const dsm = 12;
    const daysSinceModification: number = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;
    const maxClassPerStudent: number = 6;


})();