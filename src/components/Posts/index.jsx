import { PostCard } from "../PostCard"
import './style.css'

const Posts = ({posts}) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
)

export default Posts;
