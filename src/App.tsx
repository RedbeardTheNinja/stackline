import React from 'react';
import './App.css';
import GridLayout from "react-grid-layout";
import Header from "./Header";
import SalesTable from "./SalesTable";
import ProductDisplay from "./ProductDisplay";
import productData from "./stackline_frontend_assessment_data_2021.json"
import SalesGraph from "./SalesGraph";

function App() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
        {i: "header", x: 0, y: 0, w: 4, h: 1, static: true},
        {i: "productDisplay", x: 1, y: 0, w: 1, h: 5, static: true},
        {i: "salesTable", x: 2, y: 1, w: 3, h: 5, static: true},
        {i: "salesGraph", x: 1, y: 1, w: 3, h: 5, static: true}
    ];
    //This is where it would be better to have a fetcher or like a redux slice or something to make the data source actually dynamic
    const product = productData[0];
    const sales = product.sales;
    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
        >
            <Header key="header"/>
            <ProductDisplay key="productDisplay" image={product.image} tags={product.tags} subtitle={product.subtitle}/>
            <SalesGraph key="salesGraph" sales={sales}/>
            <SalesTable key="salesTable" sales={sales}/>
        </GridLayout>
    );
}

export default App;
