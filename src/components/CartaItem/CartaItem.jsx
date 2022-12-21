import React from 'react';
import { useContext } from 'react';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemContext } from '../Contexto/ItemContext';


const CartaItem = (props) => {
    const { img, titulo, id, descrpicion } = props;
    const { setItem } = useContext(ItemContext);
    console.log(id);
    return (
        <Card bg={"light"} style={{ width: "18rem" }} text="dark">
            <Card.Img variant="top" src={img} />
            <Card.Body bg={"light"}>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descrpicion}</Card.Text>
                <Link to={id}>
                    <Button variant="dark" onClick={setItem(id)}>
                        Mas info
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};



export default CartaItem;