import Link from 'next/link'

export default ({ url }) => {

  console.log(url)

  const className = (route) => {
    return url.pathname === route ? 'active option' : 'option'
  }

  return (
    <header className='header'>
      <style jsx={true}>{`
      .header {
        background: var(--p-green-0);
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
        background: var(--p-green-3);
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
        cursor: pointer;
        text-decoration: none;
        margin-right: 20px;
      }

      .option.active {
        color: var(--gray-0);
      }

      .option:hover {
        color: var(--gray-0);
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
