export type IconProps = {
    className : string
}

export type Status = {
    id : number,
    label: string
}

export type CardType = {
    id : string,
    title : string,
    description : string,
    status : Status
}

export type CardProps = {
    card : CardType
}

export type CardInput = {
    title : string,
    description: string
}