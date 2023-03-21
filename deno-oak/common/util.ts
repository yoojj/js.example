export function setDeepFreeze(object: Object): Object {

    const keys = Object.getOwnPropertyNames(object);

    for(let key of keys) {
        let value = object[key];

        if(value && typeof value === 'object') {
            setDeepFreeze(value);
        }
    }

    return Object.freeze(object);
}