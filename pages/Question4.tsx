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
                          Q4 - When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
                          A: Once again I had to reaseach this.  It appears you would use the edge functions when doing quick computational commands
                          or things that you need quick resoponse times from. Edge functions are limited by the processing power of the device. 
                          They are fast, yet cost more and are not scalable.    
                          Using Sererless Functions are for heavier lifts like deeper analysis, or a data driven workload. 
                          Edge Middleware - used when you need to run code before a request is completed.  Authentication or bot protection
                          are good examples of this. 
        </p>
        </div>

      </main>
    </>
  )
}
