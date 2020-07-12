import React, {Component} from 'react'

import {Cards, Filter} from './model/model'
import {Loading} from './component/loading/loading'
import {ApplicationStorage, SimpleStorage} from './service/service'
import {MainComponent} from './component/main/main'
import {FilterState} from './component/route/route'
import {BrowserRouter} from 'react-router-dom'

interface ApplicationComponentProps {
}

interface ApplicationComponentState {
    cards: Cards | null
}

export class ApplicationComponent extends Component<ApplicationComponentProps, ApplicationComponentState> {

    private storage: ApplicationStorage

    constructor(props: ApplicationComponentProps) {
        super(props)

        this.storage = new SimpleStorage()

        this.state = {
            cards: null
        }
    }

    componentDidMount() {
        this.storage.getCards().then(cards => this.setState({cards}))
    }

    render() {
        let {cards} = this.state

        if (cards === null) return <Loading />

        return (
            <BrowserRouter>
                <FilterState>
                    {
                        (props) => {
                            let {filter, onFilterChange} = props

                            return <MainComponent cards={cards} filter={filter} onFilterChange={onFilterChange} />
                        }
                    }
                </FilterState>
            </BrowserRouter>
        )
    }
}
