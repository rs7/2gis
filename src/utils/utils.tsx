import {List} from '../model/model'

export function randomItem<T>(list: Array<T>): T {
    return list[list.length * Math.random() | 0]
}

export async function loadJSON(url: string) {
    let response = await fetch(url)
    let json = await response.json()
    return json
}

export async function timeout(delay: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, delay))
}

export async function dataTimeout<T>(value: T, delay: number): Promise<T> {
    await timeout(delay)
    return value
}

export function randomName() {
    return `${randomFirstName()} ${randomLastName()}`
}

function randomFirstName() {
    return randomItem([
        'Alex',
        'Leo',
        'Mark',
        'Sam',
        'Steven',
    ])
}

function randomLastName() {
    return randomItem([
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Indigo',
        'Violet',
    ])
}

function* sequenceGenerator() {
    let id = 1
    while (true) {
        yield id
        id++
    }
}

export interface Decoder<T> {
    decode(value: string): T
    encode(value: T): string
}

export function isEmptyList(list:List<any>): boolean {
    return list.length === 0
}
