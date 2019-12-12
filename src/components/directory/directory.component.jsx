import React from 'react';
import sections from '../../data/data';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({...otherSectionProps}, index) => (
            <MenuItem key={index} {...otherSectionProps}/>
        ))}
    </div>);


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(Directory);

