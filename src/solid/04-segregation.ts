interface Bird {
    fly(): void;
    run(): void;
    eat(): void;
    swim(): void;
};

class Tucan implements Bird {
    public fly(): void {};
    public run(): void {};
    public eat(): void {};
    public swim(): void {};
};

class Humminbird implements Bird {
    public fly(): void {};
    public run(): void {};
    public eat(): void {};
    public swim(): void {};
};

class Ostrich implements Bird {
    public fly(): void {
        throw Error ('Esta ave no vuela');
    };
    public run(): void {};
    public eat(): void {};
    public swim(): void {};
};

class Penguin implements Bird {
    public fly(): void {
        throw Error ('Esta ave no vuela');
    };
    public run(): void {};
    public eat(): void {};
    public swim(): void {};
}