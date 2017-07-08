export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');

      :root {
        --purple: #CA2E96;
        --blue: #4281A4;
        --brown: rgba(186, 93, 79, 1);
        --light-brown: rgba(186, 93, 79, 0.3);
        --green: rgba(193,229,182,0.9)
        --dark-gray: rgba(0,0,0,0.9);
        --light-gray: rgba(0,0,0,0.5);
        --dark-blue: #556677;

        --green-0: rgba( 45,134, 51,1);
        --green-1: rgba(134,201,139,1);
        --green-2: rgba( 84,167, 89,1);
        --green-3: rgba( 17,101, 23,1);
        --green-4: rgba(  0, 67,  5,1);

        --teal-0: rgba( 35,100,103,1);
        --teal-1: rgba(104,152,154,1);
        --teal-2: rgba( 65,126,129,1);
        --teal-3: rgba( 14, 75, 77,1);
        --teal-4: rgba(  1, 49, 52,1);

        --brown-0: rgba(170,109, 57,1);
        --brown-1: rgba(255,210,171,1);
        --brown-2: rgba(213,156,107,1);
        --brown-3: rgba(128, 71, 22,1);
        --brown-4: rgba( 86, 40,  0,1);

        --red-0: rgba(170, 60, 57,1);
        --red-1: rgba(255,173,171,1);
        --red-2: rgba(213,110,107,1);
        --red-3: rgba(128, 25, 22,1);
        --red-4: rgba( 86,  2,  0,1);

        --p-green-0: rgba(139,189,145,1);
        --p-green-1: rgba(143,233,154,1);
        --p-green-2: rgba(137,246,151,1);
        --p-green-3: rgba( 92,123, 96,1);
        --p-green-4: rgba( 76, 87, 77,1);

        --p-blue-0: rgba(124,136,163,1);
        --p-blue-1: rgba(145,169,222,1);
        --p-blue-2: rgba(146,175,241,1);
        --p-blue-3: rgba( 83, 90,106,1);
        --p-blue-4: rgba( 66, 69, 75,1);

        --p-yellow-0: rgba(238,241,177,1);
        --p-yellow-1: rgba(249,254,156,1);
        --p-yellow-2: rgba(249,255,142,1);
        --p-yellow-3: rgba(155,157,118,1);
        --p-yellow-4: rgba(110,111, 97,1);

        --gray-0: rgba(231,231,231,1);
        --gray-1: rgba(250,250,250,1);
        --gray-2: rgba(245,245,245,1);
        --gray-3: rgba(203,203,203,1);
        --gray-4: rgba(180,180,180,1);

        --dark-gray-0: rgba( 62, 62, 62,1);
        --dark-gray-1: rgba(114,114,114,1);
        --dark-gray-2: rgba( 86, 86, 86,1);
        --dark-gray-3: rgba( 23, 23, 23,1);
        --dark-gray-4: rgba(  0,  0,  0,1);
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

      .farsi {
        direction: rtl;
      }
    `}</style>
  </main>
)
