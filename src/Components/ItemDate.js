import './ItemDate.css';

function ItemDate (props){
    const Surname= props.Surname;
    const Tittle = props.Tittle;
    const Nickname = props.Nickname;
    return(
        <div>
            <div>{Surname}</div>
            <div>{Tittle}</div>
            <div>{Nickname}</div>
        </div>
    )
}
export default ItemDate;


