import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Luiz Gustavo" content="Um post bacana" />
          <Post author="Diego Fernandes" content="Um post dahora" />
        </main>
      </div>
    </>
  )
}
