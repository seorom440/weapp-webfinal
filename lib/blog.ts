import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  content?: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug,
        title: data.title ?? '',
        excerpt: data.excerpt ?? '',
        category: data.category ?? '',
        date: data.date ?? '',
        readTime: data.readTime ?? '',
        image: data.image ?? '',
      } as BlogPost
    })

  return allPosts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const processedContent = await remark()
      .use(remarkHtml, { sanitize: false })
      .process(content)
    return {
      slug,
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      category: data.category ?? '',
      date: data.date ?? '',
      readTime: data.readTime ?? '',
      image: data.image ?? '',
      content: processedContent.toString(),
    }
  } catch {
    return null
  }
}
