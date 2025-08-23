import React from 'react'

export class ItemsListComponent extends React.Component<{
    items: any[]
}> {
    constructor(
        props:{
            items: any[]
        }
    ){
        super(props)
    }
}

render():