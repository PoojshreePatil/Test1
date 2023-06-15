import React from 'react';


const books =[
{
  title:'Shrimanyogi',
  src: 'https://images-eu.ssl-images-amazon.com/images/I/51FnFhekNsL._AC_UL600_SR600,600_.jpg',
//src: './images/Shrimanyogi.jpg',
link:'https://mr.wikipedia.org/wiki/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BE%E0%A4%A8_%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A5%80'
},

{
  title :'Chhava',
  src: 'https://m.media-amazon.com/images/I/41+lR5hP8tL._AC_UF1000,1000_QL80_.jpg',
  link:'https://mr.wikipedia.org/wiki/%E0%A4%9B%E0%A4%BE%E0%A4%B5%E0%A4%BE_(%E0%A4%95%E0%A4%BE%E0%A4%A6%E0%A4%82%E0%A4%AC%E0%A4%B0%E0%A5%80)'
},
{
  title :'Mrutyunjay',
  src: 'https://m.media-amazon.com/images/I/915W-2YXl6L._AC_UF1000,1000_QL80_.jpg',
  link:'https://mr.wikipedia.org/wiki/%E0%A4%AE%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%81%E0%A4%82%E0%A4%9C%E0%A4%AF_(%E0%A4%95%E0%A4%BE%E0%A4%A6%E0%A4%82%E0%A4%AC%E0%A4%B0%E0%A5%80)'
},
{
  title :'Panipat',
  src: 'https://m.media-amazon.com/images/I/51ppb6OywjL._AC_UF1000,1000_QL80_.jpg',
  link:'https://en.wikipedia.org/wiki/Panipat'
},
{
  title :'Shyamchi Aai',
  src: 'https://qph.cf2.quoracdn.net/main-qimg-dd65e94d84e5103918c74a37008bbc97',
  link:'https://en.wikipedia.org/wiki/Shyamchi_Aai'
}
];

function App() {
  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <center>
    <div className='container'>
      <h1>My Book Library</h1>
      <>
        {books.map((book, index) => (
          <p key={index} onClick={() => handleClick(book.link)}>
            <img src={book.src} alt='images' height="300px" width="300px" title={book.title}></img>
            <br/>
             <a href={book.link} >{book.title}</a>
          </p>
        ))}
      </>
      
</div>
    </center>
  );

}


  export default App;