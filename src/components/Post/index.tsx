import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
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
  content: ContentProps[];
  published_at: Date
}

interface PostProps {
  author: AuthorProps
  content: ContentProps[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<CommentProps[]>([])
  const [newCommentText, setNewCommentText] = useState('')

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

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([
      ...comments,
      {
        id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
        author: {
          avatarUrl: 'https://github.com/luizgustavodarossi.png',
          name: 'Luiz Gustavo Darossi',
          role: 'Web Developer',
        },
        content: [{ type: 'paragraph', content: newCommentText }],
        published_at: new Date(),
      },
    ])

    setNewCommentText('')
  }

  const handleNewCommmentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentinvalid = (
    event: InvalidEvent<HTMLTextAreaElement>,
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const deleteComment = (id: number) =>
    setComments([...comments.filter((comment) => comment.id !== id)])

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={`content-${line.content}`}>{line.content}</p>
          }
          if (line.type === 'link') {
            return (
              <p key={`content-${line.content}`}>
                <a href={line.url}>{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário..."
          onChange={handleNewCommmentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentinvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={`comment-${comment.id}`}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              publishedAt={comment.published_at}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
