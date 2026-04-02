import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogPostClient from '@/components/BlogPostClient'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://weappbcn.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://weappbcn.com/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image, width: 800, height: 600, alt: post.title }],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'WEAPP BCN',
      url: 'https://weappbcn.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WEAPP BCN',
      url: 'https://weappbcn.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://weappbcn.com/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://weappbcn.com/blog/${post.slug}`,
    },
    keywords: post.category,
    articleSection: post.category,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${post.category} and how does it apply to businesses?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: post.excerpt,
        },
      },
      {
        '@type': 'Question',
        name: `How can ${post.category} improve business efficiency?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${post.category} can significantly improve business efficiency by automating repetitive tasks, enabling better decision-making through data analysis, and scaling operations without proportional cost increases. WEAPP BCN specializes in implementing these solutions for European businesses.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-bg">
        <div className="noise-bg" />
        <Navbar />
        <BlogPostClient post={post} />
        <Footer />
      </div>
    </>
  )
}
