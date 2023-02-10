class Context {
    constructor(value) {
        this.value = value;
    }

    // Provider
    Provider = ({value, children}) => {
        this.value = value;
        return children;
    }

    // consumer
    Consumer = ({children}) => children(this.value);
}

export default function createContext (value = null) {
    const context = new Context(value);
    
    return {
        Provider: context.Provider,
        Consumer: context.Consumer
    }
}

