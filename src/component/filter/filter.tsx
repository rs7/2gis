import {TagListComponent} from '../tag/tag'
import {Status, Tags, Tag, ALL_STATUS} from '../../model/model'
import {LinkButton} from '../ui/ui'

interface StatusFilterComponentProps {
    status: Status
    onStatusChange(status: Status): void
}

export function StatusFilterComponent(props: StatusFilterComponentProps) {
    let {status, onStatusChange} = props

    return (
        <div>
            Filtered by status: `{status}`
            {
                ALL_STATUS.map(status => <StatusSelectorComponent status={status} onAction={() => onStatusChange(status)} key={status}/>)
            }
        </div>
    )
}

interface StatusSelectorComponentProps {
    status: Status
    onAction(): void
}

export function StatusSelectorComponent(props: StatusSelectorComponentProps) {
    let {status, onAction} = props
    return <a href='#' onClick={() => onAction()}>{status}</a>
}

interface TagFilterComponentProps {
    tags: Tags
    onTagRemove(tag:Tag): void
    onTagsClear(): void
}

export function TagFilterComponent(props: TagFilterComponentProps) {
    let {tags, onTagRemove, onTagsClear} = props

    return (
        <div>
            Filtered by tags: <TagListComponent tags={tags} onTagAction={tag => onTagRemove(tag)}/> (<LinkButton onAction={() => onTagsClear()}>clear</LinkButton>)
        </div>
    )
}

