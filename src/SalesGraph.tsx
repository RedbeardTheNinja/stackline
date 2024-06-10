import React, {Component} from 'react';
import {LineChart} from "@mui/x-charts";
import {DatasetElementType} from "@mui/x-charts/models/seriesType/config";

interface SalesGraphProps {
    sales: SaleForGraph[];
}

interface SaleForGraph extends DatasetElementType<any> {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

class SalesGraph extends Component<SalesGraphProps> {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const {sales} = this.props;
        const keyToLabel: { [key: string]: string } = {
            retailSales: 'Retail Sales',
            wholesaleSales: 'Wholesale Sales',
            unitsSold: 'Units Sold',
            retailerMargin: 'Retailer Margin'
        };

        const colors: { [key: string]: string } = {
            retailSales: 'lightgray',
            wholesaleSales: 'lightgreen',
            unitsSold: 'yellow',
            retailerMargin: 'lightblue'
        };
        //kind of a hack to format the x axis correctly. The better way to fix this would be to go back through the whole app and change the types to use date instead of string or number but ran into some trouble with the graph library doing this so have this for now
        //deep copy to avoid the issue of changing this for the other components
        let salesCopy:SaleForGraph[] = JSON.parse(JSON.stringify(sales));
        const formattedSales = salesCopy.map((sale) => {
            sale.weekEnding = new Date(sale.weekEnding).getTime().toString();
            return sale;
        })
        const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
        return (
            <LineChart
                xAxis={[
                    {
                        dataKey: 'weekEnding',
                        valueFormatter: (value) => formatter.format(new Date(Number(value)))
                    },
                ]}
                series={Object.keys(keyToLabel).map((key) => ({
                    dataKey: key,
                    label: keyToLabel[key],
                    color: colors[key],
                    showMark: false,
                }))}
                dataset={formattedSales}
            />
        );
    }
}

export default SalesGraph;