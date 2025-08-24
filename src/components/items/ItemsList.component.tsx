import React from 'react'
import { ItemInterface } from '../../models/items/Item.interface'

export class ItemsListComponent extends React.Component<{
    items: ItemInterface[]
}> {
    constructor(
        props:{
            items: any[]
        }
    ){
        super(props)
    }
    render(): React.ReactNode{
        const {items} = this.props
        return <div>
            <h3>
                Items:
            </h3>
            <ul>
                {
                    items.map(
                        (item, index) => {
                            return <li key={index}>{item.name}</li>
                        } 
                    )
                }
            </ul>
        </div>
    }
}

