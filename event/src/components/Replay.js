import React from 'react'

function Replay() {


    return (

        <div className="comment-respond">
            <h3 className="comment-reply-title">reply</h3>
            <form className="comment-form" method='post' onSubmit={handleSubmit}>
                <div className="form-textarea">
                    <textarea id="comment" placeholder="Write Your Comments..." name='reply'></textarea>
                </div>
                <div className="form-submit">
                    <input id="submit" value="Post Comment" type="submit" />
                </div>
            </form>
        </div>


    )
}

export default Replay
