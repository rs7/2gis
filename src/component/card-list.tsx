import { CardComponent } from 'component/card'
import { Cards, Tag } from 'model/model'
import { isEmptyList } from 'utils/utils'

interface CardListComponentProps {
    cards: Cards
    onTagAdd(tag: Tag): void
}

export function CardListComponent(props: CardListComponentProps) {
    let { cards, onTagAdd } = props

    if (isEmptyList(cards)) return <EmptyCardListComponent />

    return (
        <div>
            {
                cards.map(card => <CardComponent card={card} onTagAction={onTagAdd} key={card.id} />)
            }
        </div>
    )
}

export function EmptyCardListComponent() {
    return (
        <div>List is empty</div>
    )
}
