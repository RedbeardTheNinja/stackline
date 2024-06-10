import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

interface SalesProps {
    sales: Sale[];
}

interface Sale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

class SalesTable extends Component<SalesProps> {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const {sales} = this.props;
        return (
            <DataTable className="Product-Component" value={sales} stripedRows size={"large"}
                       tableStyle={{minWidth: '50rem'}}>
                <Column field="weekEnding" sortable header="WEEK ENDING"></Column>
                <Column field="retailSales" sortable header="RETAIL SALES"></Column>
                <Column field="wholesaleSales" sortable header="WHOLESALE SALES"></Column>
                <Column field="unitsSold" sortable header="UNITS SOLD"></Column>
                <Column field="retailerMargin" sortable header="RETAILER MARGIN"></Column>
            </DataTable>
        );
    }
}

export default SalesTable;