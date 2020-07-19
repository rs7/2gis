import { F } from "./type"

interface Raw2Storage {
    get(key: string): string | null
    set(key: string, value: string | null): void
}

interface Raw3Storage {
    delete(key: string): void
    get(key: string): string | null
    set(key: string, value: string): void
}

function Raw3ToRaw2(raw2: Raw3Storage): Raw2Storage {
    return {
        get: (key) => raw2.get(key),
        set: (key, value) => value === null ? raw2.delete(key) : raw2.set(key, value)
    }
}

function createLocalStorage(): Raw3Storage {
    return {
        delete: (key) => localStorage.removeItem(key),
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
    }
}


let createLocationQueryStorage: F<Raw3Storage>

createLocationQueryStorage = function (params: URLSearchParams) {
    return {
        delete: (key) => params.delete(key),
        get: (key) => params.get(key),
        set: (key, value) => params.set(key, value),
        aa: () => {},
    }
}
