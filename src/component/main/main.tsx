import {Cards, Filter, Status, Tags, Tag} from '../../model/model'
import {StatusFilterComponent, TagFilterComponent} from '../filter/filter'
import {CardListComponent} from '../list/list'

interface MainComponentProps {
    cards: Cards
    filter: Filter
    onFilterChange(filter: Filter): void
}

export function MainComponent(props: MainComponentProps) {
    let {cards, filter, onFilterChange} = props

    let {status, tags} = filter

    let onStatusChange = (status: Status) => console.log('onStatusChange', status)

    let onTagAdd = (tag: Tag) => console.log('onTagAdd', tag)
    let onTagRemove = (tag: Tag) => console.log('onTagRemove', tag)
    let onTagsClear = () => console.log('onTagsClear')

    return (
        <div>
            <StatusFilterComponent status={status} onStatusChange={onStatusChange} />
            <TagFilterComponent tags={tags} onTagRemove={onTagRemove} onTagsClear={onTagsClear} />
            <CardListComponent cards={cards} onTagAdd={onTagAdd} />
        </div>
    )
}
