import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

function Comment() {
  return (
    <div className={styles.comment}>
      <aside>
        <img
          className={styles.avatar}
          title="John Doe"
          src={
            'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          }
        />
      </aside>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                John Doe <span>(você)</span>
              </strong>
              <time
                className={styles.commentTime}
                title="27 de setembro às 12:17h"
                dateTime="2022-09-27 12:17:30"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button
              type="button"
              className={styles.deleteButton}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>
          <content>
            <p>Muito bom Ricardo, parabéns!!👏👏</p>
          </content>
        </div>
        <footer className={styles.footer}>
          <button type="button">
            <ThumbsUp size={24} />
            Aplaudir
            <span />
            03
          </button>
        </footer>
      </div>
    </div>
  )
}

export { Comment }
