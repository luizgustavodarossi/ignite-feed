import styles from './styles.module.scss';

export function Post({ author, content }) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/luizgustavodarossi.png"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Luiz Gustavo Darossi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='19 de junho de 2022 às 15:06' dateTime='19/06/2022 15:06:45'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}