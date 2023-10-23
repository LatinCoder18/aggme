class ObjectCopy {
    static clone(source) {
        const clone = Object.create(Object.getPrototypeOf(source));
        const descriptors = Object.getOwnPropertyDescriptors(source);
        Object.defineProperties(clone, descriptors);
        return clone;
    }
}
module.exports = ObjectCopy;