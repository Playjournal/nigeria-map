// Number is the key, so it should include no duplicates.
// Only use the Total field when activity amounts are not available.
// Amounts and totals use a comma as a thousands separator, and do not include a dollar sign.
// Dates should all be formatted as yyyy-mm-dd.
// 'sector' should match a 'code' in sectors.js.
// 'Partner' should match a Partner_Code in partners.js.
// Each 'state' must match an 'OFDA_Name' in states.js

export default [{
    Number: '1',
    Partner_Code: 'PTR1',
    Start_Date: '2023-06-01',
    End_Date: '2025-05-31',
    NCE_Date: '',
    Total: 29000000,
    Summary: '',
    activities: [{
        sector: 'ERMS',
        amount: 303610,
        state: ['Borno'],
        lgas: ['Jere', 'Maiduguri', 'Monguno']
      },
      {
        sector: 'WASH',
        amount: 4249292,
        state: ['Borno', 'Yobe'],
        lgas: ['Jere', 'Konduga', 'Maiduguri', 'Monguno', 'Magumeri', 'Nganzai', 'Gujba']
      },
      {
        sector: 'FOOD',
        amount: 18571900,
        state: ['Borno'],
        lgas: ['Jere', 'Maiduguri', 'Monguno', 'Magumeri', 'Nganzai']
      },
      {
        sector: 'HLTH',
        amount: 4279131,
        state: ['Borno', 'Yobe'],
        lgas: ['Jere', 'Konduga', 'Maiduguri', 'Monguno', 'Gujba']
      },
      {
        sector: 'NUTR',
        amount: 1596067,
        state: ['Borno', 'Yobe'],
        lgas: ['Jere', 'Konduga', 'Maiduguri', 'Monguno', 'Gujba']
      }
    ]
  },
  {
    Number: '2',
    Partner_Code: 'PTR1',
    Start_Date: '2022-08-01',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 1167093,
    Summary: '',
    activities: [{
        sector: 'ERMS',
        amount: 61579,
        state: ['Borno'],
        lgas: ['Jere']
      },
      {
        sector: 'HLTH',
        amount: 182938,
        state: ['Borno'],
        lgas: ['Jere', 'Magumeri']
      },
      {
        sector: 'WASH',
        amount: 922576,
        state: ['Borno'],
        lgas: ['Jere', 'Magumeri']
      }
    ]
  },
  {
    Number: '3',
    Partner_Code: 'PTR1',
    Start_Date: '2022-06-10',
    End_Date: '2023-06-09',
    NCE_Date: '',
    Total: 4397696,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 4397696,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '4',
    Partner_Code: 'PTR2',
    Start_Date: '2023-04-15',
    End_Date: '2025-04-14',
    NCE_Date: '',
    Total: 2050000,
    Summary: '',
    activities: [{
     sector: 'HCIMA',
     amount: 710549,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ''
    },
    {
     sector: 'S&S',
     amount: 524312,
     state: ['Borno'],
     lgas: ['Dikwa', 'Monguno']
    },
    {
     sector: 'WASH',
     amount: 440800,
     state: ['Borno'],
     lgas: ['Dikwa', 'Monguno']
    },
    {
     sector: 'PROT',
     amount: 374339,
     state: ['Borno'],
     lgas: ['Dikwa', 'Monguno']
    }]
  },
  {
    Number: '5',
    Partner_Code: 'PTR3',
    Start_Date: '2022-07-01',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 3500000,
    Summary: '',
    activities: [{
     sector: 'S&S',
     amount: 1620607,
     state: ['Borno'],
     lgas: ['Gubio', 'Jere', 'Maiduguri', 'Kaga', 'Konduga', 'Magumeri']
    },
    {
     sector: 'WASH',
     amount: 1879393,
     state: ['Borno'],
     lgas: ['Gubio', 'Jere', 'Maiduguri', 'Kaga', 'Konduga', 'Magumeri']
    }]
  },
  {
    Number: '6',
    Partner_Code: 'PTR3',
    Start_Date: '2022-08-01',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 1200000,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 452625,
     state: ['Yobe'],
     lgas: ['Damaturu', 'Potiskum', 'Gujba']
    },
    {
     sector: 'WASH',
     amount: 747375,
     state: ['Yobe'],
     lgas: ['Damaturu', 'Potiskum', 'Gujba']
    }]
  },
  {
    Number: '7',
    Partner_Code: 'PTR4',
    Start_Date: '2022-07-01',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 2000000,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 1051553,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Jere', 'Damboa']
    },
    {
     sector: 'NUTR',
     amount: 363829,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Jere', 'Damboa']
    },
    {
     sector: 'PROT',
     amount: 584618,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Jere', 'Damboa']
    }]
  },
  {
    Number: '8',
    Partner_Code: 'PTR5',
    Start_Date: '2019-08-07',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 12000000,
    Summary: '',
    activities: [{
     sector: 'PROT',
     amount: 1857332,
     state: ['Borno'],
     lgas: ['Jere', 'Mafa', 'Dikwa', 'Ngala', 'Konduga', 'Bama', 'Michika', 'Madagali', 'Gwoza', 'Monguno', 'Mobbar']
    },
    {
     sector: 'S&S',
     amount: 4570857,
     state: ['Borno'],
     lgas: ['Bama', 'Gwoza', 'Ngala', 'Maiduguri', 'Jere', 'Konduga', 'Mafa', 'Monguno', 'Magumeri', 'Dikwa', 'Kala/Balge', 'Michika', 'Gombi', 'Madagali', 'Chibok']
    },
    {
     sector: 'WASH',
     amount: 5571811,
     state: ['Borno', 'Adamawa'],
     lgas: ['Bama', 'Gwoza', 'Ngala', 'Maiduguri', 'Jere', 'Konduga', 'Mafa', 'Monguno', 'Magumeri', 'Dikwa', 'Kala/Balge', 'Askira/Uba', 'Chikok', 'Madagali', 'Michika', 'Gombi', 'Mubi North', 'Mubi South']
    }]
  },
  {
    Number: '9',
    Partner_Code: 'PTR5',
    Start_Date: '2022-07-13',
    End_Date: '2023-07-12',
    NCE_Date: '',
    Total: 4300000,
    Summary: '',
    activities: [{
     sector: 'WASH',
     amount: 1867005,
     state: ['Adamawa', 'Borno'],
     lgas: ['Mubi North', 'Mubi South', 'Yola North', 'Yola South', 'Michika', 'Madagali', 'Gwoza', 'Pulka', 'Dikwa']
    },
    {
     sector: 'PROT',
     amount: 411827,
     state: ['Adamawa', 'Borno'],
     lgas: ['Mubi North', 'Mubi South', 'Yola North', 'Yola South', 'Michika', 'Madagali', 'Gwoza', 'Pulka', 'Dikwa']
    },
    {
     sector: 'HLTH',
     amount: 1898897,
     state: ['Adamawa', 'Borno'],
     lgas: ['Mubi North', 'Mubi South', 'Yola North', 'Yola South', 'Michika', 'Madagali', 'Gwoza', 'Pulka', 'Dikwa']
    },
    {
     sector: 'LOGS',
     amount: 122271,
     state: ['Adamawa', 'Borno'],
     lgas: ['Mubi North', 'Mubi South', 'Yola North', 'Yola South', 'Michika', 'Madagali', 'Gwoza', 'Pulka', 'Dikwa']
    }]
  },
  {
    Number: '10',
    Partner_Code: 'PTR5',
    Start_Date: '2023-03-05',
    End_Date: '2025-03-04',
    NCE_Date: '',
    Total: 10400000,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 6323065,
     state: ['Adamawa', 'Borno'],
     lgas: ['Madagali', 'Michika', 'Jere', 'Maiduguri']
    },
    {
     sector: 'PROT',
     amount: 1107998,
     state: ['Adamawa', 'Borno'],
     lgas: ['Madagali', 'Michika', 'Askira/Uba', 'Bama', 'Chibok', 'Dikwa', 'Gwoza', 'Jere', 'Konduga', 'Maiduguri', 'Mobbar', 'Monguno', 'Ngala']
    },
    {
     sector: 'S&S',
     amount: 1198829,
     state: ['Adamawa', 'Borno'],
     lgas: ['Madagali', 'Michika', 'Mubi North', 'Mubi South', 'Bama', 'Chibok', 'Dikwa', 'Gwoza', 'Ngala']
    },
    {
     sector: 'WASH',
     amount: 1770107,
     state: ['Adamawa', 'Borno'],
     lgas: ['Madagali', 'Michika', 'Mubi North', 'Mubi South', 'Bama']
    }]
  },
  {
    Number: '11',
    Partner_Code: 'PTR6',
    Start_Date: '2023-01-21',
    End_Date: '2023-12-31',
    NCE_Date: '',
    Total: 10000000,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 3023715,
     state: ['Borno'],
     lgas: ['Bama', 'Mobbar', 'Ngala']
    },
    {
     sector: 'PROT',
     amount: 2604885,
     state: ['Borno'],
     lgas: ['Bama', 'Mobbar', 'Ngala']
    },
    {
     sector: 'WASH',
     amount: 2207624,
     state: ['Borno'],
     lgas: ['Bama', 'Mobbar', 'Ngala']
    },
    {
     sector: 'NUTR',
     amount: 2163776,
     state: ['Borno'],
     lgas: ['Bama', 'Mobbar', 'Ngala']
    }]
  },
  {
    Number: '12',
    Partner_Code: 'PTR6',
    Start_Date: '2022-08-01',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 2579583,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 1250582,
     state: ['Borno'],
     lgas: ['Bama', 'Dikwa', 'Ngala']
    },
    {
     sector: 'WASH',
     amount: 1329001,
     state: ['Borno'],
     lgas: ['Bama', 'Ngala']
    }]
  },
  {
    Number: '13',
    Partner_Code: 'PTR7',
    Start_Date: '2019-07-01',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 6750000,
    Summary: '',
    activities: [{
     sector: 'NUTR',
     amount: 2705570,
     state: ['Borno'],
     lgas: ['Damboa', 'Maiduguri', 'Jere', 'Konduga']
    },
    {
     sector: 'WASH',
     amount: 2491788,
     state: ['Borno'],
     lgas: ['Damboa']
    },
    {
     sector: 'PROT',
     amount: 1552642,
     state: ['Borno'],
     lgas: ['Damboa', 'Maiduguri']
    }]
  },
  {
    Number: '14',
    Partner_Code: 'PTR7',
    Start_Date: '2022-06-15',
    End_Date: '2023-06-14',
    NCE_Date: '',
    Total: 2033282,
    Summary: '',
    activities: [{
     sector: 'WASH',
     amount: 1538362,
     state: ['Borno'],
     lgas: ['Damboa']
    },
    {
     sector: 'HLTH',
     amount: 147106,
     state: ['Borno'],
     lgas: ['Damboa']
    },
    {
     sector: 'PROT',
     amount: 347814,
     state: ['Borno'],
     lgas: ['Damboa']
    }]
  },
  {
    Number: '15',
    Partner_Code: 'PTR8',
    Start_Date: '2019-10-01',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 3082090,
    Summary: '',
    activities: [{
     sector: 'HCIMA',
     amount: 3082090,
     state: ['Borno'],
     lgas: ''
    }]
  },
  {
    Number: '16',
    Partner_Code: 'PTR9',
    Start_Date: '2022-07-01',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 1000000,
    Summary: '',
    activities: [{
     sector: 'HCIMA',
     amount: 1000000,
     state: ['Adamawa', 'Borno', 'Yobe', 'Gombe'],
     lgas: ''
    }]
  },
  {
    Number: '17',
    Partner_Code: 'PTR10',
    Start_Date: '2019-09-14',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 7500380,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 2096907,
     state: ['Borno'],
     lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
    },
    {
     sector: 'NUTR',
     amount: 1937729,
     state: ['Borno'],
     lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
    },
    {
     sector: 'WASH',
     amount: 1164411,
     state: ['Borno'],
     lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
    },
    {
     sector: 'PROT',
     amount: 2301333,
     state: ['Borno'],
     lgas: ['Ngala', 'Bama', 'Dikwa', 'Magumeri']
    }]
  },
  {
    Number: '18',
    Partner_Code: 'PTR10',
    Start_Date: '2022-07-27',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 1691470,
    Summary: '',
    activities: [{
     sector: 'WASH',
     amount: 1090252,
     state: ['Borno'],
     lgas: ['Bama']
    },
    {
     sector: 'HLTH',
     amount: 364767.2,
     state: ['Borno'],
     lgas: ['Bama']
    },
    {
     sector: 'PROT',
     amount: 140538.3,
     state: ['Borno'],
     lgas: ['Bama']
    },
    {
     sector: 'ERMS',
     amount: 95912.21,
     state: ['Borno'],
     lgas: ['Bama']
    }]
  },
  {
    Number: '19',
    Partner_Code: 'PTR11',
    Start_Date: '2019-10-01',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 23350000,
    Summary: '',
    activities: [{
     sector: 'HCIMA',
     amount: 5466775,
     state: ['Adamawa', 'Bauchi State', 'Borno', 'Gombe State', 'Tarabe', 'Yobe'],
     lgas: ''
    },
    {
     sector: 'S&S',
     amount: 13285181,
     state: ['Adamawa', 'Bauchi State', 'Borno', 'Gombe State', 'Tarabe', 'Yobe'],
     lgas: ''
    },
    {
     sector: 'PROT',
     amount: 2063287,
     state: ['Adamawa', 'Bauchi State', 'Borno', 'Gombe State', 'Tarabe', 'Yobe'],
     lgas: ''
    },
    {
     sector: 'WASH',
     amount: 2534757,
     state: ['Adamawa', 'Bauchi State', 'Borno', 'Gombe State', 'Tarabe', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '20',
    Partner_Code: 'PTR11',
    Start_Date: '2022-06-19',
    End_Date: '2023-09-18',
    NCE_Date: '',
    Total: 6220000,
    Summary: '',
    activities: [{
     sector: 'WASH',
     amount: 6220000,
     state: ['Borno'],
     lgas: ['Konduga', 'Maiduguri', 'Mobbar']
    }]
  },
  {
    Number: '21',
    Partner_Code: 'PTR12',
    Start_Date: '2023-04-01',
    End_Date: '2025-03-31',
    NCE_Date: '',
    Total: 8000000,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 2509879,
     state: ['Borno', 'Yobe'],
     lgas: ['Gwoza', 'Jere', 'Maiduguri', 'Monguno', 'Damaturu', 'Gujba']
    },
    {
     sector: 'NUTR',
     amount: 2276162,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Michika', 'Jere', 'Gwoza', 'Konduga', 'Maiduguri', 'Monguno', 'Gujba']
    },
    {
     sector: 'PROT',
     amount: 1667886,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Michika', 'Jere', 'Gwoza', 'Konduga', 'Maiduguri', 'Monguno', 'Damaturu', 'Gujba']
    },
    {
     sector: 'WASH',
     amount: 1546073,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Michika', 'Jere', 'Gwoza', 'Konduga', 'Maiduguri', 'Monguno', 'Gujba']
    }]
  },
  {
    Number: '22',
    Partner_Code: 'PTR13',
    Start_Date: '2023-03-01',
    End_Date: '2025-02-28',
    NCE_Date: '',
    Total: 19400000,
    Summary: '',
    activities: [{
     sector: 'AG',
     amount: 205582,
     state: ['Borno'],
     lgas: ['Damboa']
    },
    {
     sector: 'FOOD',
     amount: 11242329,
     state: ['Borno'],
     lgas: ['Bama', 'Damboa']
    },
    {
     sector: 'HPSAA',
     amount: 217797,
     state: ['Borno'],
     lgas: ''
    },
    {
     sector: 'MPCA',
     amount: 716434,
     state: ['Borno'],
     lgas: ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
    },
    {
     sector: 'NUTR',
     amount: 1569558,
     state: ['Borno'],
     lgas: ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
    },
    {
     sector: 'PROT',
     amount: 848123,
     state: ['Borno'],
     lgas: ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
    },
    {
     sector: 'S&S',
     amount: 2425061,
     state: ['Borno'],
     lgas: ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Konduga', 'Mobbar', 'Monguno', 'Ngala']
    },
    {
     sector: 'WASH',
     amount: 2175116,
     state: ['Borno'],
     lgas: ['Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Ngala']
    }]
  },
  {
    Number: '23',
    Partner_Code: 'PTR14',
    Start_Date: '2019-09-08',
    End_Date: '2023-09-07',
    NCE_Date: '',
    Total: 4900000,
    Summary: '',
    activities: [{
     sector: 'PROT',
     amount: 496535.41,
     state: ['Adamawa', 'Borno'],
     lgas: ''
    },
    {
     sector: 'S&S',
     amount: 2491348.57,
     state: ['Adamawa', 'Borno'],
     lgas: ''
    },
    {
     sector: 'WASH',
     amount: 1341639.02,
     state: ['Adamawa', 'Borno'],
     lgas: ''
    },
    {
     sector: 'HCIMA',
     amount: 570477,
     state: ['FCT', 'Borno', 'Adamawa', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '24',
    Partner_Code: 'PTR15',
    Start_Date: '2023-06-15',
    End_Date: '2025-06-14',
    NCE_Date: '',
    Total: 13300000,
    Summary: '',
    activities: [{
     sector: 'ERMS',
     amount: 31151,
     state: ['Borno'],
     lgas: ['Maiduguri']
    },
    {
     sector: 'FOOD',
     amount: 6191885,
     state: ['Borno'],
     lgas: ['Maiduguri']
    },
    {
     sector: 'HLTH',
     amount: 4166086,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    },
    {
     sector: 'NUTR',
     amount: 1819875,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    },
    {
     sector: 'PROT',
     amount: 1091003,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    }]
  },
  {
    Number: '25',
    Partner_Code: 'PTR15',
    Start_Date: '2019-08-01',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 13800000,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 9512470,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    },
    {
     sector: 'NUTR',
     amount: 2003163,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    },
    {
     sector: 'PROT',
     amount: 1751217,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    },
    {
     sector: 'WASH',
     amount: 533150,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Monguno']
    }]
  },
  {
    Number: '26',
    Partner_Code: 'PTR15',
    Start_Date: '2019-06-01',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 18360000,
    Summary: '',
    activities: [{
     sector: 'NUTR',
     amount: 1467273,
     state: ['Borno'],
     lgas: ['Maiduguri']
    },
    {
     sector: 'FOOD',
     amount: 16869496,
     state: ['Borno'],
     lgas: ['Maiduguri']
    },
    {
     sector: 'ERMS',
     amount: 23231,
     state: ['Borno'],
     lgas: ['Maiduguri']
    }]
  },
  {
    Number: '27',
    Partner_Code: 'PTR16',
    Start_Date: '2022-08-14',
    End_Date: '2023-08-13',
    NCE_Date: '',
    Total: 3000000,
    Summary: '',
    activities: [{
     sector: 'PROT',
     amount: 1026308,
     state: ['Borno'],
     lgas: ['Jere', 'Magumeri', 'Kaga', 'Konduga']
    },
    {
     sector: 'NUTR',
     amount: 1352580,
     state: ['Borno'],
     lgas: ['Jere', 'Magumeri', 'Mafa', 'Konduga']
    },
    {
     sector: 'WASH',
     amount: 621112,
     state: ['Borno'],
     lgas: ['Jere', 'Magumeri', 'Kaga', 'Mafa', 'Konduga']
    }]
  },
  {
    Number: '28',
    Partner_Code: 'PTR16',
    Start_Date: '2022-03-01',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 40000000,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 37261697,
     state: ['Borno'],
     lgas: ['Konduga', 'Maiduguri', 'Jere', 'Mafa']
    },
    {
     sector: 'ERMS',
     amount: 1545841,
     state: ['Borno'],
     lgas: ['Konduga', 'Maiduguri', 'Jere', 'Mafa']
    },
    {
     sector: 'NUTR',
     amount: 1192462,
     state: ['Borno'],
     lgas: ['Konduga', 'Maiduguri', 'Jere', 'Mafa']
    }]
  },
  {
    Number: '29',
    Partner_Code: 'PTR17',
    Start_Date: '2019-07-01',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 14402612,
    Summary: '',
    activities: [{
     sector: 'S&S',
     amount: 2174539,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
    },
    {
     sector: 'WASH',
     amount: 4260247,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
    },
    {
     sector: 'HCIMA',
     amount: 126567,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
    },
    {
     sector: 'NUTR',
     amount: 3089776,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
    },
    {
     sector: 'HLTH',
     amount: 4751483,
     state: ['Borno'],
     lgas: ['Maiduguri', 'Ngala', 'Dikwa', 'Monguno']
    }]
  },
  {
    Number: '30',
    Partner_Code: 'PTR17',
    Start_Date: '2022-08-01',
    End_Date: '2023-07-31',
    NCE_Date: '',
    Total: 1760000,
    Summary: '',
    activities: [{
     sector: 'WASH',
     amount: 1618579,
     state: ['Borno'],
     lgas: ['Monguno']
    },
    {
     sector: 'HLTH',
     amount: 141021,
     state: ['Borno'],
     lgas: ['Monguno']
    }]
  },
  {
    Number: '31',
    Partner_Code: 'PTR18',
    Start_Date: '2023-03-01',
    End_Date: '2025-02-28',
    NCE_Date: '',
    Total: 750252,
    Summary: '',
    activities: [{
     sector: 'HCIMA',
     amount: 750252,
     state: ['Countrywide'],
     lgas: ''
    }]
  },
  {
    Number: '32',
    Partner_Code: 'PTR19',
    Start_Date: '2019-09-26',
    End_Date: '2023-09-25',
    NCE_Date: '',
    Total: 3654526,
    Summary: '',
    activities: [{
     sector: 'NUTR',
     amount: 1003513,
     state: ['Adamawa', 'Borno', 'Yobe', 'FCT'],
     lgas: ''
    },
    {
     sector: 'PROT',
     amount: 811041,
     state: ['Adamawa', 'Borno', 'Yobe', 'FCT'],
     lgas: ''
    },
    {
     sector: 'WASH',
     amount: 861851,
     state: ['Adamawa', 'Borno', 'Yobe', 'FCT'],
     lgas: ''
    },
    {
     sector: 'HCIMA',
     amount: 978121,
     state: ['Adamawa', 'Borno', 'Yobe', 'FCT'],
     lgas: ''
    }]
  },
  {
    Number: '33',
    Partner_Code: 'PTR19',
    Start_Date: '2022-04-16',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 2000000,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 2000000,
     state: ['Sokoto', 'Zamfara'],
     lgas: ['Goronyo', 'Isa', 'Rabah', 'Sabon Birni', 'Anka', 'Birnin Magaji', 'Bungudu', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Zurmi']
    }]
  },
  {
    Number: '34',
    Partner_Code: 'PTR19',
    Start_Date: '2022-09-01',
    End_Date: '2025-12-31',
    NCE_Date: '',
    Total: 2496800,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 2496800,
     state: ['Katsina', 'Sokoto', 'Zamfara'],
     lgas: ''
    }]
  },
  {
    Number: '35',
    Partner_Code: 'UNICEF ',
    Start_Date: '2022-10-01',
    End_Date: '2023-09-30',
    NCE_Date: '',
    Total: 4550618,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 4550618,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '36',
    Partner_Code: 'PTR21',
    Start_Date: '2023-01-01',
    End_Date: '2025-12-31',
    NCE_Date: '',
    Total: 9100000,
    Summary: '',
    activities: [{
     sector: 'HCIMA',
     amount: 750000,
     state: ['Countrywide'],
     lgas: ''
    },
    {
     sector: 'LOGS',
     amount: 8350000,
     state: ['Countrywide'],
     lgas: ''
    }]
  },
  {
    Number: '37',
    Partner_Code: 'PTR21',
    Start_Date: '2019-02-01',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 17015405,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 17015405,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Madagali', 'Michika', 'Bama', 'Damboa', 'Dikwa', 'Gwoza', 'Jere', 'Kaga', 'Konduga', 'Kukawa', 'Mafa', 'Magumeri', 'Maiduguri', 'Monguno', 'Ngala', 'Nganzai', 'Kala/Balge', 'Mobbar', 'Bade', 'Damaturu', 'Geidam', 'Nguru', 'Yunusari', 'Gujba', 'Gulani Yusufari']
    }]
  },
  {
    Number: '38',
    Partner_Code: 'PTR21',
    Start_Date: '2022-01-03',
    End_Date: '2023-06-30',
    NCE_Date: '',
    Total: 40000000,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 40000000,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '39',
    Partner_Code: 'PTR21',
    Start_Date: '2022-03-25',
    End_Date: '2023-09-22',
    NCE_Date: '',
    Total: 7096080,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 7096080,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '40',
    Partner_Code: 'PTR21',
    Start_Date: '2022-06-15',
    End_Date: '2023-06-14',
    NCE_Date: '',
    Total: 22600000,
    Summary: '',
    activities: [{
     sector: 'FOOD',
     amount: 22600000,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '41',
    Partner_Code: 'WFP ',
    Start_Date: '2023-01-01',
    End_Date: '2025-06-30',
    NCE_Date: '',
    Total: 5733460,
    Summary: '',
    activities: [{
     sector: 'NUTR',
     amount: 5733460,
     state: ['Borno', 'Adamawa', 'Yobe'],
     lgas: ''
    }]
  },
  {
    Number: '42',
    Partner_Code: 'PTR22',
    Start_Date: '2023-04-01',
    End_Date: '2025-03-31',
    NCE_Date: '',
    Total: 3000000,
    Summary: '',
    activities: [{
     sector: 'HLTH',
     amount: 1271571,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Askira/Uba', 'Bama', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Gwoza', 'Kaga', 'Kala/Balge', 'Mafa', 'Magumeri', 'Monguno', 'Ngala', 'Nganzai', 'Jere', 'Konduga', 'Maiduguri', 'Mobbar', 'Demsa', 'Ganye', 'Gombi', 'Guyuk', 'Jada', 'Lamurde', 'Madagali', 'Mayo-Belwa', 'Mubi South', 'Numan', 'Yola North', 'Fufore', 'Michika', 'Mubi North', 'Geidam', 'Gujba', 'Yunusari', 'Bursari', 'Fika', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Tarmua', 'Yusufari']
    },
    {
     sector: 'NUTR',
     amount: 1219800,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Askira/Uba', 'Bama', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Gwoza', 'Kaga', 'Kala/Balge', 'Mafa', 'Magumeri', 'Monguno', 'Ngala', 'Nganzai', 'Jere', 'Konduga', 'Maiduguri', 'Mobbar', 'Demsa', 'Ganye', 'Gombi', 'Guyuk', 'Jada', 'Lamurde', 'Madagali', 'Mayo-Belwa', 'Mubi South', 'Numan', 'Yola North', 'Fufore', 'Michika', 'Mubi North', 'Geidam', 'Gujba', 'Yunusari', 'Bursari', 'Fika', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Tarmua', 'Yusufari']
    },
    {
     sector: 'PROT',
     amount: 508629,
     state: ['Adamawa', 'Borno', 'Yobe'],
     lgas: ['Askira/Uba', 'Bama', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Gwoza', 'Kaga', 'Kala/Balge', 'Mafa', 'Magumeri', 'Monguno', 'Ngala', 'Nganzai', 'Jere', 'Konduga', 'Maiduguri', 'Mobbar', 'Demsa', 'Ganye', 'Gombi', 'Guyuk', 'Jada', 'Lamurde', 'Madagali', 'Mayo-Belwa', 'Mubi South', 'Numan', 'Yola North', 'Fufore', 'Michika', 'Mubi North', 'Geidam', 'Gujba', 'Yunusari', 'Bursari', 'Fika', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Tarmua', 'Yusufari']
    }]
  }
]