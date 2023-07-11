import '@/styles/globals.css'
import Layout from '../../components/layout'

export default function App({ Component, pageProps }) {
  return (
    
      <div className=" text-neutral-600">
        <div className='flex flex-col flex-grow min-h-screen'>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </div>
      </div>
  )
  
}
