import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

function Comment({ author, likes, commentAt, comment, onDelete }) {
  const [like, setLike] = useState(likes);

  const { name, avatarUrl } = author;

  const publishedDateFormatted = format(
    commentAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  const commentDateRelativeToNow = formatDistanceToNow(commentAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleLike() {
    setLike(like + 1);
  }

  return (
    <div className={styles.comment}>
      <aside>
        <Avatar hasBorder={false} title="John Doe" src={avatarUrl} />
      </aside>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{name}</strong>
              <time
                className={styles.commentTime}
                title={publishedDateFormatted}
                dateTime={commentAt.toISOString()}
              >
                {commentDateRelativeToNow}
              </time>
            </div>
            <button
              type="button"
              onClick={onDelete}
              className={styles.deleteButton}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>
          <div>
            <p>{comment}</p>
          </div>
        </div>
        <footer className={styles.footer}>
          <button type="button" onClick={handleLike}>
            <ThumbsUp size={24} />
            Aplaudir
            <span />
            {like}
          </button>
        </footer>
      </div>
    </div>
  );
}

export { Comment };
