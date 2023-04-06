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
                          Q3 -  How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.
                          A: To be honest I don&#39;t have enough experience to compare Next.js to another framework.  
                          I have done some research, and I have learned that Next.Js requires less coding from other frameworks. 
                          Because of server side rendering, it is often one of the faster frameworks, this also helps for on the spot rendering
                          to see changes as they are made. 

        </p>
        </div>

</main>
</>
)
}