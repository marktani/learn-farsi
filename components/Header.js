import Link from 'next/link'

export default ({ url }) => {

  const className = (route) => {
    return url.pathname === route ? 'active option' : 'option'
  }

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

      .tab-bar {
        background: rgba(0,0,0,0.1);
        padding: 20px 30px;
        display: flex;
        align-items: center;
      }

      .tabs {
        display: flex;
        align-items: center;
        color: red;
      }

      .option {
        font-size: 20px;
        color: rgba(255,255,255,0.5);
        cursor: pointer;
        text-decoration: none;
        margin-right: 20px;
      }

      .option.active {
        color: white;
      }

      .option:hover {
        color: white;
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
      <div className='tab-bar'>
        {
         <div className='tabs'>
           <Link prefetching href='/'><a className={className('/')}>Home</a></Link>
           <Link prefetching href='/suggestions'><a className={className('/suggestions')}>Suggestions</a></Link>
         </div>
        }
      </div>
    </header>
  )
}
