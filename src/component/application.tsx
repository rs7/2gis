import { OK } from 'component/ok'
import { StorageComponent } from 'component/storage'
import { BrowserRouter } from 'react-router-dom'

export function ApplicationComponent() {
    return (
        <BrowserRouter>
            <StorageComponent>
                <OK />
            </StorageComponent>
        </BrowserRouter>
    )
}

// return <MainComponent cards={cards} filter={filter} onFilterChange={onFilterChange} />
