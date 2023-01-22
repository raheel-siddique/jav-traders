import { Col, Row } from "antd";
import React from "react";
import PageHeader from "../../commoncomponents/PageHeader";
import Footer_v1 from "../../global-components/footer";
import OwnNav from "../../global-components/OwnNav";
import Page_header from "../../global-components/page-header";


const Dealers=()=>{
    return(
        <>
        <OwnNav />
        <PageHeader pageTitle='Dealers' />
          <Row style={{marginTop:200}}>
          <h1 style={{color:'white', textAlign:'center', margin:'auto'}} className="section-title">We are Authorized Dealers of following
</h1>



          </Row>
          <Row style={{marginTop:50, marginBottom:50}}>

     <Col lg={24} xs={24}>
     <h1 style={{color:'black', fontSize:22, textAlign:'center', letterSpacing:5, backgroundColor:'silver', padding:10}} className="section-title">Platinum
        </h1>
        </Col>
     <Col lg={24} xs={24}>
     <h1 style={{color:'black', fontSize:22, textAlign:'center', letterSpacing:5, backgroundColor:'silver', padding:10}} className="section-title">Diamond
        </h1>
        </Col>

     <Col lg={24} xs={24}>
     <h1 style={{color:'black', fontSize:22, textAlign:'center', letterSpacing:5, backgroundColor:'silver', padding:10}} className="section-title">Sheikho
        </h1>
        </Col>
     <Col lg={24} xs={24}>
     <h1 style={{color:'black', fontSize:22, textAlign:'center', letterSpacing:5, backgroundColor:'silver', padding:10}} className="section-title">Amreli
        </h1>
        </Col>


          </Row>
         <Footer_v1 />
        </>
    )
}
export default Dealers