(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia
    
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
        email       : string;
        role        : string;
    }

    class User {

        public email        : string;
        public lastAccess   : Date;
        public role         : string;

        constructor({ email, role }: UserProps){
            this.email          = email;
            this.lastAccess     = new Date;
            this.role           = role
        }

        checkCredentials (){
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder      : string;
        workingDirectory    : string;
    }

    class Settings {
        public lastOpenFolder   : string;
        public workingDirectory : string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps){
            this.lastOpenFolder     = lastOpenFolder;
            this.workingDirectory   = workingDirectory;

        }
    }

    interface UserSettingsProps {
        birthdate           : Date;
        email               : string;
        gender              : Gender;
        name                : string;  
        lastOpenFolder      : string;
        role                : string;
        workingDirectory    : string;
    }
    
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({ birthdate, email, gender, name, lastOpenFolder, role, workingDirectory }: UserSettingsProps){
            this.person     = new Person({ name, gender, birthdate });
            this.settings   = new Settings({ lastOpenFolder, workingDirectory });
            this.user       = new User({ email, role });
        }
    }

    const userSettings = new UserSettings({
        birthdate       : new Date ('1994-05-19'),
        email           : 'aaron.sztych@gmail.com',
        gender          : 'M',
        name            : 'Aaron',
        lastOpenFolder  : '/home',
        role            : 'Admin',
        workingDirectory: 'usr/home',
    });
    console.log(userSettings);
    
})();