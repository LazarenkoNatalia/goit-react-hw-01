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
                <p className={styles.textname}>{name}</p>
                <p className={styles.textgray}>@{tag}</p>
    <p className={styles.textgray}>{location}</p>
  </div>

  <ul className={styles.liststats}>
    <li  className={styles.elemstats}>
      <span className={styles.elemstatspan}>Followers</span>
                    <span className={styles.elemstatspan}>{stats.followers}</span>
    </li>
    <li className={styles.elemstats}>
      <span className={styles.elemstatspan}>Views</span>
                    <span className={styles.elemstatspan}>{stats.views}</span>
    </li>
    <li className={styles.elemstats}>
      <span className={styles.elemstatspan}>Likes</span>
                    <span className={styles.elemstatspan}>{stats.likes}</span>
    </li>
  </ul>
</div>


    //    <div className={styles.card}>
    //   <div className={styles.cardHeader}>
    //     <img
    //       className={styles.cardPoster}
    //       src={poster}
    //       alt={tag}
    //     />
    //   </div>
    //   <div className={styles.cardBody}>
    //     <span className={styles.tag}>{tag}</span>
    //     <h2 className={styles.cardTitle}>{title}</h2>
    //     <p className={styles.cardText}>{description}</p>
    //   </div>
    //   <div className={styles.cardFooter}>
    //     <div className={styles.userBox}>
    //       <img
    //         className={styles.avatar}
    //         src={avatar}
    //         alt={userName}
    //       />
    //       <div>
    //         <h3 className={styles.userName}>{userName}</h3>
    //         <small className={styles.date}>{formatDateToNow(postedAt)}</small>
    //       </div>
    //     </div>
    //   </div>
    //     </div>
        
        // 
  );
}

