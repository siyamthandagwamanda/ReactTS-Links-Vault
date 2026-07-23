export interface LinkItem{
    id: string,
    title: string,
    url: string,
    description: string,
    tag?: string,
}

export type ModalState = 'NONE' | 'ADD_SEARCH' | 'MANAGE_DIRECTORY';