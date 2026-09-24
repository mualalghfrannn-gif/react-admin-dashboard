import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 242
      },
      {
        "x": "helicopter",
        "y": 188
      },
      {
        "x": "boat",
        "y": 182
      },
      {
        "x": "train",
        "y": 234
      },
      {
        "x": "subway",
        "y": 128
      },
      {
        "x": "bus",
        "y": 32
      },
      {
        "x": "car",
        "y": 186
      },
      {
        "x": "moto",
        "y": 279
      },
      {
        "x": "bicycle",
        "y": 38
      },
      {
        "x": "horse",
        "y": 85
      },
      {
        "x": "skateboard",
        "y": 122
      },
      {
        "x": "others",
        "y": 63
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 105
      },
      {
        "x": "helicopter",
        "y": 257
      },
      {
        "x": "boat",
        "y": 23
      },
      {
        "x": "train",
        "y": 201
      },
      {
        "x": "subway",
        "y": 118
      },
      {
        "x": "bus",
        "y": 210
      },
      {
        "x": "car",
        "y": 9
      },
      {
        "x": "moto",
        "y": 46
      },
      {
        "x": "bicycle",
        "y": 150
      },
      {
        "x": "horse",
        "y": 34
      },
      {
        "x": "skateboard",
        "y": 284
      },
      {
        "x": "others",
        "y": 269
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 114
      },
      {
        "x": "helicopter",
        "y": 57
      },
      {
        "x": "boat",
        "y": 66
      },
      {
        "x": "train",
        "y": 131
      },
      {
        "x": "subway",
        "y": 190
      },
      {
        "x": "bus",
        "y": 57
      },
      {
        "x": "car",
        "y": 264
      },
      {
        "x": "moto",
        "y": 127
      },
      {
        "x": "bicycle",
        "y": 210
      },
      {
        "x": "horse",
        "y": 195
      },
      {
        "x": "skateboard",
        "y": 256
      },
      {
        "x": "others",
        "y": 119
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 51
      },
      {
        "x": "helicopter",
        "y": 166
      },
      {
        "x": "boat",
        "y": 73
      },
      {
        "x": "train",
        "y": 265
      },
      {
        "x": "subway",
        "y": 2
      },
      {
        "x": "bus",
        "y": 183
      },
      {
        "x": "car",
        "y": 117
      },
      {
        "x": "moto",
        "y": 249
      },
      {
        "x": "bicycle",
        "y": 93
      },
      {
        "x": "horse",
        "y": 98
      },
      {
        "x": "skateboard",
        "y": 219
      },
      {
        "x": "others",
        "y": 189
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 15
      },
      {
        "x": "helicopter",
        "y": 67
      },
      {
        "x": "boat",
        "y": 230
      },
      {
        "x": "train",
        "y": 292
      },
      {
        "x": "subway",
        "y": 118
      },
      {
        "x": "bus",
        "y": 171
      },
      {
        "x": "car",
        "y": 113
      },
      {
        "x": "moto",
        "y": 199
      },
      {
        "x": "bicycle",
        "y": 82
      },
      {
        "x": "horse",
        "y": 108
      },
      {
        "x": "skateboard",
        "y": 102
      },
      {
        "x": "others",
        "y": 221
      }
    ]
  }
]


export default function H() {
    const theme = useTheme()
  return (
    <Box sx={{ height: "75vh" , width: '100%' }}>

    <ResponsiveLine
        data={data}
        theme={
            {
    
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "#ffffff"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill":  theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "ticks": {
            "line": {
                "stroke":theme.palette.text.primary,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill":  theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill":  theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill":  theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill":  theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": theme.palette.background.default,
            "color":  theme.palette.text.primary,
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}
        }
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />


    </Box> 
    )
}