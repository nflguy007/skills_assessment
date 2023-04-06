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
                          Q6 -  What do you think is one of the most common problems which customers ask Vercel 
                          for help with? How would you help customers to overcome common problems, short-term and long-term?

                          A: I would thinkg that onboarding, and learing all of the capabilities in troublesome.
                          While documentation, and knowledge base articles can do so much - nothing beats a chat with someone that knows the product. 
                          During my support calls, and tickets I&#39;m always looking for added value areas that I can talk about or discuss with customers.
                          Giving them a more efficient way to do something, or showing them a feature they&#39;re not utlizing fully.
                          Field any additional questions they might have, make them feel heard.          
                          </p>                
                          </div>

</main>
</>
)
}
