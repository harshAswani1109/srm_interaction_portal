import Graph from 'react-graph-vis';

const GraphComponent = (props: any) => {
  const comp = {
    nodes: [
      {
        id: 1,
        label: 'Bharathi R.',
      },
      {
        id: 2,
        label: 'Ganesh S.S.',
      },
      {
        id: 3,
        label: 'Harini G.',
      },
      {
        id: 4,
        label: 'Vatsala K.',
      },
      {
        id: 5,
        label: 'Anushikaa R.',
      },
      {
        id: 6,
        label: 'Aravind S.',
      },
      {
        id: 7,
        label: 'Abinaya S.',
      },
      {
        id: 8,
        label: 'Selvamurugan N.',
      },
      {
        id: 9,
        label: 'Lavanya K.',
      },
      {
        id: 10,
        label: 'Saranya I.',
      },
      {
        id: 11,
        label: 'Akshaya R.L.',
      },
      {
        id: 12,
        label: 'Sadu L.',
      },
      {
        id: 13,
        label: 'Krishnan R.H.',
      },
      {
        id: 14,
        label: 'Das U.R.',
      },
      {
        id: 15,
        label: 'Satishkumar S.',
      },
      {
        id: 16,
        label: 'Gomathi K.',
      },
      {
        id: 17,
        label: 'Rohini M.',
      },
      {
        id: 18,
        label: 'Vairamani M.',
      },
      {
        id: 19,
        label: 'Shanmugavadivu A.',
      },
      {
        id: 20,
        label: 'Balagangadharan K.',
      },
      {
        id: 21,
        label: 'Akshaya N.',
      },
      {
        id: 22,
        label: 'Srinaath N.',
      },
      {
        id: 23,
        label: 'Ilangovan R.',
      },
      {
        id: 24,
        label: 'Yadav L.R.',
      },
      {
        id: 25,
        label: 'Pranav Adithya S.',
      },
      {
        id: 26,
        label: 'Sidharthan D.S.',
      },
      {
        id: 27,
        label: 'Abhinandan R.',
      },
      {
        id: 28,
        label: 'Mohanapriya R.',
      },
      {
        id: 29,
        label: 'Soubhagya A.S.',
      },
      {
        id: 30,
        label: 'Sathya Seeli D.',
      },
      {
        id: 31,
        label: 'Prabaharan M.',
      },
      {
        id: 32,
        label: 'Partridge N.C.',
      },
      {
        id: 33,
        label: 'He Z.',
      },
      {
        id: 34,
        label: 'Adithya S.P.',
      },
      {
        id: 35,
        label: 'Attayil Sukumaran S.',
      },
      {
        id: 36,
        label: 'Kalimuthu B.',
      },
      {
        id: 37,
        label: 'Mani P.',
      },
    ],

    edges: [
      {
        from: 1,
        to: 2,
      },
      {
        from: 1,
        to: 3,
      },
      {
        from: 1,
        to: 4,
      },
      {
        from: 1,
        to: 5,
      },
      {
        from: 1,
        to: 6,
      },
      {
        from: 1,
        to: 7,
      },
      {
        from: 1,
        to: 8,
      },
      {
        from: 2,
        to: 3,
      },
      {
        from: 2,
        to: 4,
      },
      {
        from: 2,
        to: 5,
      },
      {
        from: 2,
        to: 6,
      },
      {
        from: 2,
        to: 7,
      },
      {
        from: 2,
        to: 8,
      },
      {
        from: 3,
        to: 4,
      },
      {
        from: 3,
        to: 5,
      },
      {
        from: 3,
        to: 6,
      },
      {
        from: 3,
        to: 7,
      },
      {
        from: 3,
        to: 8,
      },
      {
        from: 4,
        to: 5,
      },
      {
        from: 4,
        to: 6,
      },
      {
        from: 4,
        to: 7,
      },
      {
        from: 4,
        to: 8,
      },
      {
        from: 5,
        to: 6,
      },
      {
        from: 5,
        to: 7,
      },
      {
        from: 5,
        to: 8,
      },
      {
        from: 6,
        to: 7,
      },
      {
        from: 6,
        to: 8,
      },
      {
        from: 7,
        to: 8,
      },
      {
        from: 9,
        to: 7,
      },
      {
        from: 9,
        to: 8,
      },
      {
        from: 7,
        to: 8,
      },
      {
        from: 10,
        to: 11,
      },
      {
        from: 10,
        to: 8,
      },
      {
        from: 11,
        to: 8,
      },
      {
        from: 12,
        to: 13,
      },
      {
        from: 12,
        to: 11,
      },
      {
        from: 12,
        to: 14,
      },
      {
        from: 12,
        to: 15,
      },
      {
        from: 12,
        to: 8,
      },
      {
        from: 13,
        to: 11,
      },
      {
        from: 13,
        to: 14,
      },
      {
        from: 13,
        to: 15,
      },
      {
        from: 13,
        to: 8,
      },
      {
        from: 11,
        to: 14,
      },
      {
        from: 11,
        to: 15,
      },
      {
        from: 11,
        to: 8,
      },
      {
        from: 14,
        to: 15,
      },
      {
        from: 14,
        to: 8,
      },
      {
        from: 15,
        to: 8,
      },
      {
        from: 16,
        to: 17,
      },
      {
        from: 16,
        to: 18,
      },
      {
        from: 16,
        to: 8,
      },
      {
        from: 17,
        to: 18,
      },
      {
        from: 17,
        to: 8,
      },
      {
        from: 18,
        to: 8,
      },
      {
        from: 19,
        to: 20,
      },
      {
        from: 19,
        to: 8,
      },
      {
        from: 20,
        to: 8,
      },
      {
        from: 21,
        to: 22,
      },
      {
        from: 21,
        to: 17,
      },
      {
        from: 21,
        to: 23,
      },
      {
        from: 21,
        to: 8,
      },
      {
        from: 22,
        to: 17,
      },
      {
        from: 22,
        to: 23,
      },
      {
        from: 22,
        to: 8,
      },
      {
        from: 17,
        to: 23,
      },
      {
        from: 17,
        to: 8,
      },
      {
        from: 23,
        to: 8,
      },
      {
        from: 24,
        to: 20,
      },
      {
        from: 24,
        to: 9,
      },
      {
        from: 24,
        to: 8,
      },
      {
        from: 20,
        to: 9,
      },
      {
        from: 20,
        to: 8,
      },
      {
        from: 9,
        to: 8,
      },
      {
        from: 13,
        to: 12,
      },
      {
        from: 13,
        to: 14,
      },
      {
        from: 13,
        to: 15,
      },
      {
        from: 13,
        to: 25,
      },
      {
        from: 13,
        to: 10,
      },
      {
        from: 13,
        to: 11,
      },
      {
        from: 13,
        to: 8,
      },
      {
        from: 12,
        to: 14,
      },
      {
        from: 12,
        to: 15,
      },
      {
        from: 12,
        to: 25,
      },
      {
        from: 12,
        to: 10,
      },
      {
        from: 12,
        to: 11,
      },
      {
        from: 12,
        to: 8,
      },
      {
        from: 14,
        to: 15,
      },
      {
        from: 14,
        to: 25,
      },
      {
        from: 14,
        to: 10,
      },
      {
        from: 14,
        to: 11,
      },
      {
        from: 14,
        to: 8,
      },
      {
        from: 15,
        to: 25,
      },
      {
        from: 15,
        to: 10,
      },
      {
        from: 15,
        to: 11,
      },
      {
        from: 15,
        to: 8,
      },
      {
        from: 25,
        to: 10,
      },
      {
        from: 25,
        to: 11,
      },
      {
        from: 25,
        to: 8,
      },
      {
        from: 10,
        to: 11,
      },
      {
        from: 10,
        to: 8,
      },
      {
        from: 11,
        to: 8,
      },
      {
        from: 26,
        to: 27,
      },
      {
        from: 26,
        to: 20,
      },
      {
        from: 26,
        to: 8,
      },
      {
        from: 27,
        to: 20,
      },
      {
        from: 27,
        to: 8,
      },
      {
        from: 20,
        to: 8,
      },
      {
        from: 28,
        to: 11,
      },
      {
        from: 28,
        to: 8,
      },
      {
        from: 11,
        to: 8,
      },
      {
        from: 29,
        to: 20,
      },
      {
        from: 29,
        to: 8,
      },
      {
        from: 29,
        to: 30,
      },
      {
        from: 29,
        to: 31,
      },
      {
        from: 20,
        to: 8,
      },
      {
        from: 20,
        to: 30,
      },
      {
        from: 20,
        to: 31,
      },
      {
        from: 8,
        to: 30,
      },
      {
        from: 8,
        to: 31,
      },
      {
        from: 30,
        to: 31,
      },
      {
        from: 16,
        to: 17,
      },
      {
        from: 16,
        to: 32,
      },
      {
        from: 16,
        to: 8,
      },
      {
        from: 17,
        to: 32,
      },
      {
        from: 17,
        to: 8,
      },
      {
        from: 32,
        to: 8,
      },
      {
        from: 11,
        to: 17,
      },
      {
        from: 11,
        to: 33,
      },
      {
        from: 11,
        to: 32,
      },
      {
        from: 11,
        to: 8,
      },
      {
        from: 17,
        to: 33,
      },
      {
        from: 17,
        to: 32,
      },
      {
        from: 17,
        to: 8,
      },
      {
        from: 33,
        to: 32,
      },
      {
        from: 33,
        to: 8,
      },
      {
        from: 32,
        to: 8,
      },
      {
        from: 34,
        to: 20,
      },
      {
        from: 34,
        to: 8,
      },
      {
        from: 20,
        to: 8,
      },
      {
        from: 35,
        to: 36,
      },
      {
        from: 35,
        to: 8,
      },
      {
        from: 35,
        to: 37,
      },
      {
        from: 36,
        to: 8,
      },
      {
        from: 36,
        to: 37,
      },
      {
        from: 8,
        to: 37,
      },
    ],
  };

  const options = {
    edges: {
      length: 500,
      color: '#000000',
    },
    height: '1000px',
  };

  const events = {
    select: function (event: any) {
      var { nodes, edges } = event;
    },
  };
  return (
    <Graph
      graph={comp}
      options={options}
      events={events}
      //   getNetwork={(network) => {
      //     //  if you want access to vis.js network api you can set the state in a parent component using this property
      //   }}
    />
  );
};

export default GraphComponent;
