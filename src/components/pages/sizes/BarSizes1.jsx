import { Space, Table, Tag } from 'antd';
import Footer_v1 from '../../global-components/footer';
import OwnNav from '../../global-components/OwnNav';
const columns4 = [
  
    {
        title: 'Bar Size in (mm)',
        dataIndex: 'barsizemm',
        key: 'barsizemm',
        // render: (text) => <a>{text}</a>,
      },
    
      {
        title: 'Area In (mm)',
        dataIndex: 'areainmm',
        key: 'areainmm',
      },
      {
        title: 'Weight (kg/ft)',
        dataIndex: 'weightkgft',
        key: 'weightkgft',
      },
      {
        title: 'Elongation',
        dataIndex: 'elongation',
        key: 'elongation',
      },

];

const data4 = [
    {
        key: '1',
        barsizemm: '10',
        areainmm:'78.5',
        weightkgft:"0.188",
        elongation: '12.50',
    
      },
      {
          key: '2',
          barsizemm: '12',
          areainmm:'113',
          weightkgft:"0.271",
          elongation: '12.50',
      
        },
        {
          key: '3',
          barsizemm: '16',
          areainmm:'201',
          weightkgft:"0.481",
          elongation: '12.50',
      
        },
  
        {
          key: '4',
          barsizemm: '20',
          areainmm:'314',
          weightkgft:"0.752",
          elongation: '12.50',
      
        },
        {
          key: '5',
          barsizemm: '25',
          areainmm:'491',
          weightkgft:"1.175",
          elongation: '12.50',
      
        },
        {
          key: '6',
          barsizemm: '32',
          areainmm:'804',
          weightkgft:"1.925",
          elongation: '12.50',
      
        },
        {
          key: '7',
          barsizemm: '40',
          areainmm:'1257',
          weightkgft:"3.007",
          elongation: '12.50',
      
        },
  
        {
          key: '7',
          barsizemm: '40',
          areainmm:'1257',
          weightkgft:"3.008",
          elongation: '12.50',
      
        },
];


const column5 = [
    {
      title: 'Bar Size in (mm)',
      dataIndex: 'barsizemm',
      key: 'barsizemm',
      // render: (text) => <a>{text}</a>,
    },
  
    {
      title: 'Area In (mm)',
      dataIndex: 'areainmm',
      key: 'areainmm',
    },
    {
      title: 'Weight (kg/ft)',
      dataIndex: 'weightkgft',
      key: 'weightkgft',
    },
    {
      title: 'Elongation',
      dataIndex: 'elongation',
      key: 'elongation',
    },
  
  ];
const data5 = [
    {
      key: '1',
      barsizemm: '9.5',
      areainmm:'0.11 (51)',
      weightkgft:"0.170",
      elongation: '12.50',
  
    },
    {
        key: '2',
        barsizemm: '19',
        areainmm:'0.44 (284)',
        weightkgft:"0.681",
        elongation: '12.50',
    
      },
      {
        key: '3',
        barsizemm: '22',
        areainmm:'0.60(387)',
        weightkgft:"0.909",
        elongation: '12.50',
    
      },

      {
        key: '4',
        barsizemm: '28',
        areainmm:'0.96(615)',
        weightkgft:"1.96",
        elongation: '12.50',
    
      },
      {
        key: '5',
        barsizemm: '28',
        areainmm:'616',
        weightkgft:"1.473",
        elongation: '12.50',
    
      },
      
  ];
const BarSizes1 = () => {
    return(
        <>
        <OwnNav />
        <br /><br />
        <br /><br />

        <br /><br />

        <br /><br />

<Table style={{marginLeft:100, marginRight:100}} columns={columns4} dataSource={data4} pagination={false} />
<br /><br />
<Table style={{marginLeft:100, marginRight:100}} columns={column5} dataSource={data5} pagination={false} />
<br /><br />
        <Footer_v1 />
        </>
    )
}

export default BarSizes1;