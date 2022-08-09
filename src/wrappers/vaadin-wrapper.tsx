import React from 'react';
import '@vaadin/vaadin-combo-box'

type Props = {
    items: { name: string, id: string }[];
}

const ComboWrapper = (props: Props) => {
    const { items } = props;
    return <vaadin-combo-box
        label="Frutas"
        item-label-path="name"
        item-value-path="id"
        items={JSON.stringify(items)}
    ></vaadin-combo-box>
}

export default ComboWrapper;