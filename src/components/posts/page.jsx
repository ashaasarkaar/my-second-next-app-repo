'use client'
import React, { use } from 'react';

const Posts = ({postPromise}) => {
    const posts = use(postPromise)
    console.log('All posts Here', posts)
    return (
        <div>
            <h1>Posts : {posts.length}</h1>
        </div>
    );
};

export default Posts;