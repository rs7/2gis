export type Book = {
    id: BookID
    author: string
    title: string
    description: string
}

export type BookID = string

export type Card = Book & {
    tags: Tag[]
}

export type Tag = string

export type Tags = List<Tag>

export type Action = "start_reading" | "finish_reading" | "return_to_read"

export enum Status {
    TO_READ = 'to_read',
    IN_PROGRESS = 'in_progress',
    DONE = 'done'
}

export const DEFAULT_STATUS: Status = Status.TO_READ

export const ALL_STATUS: Status[] = Object.values(Status)

export type Cards = List<Card>

export type Statuses = Map<BookID, Status>

export type Tab = {
    status: Status
    title: string
}

export type Tabs = List<Tab>

export type List<T> = Array<T>

export type Filter = StatusFilter & TagFilter

export type StatusFilter = {
    status: Status
}

export type TagFilter = {
    tags: Tags
}

export type FilteredCards = {
    cards: PartCards
    filter: Filter
}

export type PartCards = List<Card>
