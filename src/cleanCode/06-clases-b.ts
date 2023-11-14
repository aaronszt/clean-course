(() => {
    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate   : Date
        gender      : Gender;
        name        : string;
    }
    
    class Person {

        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, birthdate, gender }: PersonProps){
            this.birthdate  = birthdate;
            this.gender     = gender;
            this.name       = name;
        }
    }

    interface UserProps {
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        role        : string;
        name        : string;
    }

    class User extends Person {

        public email        : string;
        public lastAccess   : Date;
        public role         : string;

        constructor({ email, role, birthdate, name, gender }: UserProps){

            super({ name, gender, birthdate })

            this.birthdate      = birthdate;
            this.email          = email;
            this.gender         = gender;
            this.lastAccess     = new Date;
            this.name           = name;
            this.role           = role
        }

        checkCredentials (){
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate           : Date
        email               : string;
        gender              : Gender;
        name                : string;
        lastOpenFolder      : string;
        role                : string;
        workingDirectory    : string;
    }

    class UserSettings extends User {
        public lastOpenFolder   : string;
        public workingDirectory : string;

        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps){

            super({ email, role, birthdate, gender, name });
            this.lastOpenFolder     = lastOpenFolder;
            this.workingDirectory   = workingDirectory;

        }
    }

    const userSettings = new UserSettings({
        birthdate       : new Date ('1994-05-19'),
        email           : 'aaron.sztych@gmail.com',
        gender          : 'M',
        lastOpenFolder  : '/home',
        name            : 'Aaron',
        role            : 'Admin',
        workingDirectory: 'usr/home',
    });
    console.log(userSettings);
    
})();