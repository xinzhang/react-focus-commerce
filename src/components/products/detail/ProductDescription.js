import React from 'react';

class ProductDescription extends React.Component {
    render() {
      return (
        <div className="tab-pane active" id="tab-description">
            <div className="cpt_product_description ">
                <p> <strong>More room to move.</strong></p>
                <p> With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.</p>
                <p> <strong>Cover Flow.</strong></p>
                <p> Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list.</p>
                <p> <strong>Enhanced interface.</strong></p>
                <p> Experience a whole new way to browse and view your music and video.</p>
                <p> <strong>Sleeker design.</strong></p>
                <p> Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polished stainless steel enclosure with rounded edges.</p>
            </div>
        </div>
      );
    }
}

export default ProductDescription;
