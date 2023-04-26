import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/prueba.svg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import BookImage from "../../public/images/svgs/book_image.svg"
import TransitionEffect from '@/components/TransitionEffect'
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import About from '@/components/sections/About'
import Testimonial from '@/components/testimonialSection'
import NumberSection from '@/components/numberSection'
import GetStarted from '@/components/sections/GetStarted'
import Explore from '@/components/sections/Explore'
import World from '@/components/sections/World'
import Feedback from '@/components/sections/Feedback'
import GetInTouch from '@/components/getInTouch'
import MyGoogleMap from '@/components/GoogleMaps'
import ContactUs from '@/components/ContactUs';
import FrequentlyQuestions from '@/components/Questions'


export default function Home() {

  return (
    <>
      <NavBar />
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="CodeBucks" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
               </div>
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Unlock Your Child's Full Potential with IQ Zone" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Your One-Stop Destination for Comprehensive Tutoring, School Supplies, and Uniforms
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/dummy.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                  >Call<LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>
                  <Link href="mailto:abcd@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >Contact</Link>
                </div>
               </div>
           </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-48 md:hidden'>
          <Image src={BookImage} alt="IqZone" className='w-full h-auto' />
        </div>
      </main>
      
      <div className='relative'>
        <About />
        <GetStarted />
        <Explore />
      </div>
      <NumberSection/>
      <Testimonial />
      <MyGoogleMap />
      <Feedback />
      <GetInTouch/>
      <FrequentlyQuestions />
      <ContactUs/>
      <Footer />
    </>
  )
}
