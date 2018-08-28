
// Programando una clase en Javascript
class Notas{
  // Programando un metodo de una clase en Javascript
  static obtenerFormulario(){
    let nota_nueva = {};
    nota_nueva.titulo = document.querySelector( "#nota_titulo_" ).value;
    nota_nueva.descripcion = document.querySelector( "#nota_descripcion_" ).value;
    nota_nueva.precio = document.querySelector( "#nota_precio_" ).value;
    if( nota_nueva.precio == "" ){
        nota_nueva.precio = 0;
    }
    document.querySelector( "#nota_titulo_" ).value = "";
    document.querySelector( "#nota_descripcion_" ).value = "";
    document.querySelector( "#nota_precio_" ).value = "";
    return nota_nueva;
  }
  static subir(){

    console.log('[..] Hola, martes con frio en buenos aires!!!');

    let nota = Notas.obtenerFormulario();
    
    document.querySelector("#panelMsgContenido").innerHTML
        += JSON.stringify(nota);

    
    
    console.log('[OK] Hola, martes con frio en buenos aires!!!');

  }

  static limpiar(){
    document.querySelector("#panelMsgContenido").innerHTML = "";
  }
  static mostrar(listado, id_contenedor){

          let plantilla = `
          ${ listado.map( 
                  comida => 
                  `
                    <article><h3>
                     (${ comida.id }) 
                     ${ comida.titulo }</h3>
                     ${ comida.precio }, 
                     ${ comida.descripcion }.
                    </article>
                  `
          ).join('') }
          `;
        document.querySelector(id_contenedor).innerHTML = plantilla;

  }
  
  static mostrarDatosCliente(){
          let listado = [ 
 { "id": 100, "titulo":"Mate Calabaza", "descripcion":"Suave", "precio": 100},
 { "id": 102, "titulo":"Mate Alpaca", "descripcion":"Fino", "precio": 500},
 { "id": 104, "titulo":"Mate Madera", "descripcion":"Tipico", "precio": 100},
 { "id": 106, "titulo":"Mate Asta", "descripcion":"Duradero", "precio": 250},
 { "id": 108, "titulo":"Mate Silicona", "descripcion":"De ciudad", "precio": 300}
                        ];
    
    Notas.mostrar( listado ,'#panelDatosCliente');
  }
  
}





