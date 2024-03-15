import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'

const Demo3 = (props: { title: string,activeText:string,inactiveText:string }) => {
    return (
        <>
            <h2>{props.title}</h2>
            <Cell>
                <Switch
                    defaultChecked
                    activeText={props.activeText}
                    inactiveText={props.inactiveText}
                />
            </Cell>
        </>
    )
}
export default Demo3
