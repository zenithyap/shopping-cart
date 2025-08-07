import styles from './loading.module.css'

export default function Loading() {
    return (
        <div className={styles.ballsContainer}>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
        </div>
    )
}