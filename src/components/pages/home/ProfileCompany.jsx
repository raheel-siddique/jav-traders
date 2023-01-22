import { Col, Row } from "antd";
import React from "react";

const ProfileCompany=()=>{
    return(
        <>
        <Row style={{marginTop:100}}>
            <Col lg={2}></Col>
            <Col lg={20} xs={24}
            className='main_box_profile'
            // style={{backgroundColor:"white", padding:100}}
            >
            <h1 style={{color:'black'}} className="section-title">
                JAV Traders
</h1>
			            <p style={{textTransform:'capitalize',color:'black', fontSize:28, fontWeight:'normal'}}>Established in <span style={{color:'goldenrod'}}>1972,</span>   a company strived to be at its
foremost, a solution to individuals, local and
international businesses. the company has always
believed in staying ahead of the curve, invests and
delivers the best quality to the consumer. As such,
some of Pakistan’s most iconic landmarks have been
strengthened with JAV Traders</p>

<p style={{textTransform:'capitalize',color:'black', fontSize:28, fontWeight:'normal'}}> <span style={{color:'goldenrod'}}>Asif Iqbal </span> 
 meet the <span style={{color:'goldenrod'}}>founder </span> 
with a family background of iron and steel operating, in company with spending 5 years
synchronizing with the market, learning the world of stockholders & suppliers, Ms Asifa initiated
the idea of JAV Traders with <span style={{color:'goldenrod'}}>Mr Muhammad iqbal </span>  
the process of launching the startup took Hard work, strong determination to 
succeed and that's
what makes it easy to see why our customers become our life-long partners
</p>
<p style={{textTransform:'capitalize',color:'black', fontSize:28, fontWeight:'normal'}}> 
<span style={{color:'goldenrod'}}>Mr Muhammad iqbal </span> 
Meet the co-founder
a man known for his spectacular business mind with great knowledge
who started a business together generally from the beginning with a great power of investing
it's not always easy to find cofounders that are right for the business model or that will truly aid
in the company's success.
But here the journey of JAV Traders had the best personalities bound to Hardwork with
the aim of Building a company that insists on surviving the quality
</p>
            </Col>
            <Col lg={2}></Col>

        </Row>
        </>
    )
}
export default ProfileCompany