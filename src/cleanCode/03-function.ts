(() => {

    // función para obtener información de una película por Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }
    function getAllActorsByMovie( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }
    function getBioByActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }
    interface Movie {
        cast:           string[],
        description:    string,
        rating:         number,
        title:          string,

    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        console.log(birthdate);
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    const checkName = async (name: string): Promise<boolean> =>{
        if(name) return true;
        return false;
    }
    const createActor = async ( name: string, birthdate: Date ): Promise<boolean> =>{
        console.log(birthdate);
        
        const ifName = await checkName(name);
        if ( ifName ) return false;

        console.log('Crear actor');
        return true;        

    }
    
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }
    const getPayAmountExercise = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        let result: number;
        isDead ? result = 1500 : isSeparated ? result = 2500 : isRetired ? result = 3000 : result = 4000
        return result;
    }
    const getPayAmountExerciseOtherResult = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if(isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    };

    


})();