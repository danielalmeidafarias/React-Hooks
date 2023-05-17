import { useEffect, useState } from "react";

const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems().then((result) => setItems(result))
    }, [getItems])

    return ( 
        <div>
            {items &&
            items.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
        </div>
    );
}
 
export default List;