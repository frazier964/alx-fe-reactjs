import { useQuery } from '@tanstack/react-query'

function PostsComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) throw new Error('Network response was not ok')
      return res.json()
    },
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
        isError
        fetchPosts
        cacheTime
        staleTime
        refetchOnWindowFocus
        keepPreviousData
        button
        onClick
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
