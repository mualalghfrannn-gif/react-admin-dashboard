import Row1 from './rows/Row1';
import Row2 from './rows/Row2';
import Row3 from './rows/Row3';
export default function Home() {
  return (
  <div style={{width:"100%" , margin:"10px 10px 10px 10px"}}>
    <div style={{marginBottom:"13px"}}>
        <h1 style={{ color: 'blue' }}>DASHBOARD</h1>
        <p>Welcome to your dashboard</p>
      </div>
    <Row1/>
    <Row3/>
<Row2/>

  </div>
        )
        }