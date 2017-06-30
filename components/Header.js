import Link from 'next/link'

export default ({ url }) => {
  return (
    <header className='header'>
      <style jsx={true}>{`
      .header {
        background: var(--green);
      }

      .header h1 {
        color: var(--light-gray);
        padding: 30px;
      }

      .header span {
        margin-left: 10px;
        font-size: 25px;
        font-weight: 400;
        color: inherit;
      }

      .page-title {
        font-family: Helvetica;
      }

      .tabbar {
        color: white;
        background: rgba(0,0,0,0.1);
        padding: 20px 30px;
        display: flex;
        align-items: center;
      }

      .sort-by {
        color: inherit;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 16px;
        margin-right: 15px;
      }

      .tabs {
        display: flex;
        align-items: center;
      }

      .option {
        font-size: 20px;
        color: rgba(255,255,255,0.5);
        cursor: pointer;
        text-decoration: none;
        margin-right: 20px;
      }

      .option.active {
        color: white
      }

      .switch {
        width: 30px;
        height: 18px;
        border-radius: 500px;
        background: rgba(255,255,255,0.2);
        display: flex;
        cursor: pointer;
        margin: 0 10px;
      }

      .switch:after {
        content: "";
        background: white;
        border-radius: 500px;
        height: 18px;
        width: 18px;
      }

      .switch.left {
        justify-content: flex-start;
      }
      .switch.right {
        justify-content: flex-end;
      }
    `}</style>

      <h1 className='page-title'>Learn Farsi<br/><span className='farsi'>فارسی یاد بگیرند</span></h1>
      <div className='tabbar'>
        <div className='tabs'>
          <Link href='/'><a className='option active'>Home</a></Link>
          <Link href='/'><a className='option'>Vocabs</a></Link>
          <Link href='/'><a className='option'>Phrases</a></Link>
          <Link href='/'><a className='option'>Movies</a></Link>
        </div>
      </div>
    </header>
  )
}
