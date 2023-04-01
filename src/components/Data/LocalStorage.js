/* A wrapper for the local storage that allows you to set, get, and remove items from the local
storage */

class LocalStorageWrapper {
    constructor() {
        // create a variable called 'storage' and set it to the local storage
        this.storage = window.localStorage;    
    }

    set(key, value) {

        if (typeof key != "string") {
            console.warn("Key must be a string");
        } else if (typeof value != "string") {
            console.warn("Value must be a string");
        } else {
            this.storage.setItem(key, JSON.stringify(value));
        }
    }

    get(key) {

        if (typeof key != "string") {
            console.warn("Key must be a string");
        } else {
            return JSON.parse(this.storage.getItem(key));
        }
    }


    remove(key) {

        if (typeof key != "string") {
            console.warn("Key must be a string");
        } else {
            this.storage.removeItem(key);
        }
    }

}

const LocalStorage = new LocalStorageWrapper;

export default LocalStorage;