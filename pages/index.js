
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <home>
      <h1 className="title">
  
  <Link href="/about">
    <a>Get Started!</a>
  </Link>
</h1>
    </home>
  )
}
