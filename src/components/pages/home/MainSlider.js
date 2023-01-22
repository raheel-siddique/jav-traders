import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Slider from './Slider';

class Slider extends Component {

    render() {

 

    return  <div id='main_box_slider' style={{backgroundColor:'white', position:'relative', top:50}} className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
			  <div className="ltn__slider-11-inner" >
			    <div className="ltn__slider-11-active" >
			      {/* slide-item */}
			      {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner"> */}
			            <Row className='main_row_for_banner' style={{display:'flex'}}>
							<Col lg={2} xs={1}></Col>
    <Col lg={6} xs={20} style={{paddingTop:300}}>

	<div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                  
			                   
                          <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" style={{color:'red'}} /></span> Jav Traders</h6>
                          <div className="slide-brief animated">
			                      <p style={{fontSize:22}}>Making Homes Extra Secures with This Bar</p>
			                    </div>
                          <h1 className="slide-title animated " >Specification</h1>
			                    <div className="slide-brief animated">
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
			                    
                            <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    8,000 PSI (500 MpA)


			            </li>
                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    60,000 PSI (420 MpA)


			            </li>

                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Maximum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    78,000 PSI (520 MpA)


			            </li>
              
			           
			        
			          </ul>
                          </div>
			                    <div className="btn-wrapper animated">
			                      <Link style={{backgroundColor:"#FABF3A", color:'black'}} to="/services" className="theme-btn-1 btn btn-effect-1">Our Services</Link>
			                     
			                    </div>
			                  </div>
			                </div>
							</Col>

                    			          <Col lg={16} xs={24}>
										  {/* <div className="slide-item-img"> */}
			                  <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="#" style={{width:"100%"}} />
			                {/* </div> */}
										  </Col>   

			              {/* </div> */}
						</Row>
						{/* </div> */}
			            {/* </div> */}
			          {/* </div> */}
			        {/* </div> */}
			      {/* </div> */}
			      {/* slide-item */}
				  <Row style={{display:'flex', height:'100vh'}}>
							<Col lg={2} xs={2}></Col>
    <Col lg={6} xs={20} style={{paddingTop:300}}>

	<div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                  
			                   
                          <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Jav Traders</h6>
                          <div className="slide-brief animated">
			                      <p>Making Homes Extra Secures with This Bar</p>
			                    </div>
                          <h1 className="slide-title animated ">Specification</h1>
			                    <div className="slide-brief animated">
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
			                    
                            <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
						  83,375 PSI (575 MpA)


			            </li>
                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
						  72,500 PSI (420 MpA)


			            </li>

        
			        
			          </ul>
                          </div>
			                    <div className="btn-wrapper animated">
			                      <Link style={{backgroundColor:"#FABF3A", color:'black'}} to="/services" className="theme-btn-1 btn btn-effect-1">Our Services</Link>
			                     
			                    </div>
			                  </div>
			                </div>
							</Col>

                    			          <Col lg={16} xs={24}>
										  {/* <div className="slide-item-img"> */}
			                  <img src={"assets/img/property/iron1.webp"} alt="#" style={{width:"100%"}} />
			                {/* </div> */}
										  </Col>   

			              {/* </div> */}
						</Row>
			      {/* slide-item */}
			
			      {/* slide-item */}
			  
			    </div>
			    {/* slider-4-pagination */}
			    <div className="ltn__slider-11-pagination-count">
			      <span className="count" />
			      <span className="total" />
			    </div>
			    {/* slider-sticky-icon */}
			    {/* <div className="slider-sticky-icon-2">
			      <ul>
			        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
			        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
			        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
			      </ul>
			    </div> */}
			    {/* slider-4-img-slide-arrow */}
			    <div className="ltn__slider-11-img-slide-arrow">
			      <div className="ltn__slider-11-img-slide-arrow-inner"   >
			        <div className="ltn__slider-11-img-slide-arrow-active">
			          <div className="image-slide-item">
			            <img src={"/assets/img/property/41b2uNRaOWL.jpg"} 
                  style={{height:100, width:100, border:'2px solid gold'}}
                  
                  alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={"assets/img/property/iron1.webp"} 
                                  style={{height:100, width:100, border:'2px solid gold'}}


                //   style={{height:1100, width:1100, position:'relative', left:200}}

                                //   style={{height:100, width:100}}

        
                  
                  alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="Flower Image"
                                   style={{height:100, width:100, border:'2px solid gold'}}

						
						 />
			          </div>
			          <div className="image-slide-item">
			            <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="Flower Image"
                                   style={{height:100, width:100, border:'2px solid gold'}}

						
						/>
			          </div>
			        </div>
			        {/* slider-4-slide-item-count */}
			        <div className="ltn__slider-11-slide-item-count">
			          <span className="count" />
			          <span className="total" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Slider;
