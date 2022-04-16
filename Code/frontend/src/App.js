import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";

// Products Components
import AddProduct from "./components/Product/Product_Manager/AddProduct";
import AllProducts from "./components/Product/Product_Manager/AllProducts";
import CompanyRequest from "./components/Product/User_Company/CompanyRequests";
import AllCompanyRequest from "./components/Product/User_Company/AllCompanyRequest";
import UpdateProducts from "./components/Product/Product_Manager/UpdateProducts";
import StockDetails from "./components/Product/Product_Manager/StockDetails";
import ProductBill from "./components/Product/User_Company/ProductBill";

// Ads Components
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin"
import AdminViewAds from "./components/Ads/AdminViewAds";
import AdminUpdateAds from "./components/Ads/AdminUpdateAds"

// Lab Components
import AddReport     from "./components/AddReport";
import AllReports    from "./components/AllReports";
import DeleteReport  from "./components/DeleteReport";
import EditReport    from "./components/EditReport";
import ReportDetails from "./components/ReportDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/rep"      element= {<AllReports/>}    />
        <Route path="/add"      element= {<AddReport/>}     />
        <Route path="/del"      element= {<DeleteReport/>}  />
        <Route path="/edit/:id" element= {<EditReport/>}    />
        <Route path="/rep/:id"  element= {<ReportDetails/>} />
        <Route path="/" element={<AllServices />} />

        <Route path="/productadd" element= {<AddProduct/>}/>
        <Route path="/productSee" element= {<AllProducts/>}/>
        <Route path="/companyadd" element= {<CompanyRequest/>}/>
        <Route path="/companySee" element= {<AllCompanyRequest/>}/>
        <Route path="/productUpdate/:id" element= {<UpdateProducts/>}/>
        <Route path="/stock" element= {<StockDetails/>}/>
        <Route path="/productBill" element={<ProductBill/>}/>

      
        
        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />
        <Route path="/DisplayAd" element={<DisplayAd />} />
        <Route path="/AdverLogin" element={<AdvertiserLogin />} />
        <Route path="/AdminView" element={<AdminViewAds />} />
        <Route path="/AdminUpdate" element={<AdminUpdateAds />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
