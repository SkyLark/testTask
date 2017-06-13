const treeData = [
  {
    id: 0,
    name: 'Test id 0',
    isChecked: false,
    nodes: []
  },
  {
    id: 1,
    name: 'Test id 1',
    isChecked: false,
    nodes: []
  },
  {
    id: 3,
    name: 'Test id 3',
    isChecked: false,
    nodes: [
      {
        id: 4,
        name: 'Test id 4',
        isChecked: false,
        nodes: [
          {
            id: 34,
            name: 'Test id 34',
            isChecked: false,
            nodes: [
              {
                id: 67,
                name: 'Test id 67',
                isChecked: true,
                nodes: []
              },
              {
                id: 69,
                name: 'Test id 69',
                isChecked: true,
                nodes: []
              }
            ]
          },
        ]
      },
      {
        id: 5,
        name: 'Test id 5',
        isChecked: false,
        nodes: []
      }
    ]
  }
]

export default treeData
