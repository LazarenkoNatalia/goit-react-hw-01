import stylefr from "./FriendList.module.css"

import FriendListItem from '../FriendListItem/FriendListItem.jsx';

export default function FriendList({
    friends
}) {
    return (
        <ul className={stylefr.listCard}>
            {friends.map(friend => {
                return (
                    <li key={friend.id} className={stylefr.friendCard}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    )
}