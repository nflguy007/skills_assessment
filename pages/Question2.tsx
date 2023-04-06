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
                          Q2 - Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful? 
                          A:  I notices a situation where we would recieve a batch of monthy tickets from random customers that were failing their SSO authentication.
                          After taking these tickets, and finding that the majority of them were due to the authentication certificate expiring, I worked with our Authentication Team
                          to automate an email to the admins of the environment one month, and a reminder email 15 days before the certificate expired. 
                          I would also get a report of the monthly emails sent, so I could spot check to make sure SSO certificates were updated.
                          I measured success on the fact that this grouping of tickets were no longer created monthly. 
        </p>
        </div>
      </main>
    </>
  )
}
