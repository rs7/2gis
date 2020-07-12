import {Cards, Filter, FilteredCards} from '../model/model'
import {loadJSON, timeout} from '../utils/utils'

export interface ApplicationStorage {
    getCards(): Promise<Cards>
}

export class SimpleStorage implements ApplicationStorage {
    async getCards(): Promise<Cards> {
        let json = await loadJSON(`https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json`)
        let items = json.items
        await timeout(3000)
        return items
    }
}

export interface CardsFilter {
    filter(cards: Cards, filter: Filter): FilteredCards
}
