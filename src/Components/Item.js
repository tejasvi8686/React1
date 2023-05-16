import './Item.css'

function Item (props){
    const Name = props.Name;

    return(
        <div className='span'>
            <div>{Name}</div>
            {props.children}
        </div>
    )
}

export default Item;




