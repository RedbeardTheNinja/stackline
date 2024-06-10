import React, {Component} from 'react';

interface ProductProperties {
    image: string;
    subtitle: string;
    tags: string[];
}

class ProductDisplay extends Component<ProductProperties> {
    render() {
        const { image, subtitle, tags } = this.props;
        return (
            <div className="Product-Component">
                <img src={image}/>
                <p>{subtitle}</p>
                <div/>
                    {tags.map((tag) => (
                        <div key={tag}><p>{tag}</p></div>
                    ))}
                <div/>
            </div>
        );
    }
}

export default ProductDisplay;