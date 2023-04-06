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
                        Q7 -  How could we improve or alter this familiarization exercise?
                        A - As you can tell, the one thing I couldn&#39;t figure out was now to index and actually build secondary pages. 
                        I believe that this is just my lack of knowledge and experience.  I&#39;ll be the first to admit, that there would be a pretty
                        steep learning curve for me to take on this role.  I totally enjoyed the experience, and learning process I endured to get this
                        as completed as I can.  I honestly don&#39;t think I&#39;d change the assessment much at all.                            
                          </p>                
                          </div>

</main>
</>
)
}
