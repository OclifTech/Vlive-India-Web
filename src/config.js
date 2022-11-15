export  let masterPanelConfig ={
    apiBaseUrl:undefined
} ;


switch (window.location.host) {
    case 'localhost:3000':
        masterPanelConfig.apiBaseUrl='http://192.168.100.9:5000';
      
      break;
 
  
    default:
  
      masterPanelConfig.apiBaseUrl = 'https://api.vliveindia.in';

    
  }

  masterPanelConfig.apiBaseUrl = 'https://api.vliveindia.in' 