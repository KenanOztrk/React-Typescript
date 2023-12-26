import React from 'react'

const Konu2interface = () => {
 
  
  interface Obj  {
    name: string,
    age: number,
    done?: boolean 
  }

  interface SecondObj extends Obj {
    adress: string
  }

  let obj: SecondObj = { 
    name: "kenan",
    age: 43,
    adress: "xyx"
    // done: true  
  }

  // iki tane objemiz var birinci objeyi ikinci objeye extend ediyoruz
  // birinci objenin ozellikleri ikinci objeye gecti ve ikinci objede yeni bi ozellik ekledik
  // tekrar birinci objedeki ozellikleri yazmamiza gerek yok
  return (
    <>
      yas:{obj.age} adress:{obj.adress}
    </>
  )
}

export default Konu2interface