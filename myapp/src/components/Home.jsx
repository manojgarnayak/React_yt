import { useEffect, useState } from "react"
//import Products from "./Products"
import Coin from "./Coin"
import axios from 'axios'
import Loader from "./Loader"

const Home = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchAllCoins = async () => {
        const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr")
        console.log(data);
        setCoins(data)
        setLoading(false)
      }
      fetchAllCoins();
    }, [])

  return (
    <div className="home">
          {
          loading ? <Loader/> : coins.map((i) => (
              <Coin name={i.name} symbol={i.symbol} key={i.id} imgSRC={i.image} price={i.current_price}
              />
            ))
        }
    </div>
  )
}

export default Home