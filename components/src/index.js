import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="Good Job bro!"
                photo={faker.image.avatar()} />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                comment="this blog post changed my life and my wifes life"
                photo={faker.image.avatar()} />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 4:30PM"
                comment="I dont know what I did before reading this"
                photo={faker.image.avatar()} />
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'))