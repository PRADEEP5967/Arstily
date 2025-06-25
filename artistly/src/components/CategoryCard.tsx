import Link from 'next/link'

interface CategoryCardProps {
  category: {
    name: string
    icon: string
    count: number
  }
  index: number
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Link href={`/browse?category=${encodeURIComponent(category.name)}`}>
      <div 
        className="category-card animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm">{category.count} artist{category.count !== 1 ? 's' : ''}</p>
      </div>
    </Link>
  )
}