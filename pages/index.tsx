import Head from 'next/head'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import styles from '../styles/Home.module.css'
import Page from '../components/page'
import {useState, useEffect} from 'react'


export default function Home() {


  const [fading, setFading] = useState(' opacity-0 ease-in ');
  const [faded, setFaded] = useState('  delay-1000 duration-700 ')

  useEffect( () =>{
    setFading(' opacity-100 ease-in ')
    setTimeout(() => {
       setFaded(' ') 


    }, 1100)
    // setFading(true);
    
  }, []);

  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {

    default:
      src = '/mikupinkpfp.jpg'
      break
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>tr1e_</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


  <Page>
  <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-12">

  <div className="flex flex-col-reverse sm:flex-row items-start ">

            <div className="flex flex-col pr-8">
              <h1 className={'font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white transition-opacity duration-700 ' + (fading )}>
                tr1e_
              </h1>
              <h2 className={'text-gray-700 dark:text-gray-200 mb-4 mt-2 transition-opacity duration-700  delay-500 ' + (fading)}>

student/developer/learner
              </h2>
              <p className={'text-gray-600 dark:text-gray-400 mb-16 break-all duration-700  delay-700 ' + (fading)}>
bing bongbongbongbongbongbongbongbongbongbongbongbongb
              </p>
            </div>
                <div className={'duration-700  delay-600 ' + (fading  )}>
                <Image
                alt="Tri Ho"
                height={176}
                width={176}
                src={src}
                sizes="50vw"
                priority
              />
                </div>
          </div>
          </div>
  </Page>
    </div>
  )
}
