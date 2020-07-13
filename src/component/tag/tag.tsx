import {Tag, Tags} from '../../model/model'
import {LinkButton} from '../ui/ui'

interface TagComponentProps {
    tag: Tag
    onAction(): void
}

function TagComponent(props: TagComponentProps) {
    let {tag, onAction} = props
    return <LinkButton onAction={onAction}>#{tag}</LinkButton>
}

interface TagListComponentProps {
    tags: Tags
    onTagAction(tag: Tag): void
}

export function TagListComponent(props: TagListComponentProps) {
    let {tags, onTagAction} = props

    return (
        <span>
            {
                tags.map(tag => <TagComponent tag={tag} onAction={() => onTagAction(tag)} key={tag} />)
            }
        </span>
    )
}
