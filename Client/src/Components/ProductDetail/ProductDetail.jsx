import React from 'react'
import "./productdetail.css"
import share from "../../assets/shareicons.png"
import next from "../../assets/next.png"
import laptop from "../../assets/laptop.webp"
function ProductDetail() {
    const shopname="Lenova laptop 5th gen";
    const prodname="Sameer group of companies";
    const stocks=10;
  return (
    <div className='addtocartcont_s'>
    <div className='navbar_s'><h5>navbar varum inga</h5></div>
    <div className='content_s'>
      <div className="first_100_s">
          <div className="left_s">
            <img src={laptop} alt="laptop image" className='laptop' />
          </div>
          <div className="right_s">
              <div className="share">
                <button className='btn_share_s'><img src={share} alt="share icons"  /></button>
              </div>
              <div className="storenamereview">
                <h3 className='shopname'>{prodname}</h3>
                <h1 className='prodname'>{shopname}</h1>
                <h2 className='stocks'>Stocks available:<span style={{color:"rgb(250,90,25)"}}>{stocks}</span> </h2>
                <div className="priceofferprice">
                    <h4 className='normalprice'>Rp 20000</h4>
                    <h1 className='originalprice'>Rp 10000</h1>
                    <h2 className='offer'>70% offer</h2>
                </div>
                <h2 style={{marginTop:"5%"}}>Colors available:</h2>
              <div className="colors">
                <h1 color='black'>black</h1>
                <h1 style={{color:"green"}}>green</h1>
                <h1 style={{color:"red"}}>red</h1>
              </div>
              <div className='coupen_s'>
                <div className='coupen_apply'>
                    <h4 >Apply this coupen code</h4>
                <h3 style={{color:"red",fontWeight:"bold"}}>SAMEER@786</h3></div>
                <div className="coupen_code">
                <img src={next} alt="next" />
                </div>
              </div>
              <div className="addcartorder">
                <button className='btn_cart'>Add to Cart</button>
                <button className='btn_cart'>Order Now</button>
              </div>
              </div>
              <div className="tags"></div>
          </div>
      </div>
      {/* <div className='second_100_s'>

      </div> */}
    </div>
  </div>
  )
}

export default ProductDetail
