export function setDeepFreeze(obj: any) {

    if(obj === null) return ;
    
    const keys: string[] = Object.getOwnPropertyNames(obj);

    for(let key of keys) {
        let value: any = obj[key];

        if(value && typeof value === 'object') {
            setDeepFreeze(value);
        }
    }

    return Object.freeze(obj);
}