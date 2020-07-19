import { LinkButton } from 'component/link-button'
import { TagListComponent } from 'component/tag-list'
import { Tag, Tags } from 'model/model'

interface TagFilterComponentProps {
    tags: Tags
    onTagsChange(tags: Tag): void
}

export function TagFilterComponent(props: TagFilterComponentProps) {
    let { tags, onTagsChange } = props

    //onTagRemove, onTagsClear

    return (
        <div>
            Filtered by tags: <TagListComponent tags={tags} onTagAction={tag => onTagRemove(tag)} /> (<LinkButton onAction={() => onTagsClear()}>clear</LinkButton>)
        </div>
    )
}
