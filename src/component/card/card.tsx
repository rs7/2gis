import {Card, Tag, Cards} from '../../model/model';
import {TagListComponent} from '../tag/tag';
import {isEmptyList} from '../../utils/utils';

interface CardComponentProps {
    card: Card
    onTagAction(tag: Tag): void
}

function CardComponent(props: CardComponentProps) {
    let {card, onTagAction} = props

    let {author, description, tags, title} = card

    return (
        <div>
            <div>{author}</div>
            <div>{title}</div>
            <div>{description}</div>
            <TagListComponent tags={tags} onTagAction={onTagAction} />
        </div>
    )
}

interface CardListComponentProps {
    cards: Cards
    onTagAdd(tag: Tag): void
}

export function CardListComponent(props: CardListComponentProps) {
    let {cards, onTagAdd} = props

    if (isEmptyList(cards)) return <EmptyCardListComponent />

    return (
        <div>
            {
                cards.map(card => <CardComponent card={card} onTagAction={onTagAdd} key={card.id} />)
            }
        </div>
    )
}

function EmptyCardListComponent() {
    return (
        <div>List is empty</div>
    )
}
