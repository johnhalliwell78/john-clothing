import collection from '../../data/collection-data';
import PreviewCollection from "../../components/preview-collection/preview-collection.component";


// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             collections: collection
//         }
//     }
//
//     render() {
//         return (
//             <div className='shop-page'>
//                 {this._renderCollections()}
//             </div>
//         )
//     }
//
//     _renderCollections = () => {
//         return this.state.collections.map((value, index) => (
//             <PreviewCollection title={value.title} items={value.items}/>
//         ));
//     }
// }

import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItems} from "../../redux/shop/shop.selectors";

const ShopPage = ({collections}) => {
    return (
        <div className='shop-page'>
            {collections.map((value, index) => (
                <PreviewCollection title={value.title} items={value.items}/>
            ))}
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps, null)(ShopPage);
