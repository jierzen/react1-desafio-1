import Badge from 'react-bootstrap/Badge';

const MyTag = ({colorFondo, texto}) => {
    return (

        <h6>
          <Badge bg={colorFondo}>{texto}</Badge>
        </h6>

    );
  }
  
  export default MyTag;