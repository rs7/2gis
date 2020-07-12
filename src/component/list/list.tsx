import {Cards, Tag} from '../../model/model';
import {CardComponent} from '../card/card';

interface CardListComponentProps {
    cards: Cards
    onTagAdd(tag: Tag): void
}

export function CardListComponent(props: CardListComponentProps) {
    let {cards, onTagAdd} = props

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
