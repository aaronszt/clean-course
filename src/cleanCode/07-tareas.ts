(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps {

    }

    class InputElement {
        public attributes   : InputAttributes;
        public html         : HtmlElement;
        public inputEvents  : InputEvents;
        constructor (value: string, placeholder: string, id: string){
            this.attributes     = new InputAttributes(value, placeholder);
            this.html           = new HtmlElement(id, 'input');
            this.inputEvents    = new InputEvents();
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()