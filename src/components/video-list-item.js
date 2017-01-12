import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video);
    const thumbUrl = video.snippet.thumbnails.default.url;
    const description = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={thumbUrl} alt={description}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {description}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;