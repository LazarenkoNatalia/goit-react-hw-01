 import styles from "./Profile.module.css"

export default function Profile ({
  name,
  tag,
  location,
  image,
 stats  
})
{
    return (

<div className={styles.card}>
  <div >
    <img className={styles.avatar}
      src={image}
      alt={name}
    />
                <p className={styles.textName}>{name}</p>
                <p className={styles.textGray}>@{tag}</p>
    <p className={styles.textGray}>{location}</p>
  </div>

  <ul className={styles.listStats}>
    <li  className={styles.elemStats}>
      <span className={styles.elemStatSpan}>Followers</span>
                    <span className={styles.elemStatSpan}>{stats.followers}</span>
    </li>
    <li className={styles.elemStats}>
      <span className={styles.elemStatSpan}>Views</span>
                    <span className={styles.elemStatSpan}>{stats.views}</span>
    </li>
    <li className={styles.elemStats}>
      <span className={styles.elemStatSpan}>Likes</span>
                    <span className={styles.elemStatSpan}>{stats.likes}</span>
    </li>
  </ul>
</div>


  );
}

