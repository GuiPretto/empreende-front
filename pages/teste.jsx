import slugify from "slugify"

const Teste = () => {
  
  return (
    <>
        <div>Testeo expla akdoiajw MNOSAKJd dawoijas !!!</div>
        <div>{slugify("Testeo expla akdoiajw MNOSAKJd ___dawoijas !_!!", {remove: /[*+~.()'"!:@]/g, lower: true})}</div>
    </>
  )
}

export default Teste
