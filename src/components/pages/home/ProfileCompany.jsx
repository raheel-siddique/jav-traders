import { Col, Row } from "antd";
import React from "react";

const ProfileCompany=()=>{
    return(
        <>
        <Row >
            <Col lg={2}></Col>
            <Col lg={20} xs={24}
            className='main_box_profile'
            // style={{backgroundColor:"white", padding:100}}
            >
            <h1 style={{color:'black'}} className="section-title">
                Jav Traders
</h1>
			            <p style={{color:'gray', fontSize:23}}>Established in 1972, a company strived to be at its
foremost, a solution to individuals, local and
international businesses. the company has always
believed in staying ahead of the curve, invests and
delivers the best quality to the consumer. As such,
some of Pakistan’s most iconic landmarks have been
strengthened with noor and company</p>
            </Col>
            <Col lg={2}></Col>

        </Row>
        </>
    )
}
export default ProfileCompany