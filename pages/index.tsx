import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>

        <div className={styles.center}>
        <p className={inter.className}>
                          Q1 - What do you want to learn or do more of at work? 
                          A: Problem solve. I love a new problem, or puzzle to figure out. I&#39;m always looking something new to learn, or product to test.
                          I enjoy being able to spend some the time to learn something from top to bottom, really understand how and why it works.  
        </p>
        </div>

      </main>
    </>
  )
}
