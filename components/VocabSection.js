import Vocab from './Vocab'

export default ({tag, vocabs}) => {

  console.log(tag, vocabs)

  return (
    <div className='videos-section'>
      <style jsx>{`
      .videos-section {
        padding: 60px 0 0;
      }

      .videos-section:nth-child(even) {
        background: rgba(0,0,0,0.04);
      }

      .header {
        position: relative;
        padding-left: 10px;
        padding-bottom: 30px;
        margin: 0 50px;
      }

      .header:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 6px;
        width: 50px;
        background: var(--green);
      }

      .header h2 {
        font-size: 30px;
        font-weight: 700;
        padding: 5px 0 10px;
      }

      header h2 span {
        font-weight: 400;
        color: rgba(0,0,0,0.2);
        margin-left: 10px;
      }

      .videos {
        display: flex;
        padding-top: 30px;
        padding-left: 60px;
        padding-bottom: 60px;
        overflow: auto;
      }
    `}</style>
      <header className='header'>
        <h2>
          {tag}
        </h2>
      </header>
      <div className='videos'>
        {vocabs.map(vocab => (
          <Vocab key={vocab.id} vocab={vocab} />
        ))}
      </div>
    </div>
  )
}