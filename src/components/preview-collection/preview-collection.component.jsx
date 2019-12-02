import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({title, items}) => {
    const _renderItem = () => {
        return items
            .filter((item, idx) => idx < 4)
            .map((value, index) => (
                <CollectionItem id={value.id} item={value} imageUrl={value.imageUrl} price={value.price}
                                name={value.name}/>
            ));
    };

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {_renderItem()}
            </div>
        </div>
    )
};

export default PreviewCollection;
