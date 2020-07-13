import {useHistory, useLocation} from 'react-router-dom'

interface UseRawQuery {
    status: string
    setStatus(status: string): void
    tags: string
    setTags(tags: string): void
}

export function useRawQuery(): UseRawQuery {
    let location = useLocation()
    let history = useHistory()
    let params = new URLSearchParams(location.search)

    let status = params.get('status') || ''
    let tags = params.get('tags') || ''

    function setQueryParam(name: string, value: string) {
        params.set(name, value)

        history.push({
            search: '?' + params.toString()
        })
    }

    function setStatus(status: string): void {
        setQueryParam('status', status)
    }

    function setTags(tags: string): void {
        setQueryParam('tags', tags)
    }

    return {
        status,
        setStatus,
        tags,
        setTags
    }
}
