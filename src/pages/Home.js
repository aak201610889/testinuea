import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import LeftLayout from "../layout/LeftLayout";
import MainControl from "../components/MainControl";
function Home() {
    const { error, isPending, data,numberOfData } = useFetch('https://fakestoreapi.com/products')
const [products, setproducts] = useState([])
const {t}=useTranslation()
useEffect(() => {
    setproducts(data)
}, [data])



  
  return (
    <div className="pt-[100px] bg-gradient-to-b from-[#1b1c24] via-[#3e4159] to-[#1b1c24]  h-[100vh] ">
      <div className="w-[80%] m-auto bg-[#181920] flex py-[1%]  justify-between">
      <LeftLayout/>
      <MainControl/>
      </div>
    </div>
  )
}

export default Home
{/* { error && <div>{ error }</div> }
{ isPending && <div>Loading...</div> }
{ products && <div  >
{products.map(item=>(<div>
   {item.title.substr(0,10)}...
</div>))}
</div> } */}