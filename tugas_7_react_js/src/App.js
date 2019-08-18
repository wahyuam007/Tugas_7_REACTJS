import React, {Component} from 'react';
import {
  Col, 
  Row, 
  ButtonGroup,
  Alert,
  Badge,
  Button,
  Container,
  Image,
  Breadcrumb,
  Card,
  CardGroup,
  } from 'react-bootstrap';

class App extends Component {
  render(){
    return (
      <div>
        <Container>
          <Row>
            <Col md="3">
              <Alert variant="primary" >Website React Bootstrap</Alert>
            </Col>
            <Col md={{span:3, offset:4}} >
              <ButtonGroup>
                <Button variant="primary">Notifications<Badge variant="light">9</Badge></Button>
                <Button variant="primary">Message<Badge variant="light">19</Badge></Button>
              </ButtonGroup>
            </Col>
            <Col>
              <h6><Image width="30" src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" />Andreas</h6>
            </Col>
          </Row>
          <Row>
            <Col sm={{span:4, offset:8}}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col md={{ span:10, offset:1}}>
              <CardGroup>
                <Card >
                  <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
                  <Card.Body>
                    <Card.Title>
                      Diego Godin Ukir Rekor Spesial Lawan Thailand
                    </Card.Title>
                    <Card.Text>
                      Godin sekarang menjadi pemain Uruguay dengan Caps terbanyak setelah menbatu negaranya melibas thailand di final Piala Thiongkok. Diesgo Godin boleh berbangkga setelah resmi menjadi
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
                  <Card.Body>
                    <Card.Title>
                      Neymar Bahas Kontrak Baru Diparis Saint-German
                    </Card.Title>
                    <Card.Text>
                      Ayah sang bintang Brazil berusaha meredam rumor ketetarikan madrid. Neymar sedang berdiskusi dengan Paris Saint-German soal perpanjangan Kontrak bersama kampium Ligue 1 Prancis, demikian kata ayahnya.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
                  <Card.Body>
                    <Card.Title>
                      Ingris Mau Jadi Tim Terbaik Di Dunia
                    </Card.Title>
                    <Card.Text>
                      Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimis. Ross Barkley merasa Inggris sudah benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
                  <Card.Body>
                    <Card.Title>
                      sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus
                    </Card.Title>
                    <Card.Text>
                      Genlandang tim nasional (tinas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darusalam U-23, Kedua tim akan bentrok pada laga pamungkas grup K.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
