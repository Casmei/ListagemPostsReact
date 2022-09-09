import { useState } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

import { loadPosts } from '../../utils/loadPosts';
import { TextInput } from '../../components/TextInput';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(15);
    const [searchValue, setSearchValue] = useState('');

    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? 
    allPosts.filter(post=>{
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : posts;

    const handleLoadPosts = useCallback( async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();
        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos)
    }, []);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts)
        setPage(nextPage)
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchValue(value)
    }

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts,postsPerPage]);


    return (
        <section className="container">

                <div className='search-container'>
                    <div className='tudo'>
                        <div className='title-header'>
                            <p>Codelândia</p>
                            <p>blog</p>
                        </div>
                        <TextInput searchValue={searchValue} handleChange={handleChange}/>
                    </div>
                </div>
            <div className="wrapper">

                {filteredPosts.length > 0 && (
                    <Posts posts={filteredPosts} />
                )}

                {filteredPosts.length === 0 && (
                    <p>Não existe posts</p>
                )}
                
                {!searchValue && 
                    (
                        <div className="button-container">
                        <Button
                        morePosts={noMorePosts}
                        text="Load more posts"
                        quandoClica={loadMorePosts}
                        />
                    </div>
                    )
                }
            </div>

        </section>
    );
}

export default Home;
