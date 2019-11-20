https://gist.github.com/remojansen/16c661a7afd68e22ac6e
https://medium.com/@rossbulat/get-started-with-typescript-decorators-cf3924c37f04

export function memMonitor(target, key, descriptor): MethodDecorator {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`(${key}) mem-usage: ${ getMemoryUsage() }`);
        return originalMethod.apply(this, args);
    };

    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}