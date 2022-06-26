import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './styles.module.scss'

interface AuthorProps {
  avatarUrl: string
  name: string
  role: string
}

interface ContentProps {
  type: string
  content: string
  url?: string
}

interface CommentProps {
  id: number
  author: AuthorProps
  content: ContentProps[]
  publishedAt: Date
  onDeleteComment: (id: number) => void
}

export function Comment({
  id,
  author,
  content,
  publishedAt,
  onDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleLikeComment = () => setLikeCount((state) => state + 1)

  const handleDeleteComment = () => onDeleteComment(id)

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>

              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          {content.map((line) => {
            if (line.type === 'paragraph') {
              return <p key={`content-${line.content}`}>{line.content}</p>
            }
            if (line.type === 'link') {
              return (
                <p>
                  <a key={`content-${line.content}`} href={line.url}>
                    {line.content}
                  </a>
                </p>
              )
            }
          })}
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
