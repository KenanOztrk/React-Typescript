import React from 'react'

const Konu1 = () => {
    let name: string = "kenan"
  let age: number = 35
  let done: boolean = true
  let trial: number | string = 5 // bir degiskeni iki farkli tip de kullanabiliriz
  
  type Obj = {
    name: string,
    age: number,
    done?: boolean // ? koymamizin sebebi objemizde opsinonel olmasi
  }

  let obj: Obj = { // burda deggiskenlere tek tek tip girmemiz yerine yukarida obj type tanimladik
    name: "kenan",
    age: 43,
    // done: true  //done i ? sayesinde kullanim disi birakabildik
  }
  return (
    <div className="App">
     {name}{age}{obj.age}
    </div>
  )
}

export default Konu1