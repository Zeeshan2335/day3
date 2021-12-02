import React from 'react';

const FilterChild = ( {some} ) => {
    return (
        <div>
            <h1>{some.name} &nbsp; {some.model} &nbsp; {some.price}</h1>
           
        </div>
    );
};

export default FilterChild;