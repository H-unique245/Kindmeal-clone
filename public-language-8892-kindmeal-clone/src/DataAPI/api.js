import axios from 'axios';

const getMealData =(page)=>{
    return axios(`https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.7.php?action=deal_list&dealkeyword=&deallocation=0&login=0&nearby=0&latitude=0&longitude=0&_=1661505395439`,{
        params:{
            page:page,
        }
    } )
}
export default getMealData;