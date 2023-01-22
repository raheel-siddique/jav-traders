import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import "./Slider.css";

class Slider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return   <div id='main_box_slider' className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
	<div className="ltn__slider-11-inner">
	  <div className="ltn__slider-11-active">
		{/* slide-item */}
		<Link to='/product-size-1' style={{color:'gray'}}>
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span> JAV</span>  Traders</h6>
					  <h1 className="slide-title animated " style={{fontSize:50}}>Making Home Extra <br /><span>Secure With </span> This Bar</h1>

					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span> Spec</span>ification</h6>

					  <div className=" animated">
					  <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    8,000 PSI (500 MpA)


			            </li>
                  <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    60,000 PSI (420 MpA)


			            </li>

                  <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Maximum Yeild Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    78,000 PSI (520 MpA)


			            </li>
              
			           
			        
			          </ul>




					  
					  </div>


					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span> Key</span>Features</h6>

<div className=" animated">
<ul style={{lineHeight:1}} className="">
 <li style={{fontSize:23}}>
Best For Reinforcement
  </li>

<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Improve Micro-Structural Properties
  </li>
 

<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Suitable For All Types Of Construction
  </li>


<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Manufactured From High Quality Billet
  </li>

 

</ul>





</div>
					  <div className="btn-wrapper animated">
						<Link to="/about" className="theme-btn-1 btn btn-effect-1">Products Sizes</Link>
						
					  </div>
					</div>
				  </div>
				  <div className="slide-item-img">
				  <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="#" />

				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		</Link>
		{/* slide-item 2*/}
		<Link to='/product-size-2' style={{color:'gray'}}>
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35, color:'black'}}><span style={{color:'purple'}}> JAV</span>  Traders</h6>
					  <h1 className="slide-title animated " style={{fontSize:50, color:'purple'}}>20% Saving In  <br /><span style={{color:"black"}}>Terms Of </span> Consumtion</h1>

					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span style={{color:'purple'}}> Spec</span>ification</h6>

					  <div className=" animated">
					  <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    83,375 PSI (575 MpA)


			            </li>
                  <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    72,500 PSI (500 MpA)


			            </li>

                
			           
			        
			          </ul>




					  
					  </div>


					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span style={{color:'purple'}}> Key</span>Features</h6>

<div className=" animated">
<ul style={{lineHeight:1}} className="">
 <li style={{fontSize:23}}>
20% Saving In Terms Of Consumption
  </li>

<li style={{fontSize:23}}>
Superior Strength For Reinforcment
  </li>
 

<li style={{fontSize:23}}>
Earthquake Resistance Bars
  </li>

  <li style={{fontSize:23}}>
Suitable For All Types Of Construction
  </li>
  <li style={{fontSize:23}}>
This Is Made By Best Quality
  </li>


<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Manufactured From High Quality Billet
  </li>

 

</ul>





</div>
					  <div className="btn-wrapper animated">
						<Link style={{backgroundColor:'purple'}} to="/about" className="theme-btn-1 btn btn-effect-1">Products Sizes</Link>
					
					  </div>
					</div>
				  </div>
				  <div className="slide-item-img">
				  <img style={{width:'100%'}} src={"/assets/img/property/iron-tmt-bar-500x500.webp"} alt="#" />

				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		</Link>
		{/* slide-item 3*/}
		<Link to='/product-size-1' style={{color:'gray'}}>

		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span style={{color:'#FABF3A'}}> JAV</span>  Traders</h6>
					  <h1 className="slide-title animated " style={{fontSize:50}}>First Time In Pakistan<br /><span style={{color:'#FABF3A'}}>Especially Designed </span> For Cpec</h1>

					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span style={{color:'#FABF3A'}}> Spec</span>ification</h6>

					  <div className=" animated">
					  <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    8,000 PSI (500 MpA)


			            </li>
                  <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    60,000 PSI (420 MpA)


			            </li>

                  <li style={{fontSize:23}}>
			              {/* <i className="flaticon-home-2" /> */}
                    Maximum Yeild Strength
			            </li>
			            <li style={{color:'black', fontSize:23}}>
			              {/* <i className="flaticon-mountain" /> */}
                    78,000 PSI (520 MpA)


			            </li>
              
			           
			        
			          </ul>




					  
					  </div>


					  <h6 className="slide-sub-title white-color--- animated" style={{fontSize:35}}><span style={{color:'#FABF3A'}}> Key</span>Features</h6>

<div className=" animated">
<ul style={{lineHeight:1}} className="">
 <li style={{fontSize:23}}>
Unique Chineese Standard Bar
  </li>

<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Improve Micro-Structural Properties
  </li>
 

<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Long Life Bar
  </li>


<li style={{fontSize:23}}>
	{/* <i className="flaticon-home-2" /> */}
Manufactured From High Quality Billet
  </li>

 

</ul>





</div>

<div className="btn-wrapper animated">
						<Link style={{backgroundColor:'#FABF3A'}} to="/about" className="theme-btn-1 btn btn-effect-1">Products Sizes</Link>
					
					  </div>
					 
					</div>
				  </div>
				  <div className="slide-item-img">
				  <img src={"/assets/img/property/iron1.webp"} alt="#" />

				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
</Link>
		{/* slide-item */}
	</div>
	  {/* slider-4-pagination */}
	  <div className="ltn__slider-11-pagination-count">
		<span className="count" />
		<span className="total" />
	  </div>
	  {/* slider-sticky-icon */}
	  <div className="slider-sticky-icon-2">
		<ul>
		  <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
		  <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
		  <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
		</ul>
	  </div>
	  {/* slider-4-img-slide-arrow */}
	  <div className="ltn__slider-11-img-slide-arrow">
		<div className="ltn__slider-11-img-slide-arrow-inner">
		  <div className="ltn__slider-11-img-slide-arrow-active">
			<div className="image-slide-item">
			<img style={{height:100}} src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="#" />


			</div>
			<div className="image-slide-item">
			<img  style={{height:100}}   src={"/assets/img/property/iron-tmt-bar-500x500.webp"} alt="#" />

			</div>
			<div className="image-slide-item">
			<img  style={{height:100}}  src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="#" />

			</div>
			<div className="image-slide-item">
			<img  style={{height:100}}  src={"/assets/img/property/iron1.webp"} alt="#" />


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

export default Slider