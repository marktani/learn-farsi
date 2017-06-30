export default ({ vocab }) => (
  <div>
    <style jsx>{`
      .video {
        text-decoration: none;
        padding-right: 20px;
        transition: transform .3s ease;
        width: 300px;
      }

      .video:hover {
        transform: translate3D(0, -10px, 0);
      }

      .video-preview {
        width: 300px;
        height: auto;
        border-radius: 1px;
      }

      .video p {
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 200px;
      }

      .content {
        padding: 10px;
      }

      .speaker {
        display: flex;
        align-items: center;
        padding: 10px 0;
      }

      .speaker-picture {
        border-radius: 500px;
        height: 25px;
        width: 25px;
        margin-right: 10px;
      }

    `}</style>
    <div className='content'>
      <h3 className='title farsi'>{vocab.farsi}</h3>
      <h3 className='title'>{vocab.english}</h3>
      <h3 className='title'>{vocab.german}</h3>
    </div>
  </div>
)