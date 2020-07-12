import {ReactNode} from 'react'

interface LinkButtonProps {
    children: ReactNode
    onAction(): void
}

export function LinkButton(props: LinkButtonProps) {
    let {children, onAction} = props

    return <a href='#' onClick={() => onAction()}>{children}</a>
}
