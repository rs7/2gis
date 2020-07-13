import {Cards, Filter, FilteredCards, BookID, Status, Statuses} from '../model/model'
import {loadJSON, timeout} from '../utils/utils'

export interface ApplicationStorage {
    getCards(): Promise<Cards>
    getStatuses(): Promise<Statuses>
}

export class SimpleStorage implements ApplicationStorage {
    async getCards(): Promise<Cards> {
        let json = await loadJSON(`https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json`)
        let items = json.items
        return items
    }

    async getStatuses(): Promise<Statuses> {
        await timeout(1000)
        return new Map()
    }
}

export interface CardsFilter {
    filter(cards: Cards, filter: Filter): FilteredCards
}

export interface StatusStorage {
    getStatus(bookID: BookID): Status
    setStatus(bookID: BookID, status: Status): void
}
