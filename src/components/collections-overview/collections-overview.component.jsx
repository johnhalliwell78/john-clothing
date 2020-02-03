import React from 'react';
import PreviewCollection from "../preview-collection/preview-collection.component";
import {createStructuredSelector} from "reselect";
import {selectShopItems} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map((value, index) => (
            <PreviewCollection title={value.title} items={value.items}/>
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps, null)(CollectionsOverview)
