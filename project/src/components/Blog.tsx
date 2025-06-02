import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and GraphQL",
    excerpt: "Learn how to create robust and scalable APIs using Node.js and GraphQL to power modern applications.",
    date: "April 22, 2023",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Backend"
  },
  {
    id: 2,
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comprehensive comparison of different state management approaches in React applications.",
    date: "March 10, 2023",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "React"
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    <div className="h-48 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center mb-2">
        <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <div className="flex items-center mr-4">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            I regularly write about web development, software engineering, and technology trends.
            Here are some of my recent articles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mt-12">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-2">Subscribe to My Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Get notified about new articles, tutorials, and resources directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold mb-2">What You'll Get:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Weekly development tips</li>
                <li>• New article notifications</li>
                <li>• Resource recommendations</li>
                <li>• Exclusive content</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;