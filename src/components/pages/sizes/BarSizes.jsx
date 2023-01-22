import { Space, Table, Tag } from 'antd';
import Footer_v1 from '../../global-components/footer';
import OwnNav from '../../global-components/OwnNav';
const columns1 = [
  {
    title: 'Bar #',
    dataIndex: 'bar',
    key: 'bar',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Size In Inch ',
    dataIndex: 'sizeininch',
    key: 'sizeininch',
  },
  {
    title: 'Bar Size In (mm)',
    dataIndex: 'barsizemm',
    key: 'barsizemm',
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

const data1 = [
  {
    key: '1',
    bar: '# 3',
    sizeininch: "3/8",
    barsizemm: '0.375 (9.5)',
    areainmm:'0.11 (71)',
    weightkgft:"0.170",
    elongation: '14',

  },
  {
    key: '2',
    bar: '# 4',
    sizeininch: "1/2",
    barsizemm: '0.500 (12.7)',
    areainmm:'0.20 (129)',
    weightkgft:"0.303",
    elongation: '14',

  },
  {
    key: '3',
    bar: '# 5',
    sizeininch: "5/8",
    barsizemm: '0.625 (15.9)',
    areainmm:'0.31 (199)',
    weightkgft:"0.473",
    elongation: '14',

  },

  {
    key: '4',
    bar: '# 6',
    sizeininch: "3/4",
    barsizemm: '0.750 (19.1)',
    areainmm:'0.44 (284)',
    weightkgft:"0.681",
    elongation: '14',

  },
  {
    key: '5',
    bar: '# 7',
    sizeininch: "7/8",
    barsizemm: '0.875 (22.0)',
    areainmm:'0.60 (387)',
    weightkgft:"0.927",
    elongation: '14',

  },

  {
    key: '6',
    bar: '# 8',
    sizeininch: "1",
    barsizemm: '1.000 (25.4)',
    areainmm:'0.60 (387)',
    weightkgft:"0.79 (510)",
    elongation: '14',

  },
  {
    key: '7',
    bar: '# 9',
    sizeininch: "1-1/8",
    barsizemm: '1.28 (28.7)',
    areainmm:'1.00 (645)',
    weightkgft:"1.542",
    elongation: '12',

  },

  {
    key: '8',
    bar: '# 10',
    sizeininch: "1-1/4",
    barsizemm: '1.270 (32.3)',
    areainmm:'1.27 (819)',
    weightkgft:"1.951",
    elongation: '12',

  },

  {
    key: '9',
    bar: '# 11',
    sizeininch: "1-3/8",
    barsizemm: '1.410 (35.8)',
    areainmm:'1.56 (1006)',
    weightkgft:"2.409",
    elongation: '12',

  },
];


const column2 = [
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
const data2 = [
    {
      key: '1',
      barsizemm: '10',
      areainmm:'78.57 (71)',
      weightkgft:"0.187",
      elongation: '14',
  
    },
    {
        key: '2',
        barsizemm: '12',
        areainmm:'113.4',
        weightkgft:"0.27",
        elongation: '14',
    
      },
      {
        key: '3',
        barsizemm: '20',
        areainmm:'314.7',
        weightkgft:"0.751",
        elongation: '14',
    
      },

      {
        key: '4',
        barsizemm: '25',
        areainmm:'491',
        weightkgft:"1.175",
        elongation: '14',
    
      },
      {
        key: '5',
        barsizemm: '28',
        areainmm:'616',
        weightkgft:"1.473",
        elongation: '14',
    
      },
      {
        key: '6',
        barsizemm: '32',
        areainmm:'804',
        weightkgft:"1.473",
        elongation: '12',
    
      },
      {
        key: '7',
        barsizemm: '40',
        areainmm:'125.47',
        weightkgft:"3.007",
        elongation: '12',
    
      },

      {
        key: '7',
        barsizemm: '40',
        areainmm:'125.47',
        weightkgft:"3.007",
        elongation: '12',
    
      },
  ];
const BarSizes = () => {
    return(
        <>
        <OwnNav />
        <br /><br />
        <br /><br />

        <br /><br />

        <br /><br />

<Table style={{marginLeft:100, marginRight:100}} columns={columns1} dataSource={data1} pagination={false} />
<br /><br />
<Table style={{marginLeft:100, marginRight:100}} columns={column2} dataSource={data2} pagination={false} />
<br /><br />
        <Footer_v1 />
        </>
    )
}

export default BarSizes;