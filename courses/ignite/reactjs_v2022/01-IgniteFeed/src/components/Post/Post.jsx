import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={
              'https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50'
            }
          />
          <div className={styles.authorInfo}>
            <strong>Ricardo Granvilla</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          className={styles.postTime}
          title="27 de setembro às 11:17h"
          dateTime="2022-09-27 11:17:30"
        >
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p className={styles.contact}>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p className={styles.hash}>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comment />
      <Comment />
      <Comment />
    </article>
  )
}

export { Post }
