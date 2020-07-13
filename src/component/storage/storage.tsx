import {Component} from 'react'
import {ApplicationStorage, SimpleStorage} from '../../service/service'
import {Cards, Statuses} from '../../model/model'
import {Loading} from '../loading/loading'

interface StorageComponentProps {
    children: React.ReactNode
}

interface StorageComponentState {
    cards: Cards | undefined
    statuses: Statuses | undefined
}

export class StorageComponent extends Component<StorageComponentProps, StorageComponentState> {

    private storage: ApplicationStorage

    constructor(props: StorageComponentProps) {
        super(props)

        this.storage = new SimpleStorage()

        this.state = {
            cards: undefined,
            statuses: undefined
        }
    }

    componentDidMount() {
        this.storage.getCards().then(cards => this.setState({cards}))
        this.storage.getStatuses().then(statuses => this.setState({statuses}))
    }

    render() {
        let {children} = this.props
        let {cards, statuses} = this.state

        if (cards === undefined || statuses === undefined) return <Loading />

        return children
    }
}
