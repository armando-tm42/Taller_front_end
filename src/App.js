<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import logo from "./logo.jpg"
import carousel_1 from "./carousel_1.jpg"
import carousel_2 from "./carousel_2.jpg"
import carousel_3 from "./carousel_3.jpg"
import content_1 from "./content_1.jpg"
import giga from "./Gigabyte-Logo.jpg"
import power from "./power_color_logo.png"
import bios from "./biostar_logo.png"
import "./scss/index.scss"
import { Layout, Input, Space, Button, Dropdown, Menu, Carousel, Image, Row, Col, Divider, Card } from 'antd';
import {FacebookOutlined, TwitterOutlined,InstagramOutlined} from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const { Search } = Input;
const onSearch = value => console.log(value);

const menu = (
  <Menu>
    <Menu.Item>
      <div style={{textAlign:'center'}}>
      <a target="_blank" rel="noopener noreferrer" href="#" style={{color:'black'}}>
        GDDR6 SDRAM
      </a>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div style={{textAlign:'center'}}>
        <a target="_blank" rel="noopener noreferrer" href="#" style={{color:'black'}}>
          DDR4 DRAM 
        </a>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div style={{textAlign:'center'}}>
      <a target="_blank" rel="noopener noreferrer" href="#" style={{color:'black'}}>
        LPDDR4X DRAM 
      </a>
      </div>
    </Menu.Item>
  </Menu>
);

const menu_2 = (
  <Menu>
    <Menu.Item>
    <div style={{textAlign:'center'}}>
        <a target="_blank" rel="noopener noreferrer" href="#" style={{color:'black'}}>
          Únetenos 
        </a>
      </div>
    </Menu.Item>
  </Menu>
)
const contentStyle = {
  margin:'auto',
  width:'100%'
};

function App() {
  return (
  <Layout>
    <Header style={{ width: '100%', height:'100px'}}>
      <div>
        <img  src={logo} alt ='logo' className='logo'></img>
      </div>
      <Space size='large'>
        <Search placeholder="input search text" onSearch={onSearch} enterButton style={{margin:'35px 24px 16px 0'}}/>
        <Button type="link" className='margin' style={{color:'white'}}>Inicio</Button>
        <Dropdown overlay={menu} placement="bottomRight">
        <Button className='margin' style={{backgroundColor:'#001529',color:'white',borderColor:'#001529',padding:'10px 32px'}}>Productos</Button>
        </Dropdown>
        <Button type="link" className='margin' style={{color:'white'}}>Soporte</Button>
        <Dropdown overlay={menu_2} placement="bottomRight">
        <Button className='margin' style={{backgroundColor:'#001529',color:'white',borderColor:'#001529'}}>Oportunidades</Button>
        </Dropdown>
      </Space>
    </Header>
    <Content style={{ padding: '0 50px', marginTop:20 }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 380, marginTop:'20px' }}>
      <Carousel autoplay>
        <div>
          <Image src={carousel_1} style={contentStyle}></Image>
        </div>
        <div>
          <Image src={carousel_2} style={contentStyle}></Image>
        </div>
        <div>
          <Image src={carousel_3} style={contentStyle}></Image>
        </div>
      </Carousel>
      <div style={{marginTop:'30px'}}>
        <Row>
          <Col span={12}>
            <h1 style={{fontWeight:'bold', textAlign:'center'}}>¿Quiénes somos?</h1>
            <h4>
            Fundada en abril de 2017, en Taipéi , Taiwán,  Mammoth Technology es una compañía <br/>
            especializada en el diseño y manufactura de memoria dinámica de acceso aleatorio (DRAM).Los productos DRAM son usados en muchos campos y dispositivos entre<br/>
            los cuales encontramos, Celulares, computadores, servers, realidad virtual y el internet
            <br/>de las cosas.
            </h4>
            <br/>
            <h4>
            Mammoth Technology esta comprometida con la calidad y durabilidad, por lo que los procesos de
            fabricación son minuciosamente supervisados y los productos sometidos a numerosas pruebas de 
            alto rendimiento para asegurar su eficacia y confiabilidad; <br/> Además contamos con personal 
            certificado y equipos de gran capacidad en pro de satisfacer las grandes demandas impuestas por
            el mercado. 
            </h4>
          </Col>
          <Col span={12}>
            <Image src={content_1}></Image>
          </Col>
        </Row>
      </div>
      <Divider dashed>Aliados</Divider>
      <div className="site-card-wrapper" style={{marginTop:'30px'}}>
      <Row gutter={16}>
      <Col span={8}>
        <Card hoverable bordered={false} cover={<Image src={giga}/>}>
          <h5 style={{textAlign:'center'}}>Gigabyte Technology</h5>
        </Card>
      </Col>
      <Col span={8}>
      <Card hoverable bordered={false} cover={<Image src={power}/>}>
          <h5 style={{textAlign:'center'}}>PowerColor</h5>
        </Card>
      </Col>
      <Col span={8}>
      <Card hoverable bordered={false} cover={<Image src={bios}/>}>
          <h5 style={{textAlign:'center'}}>Biostar</h5>
        </Card>
      </Col>
    </Row>
      </div>
    </div>
    </Content>
    <Footer >
      <Row>
        <Col span={12}>
        <h2 style={{fontWeight:'bold',textAlign:'left'}}>Síguenos</h2>
        <Space size='middle'>
        <FacebookOutlined style={{fontSize:'50px'}}/>
        <TwitterOutlined style={{fontSize:'50px'}}/>
        <InstagramOutlined style={{fontSize:'50px'}}/>
        </Space>
        </Col>
        <Col span={12}>
        <h2 style={{textAlign:'right'}}>
          Copyright© Mammoth Technology Manufacturing Company Limited 2010-2021, All Rights Reserved.
        </h2>
        </Col>
      </Row>
    </Footer>
  </Layout>
>>>>>>> Stashed changes
  );
}

export default App;
