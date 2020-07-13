import {BrowserRouter} from 'react-router-dom'
import {useRawQuery} from './utils/query'
import {StorageComponent} from './component/storage/storage'

export function ApplicationComponent() {
    return (
        <BrowserRouter>
            <StorageComponent>
                <OK />
            </StorageComponent>
        </BrowserRouter>
    )
}

function OK() {
    let {status, setStatus, tags, setTags} = useRawQuery()
    console.log(status)
    return <h3>OK {status} <a href='#' onClick={() => {
        setStatus(Date.now().toString())
        setTags((Math.random() * 1e8 | 0).toString())
    }}>random</a></h3>
}

// return <MainComponent cards={cards} filter={filter} onFilterChange={onFilterChange} />
