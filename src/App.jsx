import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.scss'
import styles from './App.module.scss'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizgustavodarossi.png',
      name: 'Luiz Gustavo Retka Darossi',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Running after the machine' },
      {
        type: 'paragraph',
        content:
          'Not in time for rest. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore velit tempore dolores aspernatur officia enim ipsum ut adipisci molestiae, quisquam autem. Cupiditate commodi voluptatem numquam quidem assumenda exercitationem quasi quisquam!',
      },
      { type: 'link', url: '#', content: '#working' },
    ],
    published_at: new Date('2022-06-04 6:15:45'),    
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Good news' },
      {
        type: 'paragraph',
        content:
          'Spain is hiring web developer. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore velit tempore dolores aspernatur officia enim ipsum ut adipisci molestiae, quisquam autem. Cupiditate commodi voluptatem numquam quidem assumenda exercitationem quasi quisquam!',
      },
      { type: 'link', url: '#', content: '#ignite' },
      { type: 'link', url: '#', content: '#gostack' },
    ],
    published_at: new Date('2022-06-10 9:48:05'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Great day' },
      {
        type: 'paragraph',
        content:
          'Tesla starts working in Brazil. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore velit tempore dolores aspernatur officia enim ipsum ut adipisci molestiae, quisquam autem. Cupiditate commodi voluptatem numquam quidem assumenda exercitationem quasi quisquam!',
      },
      { type: 'link', url: '#', content: '#technology' },
    ],
    published_at: new Date('2022-06-04 6:15:45'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={`post-${post.id}`}
              author={post.author}
              content={post.content}
              publishedAt={post.published_at}
              comments={post.comments}
            />
          ))}
        </main>
      </div>
    </>
  )
}
