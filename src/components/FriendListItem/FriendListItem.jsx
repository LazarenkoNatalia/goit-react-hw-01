import stylefrcard from "./FriendListItem.module.css"

export default function FriendListItem({
    name,
    avatar,
    isOnline
}) {
    let status = isOnline ? stylefrcard.online : stylefrcard.offline;
    return (
        <>
            <div className={stylefrcard.card}>
                <img className={stylefrcard.avatar } src={avatar} alt={name} width="48" />
                <p className={stylefrcard.frname}>{name}</p>
                <p className={status}> {isOnline ? 'online' : 'offline'}</p>
            </div>
        </>
    )
}