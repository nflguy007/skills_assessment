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
                          Q5 - Here is my reply: 
                          User Name - 
                          Thank you for contacting Vercel Support.

                          I understand that you&#39;re experiecing an issue while trying to compile a build.  You&#39;re recieving an error: 
                          /vercel/path0/dist/routes-manifest.json couldn&#39;t be found.

                          First I&#39;d like to verify the path you&#39;re executing the compile from, and also verify that the path and file  /vercel/path0/dist/routes-manifest.json
                          do in fact exist.  If you could reply with the exact steps, including work active working path to replciate the error, and possibly
                          as screen shot showing that the path, and file do exist.  Once we have verified this, I&#39;d like to shchedule a call and screen share with you 
                          to do a deeper investigation into this issue.  

                          Thank you, and please let me know if you have any other questions or concerns. 
                          Brian White 

          </p>                
          </div>

</main>
</>
)
}