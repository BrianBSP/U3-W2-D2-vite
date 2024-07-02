import { ListGroup, ListGroupItem } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark ">
      <p className="text-white mb-0 pt-4 text-center">Dove puoi trovare i nostri libri:</p>
      <ListGroup className="text-white mb-0">
        <ListGroupItem className="bg-dark text-white border-0 text-center">Rimini via pluto</ListGroupItem>
        <ListGroupItem className="bg-dark text-white border-0 text-center">Riccione via pippo</ListGroupItem>
        <ListGroupItem className="bg-dark text-white border-0 text-center">Cattolica via topolino</ListGroupItem>
      </ListGroup>
    </footer>
  );
};
export default MyFooter;
