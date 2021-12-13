import React from 'react';

class Test extends React.Component {
    state = {
        posts: [],
        pulled: false
    }
    
    getAllPosts =() => {
        let allInitialUserPosts = [];
        return fetch('/api/posts/')
        .then(response => {
            return response.json();
        }).then(data => {
            allInitialUserPosts = data.map((post) => {
                console.log(post)
            return post;
        });
        // if(!this.state.pulled)
        // this.setState({
        //     posts: allInitialUserPosts,
        //     pulled: true
        //     });
        });
    }

    render(){
        let allPosts = this.state.posts;
        let posts = allPosts.map((post) => console.log(post));
        // <h2> {post} </h2>

        return(
            <div className="container-fluid" action={this.getAllPosts}>
                
                {/* <select>
                </select> */}
            </div>
        );
    } // render
}

// export default Test;