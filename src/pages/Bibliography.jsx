function Bibliography ({setPage}){
return(
    <>
 <div className="content content-books">
      <div className="header">
        <h2 id="books">Libros</h2>
      </div>
      <div className="_3_col books">
        <div className="book">
          <div id="book_001" className="img book_img"></div>
          <h3>EFUSIVA PENITENTE</h3>
          <a onClick={()=>{setPage("efusiva-penitente")}} className="button">Saber más</a>
        </div>
        <div className="book">
          <div id="book_002" className="img book_img"></div>
          <h3>OFIDIAS</h3>
          <p>
          &quot;Como una gota se carga lentamente hasta que ya no aguanta su propio peso y rueda, así, cada palabra de Valeria Guzmán ha caído en su libro Ofidias. La lucidez, en algunos momentos escalofriante, se ha aliado con la belleza y macerado en el tiempo. &quot; <br /> <br /> Raquel Olvera
          </p>
          <a onClick={()=>{setPage("ofidias")}} className="button">Saber más</a>
        </div>
      </div>
    </div>
    </>
)
}

export default Bibliography;