import Posts from '@/components/posts/page';
import React, { Suspense } from 'react';

const PostsPage = () => {
    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    return (
        <div>
            <Suspense fallback={<h2>Posts Loading...</h2>}>
                <Posts postPromise={postPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostsPage;