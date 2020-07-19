import { StatusSelectorComponent } from 'component/status-selector'
import { ALL_STATUS, Status } from 'model/model'

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
