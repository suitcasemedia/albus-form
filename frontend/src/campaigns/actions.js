import { fetchCampaigns, createCampaign } from "./../utils/api";
import { NEW_CAMPAIGN } from "../create-campaign/actions";

export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS";
//export const NEW_CAMPAIGN = "NEW_CAMPAIGN" ;
export const EDIT_CAMPAIGN = "EDIT_CAMPAIGN";

export const receiveCampaigns = campaigns => {
  console.log("hello campaigns", campaigns);
  return {
    type: RECEIVE_CAMPAIGNS,
    campaigns
  };
};

export const fetchMyCampaigns = () => dispatch => {
  console.log("call fetch");
  fetchCampaigns().then(campaigns => dispatch(receiveCampaigns(campaigns)));
  console.log("call fetched");
};



export const newCampaign = () => ({
  //type: NEW_CAMPAIGN,
  type: NEW_CAMPAIGN
});

// export const createMyCampaign = () => dispatch => (
// //   albusAPIUtil
//    createCampaign()
//   .then(() => dispatch(newCampaign()))
//  // .then(()=> callback())
// )

export const editCampaignDispatch = (values, id) => ({
  type: EDIT_CAMPAIGN,
  values,
  id
});
