import { TagListComponent } from 'component/tag-list'
import { Card, Tag } from 'model/model'

interface CardComponentProps {
    card: Card
    onTagAction(tag: Tag): void
}

export function CardComponent(props: CardComponentProps) {
    let { card, onTagAction } = props

    let { author, description, tags, title } = card

    return (
        <div>
            <div>{author}</div>
            <div>{title}</div>
            <div>{description}</div>
            <TagListComponent tags={tags} onTagAction={onTagAction} />
        </div>
    )
}
