export default ({text, isEnglish}) => {

  if (isEnglish) {
    return (
      <div className='english-vocab'>
        <style jsx>{`
          .english-vocab {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
          }`
        }</style>
        <h3
          className='title'
        >
          {text}
        </h3>
        <div className='title'>🇺🇸</div>
      </div>
    )
  } else {
    return (
      <div className='farsi-vocab'>
        <style jsx>{`
          .farsi-vocab {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }`
        }</style>
        <h3
          className='label farsi'
        >
          {text}
        </h3>
        <div className='icon farsi'>🇮🇷</div>
      </div>
    )
  }
}