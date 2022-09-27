import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

function Comment() {
  return (
    <div className={styles.comment}>
      <aside>
        <img
          className={styles.avatar}
          src={
            'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          }
        />
      </aside>
      <main>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.headerInfo}>
              <strong>
                Ricardo Granvilla <span>(você)</span>
              </strong>
              <time
                className={styles.commentTime}
                title="27 de setembro às 12:17h"
                dateTime="2022-09-27 12:17:30"
              >
                Cerca de 2h
              </time>
            </div>
            <Trash />
          </header>
          <content>
            <p>Muito bom Ricardo, parabéns!!👏👏</p>
          </content>
        </div>
        <footer className={styles.footer}>
          <button type="button">
            <ThumbsUp size={20} />
            Aplaudir • 03
          </button>
        </footer>
      </main>
    </div>
  )
}

export { Comment }
