import React from 'react';
import './header.css'
import DisplayDropdown from '../Dropdowns/DisplayDropdown';
// 21BCE3239
function Header({ grouping, setGrouping, ordering, setOrdering }: { grouping: string, setGrouping: (grouping: string) => void, ordering: string, setOrdering: (ordering: string) => void }) {

    return (
        <header>
            <DisplayDropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
            {/* 21BCE3239 */}
        </header>
    );
}
// 21BCE3239

export default Header;