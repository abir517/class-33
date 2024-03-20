import axios from "axios"
import { useEffect,useState } from "react"
import { Container,Row ,Col } from "react-bootstrap"
function App() {
  let [product,setproduct] = useState([])
 let getdata = () =>{
  axios.get("https://dummyjson.com/products").then((response)=>{
    setproduct(response.data.products);
  })
 }

  useEffect(()=>{
    
    getdata()
  },[])

   console.log(product);

  
  
  return (
     <>
     <Container>
      <Row>
      {product.map((item)=>(
        <Col lg={4}>
        <div className="one">
          <h2>{item.title}</h2>
          <img className="w-100" src={item.thumbnail} alt=""  />
        <p>{item.description}</p>
        <h4>${item.price}</h4>
       
        </div>
     
        </Col>
        ))}
      </Row> */
      </Container>
    
        </>
  )
}

export default App
