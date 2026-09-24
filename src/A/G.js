import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import { ResponsiveBar } from '@nivo/bar';

// البيانات المعرفة خارج الدالة
const data = [
  {
    year: '2019',
    spain: 900,
    franse: 1400,
    germany: 1700,
  },
  {
    year: '2020',
    spain: 1000,
    franse: 1500,
    germany: 1800,
  },
  {
    year: '2021',
    spain: 1100,
    franse: 1600,
    germany: 1900,
  },
  
  {
    year: '2022',
    spain: 1200,
    franse: 1600,
    germany: 1980,
  },
  {
    year: '2023',
    spain: 1300,
    franse: 1900,
    germany: 2000,
  },
  
];

export default function G() {
    const theme = useTheme()
  return (
    <Box sx={{ height: "75vh", width: '100%' }}>
        <div style={{marginBottom:"13px"}}>
        <h1 style={{ color: 'blue' }}>BAR CHART</h1>
        <p>Simple bar chart visualization</p>
      </div>
      <ResponsiveBar
        data={data}
        // المفاتيح التي تمثل الأعمدة المقارنة
        keys={['spain', 'franse', 'germany']}
        // الحقل الذي يمثل المحور الأفقي (السنوات)
        indexBy="year"
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
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Year',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'monthly revenue',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            symbolSize: 20,
          },
        ]}
      />
    </Box>
  );
}