export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');

      :root {
        --purple: #CA2E96;
        --green: rgba(193,229,182,0.9)
        --dark-gray: rgba(0,0,0,0.9);
        --light-gray: rgba(0,0,0,0.5);
      }

      * {
        font-family: 'Source Sans Pro', sans-serif;
        color: var(--dark-gray);
        -webkit-font-smoothing: antialiased;
      }

      body {
        margin: 0;
        padding: 0;
      }

      h1, h2, h3, h4, p {
        margin: 0;
        padding: 0;
      }

      h1 {
        text-align: right;
      }

      h2 {
        font-size: 30px;
        font-weight: 700;
      }

      h3 {
        font-size: 23px;
        font-weight: 600;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--light-gray);
      }
    `}</style>
  </main>
)
