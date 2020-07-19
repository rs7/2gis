import { LinkButton } from 'component/link-button'
import { Tag } from 'model/model'

interface TagComponentProps {
    tag: Tag
    onAction(): void
}

export function TagComponent(props: TagComponentProps) {
    let { tag, onAction } = props
    return <LinkButton onAction={onAction}>#{tag}</LinkButton>
}
