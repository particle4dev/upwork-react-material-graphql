import { RowTag, RowSubject, DataRow } from '../../types';

export const avtarBackgroundColors = {
  blue: '',
  red: '',
  green: ''
};

export const avtarTextColors = {
  blue: '',
  red: '',
  green: ''
};

export const chipColors = {
  blue: '',
  red: '',
  green: ''
};

function createData(id: string, status: string, subject: RowSubject, dueOn: string, assignedBy: string, tags: RowTag[], type = 'normal'): DataRow {
  return { id, status, subject, dueOn, assignedBy, tags, type };
}

const rows = [
  createData(
    'row-1',
    'Pending Approval',
    {
      label: 'PO 14256 Change Order',
      message: 3
    },
    '1 April 2021',
    'Verna Liu (LA Tech) +2',
    [{
      id: 'tag-row-11',
      type: 'blue',
      avatar: 'S',
      label: 'LA Tech'
    }, {
      id: 'tag-row-12',
      type: 'red',
      avatar: 'P',
      label: 'T432'
    }, {
      id: 'tag-row-13',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }, {
      id: 'tag-row-14',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }, {
      id: 'tag-row-15',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }],
    'warning'
  ),

  createData(
    'row-2',
    'Pending Submission',
    {
      label: 'RFQ for Furnace 3.4',
      message: 1
    },
    '31 March 2021',
    'Vic Beall (VolcanoTek)',
    [{
      id: 'tag-row-21',
      type: 'blue',
      avatar: 'S',
      label: 'VolcanoTek'
    }, {
      id: 'tag-row-22',
      type: 'red',
      avatar: 'P',
      label: 'Furnace'
    }, {
      id: 'tag-row-23',
      type: 'green',
      avatar: 'D',
      label: 'RFQ'
    }],
    'warning'
  ),

  createData(
    'row-3',
    'Pending Acknowledge',
    {
      label: 'Moofisk PO 2456 ETA Confirmation',
      message: 0
    },
    '3 April 2021',
    'John Smith (Moofisk)',
    [{
      id: 'tag-row-31',
      type: 'blue',
      avatar: 'S',
      label: 'Moofisk'
    }, {
      id: 'tag-row-32',
      type: 'red',
      avatar: 'P',
      label: 'T432'
    }, {
      id: 'tag-row-33',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }, {
      id: 'tag-row-34',
      type: 'blue',
      avatar: 'S',
      label: 'Blue'
    }, {
      id: 'tag-row-35',
      type: 'red',
      avatar: 'P',
      label: 'T543'
    }, {
      id: 'tag-row-36',
      avatar: 'I',
      label: 'Laptop Gems'
    }],
    'watch-later'
  ),

  createData(
    'row-4',
    'Pending Acknowledge',
    {
      label: 'Moofisk Vacuum Open Order PO 9242',
      message: 0
    },
    '9 Aprli 2021',
    'John Smith (Moofisk)',
    [{
      id: 'tag-row-41',
      type: 'blue',
      avatar: 'S',
      label: 'Moofisk'
    }, {
      id: 'tag-row-42',
      type: 'red',
      avatar: 'P',
      label: 'T432'
    }, {
      id: 'tag-row-43',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }],
  ),

  createData(
    'row-5',
    'Pending Completion',
    {
      label: 'Confirm Production Forecast Q4 2021',
      message: 0
    },
    '15 April 2021',
    'Bob Press (Laptop Gems)',
    [{
      id: 'tag-row-51',
      avatar: 'I',
      label: 'Laptop Gems'
    }, {
      id: 'tag-row-52',
      type: 'red',
      avatar: 'D',
      label: 'Production Forecast'
    }, {
      id: 'tag-row-53',
      type: 'red',
      avatar: 'P',
      label: 'T543'
    }, {
      id: 'tag-row-54',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }, {
      id: 'tag-row-55',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }],
  ),

  createData(
    'row-6',
    'Pending Approval',
    {
      label: 'Sales Forecast Q4 2021',
      message: 0
    },
    '5 April 2021',
    'Scott Fry (Laptop Gems)',
    [{
      id: 'tag-row-61',
      avatar: 'I',
      label: 'Laptop Gems'
    }, {
      id: 'tag-row-62',
      type: 'red',
      avatar: 'D',
      label: 'Sales Forecast'
    }],
  ),

  createData(
    'row-7',
    'Pending Approval',
    {
      label: 'Laptop Gems PO 15176',
      message: 3
    },
    '12 April 2021',
    'Dave Standford (Direct In... +1',
    [{
      id: 'tag-row-71',
      type: 'blue',
      avatar: 'S',
      label: 'Direct Industries'
    }, {
      id: 'tag-row-72',
      type: 'red',
      avatar: 'P',
      label: 'T432'
    }, {
      id: 'tag-row-73',
      type: 'green',
      avatar: 'D',
      label: 'PO'
    }],
  ),

  createData(
    'row-8',
    'Pending Approval',
    {
      label: 'T432 Delivery Strategy',
      message: 0
    },
    '5 April 2021',
    'Jim Flanagan (Laptop Gems)',
    [{
      id: 'tag-row-81',
      avatar: 'S',
      label: 'Laptop Gems'
    }, {
      id: 'tag-row-82',
      type: 'red',
      avatar: 'P',
      label: 'T432'
    }],
  ),

  createData(
    'row-9',
    'Pending Completion',
    {
      label: 'Weekly Stock Update',
      message: 0
    },
    '5 April 2021',
    'Jim Flanagan (Laptop Gems)',
    [{
      id: 'tag-row-91',
      avatar: 'S',
      label: 'Laptop Gems'
    }, {
      id: 'tag-row-92',
      type: 'green',
      avatar: 'P',
      label: 'Stock Update'
    }],
  ),

  createData(
    'row-10',
    'Pending Submission',
    {
      label: 'Work Summary (Thailand)',
      message: 0
    },
    '9 April 2021',
    'Pom Sudnaen (Laptop Gems)',
    [{
      id: 'tag-row-101',
      avatar: 'S',
      label: 'Laptop Gems'
    }, {
      id: 'tag-row-102',
      type: 'green',
      avatar: 'P',
      label: 'Work Summary'
    }],
  ),

  createData(
    'row-11',
    'Pending Submission',
    {
      label: 'Work Summary (Thailand)',
      message: 0
    },
    '9 April 2021',
    'Pom Sudnaen (Laptop Gems)',
    [{
      id: 'tag-row-111',
      avatar: 'S',
      label: 'Laptop Gems'
    }, {
      id: 'tag-row-112',
      type: 'green',
      avatar: 'P',
      label: 'Work Summary'
    }],
  ),
];

export default rows;
