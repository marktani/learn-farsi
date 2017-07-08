import Vocab from './Vocab'

export default ({tag, vocabs}) => {

  return (
    <div className='section'>
      <style jsx>{`
      .section {
        padding: 60px 0 0;
      }

      .section:nth-child(even) {
        background: var(--gray-0);
      }

      .section:nth-child(odd) {
        background: var(--gray-0);
      }

      .section:after {
        display: block;
        content: "";
        position: relative;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 10%;
        background: var(--p-green-0);
        # margin:0 auto;
      }

      .header {
        position: relative;
        padding-left: 10px;
        padding-bottom: 30px;
        margin: 0 50px;
      }

      .header h2 {
        font-size: 30px;
        font-weight: 700;
        padding: 5px 0 10px;
        # text-align: center;
      }

      .vocabs {
        display: flex;
        padding-top: 30px;
        padding-left: 60px;
        padding-bottom: 60px;
        flex-flow: wrap;
        # justify-content: center;
      }
    `}</style>
      <header className='header'>
        <h2>
          {tag}
        </h2>
      </header>
      <div className='vocabs'>
        {vocabs.map(vocab => (
          <Vocab key={vocab.id} vocab={vocab} />
        ))}
      </div>
    </div>
  )
}