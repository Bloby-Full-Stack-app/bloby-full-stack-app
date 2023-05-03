import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import { getPlaylistById } from '../api/endpoints/playlist';
import Track from '../components/Track/Track';
import Comment from '../components/Comment/Comment';
import { addCommentToPlaylist } from '../redux/actions/comment';
import { useDispatch } from 'react-redux';

function Playlist() {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const [playlist, setPlaylist] = useState(null);
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    useEffect(() => {
        const getPlaylist = async () => {
            const promise = axios(getPlaylistById({ playlistId }));
            const res = await promise;
            const { data } = res;
            if (res.status === 200 || res.status === 201) {
                try {
                    setPlaylist(data?.data || {});
                    setComments(data?.data?.comments || []);
                } catch {

                }
            } else {
                // TODO: Handle track detail error
            }
        };
        // Only call getPlaylist if playlistId is not null
        if (playlistId && !playlist) {
            getPlaylist();
        }
    }, [playlistId, playlist, comments, content]);

    const handleComment = async (event) => {
        event.preventDefault();
        try {
            const res = await dispatch(addCommentToPlaylist(playlistId, { content }));
            const newComment = res.data;
            setComments([...comments, newComment]);
            setContent("");
        } catch {

        }
        // add the new comment to comments array
    };
    return (
        <main className="main">
            <div className="container-fluid">
                <div className="row row--grid">

                    <div className="col-12">
                        <div className="main__title main__title--page">
                            {playlist && <h1>{playlist.name}</h1>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="release">
                            <div className="release__content">
                                <div className="release__cover">
                                    <img src="assets/img/covers/cover3.jpg" alt="" />
                                </div>
                                <div className="release__stat">
                                    {playlist && <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg> {playlist.tracks.length}</span>}
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z" /></svg> 19 503</span>
                                </div>

                            </div>

                            <div className="release__list">
                                {playlist && <ul className="main__list main__list--playlist main__list--dashbox">
                                    {playlist.tracks.map(track => (
                                        <Track
                                            key={track._id}
                                            id={track._id}
                                            Image={track.Image}
                                            name={track.name}
                                            artist={track.artist}
                                            inPlaylist={true}
                                            length="3:44"
                                        />
                                    ))}
                                </ul>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="article">
                            {comments &&
                                <div className="comments">
                                    <div className="comments__title">
                                        <h4>Comments</h4>
                                        <span>{comments.length}</span>
                                    </div>

                                    <ul className="comments__list">
                                        {comments.map(comment => (
                                            <Comment
                                                key={comment._id}
                                                username={comment.user.username}
                                                content={comment.content}
                                                date={comment.timestamps}
                                            />

                                        ))}
                                    </ul>

                                    <form action="#" className="comments__form">
                                        <div className="sign__group">
                                            <input id="content" name="content" onChange={e => setContent(e.target.value)} className="sign__input" placeholder="Add comment" />
                                        </div>
                                        <button type="button" onClick={handleComment} className="sign__btn">Send</button>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Playlist;