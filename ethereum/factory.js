import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9BC852F518f76A5daaece30d22ed3e19A7ef08c1'
);

export default instance;
