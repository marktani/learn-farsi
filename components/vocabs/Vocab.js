export default ({ vocab }) => (
  <div>
    <style jsx>{`
      .content {
        text-decoration: none;
        padding-right: 10px;
        transition: transform .3s ease;
        width: 200px;
        margin: 20px;
      }

      .vocab-card {
        display: flex;
        flex-direction: column;
      }

      .farsi-vocab {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      .vocab {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
      }

      .content {
        padding: 15px;
        border-radius: 2px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                    0 3px 6px rgba(0,0,0,0.23);
        background: var(--p-green-0);
      }

      .content:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16),
                    0 3px 6px rgba(0,0,0,0.23),
                    0 12px 12px rgba(0,0,0,0.30);
      }
    `}</style>
    <div className='content'>
      <div className='vocab-card'>
        <div className='farsi-vocab'>
          <h3
            className='title farsi'
          >
            {vocab.farsi}
          </h3>
          <div className='title farsi'>🇮🇷</div>
        </div>
        <div className='vocab'>
          <h3
            className='title'
          >
            {vocab.english}
          </h3>
          <div className='title'>🇺🇸</div>
        </div>
      </div>
    </div>
  </div>
)