import { v4 } from "node-uuid";
const api = "https://api.staging.albus.co";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  "Allow-Access-Control-Origin": "*"
};
// get all campaigns
export const fetchCampaigns = () => {
  console.log("apis");
  fetch(`${api}/campaigns/`, { headers })
    .then(res => {
      console.log("hello", JSON.stringify(res));
      return res;
    })
    .catch(data => console.log("catch ", data));
};

// get one specific campaign
export const fetchCampaign = id =>
  fetch(`${api}/campaigns/${id}`, { headers }).then(res => res.json());

//  Get all influencers belonging to a campaign
export const fetchCampaignInfluencers = campaignId =>
  fetch(`${api}/campaigns/campaignId/influencers/`, { headers }).then(res =>
    res.json()
  );

// To add in influencer to a campaign
export const addInfluencerToCampaign = campaignId =>
  fetch(`${api}/campaigns/${campaignId}/influencers`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: campaignId
    })
  }).then(res => res.json());

export const createCampaign = () =>
  fetch(`${api}/campaigns/`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  }).then(res => res.json());

export const editCampiagn = (campaignId, values) =>
  fetch(`${api}/posts/${campaignId}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      values
    })
  }); //.then(res => res.json())
