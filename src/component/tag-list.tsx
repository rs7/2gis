import { TagComponent } from 'component/tag'
import { Tag, Tags } from 'model/model'

interface TagListComponentProps {
    tags: Tags
    onTagAction(tag: Tag): void
}

export function TagListComponent(props: TagListComponentProps) {
    let { tags, onTagAction } = props

    return (
        <span>
            {
                tags.map(tag => <TagComponent tag={tag} onAction={() => onTagAction(tag)} key={tag} />)
            }
        </span>
    )
}
