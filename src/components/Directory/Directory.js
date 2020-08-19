import React from 'react';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../store/directory/directory.selector';

const Directory = () => {
    const sections = useSelector(selectDirectorySections);

    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...sectionProps }) => {
                    return (
                        <MenuItem
                            key={id}
                            {...sectionProps}
                        />
                    )
                })
            }
        </div>
    );
}

export default Directory;