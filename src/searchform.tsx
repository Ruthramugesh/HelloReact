import { useState } from "react";

export function Searchbtn(props: any) {
    const [search, setSearch] = useState("");

    const handlesearch = (e: any) => {
        setSearch(e.target.value);
    }

    {
        props.item.filter((searchitem: any) => {
            return (
                searchitem.regno.includes(search)
            )
        })
    }
    
    return (
        <div>
        <input type="text" id="find" />
                <input type="button" id="search" name="search" value="search" onClick={handlesearch} />
                <br />
                <br />
                </div>
    )
}