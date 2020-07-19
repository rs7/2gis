import { Status } from 'model/model'

interface StatusSelectorComponentProps {
    status: Status
    onAction(): void
}

export function StatusSelectorComponent(props: StatusSelectorComponentProps) {
    let {status, onAction} = props
    return <a href='#' onClick={() => onAction()}>{status}</a>
}
