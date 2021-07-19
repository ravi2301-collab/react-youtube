import React from 'react';

function Search({ setSearch ,search }) {
    const handleChange = (e) => {
        setSearch(e);
    }
    
    return (
        <div className="search">
            <form>
                <input 
                onChange = {(e) => { handleChange(e.target.value)}} 
                className="form-control" 
                placeholder="Search Videos"
                value={ search }
                />
            </form>
        </div>
    );
}

export default Search;