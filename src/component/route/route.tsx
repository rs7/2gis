import {ReactNode, Children} from 'react'

import {useLocation} from 'react-router-dom'
import {Filter, Status, DEFAULT_STATUS, Tags} from '../../model/model'

interface FilterStateProps {
    children(props: FilterStateRenderFunctionProps): ReactNode
}

interface FilterStateRenderFunctionProps {
    filter: Filter
    onFilterChange(filter: Filter): void
}

export function FilterState(props: FilterStateProps) {
    let {children} = props

    let query = useQuery()

    let status = deserializeStatus(query.get('tab') || '')
    let tags = deserializeTags(query.get('tags') || '')

    let filter = {status, tags}
    let onFilterChange = () => {}

    return children({filter, onFilterChange})
}

function serializeTags(tags: Tags): string {
    return tags.join(',')
}

function deserializeTags(value: string): Tags {
    if (!value) return []
    return value.split(',')
}

function serializeStatus(status: Status): string {
    return status
}

function deserializeStatus(value: string): Status {
    if (!value) return DEFAULT_STATUS
    return value as Status
}

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
