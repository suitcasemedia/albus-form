import React from 'react';
import Select from 'react-select';

const influencerOptions = [
  { value: 'kristen leanne', label: 'Kristen Leanne' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const brandOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

const channelsOptions = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'twitter', label: 'Twitter' }
  ];

const productCategoryOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

class CampaignFilters extends React.Component {
  state = {
    selectedInfluencerOption: null,
    selectedBrandOption: null,
    selectedChannelsOption: null,
    selectedProductCategoryOption: null,
  }
  handleInfluencerChange = (selectedOption) => {
    this.setState({ selectedInfluencerOption :selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  handleBrandChange = (selectedOption) => {
    this.setState({ selectedBrandOption :selectedOption  });
    console.log(`Option selected:`, selectedOption);
  }
  handleChannelsChange = (selectedOption) => {
    this.setState({ selecteChannelsdOption :selectedOption  });
    console.log(`Option selected:`, selectedOption);
  }
  handleProductCategoryChange = (selectedOption) => {
    this.setState({ selectedProductCategoryOption :selectedOption  });
    console.log(`Option selected:`, selectedOption);
  }
  

  render() {

    const customStyles = {
      
        control: (provided,) => ({
          // none of react-select's styles are passed to <Control />
         ...provided,
         color: 'black',
        }),
       
      }
    const { selectedInfluencerOption ,  selectedBrandOption, selectedChannelsOption , selectedProductCategoryOption } = this.state;

    return (
        <div>
            <div className="mb-2">
                <Select
                    placeholder={"Influencer"}
                    name="chocolate"
                    value={selectedInfluencerOption}
                    onChange={this.handleInfluencerChange}
                    options={influencerOptions}
                    styles={customStyles}
                />
            
            </div>
            <div className="mb-2">
            
                <Select
                    placeholder={"Brand"}
                    name="influencer"
                    value={selectedBrandOption}
                    onChange={this.handleBrandChange}
                    options={brandOptions}
                />
            </div>
            <div className="mb-2">
            
                <Select
                    placeholder={"Channels"}
                    name="influencer"
                    value={selectedChannelsOption}
                    onChange={this.handleChannelsChange}
                    options={channelsOptions}
                />
            </div>
            <div className="mb-2">
            

            <Select
                placeholder={"Product Category"}
                name="influencer"
                value={selectedProductCategoryOption}
                onChange={this.handleProductCategoryChange}
                options={productCategoryOptions}
             />
             </div>
        </div>
        
    );
  }
}

export default CampaignFilters;