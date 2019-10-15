import React from 'react';
import sections from '../../data/data';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: sections
        }
    }

    _renderSection = () => {
        return this.state.sections.map(({...otherSectionProps}, index) => {
            return (
                <MenuItem key={index} {...otherSectionProps}/>
            );
        })
    };

    render() {
        return (
            <div className='directory-menu'>
                {this._renderSection()}
            </div>
        );
    }


}


export default Directory;
