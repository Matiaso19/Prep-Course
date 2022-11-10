// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let map1 = array.map(x => x + 1);
  return map1
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
return palabras.join(' ')

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumatoria = 0
  for (let n of numeros) {
    sumatoria = sumatoria + n
  } 
  return sumatoria
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0
  let suma = 0
  for (let n of resultadosTest) {
    suma = suma + n
    promedio = suma / resultadosTest.length
  }
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0
  for (let x = 0; x < numeros.length; x++) {
    if (numeros[x] > mayor) {
      mayor = numeros[x]
    }  
  } 
  return mayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
      let multiplicados = 1
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          multiplicados = arguments[i] * multiplicados
        } return multiplicados
      } else if (arguments.length === 0) {
      return 0
      } else if (arguments.length === 1) {
      return arguments[0]
    }
  }


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayor18 = 0
  for (let numero of arreglo) {
    if (numero > 18) {
      mayor18 = mayor18 + 1
    }
  }
  return mayor18

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
 if (numeroDeDia === 1) {
  return "Es fin de semana"
 } else if (numeroDeDia === 2) {
  return "Es dia Laboral"
 } else if (numeroDeDia === 3) {
  return "Es dia Laboral"
  }  else if (numeroDeDia === 4) {
  return "Es dia Laboral"
  } else if (numeroDeDia === 5) {
    return "Es dia Laboral"
  } else if (numeroDeDia === 6) {
    return "Es dia Laboral"
  } else if (numeroDeDia === 7) {
    return "Es fin de semana"
  }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aqu
  return n.toString()[0] === "9"
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (x = 0; x < arreglo.length; x++) {
    return arreglo[x] === arreglo[x + 1]
  }
  
}



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
    let meses = []
    for (let mes of array) {
      if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
        if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
        meses.push(mes)
        }
    } else {
      return "No se encontraron los meses pedidos"
    }
    } return meses
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let numeros = []
  for (let numero of array) {
    if (numero > 100) {
      numeros.push(numero)
    }
  }
  return numeros
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let aumentado1 = [] 
  let suma = numero
  let x = 0
  while (x <10) {
    x++
    suma = suma + 2
    aumentado1.push(suma)
    if (suma === x) {
      return "Se interrumpió la ejecución"
    break;
    }
   
  }     
  return aumentado1
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código
  let aumentado2 = [] 
  let suma = numero
  let x = 0
  while (x <10) {
    x++
    if (x === 5) {
      continue;
    } 
    suma = suma + 2
    aumentado2.push(suma)
    
  }     
  return aumentado2

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
